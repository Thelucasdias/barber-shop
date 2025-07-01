import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const {
      fullName: name,
      email,
      phone,
      password,
      barbershopName,
      address,
    } = req.body;

    if (!name || !email || !password || !barbershopName || !address) {
      return res.status(400).json({ error: "Dados obrigatórios ausentes." });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing)
      return res.status(400).json({ error: "Email já cadastrado." });

    const hashedPassword = await hash(password, 10);

    const barbershop = await prisma.barbershop.create({
      data: {
        name: barbershopName,
        address,
        phone,
      },
    });

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: "OWNER",
        barbershop: { connect: { id: barbershop.id } },
      },
    });

    const { password: _, ...userWithoutPassword } = user;
    res.status(201).json({ user: userWithoutPassword });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
}

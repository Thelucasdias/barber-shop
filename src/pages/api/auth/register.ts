import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, password, phone, barbershopName, addresses } = req.body;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(400).json({ error: "Email já cadastrado" });

  const hashedPassword = await hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phone,
      barbershopName,
      addresses,
    },
  });

  const { password: _, ...userWithoutPassword } = user;
  res.status(201).json({ user: userWithoutPassword });
}

import { useSignup } from "../hooks/useSignup";
import { useState } from "react";

export function SignupForm() {
  const { registerBarbershop, loading } = useSignup();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    barbershopName: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const { confirmPassword, ...dataToSend } = formData;

    const res = await registerBarbershop(dataToSend);
    if (res.ok) {
      setSuccess("Cadastro realizado com sucesso!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        barbershopName: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setError(res.error || "Erro ao cadastrar.");
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Cadastro de Barbearia
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block font-medium mb-1">
            Nome Completo
          </label>
          <input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="address" className="block font-medium mb-1">
            Endereço Comercial
          </label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Endereço"
          />
        </div>

        <div>
          <label htmlFor="barbershopName" className="block font-medium mb-1">
            Nome da Barbearia
          </label>
          <input
            id="barbershopName"
            name="barbershopName"
            value={formData.barbershopName}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </section>
  );
}

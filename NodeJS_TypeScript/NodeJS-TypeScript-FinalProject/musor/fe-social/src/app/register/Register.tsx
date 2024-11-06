// src/app/register/Register.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { $api } from "../api/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await $api.post("/auth/register", { username, email, password });
      localStorage.setItem("token", response.data.token); // Сохраняем токен
      router.push("/"); // Перенаправление на главную страницу
    } catch (err: any) {
      setError(err.response?.data?.error || "Что-то пошло не так");
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;

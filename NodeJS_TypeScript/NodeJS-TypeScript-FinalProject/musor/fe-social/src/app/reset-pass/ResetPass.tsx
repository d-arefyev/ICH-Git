// src/app/reset-pass/ResetPass.tsx
"use client";

import { useState } from "react";
import { $api } from "../api/api";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await $api.post("/auth/reset-password", { email });
      setMessage(response.data.message);
    } catch (err: any) {
      setError(err.response?.data?.error || "Что-то пошло не так");
    }
  };

  return (
    <div>
      <h1>Сброс пароля</h1>
      {error && <p className="text-red-500">{error}</p>}
      {message && <p className="text-green-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Сбросить пароль</button>
      </form>
    </div>
  );
};

export default ResetPass;

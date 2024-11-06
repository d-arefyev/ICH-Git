// src/app/login/Login.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { $api } from "../api/api";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { Logo } from "../atoms/Logo";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await $api.post("/auth/login", {
        username: usernameOrEmail,
        password,
      });
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex h-screen bg-red-500">
      {/* Picture */}
      <div className="w-1/2 flex items-center justify-center ">
        {" "}
        {/* Используем w-1/2 для левой части */}
        <Image
          src="/login-pict.png"
          alt="Main picture"
          width={100} // Ширина изображения
          height={60} // Высота изображения
          className="object-cover h-full w-full" // Убедитесь, что изображение растягивается на полную ширину и высоту
          priority
        />
      </div>

      {/* Form */}
      <div className="flex flex-col justify-center p-8 bg-white">
        {" "}
        {/* Используем w-1/2 для правой части */}
        <div className="mb-4 text-center">
          <Logo />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col mb-4 w-full">
          {" "}
          {/* Убедитесь, что форма занимает полную ширину */}
          <Input
            type="text"
            placeholder="Username or Email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="primary">
            Log In
          </Button>
        </form>
        <div className="flex items-center mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-600">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <p className="text-center text-blue-500 hover:underline">
          <a href="/reset-pass">Forgot Password?</a>
        </p>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

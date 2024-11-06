// src/app/components/ProtectedRoute.tsx
"use client"; // Обозначаем компонент как клиентский

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Импортируем из next/navigation

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return <>{children}</>;
};

export default ProtectedRoute;

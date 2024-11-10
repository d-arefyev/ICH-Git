// src/hooks/UserIdProvider.tsx
"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";

interface UserIdProviderProps {
  onUserIdChange: (userId: string) => void;
  children: ReactNode; // Типизируем пропс children как ReactNode
}

const UserIdProvider: React.FC<UserIdProviderProps> = ({ onUserIdChange, children }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Устанавливаем флаг, что мы на клиенте
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && router.query.userId) {
      onUserIdChange(router.query.userId as string); // Передаем userId в родительский компонент
    }
  }, [router.query, isClient, onUserIdChange]);

  return <>{children}</>; // Возвращаем дочерние компоненты
};

export default UserIdProvider;


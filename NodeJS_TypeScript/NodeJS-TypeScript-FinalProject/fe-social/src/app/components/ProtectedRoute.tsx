// src/app/components/ProtectedRoute.tsx
"use client"; // Это клиентский компонент

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Состояние для загрузки, пока проверяем токен
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Проверяем наличие токена в localStorage
    if (!token) {
      router.push("/login"); // Перенаправляем на страницу логина, если токена нет
    } else {
      setIsLoading(false); // Если токен найден, продолжаем рендерить приложение
    }
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>; // Пока проверяем токен, показываем сообщение о загрузке
  }

  return <>{children}</>; // Если токен есть, рендерим children (контент)
};

export default ProtectedRoute;





// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter, usePathname } from "next/navigation";

// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (pathname === "/login") {
//       setIsLoading(false);
//       return;
//     }

//     if (!token) {
//       router.push("/login");
//     } else {
//       setIsLoading(false);
//     }
//   }, [router, pathname]);

//   if (isLoading) {
//     return <div>Loading...</div>; 
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;

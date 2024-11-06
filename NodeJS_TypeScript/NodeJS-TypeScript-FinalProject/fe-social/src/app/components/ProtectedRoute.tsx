// src/app/components/ProtectedRoute.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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







// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
// import { useSearchParams } from "next/navigation";

// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();
//   const pathname = usePathname(); // Получаем текущий путь страницы
//   const searchParams = useSearchParams(); // Получаем параметры запроса

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     console.log("Token:", token); // Логируем токен для отладки

//     if (!token) {
//       // Если токен отсутствует, показываем страницу логина
//       console.log("Redirecting to login...");
//       // Если это не страница логина, выполняем редирект
//       if (pathname !== "/login") {
//         router.push("/login");
//       }
//     } else {
//       setIsLoading(false); // Токен есть — продолжаем рендерить дочерние компоненты
//     }
//   }, [router, pathname]);

//   if (isLoading) {
//     return <div>Loading...</div>; // Показать "Loading..." пока идет проверка токена
//   }

//   return <>{children}</>; // Если токен есть, рендерим дочерние компоненты
// };

// export default ProtectedRoute;










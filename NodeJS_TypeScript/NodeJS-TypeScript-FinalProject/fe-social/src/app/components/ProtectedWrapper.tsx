"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
import Footer from "./Footer";

const ProtectedWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/reset-pass" ||
    pathname === "/";

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  // Функции для открытия/закрытия фона
  const openOverlay = () => setIsOverlayVisible(true);
  const closeOverlay = () => setIsOverlayVisible(false);

  return (
    <div className="relative h-full">
      <div className="">
        {!isAuthPage && (
          <div className="">
            <SideBar openOverlay={openOverlay} closeOverlay={closeOverlay} />
          </div>
        )}
        <div className="flex flex-col min-h-[calc(100vh-158px)] w-full">
          <main className="flex-grow">{children}</main>
          {!isAuthPage && <Footer />}
          {/* Если фон должен быть видим, показываем затемнение */}
          {isOverlayVisible && (
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-50"
              onClick={closeOverlay}
            ></div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ProtectedWrapper;




// рабочая версия
// src/app/components/ProtectedWrapper.tsx
// "use client";

// import React from "react";
// import { usePathname } from "next/navigation";
// import SideBar from "./SideBar";
// import Footer from "./Footer";

// const ProtectedWrapper: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const pathname = usePathname();

//   const isAuthPage =
//     pathname === "/login" ||
//     pathname === "/register" ||
//     pathname === "/reset-pass" ||
//     pathname === "/";

//   return (
//     <div className="relative h-full">
//       <div className="">
//         {!isAuthPage && (
//           <div className="">
//             <SideBar />
//           </div>
//         )}
//         <div className="flex flex-col min-h-[calc(100vh-158px)] w-full">
//           <main className="flex-grow">{children}</main>
//           <div className="fixed inset-0 w-full h-full bg-black opacity-50 z-50"></div>
//         </div>
//       </div>
//       {!isAuthPage && <Footer />}
//     </div>
//   );
// };

// export default ProtectedWrapper;

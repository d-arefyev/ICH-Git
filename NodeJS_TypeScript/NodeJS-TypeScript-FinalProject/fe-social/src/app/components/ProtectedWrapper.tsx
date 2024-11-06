// src/app/components/ProtectedWrapper.tsx
"use client";

import React from "react";
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

  return (
    <div className="relative h-full">
      <div className="">
        {!isAuthPage && (
          <div className="">
            <SideBar />
          </div>
        )}
        <div className="flex flex-col min-h-[calc(100vh-158px)] w-full">
          <main className="flex-grow">{children}</main>
        </div>
      </div>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default ProtectedWrapper;

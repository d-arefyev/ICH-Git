// src/app/atoms/Button.tsx

import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
}) => {
  const baseStyles = "px-4 py-2 rounded text-white focus:outline-none";
  const primaryStyles = "bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300";
  const secondaryStyles = "bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300";

  const buttonStyles =
    variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${buttonStyles} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

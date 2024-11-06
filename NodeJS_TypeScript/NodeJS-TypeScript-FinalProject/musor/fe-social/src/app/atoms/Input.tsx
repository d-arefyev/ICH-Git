// src/app/atoms/Input.tsx

import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      required={required}
      disabled={disabled}
    />
  );
};

export default Input;

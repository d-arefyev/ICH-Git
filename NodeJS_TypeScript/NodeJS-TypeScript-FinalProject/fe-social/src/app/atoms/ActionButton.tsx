import React from "react";

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  color?: "blue" | "red" | "gray";
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  color = "blue",
}) => {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    red: "bg-red-600 hover:bg-red-700 text-white",
    gray: "bg-gray-300 hover:bg-gray-400 text-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${colorClasses[color]}`}
    >
      {label}
    </button>
  );
};

export default ActionButton;

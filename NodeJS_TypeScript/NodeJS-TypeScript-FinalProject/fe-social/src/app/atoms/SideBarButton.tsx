// src/atoms/SideBarButton.tsx
import React, { useState } from "react";

interface SideBarButtonProps {
  label: string;
  Icon: React.ReactNode;
  HoverIcon: React.ReactNode;
  onClick: () => void; // Убедитесь, что onClick типизирован правильно
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  label,
  Icon,
  HoverIcon,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="flex items-center gap-[8px] p-2 rounded-lg w-full hover:font-bold h-[48px] px-[12px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // теперь onClick будет корректно работать
    >
      <span className="w-6 h-6">{isHovered ? HoverIcon : Icon}</span>
      <span className="ml-[8px]">{label}</span>
    </button>
  );
};

export default SideBarButton;

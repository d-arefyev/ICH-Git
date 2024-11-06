// src/app/components/SideBarButton.tsx

import React, { useState } from "react";

interface SideBarButtonProps {
  label: string;
  Icon: React.ReactNode;
  HoverIcon: React.ReactNode;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({ label, Icon, HoverIcon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg w-full transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="w-6 h-6">
        {isHovered ? HoverIcon : Icon}
      </span>
      <span className="text-gray-700 font-medium">{label}</span>
    </button>
  );
};

export default SideBarButton;

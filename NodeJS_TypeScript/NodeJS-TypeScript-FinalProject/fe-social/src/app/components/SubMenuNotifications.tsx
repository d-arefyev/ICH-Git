// src/app/components/SubMenuNotifications.tsx
import React, { useEffect } from "react";

interface SubMenuNotificationsProps {
  onClose: () => void;
}

const SubMenuNotifications: React.FC<SubMenuNotificationsProps> = ({ onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".submenu-notifications")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="absolute left-[244px] top-0 h-full w-[395px] bg-color-light shadow-lg rounded-tr-[16px] rounded-br-[16px]">
      <div className="p-4">Уведомления</div>
    </div>
  );
};

export default SubMenuNotifications;



// // src/app/components/SubMenuNotifications.tsx
// import React from "react";

// interface SubMenuNotificationsProps {
//   onClose: () => void;
// }

// const SubMenuNotifications: React.FC = () => {
//   const messages = [
//     { id: 1, user: "John", message: "Hello! How are you?" },
//     { id: 2, user: "Jane", message: "Let's meet tomorrow." },
//     { id: 3, user: "Doe", message: "Happy Birthday!" },
//   ];

//   return (
//     <div className="absolute left-[244px] top-0 w-[300px] h-full bg-gray-200 p-4">
//       <h3 className="text-xl mb-4">Messages</h3>
//       <ul>
//         {messages.map((msg) => (
//           <li key={msg.id} className="mb-2">
//             <strong>{msg.user}:</strong> {msg.message}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SubMenuNotifications;

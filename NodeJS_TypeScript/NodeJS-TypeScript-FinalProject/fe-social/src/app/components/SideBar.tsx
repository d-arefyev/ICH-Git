// src/app/components/SideBar.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Импорт useRouter для навигации
import { Logo } from "../atoms/Logo";
import {
  HomeIcon,
  HomeIconHover,
  SearchIcon,
  SearchIconHover,
  ExploreIcon,
  ExploreIconHover,
  MessagesIcon,
  MessagesIconHover,
  NotificationsIcon,
  NotificationsIconHover,
  CreateIcon,
  CreateIconHover,
} from "../atoms/SideBarIcons";
import { ProfilIcon, ProfilIconHover } from "../atoms/ProfilIcon";
import SubMenuSearch from "./SubMenuSearch";
import SubMenuMessages from "./SubMenuMessages";
import SubMenuNotifications from "./SubMenuNotifications";
import ModalCreatePost from "../modal/ModalCreatePost"; 

interface SideBarButtonProps {
  label: string;
  Icon: React.ReactNode;
  HoverIcon: React.ReactNode;
  onClick: () => void;
  
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
      onClick={onClick}
    >
      <span className="w-6 h-6">{isHovered ? HoverIcon : Icon}</span>
      <span className="ml-[8px]">{label}</span>
    </button>
  );
};

const SideBar: React.FC = () => {
  const router = useRouter();
  const [isSubMenuVisible, setSubMenuVisible] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Обработчики для перехода и отображения меню
  const handleHomeClick = () => router.push("/home");
  const handleSearchClick = () => toggleSubMenu("search");
  const handleExploreClick = () => router.push("/explore");
  const handleMessagesClick = () => toggleSubMenu("messages");
  const handleNotificationsClick = () => toggleSubMenu("notifications");
  const handleCreateClick = () => setModalVisible(true);
  const handleProfileClick = () => router.push("/profile");

  const toggleSubMenu = (menu: string) => {
    setSubMenuVisible((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className="absolute left-0 top-0 flex flex-col h-[calc(100%-158px)] py-[38px] px-[12px] w-[244px] bg-color-light border-r-[1px] border-color-gray">
      <div className="w-[90px] ml-[16px] mb-[38px]">
        <Logo />
      </div>
      <div className="flex flex-col gap-[6px]">
        <SideBarButton
          label="Home"
          Icon={<HomeIcon />}
          HoverIcon={<HomeIconHover />}
          onClick={handleHomeClick}
        />
        <SideBarButton
          label="Search"
          Icon={<SearchIcon />}
          HoverIcon={<SearchIconHover />}
          onClick={handleSearchClick}
        />
        {isSubMenuVisible === "search" && <SubMenuSearch onClose={() => setSubMenuVisible(null)} />}
        
        <SideBarButton
          label="Explore"
          Icon={<ExploreIcon />}
          HoverIcon={<ExploreIconHover />}
          onClick={handleExploreClick}
        />
        
        <SideBarButton
          label="Messages"
          Icon={<MessagesIcon />}
          HoverIcon={<MessagesIconHover />}
          onClick={handleMessagesClick}
        />
        {isSubMenuVisible === "messages" && <SubMenuMessages onClose={() => setSubMenuVisible(null)} />}
        
        <SideBarButton
          label="Notifications"
          Icon={<NotificationsIcon />}
          HoverIcon={<NotificationsIconHover />}
          onClick={handleNotificationsClick}
        />
        {isSubMenuVisible === "notifications" && <SubMenuNotifications onClose={() => setSubMenuVisible(null)} />}
        
        <SideBarButton
          label="Create"
          Icon={<CreateIcon />}
          HoverIcon={<CreateIconHover />}
          onClick={handleCreateClick}
        />
        {isModalVisible && <ModalCreatePost onClose={() => setModalVisible(false)} />}
      </div>
      <div className="mt-[50px]">
        <SideBarButton
          label="Profile"
          Icon={<ProfilIcon />}
          HoverIcon={<ProfilIconHover />}
          onClick={handleProfileClick}
        />
      </div>
    </div>
  );
};

export default SideBar;



// // src/app/components/SideBar.tsx
// "use client";

// import React, { useState } from "react";
// import { Logo } from "../atoms/Logo";
// import {
//   HomeIcon,
//   HomeIconHover,
//   SearchIcon,
//   SearchIconHover,
//   ExploreIcon,
//   ExploreIconHover,
//   MessagesIcon,
//   MessagesIconHover,
//   NotificationsIcon,
//   NotificationsIconHover,
//   CreateIcon,
//   CreateIconHover,
// } from "../atoms/SideBarIcons";
// import { ProfilIcon, ProfilIconHover } from "../atoms/ProfilIcon";

// interface SideBarButtonProps {
//   label: string;
//   Icon: React.ReactNode;
//   HoverIcon: React.ReactNode;
// }

// const SideBarButton: React.FC<SideBarButtonProps> = ({
//   label,
//   Icon,
//   HoverIcon,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <button
//       className="flex items-center gap-[8px] p-2 rounded-lg w-full hover:font-bold h-[48px] px-[12px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <span className="w-6 h-6">{isHovered ? HoverIcon : Icon}</span>
//       <span className="ml-[8px]">{label}</span>
//     </button>
//   );
// };

// const SideBar: React.FC = () => {
//   return (
//     <div className="absolute left-0 top-0 flex flex-col h-[calc(100%-158px)] py-[38px] px-[12px] w-[244px] bg-color-light border-r-[1px] border-color-gray">
//       <div className="w-[90px] ml-[16px] mb-[38px]">
//         <Logo />
//       </div>
//       <div className="flex flex-col gap-[6px]">
//         <SideBarButton
//           label="Home"
//           Icon={<HomeIcon />}
//           HoverIcon={<HomeIconHover />}
//         />
//         <SideBarButton
//           label="Search"
//           Icon={<SearchIcon />}
//           HoverIcon={<SearchIconHover />}
//         />
//         <SideBarButton
//           label="Explore"
//           Icon={<ExploreIcon />}
//           HoverIcon={<ExploreIconHover />}
//         />
//         <SideBarButton
//           label="Messages"
//           Icon={<MessagesIcon />}
//           HoverIcon={<MessagesIconHover />}
//         />
//         <SideBarButton
//           label="Notifications"
//           Icon={<NotificationsIcon />}
//           HoverIcon={<NotificationsIconHover />}
//         />
//         <SideBarButton
//           label="Create"
//           Icon={<CreateIcon />}
//           HoverIcon={<CreateIconHover />}
//         />
//       </div>
//       <div className="mt-[50px]">
//         <SideBarButton
//           label="Profile"
//           Icon={<ProfilIcon />}
//           HoverIcon={<ProfilIconHover />}
//         />
//       </div>
//     </div>
//   );
// };

// export default SideBar;
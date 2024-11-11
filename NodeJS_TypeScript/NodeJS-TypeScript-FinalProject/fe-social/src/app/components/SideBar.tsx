"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import SubMenuSearch from "./SubMenuSearch";
import SubMenuMessages from "./SubMenuMessages";
import SubMenuNotifications from "./SubMenuNotifications";
import ModalCreatePost from "../modal/ModalCreatePost";
import SideBarButton from "../atoms/SideBarButton";
import Image from "next/image";

interface SideBarProps {
  openOverlay: () => void;
  closeOverlay: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ openOverlay, closeOverlay }) => {
  const router = useRouter();
  const [isSubMenuVisible, setSubMenuVisible] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("home");
  const [userProfile, setUserProfile] = useState<{ username: string; profile_image: string } | null>(null);

  // Извлекаем данные пользователя из localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserProfile({ username: user.username, profile_image: user.profile_image });
    }
  }, []);

  const handleHomeClick = () => {
    setActiveButton("home");
    router.push("/home");
  };
  const handleSearchClick = () => {
    setActiveButton("search");
    toggleSubMenu("search");
    openOverlay();
  };
  const handleExploreClick = () => {
    setActiveButton("explore");
    router.push("/explore");
  };
  const handleMessagesClick = () => {
    setActiveButton("messages");
    toggleSubMenu("messages");
    openOverlay();
  };
  const handleNotificationsClick = () => {
    setActiveButton("notifications");
    toggleSubMenu("notifications");
    openOverlay();
  };
  const handleCreateClick = () => setModalVisible(true);
  const handleProfileClick = () => {
    setActiveButton("profile");
    router.push("/profile");
  };

  const toggleSubMenu = (menu: string) => {
    setSubMenuVisible((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className="absolute left-0 top-0 flex flex-col min-h-[calc(100%-158px)] py-[38px] px-[12px] w-[244px] bg-color-light border-r-[1px] border-color-gray z-[10000]">
      <div className="w-[90px] ml-[16px] mb-[38px]">
        <Logo />
      </div>
      <div className="flex flex-col gap-[6px]">
        <SideBarButton
          label="Home"
          Icon={<HomeIcon />}
          HoverIcon={<HomeIconHover />}
          onClick={handleHomeClick}
          isActive={activeButton === "home"}
        />
        <SideBarButton
          label="Search"
          Icon={<SearchIcon />}
          HoverIcon={<SearchIconHover />}
          onClick={handleSearchClick}
          isActive={activeButton === "search"}
        />
        {isSubMenuVisible === "search" && <SubMenuSearch onClose={() => {setSubMenuVisible(null); closeOverlay();}} />}

        <SideBarButton
          label="Explore"
          Icon={<ExploreIcon />}
          HoverIcon={<ExploreIconHover />}
          onClick={handleExploreClick}
          isActive={activeButton === "explore"}
        />

        <SideBarButton
          label="Messages"
          Icon={<MessagesIcon />}
          HoverIcon={<MessagesIconHover />}
          onClick={handleMessagesClick}
          isActive={activeButton === "messages"}
        />
        {isSubMenuVisible === "messages" && <SubMenuMessages onClose={() => {setSubMenuVisible(null); closeOverlay();}} />}

        <SideBarButton
          label="Notifications"
          Icon={<NotificationsIcon />}
          HoverIcon={<NotificationsIconHover />}
          onClick={handleNotificationsClick}
          isActive={activeButton === "notifications"}
        />
        {isSubMenuVisible === "notifications" && <SubMenuNotifications onClose={() => {setSubMenuVisible(null); closeOverlay();}} />}

        <SideBarButton
          label="Create"
          Icon={<CreateIcon />}
          HoverIcon={<CreateIconHover />}
          onClick={handleCreateClick}
        />
        {isModalVisible && <ModalCreatePost onClose={() => setModalVisible(false)} profileImage={""} username={""} />}
      </div>
      <div className="mt-[50px]">
        <SideBarButton
          label={userProfile?.username || "Profile"}
          Icon={
            <Image
              src={userProfile?.profile_image || "/default-avatar.png"}
              alt="Profile Avatar"
              width={24}
              height={24}
              className="rounded-full"
            />
          }
          HoverIcon={
            <Image
              src={userProfile?.profile_image || "/default-avatar.png"}
              alt="Profile Avatar Hover"
              width={24}
              height={24}
              className="rounded-full border-[2px] border-color-dark"
            />
          }
          onClick={handleProfileClick}
          isActive={activeButton === "profile"}
        />
      </div>
    </div>
  );
};

export default SideBar;






// // src/components/SideBar.tsx
// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
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
// import SubMenuSearch from "./SubMenuSearch";
// import SubMenuMessages from "./SubMenuMessages";
// import SubMenuNotifications from "./SubMenuNotifications";
// import ModalCreatePost from "../modal/ModalCreatePost";
// import SideBarButton from "../atoms/SideBarButton";

// interface SideBarProps {
//   openOverlay: () => void;
//   closeOverlay: () => void;
// }

// const SideBar: React.FC<SideBarProps> = ({ openOverlay, closeOverlay }) => {
//   const router = useRouter();
//   const [isSubMenuVisible, setSubMenuVisible] = useState<string | null>(null);
//   const [isModalVisible, setModalVisible] = useState(false);

//   const [activeButton, setActiveButton] = useState<string>("home");

//   const handleHomeClick = () => {
//     setActiveButton("home");
//     router.push("/home");
//   };
//   const handleSearchClick = () => {
//     setActiveButton("search");
//     toggleSubMenu("search");
//     openOverlay();
//   };
//   const handleExploreClick = () => {
//     setActiveButton("explore");
//     router.push("/explore");
//   };
//   const handleMessagesClick = () => {
//     setActiveButton("messages");
//     toggleSubMenu("messages");
//     openOverlay();
//   };
//   const handleNotificationsClick = () => {
//     setActiveButton("notifications");
//     toggleSubMenu("notifications");
//     openOverlay();
//   };
//   const handleCreateClick = () => setModalVisible(true);
//   const handleProfileClick = () => {
//     setActiveButton("profile");
//     router.push("/profile");
//     // router.push("/profile/${userId}");
//   };

//   const toggleSubMenu = (menu: string) => {
//     setSubMenuVisible((prev) => (prev === menu ? null : menu));
//   };

//   return (
//     <div className="absolute left-0 top-0 flex flex-col min-h-[calc(100%-158px)] py-[38px] px-[12px] w-[244px] bg-color-light border-r-[1px] border-color-gray z-[10000]">
//       <div className="w-[90px] ml-[16px] mb-[38px]">
//         <Logo />
//       </div>
//       <div className="flex flex-col gap-[6px]">
//         <SideBarButton
//           label="Home"
//           Icon={<HomeIcon />}
//           HoverIcon={<HomeIconHover />}
//           onClick={handleHomeClick}
//           isActive={activeButton === "home"}
//         />
//         <SideBarButton
//           label="Search"
//           Icon={<SearchIcon />}
//           HoverIcon={<SearchIconHover />}
//           onClick={handleSearchClick}
//           isActive={activeButton === "search"}
//         />
//         {isSubMenuVisible === "search" && <SubMenuSearch onClose={() => {setSubMenuVisible(null); closeOverlay();}} />}

//         <SideBarButton
//           label="Explore"
//           Icon={<ExploreIcon />}
//           HoverIcon={<ExploreIconHover />}
//           onClick={handleExploreClick}
//           isActive={activeButton === "explore"}
//         />

//         <SideBarButton
//           label="Messages"
//           Icon={<MessagesIcon />}
//           HoverIcon={<MessagesIconHover />}
//           onClick={handleMessagesClick}
//           isActive={activeButton === "messages"}
//         />
//         {isSubMenuVisible === "messages" && <SubMenuMessages onClose={() => {setSubMenuVisible(null); closeOverlay();}} />}

//         <SideBarButton
//           label="Notifications"
//           Icon={<NotificationsIcon />}
//           HoverIcon={<NotificationsIconHover />}
//           onClick={handleNotificationsClick}
//           isActive={activeButton === "notifications"}
//         />
//         {isSubMenuVisible === "notifications" && <SubMenuNotifications onClose={() => {setSubMenuVisible(null); closeOverlay();}} />}

//         <SideBarButton
//           label="Create"
//           Icon={<CreateIcon />}
//           HoverIcon={<CreateIconHover />}
//           onClick={handleCreateClick}
//         />
//         {isModalVisible && <ModalCreatePost onClose={() => setModalVisible(false)} profileImage={""} username={""} />}
//       </div>
//       <div className="mt-[50px]">
//         <SideBarButton
//           label="Profile"
//           Icon={<ProfilIcon />}
//           HoverIcon={<ProfilIconHover />}
//           onClick={handleProfileClick}
//           isActive={activeButton === "profile"}
//         />
//       </div>
//     </div>
//   );
// };

// export default SideBar;






// // рабочая версия
// // src/app/components/SideBar.tsx
// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Импорт useRouter для навигации
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
// import SubMenuSearch from "./SubMenuSearch";
// import SubMenuMessages from "./SubMenuMessages";
// import SubMenuNotifications from "./SubMenuNotifications";
// import ModalCreatePost from "../modal/ModalCreatePost"; 

// interface SideBarButtonProps {
//   label: string;
//   Icon: React.ReactNode;
//   HoverIcon: React.ReactNode;
//   onClick: () => void;
  
// }

// const SideBarButton: React.FC<SideBarButtonProps> = ({
//   label,
//   Icon,
//   HoverIcon,
//   onClick,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <button
//       className="flex items-center gap-[8px] p-2 rounded-lg w-full hover:font-bold h-[48px] px-[12px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <span className="w-6 h-6">{isHovered ? HoverIcon : Icon}</span>
//       <span className="ml-[8px]">{label}</span>
//     </button>
//   );
// };

// const SideBar: React.FC = () => {
//   const router = useRouter();
//   const [isSubMenuVisible, setSubMenuVisible] = useState<string | null>(null);
//   const [isModalVisible, setModalVisible] = useState(false);

//   // Обработчики для перехода и отображения меню
//   const handleHomeClick = () => router.push("/home");
//   const handleSearchClick = () => toggleSubMenu("search");
//   const handleExploreClick = () => router.push("/explore");
//   const handleMessagesClick = () => toggleSubMenu("messages");
//   const handleNotificationsClick = () => toggleSubMenu("notifications");
//   const handleCreateClick = () => setModalVisible(true);
//   const handleProfileClick = () => router.push("/profile");

//   const toggleSubMenu = (menu: string) => {
//     setSubMenuVisible((prev) => (prev === menu ? null : menu));
//   };

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
//           onClick={handleHomeClick}
//         />
//         <SideBarButton
//           label="Search"
//           Icon={<SearchIcon />}
//           HoverIcon={<SearchIconHover />}
//           onClick={handleSearchClick}
//         />
//         {isSubMenuVisible === "search" && <SubMenuSearch onClose={() => setSubMenuVisible(null)} />}
        
//         <SideBarButton
//           label="Explore"
//           Icon={<ExploreIcon />}
//           HoverIcon={<ExploreIconHover />}
//           onClick={handleExploreClick}
//         />
        
//         <SideBarButton
//           label="Messages"
//           Icon={<MessagesIcon />}
//           HoverIcon={<MessagesIconHover />}
//           onClick={handleMessagesClick}
//         />
//         {isSubMenuVisible === "messages" && <SubMenuMessages onClose={() => setSubMenuVisible(null)} />}
        
//         <SideBarButton
//           label="Notifications"
//           Icon={<NotificationsIcon />}
//           HoverIcon={<NotificationsIconHover />}
//           onClick={handleNotificationsClick}
//         />
//         {isSubMenuVisible === "notifications" && <SubMenuNotifications onClose={() => setSubMenuVisible(null)} />}
        
//         <SideBarButton
//           label="Create"
//           Icon={<CreateIcon />}
//           HoverIcon={<CreateIconHover />}
//           onClick={handleCreateClick}
//         />
//         {isModalVisible && <ModalCreatePost onClose={() => setModalVisible(false)} />}
//       </div>
//       <div className="mt-[50px]">
//         <SideBarButton
//           label="Profile"
//           Icon={<ProfilIcon />}
//           HoverIcon={<ProfilIconHover />}
//           onClick={handleProfileClick}
//         />
//       </div>
//     </div>
//   );
// };

// export default SideBar;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { $api } from "../api/api";
import Link from "next/link";
import ProfileLinkIcon from "../atoms/ProfileLinkIcon";

interface UserProfile {
  _id: string;
  username: string;
  full_name: string;
  bio: string;
  profile_image: string;
  posts_count: number;
  followers_count: number;
  following_count: number;
}

interface ProfileProps {
  userId: string; // Идентификатор пользователя, который будет передан через props
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Функция для получения данных профиля пользователя
  const getUserProfile = async () => {
    try {
      const response = await $api.get(`/user/${userId}`); // Запрос на сервер
      setUserProfile(response.data); // Сохранение данных в state
    } catch (error) {
      console.error("Ошибка при получении профиля:", error); // Обработка ошибок
    } finally {
      setIsLoading(false); // Завершаем загрузку
    }
  };

  useEffect(() => {
    getUserProfile(); // Получаем данные профиля при монтировании компонента
  }, [userId]); // Перезагружаем данные при изменении userId

  // Если данные ещё загружаются
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      {/* Профиль */}
      <div className="flex gap-8 mb-8">
        {/* Левая часть - аватар */}  
        <div className="relative w-[168px] h-[168px]">
          <Image
            src="/ava-b-frame.png"
            alt="Avatar frame"
            width={168}
            height={168}
            className="w-full h-full"
          />
          <Image
            src={userProfile?.profile_image || "/default-avatar.png"}
            alt="Profile Avatar"
            width={150}
            height={150}
            className="absolute inset-0 w-[150px] h-[150px] m-auto border bg-color-gray rounded-full"
          />
        </div>

        {/* Правая часть - данные профиля */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[24px]">
            <span className="text-[20px]">
              {userProfile?.username || "username"}
            </span>
            <Link href="/edit-profile">
              <button className="h-[32px] px-[50px] bg-color-gray hover:bg-color-accent text-[14px] font-semibold text-color-darkor rounded-[8px] hover:text-color-light ">
                Edit profile
              </button>
            </Link>
          </div>

          {/* Статистика профиля */}
          <div className="flex gap-[40px]">
            <div>{userProfile?.posts_count}posts</div>
            <div>{userProfile?.followers_count}followers</div>
            <div>{userProfile?.following_count}following</div>
          </div>

          {/* Описание профиля */}
          <div className=" text-gray-600">{userProfile?.bio}</div>

          <Link
            href="#"
            className="flex items-center text-[14px] font-semibold text-[#00376B]"
          >
            <ProfileLinkIcon href="#" />
            <span className="ml-[4px]">web-site</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;



// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { $api } from "../api/api"; // Импортируем $api для отправки запросов
// import Link from "next/link";

// interface UserProfile {
//   _id: string;
//   username: string;
//   full_name: string;
//   bio: string;
//   profile_image: string;
//   posts_count: number;
//   followers_count: number;
//   following_count: number;
// }

// interface ProfileProps {
//   userId: string; // Идентификатор пользователя, который будет передан через props
// }

// const Profile: React.FC<ProfileProps> = ({ userId }) => {
//   const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   // Функция для получения данных профиля пользователя
//   const getUserProfile = async () => {
//     try {
//       const response = await $api.get(`/user/${userId}`); // Запрос на сервер
//       setUserProfile(response.data); // Сохранение данных в state
//     } catch (error) {
//       console.error("Ошибка при получении профиля:", error); // Обработка ошибок
//     } finally {
//       setIsLoading(false); // Завершаем загрузку
//     }
//   };

//   useEffect(() => {
//     getUserProfile(); // Получаем данные профиля при монтировании компонента
//   }, [userId]); // Перезагружаем данные при изменении userId

//   // Если данные ещё загружаются
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="profile-container">
//       {/* Профиль */}
//       <div className="flex gap-8 mb-8">
//         {/* Левая часть - аватар */}
//         <div className="relative">
//           <Image
//             src={userProfile?.profile_image || "/default-avatar.png"} // Если нет изображения, показываем дефолтное
//             alt="Profile Avatar"
//             width={150}
//             height={150}
//             className="w-[150px] h-[150px] rounded-full object-cover"
//           />
//           <Image
//             src="/ava-b-frame.png"
//             alt="Avatar frame"
//             width={168}
//             height={168}
//             className="absolute top-0 left-0 w-[168px] h-[168px]"
//           />
//         </div>

//         {/* Правая часть - данные профиля */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h2 className="text-xl font-bold">{userProfile?.full_name}</h2>
//             <p className="text-sm text-gray-500">@{userProfile?.username}</p>
//             <Link href="/edit-profile">
//               <button className="mt-4 p-2 bg-blue-500 text-white rounded-md">
//                 Edit profile
//               </button>
//             </Link>
//           </div>

//           {/* Статистика профиля */}
//           <div className="flex gap-[40px] mt-4 text-gray-700">
//             <div>Posts: {userProfile?.posts_count}</div>
//             <div>Followers: {userProfile?.followers_count}</div>
//             <div>Following: {userProfile?.following_count}</div>
//           </div>

//           {/* Описание профиля */}
//           <div className="mt-4 text-gray-600">{userProfile?.bio}</div>

//           {/* Ссылка на полный профиль */}
//           <Link href={`/profile/${userProfile?._id}`} className="text-blue-500 mt-2">
//             View full profile
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
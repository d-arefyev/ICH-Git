// // src/app/profile/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { $api } from "../api/api";
import Profile from "../profile/Profile";
import Image from "next/image";
// import NoMoreUpdates from "../atoms/NoMoreUpdates";

const ProfilePage = ({ params }: { params: { userId: string } }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Получаем посты пользователя
  const getPosts = async () => {
    try {
      const response = await $api.get(`/post/all?userId=${params.userId}`);
      setPosts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, [params.userId]);

  return (
    <div className="globalContainer flex flex-col max-w-[975px] py-[60px]">
      {/* Профиль пользователя */}
      <div className="flex self-start">
        <Profile userId={params.userId} />
      </div>

      {/* Сетка постов */}
      <div className="mt-8">
        {isLoading ? (
          <div>Loading posts...</div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[4px]">
            {posts.map((post) => (
              <div key={post._id}>
                <Image
                  src={post.image_url}
                  alt="Post Image"
                  width={307}
                  height={307}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <NoMoreUpdates /> */}
    </div>
  );
};

export default ProfilePage;





// // src/app/profile/page.tsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { $api } from "../api/api";
// import Profile from "../profile/Profile"; // Импортируем компонент Profile
// import NoMoreUpdates from "../atoms/NoMoreUpdates";

// const ProfilePage = ({ params }: { params: { userId: string } }) => {
//   const [posts, setPosts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   // Получаем посты пользователя
//   const getPosts = async () => {
//     try {
//       const response = await $api.get(`/post/all?userId=${params.userId}`);
//       setPosts(response.data); // Загружаем изображения постов
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getPosts();
//   }, [params.userId]);

//   return (
//     <div className="flex flex-col items-center w-full ml-[26px] pt-[60px]">
//       {/* Профиль пользователя */}
//       <Profile userId={params.userId} />

//       {/* Сетка постов */}
//       <div className="mt-8">
//         {isLoading ? (
//           <div>Loading posts...</div>
//         ) : (
//           <div className="grid grid-cols-3 gap-4">
//             {posts.map((post) => (
//               <div key={post._id} className="post-item">
//                 <img
//                   src={post.image_url}
//                   alt="Post Image"
//                   className="w-[307px] h-[307px] object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <NoMoreUpdates />
//     </div>
//   );
// };

// export default ProfilePage;
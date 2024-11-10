"use client"

import { useEffect, useState } from "react";
import { $api } from "../api/api";
import Image from "next/image";
// import NoMoreUpdates from "../atoms/NoMoreUpdates";

type Post = {
  _id: string;
  image_url: string;
};

export const Explore = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Получение постов
  useEffect(() => {
    const getPosts = () => {
      $api.get("/post/all/public").then((res) => {
        setPosts(res.data);
      });
    };

    getPosts();
  }, []);

  return (
    <div className="globalContainer flex flex-col max-w-[975px] py-[60px]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[4px]">
        {posts.length > 0 ? (
          posts.map((item: Post, index: number) => (
            <div
              key={item._id}
              className={`
                ${
                  index % 6 === 2
                    ? "row-span-2"
                    : "h-[316px]"
                }
                w-full relative aspect-w-1 aspect-h-1
              `}
            >
              <Image
                src={item.image_url}
                alt="Post Image"
                layout="fill"
                className="object-cover"
              />
            </div>
          ))
        ) : (
          <li>No Posts</li>
        )}
      </div>
      {/* <NoMoreUpdates /> */}
    </div>
  );
};

export default Explore;



// "use client";

// import { useEffect, useState } from "react";
// import { $api } from "../api/api";
// import Image from "next/image";
// // import NoMoreUpdates from "../atoms/NoMoreUpdates";

// type Post = {
//   _id: string;
//   image_url: string;
// };

// export const Explore = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   // Получение постов
//   useEffect(() => {
//     const getPosts = () => {
//       $api.get("/post/all/public").then((res) => {
//         setPosts(res.data);
//       });
//     };

//     getPosts();
//   }, []);

//   return (
//     <div className="globalContainer flex flex-col items-center max-w-[975px]">
//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[4px] ">
//         {posts.length > 0 ? (
//           posts.map((item: Post, index: number) => (
//             <div
//               key={item._id}
//               className={`
//             ${
//               index % 3 === 2 || index % 2 === 3
//                 ? "row-span-2"
//                 : "h-[200px] lg:h-[316px]"
//             }
//             w-full
//           `}
//             >
//               <Image
//                 src={item.image_url}
//                 alt="Post Image"
//                 width={316}
//                 height={316}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))
//         ) : (
//           <li>No Posts</li>
//         )}
//       </div>
//       {/* <NoMoreUpdates /> */}
//     </div>
//   );
// };

// export default Explore;

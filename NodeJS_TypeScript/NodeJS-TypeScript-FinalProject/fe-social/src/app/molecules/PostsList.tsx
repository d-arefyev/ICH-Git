"use client";

import React, { useEffect, useState } from "react";
import { $api } from "../api/api"; // Уже настроен для работы с токеном
import { parseData } from "../helpers/parseData";
import Image from "next/image";
import FollowButton from "../atoms/FollowButton";
import Like from "../atoms/Like";
import CommentIcon from "../atoms/CommentIcon";

// Типы данных
type Post = {
  _id: string;
  user_id: string;
  image_url: string;
  caption: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
  last_comment?: string;
};

type UserData = {
  profile_image: string;
  user_name: string;
};

// Компонент списка постов
export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [usersData, setUsersData] = useState<{ [key: string]: UserData }>({});
  const [commentsData, setCommentsData] = useState<{ [postId: string]: string }>({});

  // Получение постов
  const getPosts = async () => {
    try {
      const res = await $api.get("/post/all/public"); // Публичные посты
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Получение данных пользователей для каждого поста
  const getUsersData = async () => {
    try {
      // Получаем данные пользователей для каждого поста
      const userPromises = posts.map((post) =>
        $api.get(`/user/${post.user_id}`)
      );
      const userResponses = await Promise.all(userPromises);
      const users = userResponses.reduce((acc: any, user: any) => {
        acc[user.data._id] = {
          profile_image: user.data.profile_image,
          user_name: user.data.user_name,
        };
        return acc;
      }, {});
      setUsersData(users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Получение комментариев для каждого поста
  const getPostComments = async (postId: string) => {
    try {
      const res = await $api.get(`/comment/${postId}`);
      const comments = res.data;
      if (comments.length > 0) {
        // Получаем последний комментарий
        const lastComment = comments[comments.length - 1].comment_text;
        setCommentsData((prev) => ({
          ...prev,
          [postId]: lastComment,
        }));
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    // Сначала загружаем посты, а затем данные пользователей и комментарии
    getPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      getUsersData(); // После получения постов, загружаем данные пользователей
      posts.forEach((post) => getPostComments(post._id)); // Получаем комментарии для каждого поста
    }
  }, [posts]);

  return (
    <ul className="w-full grid gap-y-[14px] gap-x-[40px] lg:grid-cols-2 md:grid-cols-1">
      {posts.length > 0 ? (
        posts.map((item) => (
          <PostItem
            key={item._id}
            item={{
              ...item,
              profile_image: usersData[item.user_id]?.profile_image || "",
              user_name: usersData[item.user_id]?.user_name || "",
              last_comment: commentsData[item._id],
            }}
            isFollow={true} // Логика для follow
          />
        ))
      ) : (
        <li>No Posts</li>
      )}
    </ul>
  );
};

type ItemProps = {
  item: {
    _id: string;
    caption: string;
    created_at: string;
    image_url: string;
    profile_image: string;
    user_name: string;
    user_id: string;
    likes_count: number;
    comments_count: number;
    last_comment?: string;
  };
  isFollow: boolean;
};

// Компонент поста
const PostItem = ({ item, isFollow }: ItemProps) => {
  const [likesCount, setLikesCount] = useState(item.likes_count);

  return (
    <li className="flex flex-col max-h-[720px] text-[12px] pb-[40px] border-b-[1px] border-b-color-gray">
      <div className="flex items-center py-[6px]">
        <div className="relative w-[36px] h-[36px]">
          <Image
            src="/ava-frame.png"
            alt="Avatar frame"
            width={36}
            height={36}
            className="w-full h-full"
          />
          <Image
            src={item.profile_image}
            alt="avatar"
            width={1}
            height={1}
            className="absolute inset-0 w-[26px] h-[26px] m-auto border bg-color-gray rounded-full"
          />
        </div>
        <span className="font-semibold text-[12px] mx-[6px]">
          {item.user_name || "username"}
        </span>
        <span className="text-color-dark-gray text-[12px]">
          &#8226; {parseData(item.created_at)} &#8226;
        </span>
        <FollowButton
          isFollow={isFollow}
          userId={item.user_id}
          targetUserId={item.user_id}
        />
      </div>
      <Image
        src={item.image_url}
        alt="Post Image"
        width={403}
        height={505}
        className="w-full min-h-[505px] object-cover rounded-[4px]"
      />
      <div className="flex flex-col my-[10px] gap-[8px]">
        <div className="flex items-center gap-[14px]">
          <Like
            postId={item._id}
            userId={item.user_id}
            onLikesCountChange={setLikesCount}
          />
          <CommentIcon postId={item._id} />
        </div>
        <span>{likesCount} likes</span>
        <span>
          <span className="font-semibold italic">
            {item.user_name || "username"}
          </span>
          : {item.caption}
        </span>
      </div>

      <div className="flex flex-col ap-[14px]">
        <span className="">
          {item.last_comment || "Last comment"}
        </span>
        <span className="text-color-dark-gray">
          View all comments ({item.comments_count})
        </span>
      </div>
    </li>
  );
};

export default PostsList;









// "use client"

// import React, { useEffect, useState } from "react";
// import { $api } from "../api/api";
// import { parseData } from "../helpers/parseData";
// import Image from "next/image";
// import FollowButton from "../atoms/FollowButton";
// import Like from "../atoms/Like";
// import CommentIcon from "../atoms/CommentIcon";

// // Типы данных
// type Post = {
//   _id: string;
//   user_id: string;
//   image_url: string;
//   caption: string;
//   likes_count: number;
//   comments_count: number;
//   created_at: string;
//   last_comment?: string;
// };

// type UserData = {
//   profile_image: string;
//   user_name: string;
// };

// // Компонент списка постов
// export const PostsList = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [usersData, setUsersData] = useState<{ [key: string]: UserData }>({});
//   const [commentsData, setCommentsData] = useState<{ [postId: string]: string }>({});

//   useEffect(() => {
//     // Получение постов
//     const getPosts = async () => {
//       try {
//         const res = await $api.get("/post/all");
//         setPosts(res.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     // Получение данных пользователей
//     const getUsersData = async () => {
//       try {
//         const res = await $api.get("/user");
//         const users = res.data.reduce((acc: any, user: any) => {
//           acc[user._id] = {
//             profile_image: user.profile_image,
//             user_name: user.user_name,
//           };
//           return acc;
//         }, {});
//         setUsersData(users);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     // Получение комментариев для каждого поста
//     const getPostComments = async (postId: string) => {
//       try {
//         const res = await $api.get(`/comment/${postId}`);
//         const comments = res.data;
//         if (comments.length > 0) {
//           // Получаем последний комментарий
//           const lastComment = comments[comments.length - 1].comment_text;
//           setCommentsData((prev) => ({
//             ...prev,
//             [postId]: lastComment,
//           }));
//         }
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };

//     getPosts();
//     getUsersData();
//   }, []);

//   return (
//     <ul className="w-full grid gap-y-[14px] gap-x-[40px] lg:grid-cols-2 md:grid-cols-1">
//       {posts.length > 0 ? (
//         posts.map((item) => (
//           <PostItem
//             key={item._id}
//             item={{
//               ...item,
//               profile_image: usersData[item.user_id]?.profile_image || "",
//               user_name: usersData[item.user_id]?.user_name || "",
//               last_comment: commentsData[item._id],
//             }}
//             isFollow={true} // Если необходимо, можете настроить логику follow
//           />
//         ))
//       ) : (
//         <li>No Posts</li>
//       )}
//     </ul>
//   );
// };

// type ItemProps = {
//   item: {
//     _id: string;
//     caption: string;
//     created_at: string;
//     image_url: string;
//     profile_image: string;
//     user_name: string;
//     user_id: string;
//     likes_count: number;
//     comments_count: number;
//     last_comment?: string;
//   };
//   isFollow: boolean;
// };

// // Компонент поста
// const PostItem = ({ item, isFollow }: ItemProps) => {
//   const [likesCount, setLikesCount] = useState(item.likes_count);

//   return (
//     <li className="flex flex-col max-h-[720px] text-[12px] pb-[40px] border-b-[1px] border-b-color-gray">
//       <div className="flex items-center py-[6px]">
//         <div className="relative w-[36px] h-[36px]">
//           <Image
//             src="/ava-frame.png"
//             alt="Avatar frame"
//             width={36}
//             height={36}
//             className="w-full h-full"
//           />
//           <Image
//             src={item.profile_image}
//             alt="avatar"
//             width={1}
//             height={1}
//             className="absolute inset-0 w-[26px] h-[26px] m-auto border bg-color-gray rounded-full"
//           />
//         </div>
//         <span className="font-semibold text-[12px] mx-[6px]">
//           {item.user_name || "username"}
//         </span>
//         <span className="text-color-dark-gray text-[12px]">
//           &#8226; {parseData(item.created_at)} &#8226;
//         </span>
//         <FollowButton
//           isFollow={isFollow}
//           userId={item.user_id}
//           targetUserId={item.user_id}
//         />
//       </div>
//       <Image
//         src={item.image_url}
//         alt="Post Image"
//         width={403}
//         height={505}
//         className="w-full max-h-[505px] object-cover rounded-[4px]"
//       />
//       <div className="flex flex-col my-[10px] gap-[8px]">
//         <div className="flex items-center gap-[14px]">
//           <Like
//             postId={item._id}
//             userId={item.user_id}
//             onLikesCountChange={setLikesCount}
//           />
//           <CommentIcon postId={item._id} />
//         </div>
//         <span>{likesCount} likes</span>
//         <span>
//           <span className="font-semibold italic">
//             {item.user_name || "username"}
//           </span>
//           : {item.caption}
//         </span>
//       </div>

//       <div className="flex flex-col ap-[14px]">
//         <span className="">
//           {item.last_comment || "Last comment"}
//         </span>
//         <span className="text-color-dark-gray">
//           View all comments ({item.comments_count})
//         </span>
//       </div>
//     </li>
//   );
// };

// export default PostsList;






// "use client"

// import React, { useEffect, useState } from "react";
// import { $api } from "../api/api";
// import { parseData } from "../helpers/parseData";
// import Image from "next/image";
// import FollowButton from "../atoms/FollowButton";
// import Like from "../atoms/Like";
// import CommentIcon from "../atoms/CommentIcon";

// // Типы данных
// type Post = {
//   _id: string;
//   user_id: string;
//   image_url: string;
//   caption: string;
//   likes_count: number;
//   comments_count: number;
//   created_at: string;
//   last_comment?: string;
// };

// type UserData = {
//   profile_image: string;
//   user_name: string;
// };

// // Компонент списка постов
// export const PostsList = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [usersData, setUsersData] = useState<{ [key: string]: UserData }>({});
//   const [commentsData, setCommentsData] = useState<{
//     [postId: string]: string;
//   }>({});

//   useEffect(() => {
//     // Получение постов
//     const getPosts = async () => {
//       try {
//         const res = await $api.get("/post/all");
//         setPosts(res.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     // Получение данных пользователей
//     const getUsersData = async () => {
//       try {
//         const res = await $api.get(`/user`);
//         const users = res.data.reduce((acc: any, user: any) => {
//           acc[user._id] = {
//             profile_image: user.profile_image,
//             user_name: user.user_name,
//           };
//           return acc;
//         }, {});
//         setUsersData(users);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     // Получение комментариев для каждого поста
//     const getPostComments = async (postId: string) => {
//       try {
//         const res = await $api.get(`/comment/${postId}`);
//         const comments = res.data;
//         if (comments.length > 0) {
//           // Получаем последний комментарий
//           const lastComment = comments[comments.length - 1].comment_text;
//           setCommentsData((prev) => ({
//             ...prev,
//             [postId]: lastComment,
//           }));
//         }
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };

//     getPosts();
//     getUsersData();
//   }, []);

//   return (
//     <ul className="w-full grid gap-y-[14px] gap-x-[40px] lg:grid-cols-2 md:grid-cols-1">
//       {posts.length > 0 ? (
//         posts.map((item) => (
//           <PostItem
//             key={item._id}
//             item={{
//               ...item,
//               profile_image: usersData[item.user_id]?.profile_image || "",
//               user_name: usersData[item.user_id]?.user_name || "",
//               last_comment: commentsData[item._id],
//             }}
//             isFollow={true} // Если необходимо, можете настроить логику follow
//           />
//         ))
//       ) : (
//         <li>No Posts</li>
//       )}
//     </ul>
//   );
// };

// type ItemProps = {
//   item: {
//     _id: string;
//     caption: string;
//     created_at: string;
//     image_url: string;
//     profile_image: string;
//     user_name: string;
//     user_id: string;
//     likes_count: number;
//     last_comment?: string;
//   };
//   isFollow: boolean;
// };

// // Компонент поста
// const PostItem = ({ item, isFollow }: ItemProps) => {
//   const [likesCount, setLikesCount] = useState(item.likes_count);

//   return (
//     <li className="flex flex-col max-h-[720px] text-[12px] pb-[40px] border-b-[1px] border-b-color-gray">
//       <div className="flex items-center py-[6px]">
//         <div className="relative w-[36px] h-[36px]">
//           <Image
//             src="/ava-frame.png"
//             alt="Avatar frame"
//             width={36}
//             height={36}
//             className="w-full h-full"
//           />
//           <Image
//             src={item.profile_image}
//             alt="avatar"
//             width={1}
//             height={1}
//             className="absolute inset-0 w-[26px] h-[26px] m-auto border bg-color-gray rounded-full"
//           />
//         </div>
//         <span className="font-semibold text-[12px] mx-[6px]">
//           {item.user_name || "user_name"}
//         </span>
//         <span className="text-color-dark-gray text-[12px]">
//           &#8226; {parseData(item.created_at)} &#8226;
//         </span>
//         <FollowButton
//           isFollow={isFollow}
//           userId={item.user_id}
//           targetUserId={item.user_id}
//         />
//       </div>
//       <Image
//         src={item.image_url}
//         alt="Post Image"
//         width={403}
//         height={505}
//         className="w-full max-h-[505px] object-cover rounded-[4px]"
//       />
//       <div className="flex flex-col my-[10px] gap-[8px]">
//         <div className="flex items-center gap-[14px]">
//           <Like
//             postId={item._id}
//             userId={item.user_id}
//             onLikesCountChange={setLikesCount}
//           />
//           <CommentIcon postId={item._id} />
//         </div>
//         <span>{likesCount} likes</span>
//         <span>
//           <span className="font-semibold italic">
//             {item.user_name || "user_name"}
//           </span>
//           : {item.caption}
//         </span>
//       </div>

//       <div className="flex flex-col ap-[14px]">
//         <span className="">
//           {item.last_comment || "Last comment"}
//         </span>
//         <span className="text-color-dark-gray">
//           View all comments ({item.comments_count})
//         </span>
//       </div>
//     </li>
//   );
// };

// export default PostsList;





// "use client";

// import { useEffect, useState } from "react";
// import { $api } from "../api/api"; // Путь к API
// import { parseData } from "../helpers/parseData";
// import Image from "next/image";
// import FollowButton from "../atoms/FollowButton";
// import Like from "../atoms/Like";
// import CommentIcon from "../atoms/CommentIcon";

// // Типы данных
// type Post = {
//   _id: string;
//   user_id: string;
//   image_url: string;
//   caption: string;
//   likes_count: number;
//   comments_count: number; // Обязательно добавьте это поле
//   created_at: string;
//   last_comment?: string; // Добавляем поле для последнего комментария
// };

// type UserData = {
//   profile_image: string;
//   user_name: string;
// };

// // Компонент списка постов
// export const PostsList = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [usersData, setUsersData] = useState<{ [key: string]: UserData }>({});
//   const [commentsData, setCommentsData] = useState<{ [postId: string]: string }>({});

//   useEffect(() => {
//     // Получение постов
//     const getPosts = () => {
//       $api.get("/post/all").then((res) => {
//         setPosts(res.data);
//         res.data.forEach((post: Post) => {
//           getPostComments(post._id); // Получаем комментарии для каждого поста
//         });
//       });
//     };

//     // Получение данных пользователей
//     const getUsersData = () => {
//       $api.get(`/users`).then((res) => {
//         const users = res.data.reduce((acc: any, user: any) => {
//           acc[user._id] = {
//             profile_image: user.profile_image,
//             user_name: user.user_name,
//           };
//           return acc;
//         }, {});
//         setUsersData(users);
//       });
//     };

//     // Получение комментариев для каждого поста
//     const getPostComments = (postId: string) => {
//       $api.get(`/comments/${postId}`).then((res) => {
//         const comments = res.data;
//         if (comments.length > 0) {
//           // Получаем последний комментарий
//           const lastComment = comments[comments.length - 1].comment_text;
//           setCommentsData((prev) => ({
//             ...prev,
//             [postId]: lastComment,
//           }));
//         }
//       });
//     };

//     getPosts();
//     getUsersData();
//   }, []);

//   return (
//     <ul className="w-full grid gap-y-[14px] gap-x-[40px] lg:grid-cols-2 md:grid-cols-1">
//       {posts.length > 0 ? (
//         posts.map((item) => (
//           <PostItem
//             key={item._id}
//             item={{
//               ...item,
//               profile_image: usersData[item.user_id]?.profile_image || "",
//               user_name: usersData[item.user_id]?.user_name || "",
//               last_comment: commentsData[item._id], // Передаем последний комментарий
//             }}
//             isFollow={true}
//           />
//         ))
//       ) : (
//         <li>No Posts</li>
//       )}
//     </ul>
//   );
// };

// type ItemProps = {
//   item: {
//     _id: string;
//     caption: string;
//     created_at: string;
//     image_url: string;
//     profile_image: string;
//     user_name: string;
//     user_id: string;
//     likes_count: number;
//     comments_count: number;
//     last_comment?: string;
//   };
//   isFollow: boolean;
// };

// // Компонент поста
// const PostItem = ({ item, isFollow }: ItemProps) => {
//   const [likesCount, setLikesCount] = useState(item.likes_count);

//   return (
//     <li className="flex flex-col max-h-[716px] border-[1px] border-red-500">
//       <div className="flex items-center py-[6px]">
//         <div className="relative w-[36px] h-[36px]">
//           <Image
//             src="/ava-frame.png"
//             alt="Avatar frame"
//             width={36}
//             height={36}
//             className="w-full h-full"
//           />
//           <Image
//             src={item.profile_image}
//             alt="avatar"
//             width={1}
//             height={1}
//             className="absolute inset-0 w-[26px] h-[26px] m-auto border bg-gray-300 rounded-full"
//           />
//         </div>
//         <span className="font-semibold text-[12px] mx-[6px]">
//           {item.user_name || "user_name"}
//         </span>
//         <span className="text-gray-500 text-[12px]">
//           &#8226; {parseData(item.created_at)} &#8226;
//         </span>
//         <FollowButton
//           isFollow={isFollow}
//           userId={item.user_id}
//           targetUserId={item.user_id}
//         />
//       </div>
//       <Image
//         src={item.image_url}
//         alt="Post Image"
//         width={403}
//         height={505}
//         className="w-full max-h-[505px] object-cover rounded-[4px]"
//       />
//       <div className="flex items-center gap-[14px] ">
//         <Like
//           postId={item._id}
//           userId={item.user_id}
//           onLikesCountChange={setLikesCount}
//         />
//         <CommentIcon postId={item._id} />
//       </div>
//       <span className="text-[12px]">{likesCount} likes</span>
//       <p className="text-[12px]">
//         <span className="font-semibold italic">{item.user_name || "user_name"}</span>: {item.caption}
//       </p>
//       <span className="text-[12px]">{item.last_comment || "Last comment"}</span>
//       <span className="text-[12px] text-color-dark-gray">View all comments ({item.comments_count})</span>
//     </li>
//   );
// };

// export default PostsList;

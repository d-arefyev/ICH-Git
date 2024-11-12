import React, { useEffect, useState } from "react";
import Image from "next/image";
import FollowButton from "../atoms/FollowButton";
import Like from "../atoms/Like";
import CommentIcon from "../atoms/CommentIcon";
import { $api } from "../api/api";
import { parseData } from "../helpers/parseData";

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
  currentUserId: string;
};

const PostItem = ({ item, currentUserId }: ItemProps) => {
  const [likesCount, setLikesCount] = useState(item.likes_count);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const checkFollowStatus = async () => {
      try {
        const res = await $api.get(`/users/${currentUserId}/isFollowing/${item.user_id}`);
        setIsFollowing(res.data.isFollowing);
      } catch (error) {
        console.error("Error checking follow status:", error);
      }
    };
    if (currentUserId && item.user_id !== currentUserId) {
      checkFollowStatus();
    }
  }, [currentUserId, item.user_id]);

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
            src={item.profile_image || "/default-avatar.png"}
            alt="avatar"
            width={1}
            height={1}
            className="absolute inset-0 w-[26px] h-[26px] m-auto border bg-color-gray rounded-full"
          />
        </div>
        <span className="font-semibold text-[12px] mx-[6px]">
          {item.user_name}
        </span>
        <span className="text-color-dark-gray text-[12px]">
          &#8226; {parseData(item.created_at)} &#8226;
        </span>
        {item.user_id !== currentUserId && (
          <FollowButton
            isFollow={isFollowing}
            userId={currentUserId}
            targetUserId={item.user_id}
          />
        )}
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
            userId={currentUserId}
            onLikesCountChange={setLikesCount}
          />
          <CommentIcon postId={item._id} />
        </div>
        <span>{likesCount} likes</span>
        <span>
          <span className="font-semibold italic">{item.user_name}</span>: {item.caption}
        </span>
      </div>
      <div className="flex flex-col gap-[14px]">
        <span>{item.last_comment || "Last comment"}</span>
        <span className="text-color-dark-gray">
          View all comments ({item.comments_count})
        </span>
      </div>
    </li>
  );
};

export default PostItem;






// // рабочая кнопка follow
// "use client";

// import { useEffect, useState } from "react";
// import { $api } from "../api/api";
// import styles from "./Posts.module.css";
// import { parseData } from "../helpers/parseData";
// import { matchUserId } from "../helpers/matchUsersId";
// import Image from "next/image";

// // Типы данных
// type Post = {
//   _id: string;
//   user_id: string;
//   image_url: string;
//   caption: string;
//   likes_count: number;
//   comments_count: number;
//   created_at: string;
//   __v: number;
// };

// type UserData = {
//   profile_image: string;
//   user_name: string;
// };

// export const PostsList = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [usersData, setUsersData] = useState<{ [key: string]: UserData }>({});
//   const [follows, setFollows] = useState([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   // Получение постов с сервера
//   useEffect(() => {
//     const getPosts = async () => {
//       try {
//         const res = await $api.get("/post/all/public"); // Публичные посты
//         const shuffledPosts = res.data.sort(() => Math.random() - 0.5);
//         setPosts(shuffledPosts);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     const getFollowers = async () => {
//       try {
//         const userId = localStorage.getItem("userId");
//         if (userId) {
//           const response = await $api.get(`/follow/${userId}/following`);
//           setFollows(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching follows:", error);
//       }
//     };

//     getFollowers();
//     getPosts();
//   }, []);

//   // Получение данных пользователей для каждого поста
//   useEffect(() => {
//     const getUsersData = async () => {
//       try {
//         // Запрашиваем данные пользователей для всех постов
//         const userPromises = posts.map((post) =>
//           $api.get(`/user/${post.user_id}`)
//         );
//         const userResponses = await Promise.all(userPromises);

//         // Логируем ответы, чтобы увидеть, что приходит с сервера
//         console.log("User responses:", userResponses);

//         const users = userResponses.reduce((acc: any, user: any) => {
//           // Логируем каждый пользовательский объект
//           console.log("User data for", user.data._id, user.data);

//           acc[user.data._id] = {
//             profile_image: user.data.profile_image,
//             user_name: user.data.user_name,
//           };
//           return acc;
//         }, {});

//         setUsersData(users);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     if (posts.length > 0) {
//       getUsersData(); // После получения постов, загружаем данные пользователей
//     }
//   }, [posts]);

//   return (
//     <ul className={styles.postList}>
//       {posts.length > 0 ? (
//         posts.map((item: Post) => (
//           <PostItem
//             key={item._id}
//             item={{
//               ...item,
//               profile_image: usersData[item.user_id]?.profile_image || "/default-avatar.png",
//               user_name: usersData[item.user_id]?.user_name || "Unknown",
//             }}
//             isFollow={matchUserId(follows, item.user_id)} // Проверяем, подписан ли текущий пользователь
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
//   };
//   isFollow: boolean;
// };

// const PostItem = ({ item, isFollow }: ItemProps) => {
//   return (
//     <li className={styles.postItem}>
//       <div>
//         <div className="relative w-[36px] h-[36px]">
//           <Image
//             src="/ava-frame.png"
//             alt="Avatar frame"
//             width={36}
//             height={36}
//             className="w-full h-full"
//           />
//           <Image
//             src={item.profile_image || "/default-avatar.png"}
//             alt="avatar"
//             width={1}
//             height={1}
//             className="absolute inset-0 w-[26px] h-[26px] m-auto border bg-color-gray rounded-full"
//           />
//         </div>
//         <span>{item.user_name}</span>
//         <span className={styles.created}>
//           &#8226; {parseData(item.created_at)} &#8226;
//         </span>
//         <FollowButton
//           isFollow={isFollow}
//           userId={item.user_id} // Логика для follow
//           targetUserId={item.user_id}
//         />
//       </div>
//       <Image
//         src={item.image_url}
//         alt="Post Image"
//         width={403}
//         height={505}
//         className="w-full min-h-[505px] object-cover rounded-[4px]"
//       />
//       <div className="my-[10px]">
//         <span>{item.caption}</span>
//       </div>
//     </li>
//   );
// };

// // Компонент кнопки Follow
// type FollowButtonProps = {
//   isFollow: boolean;
//   userId: string;
//   targetUserId: string;
// };

// function FollowButton({ isFollow, userId, targetUserId }: FollowButtonProps) {
//   const [follow, setFollow] = useState(isFollow);

//   const handleFollow = () => {
//     if (!follow) {
//       $api.post(`/follow/${userId}/follow/${targetUserId}`);
//       setFollow(true);
//     } else {
//       $api.delete(`/follow/${userId}/unfollow/${targetUserId}`);
//       setFollow(false);
//     }
//   };

//   return (
//     <button onClick={handleFollow}>{!follow ? "follow" : "unfollow"}</button>
//   );
// }

// export default PostsList;
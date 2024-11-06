// 'use client'

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { useSession } from 'next-auth/react';
// import { fetchPostLikes, followUser, unfollowUser } from '../api/api'; // Импортируем API функции
// import { LikeIcon } from '../atoms/LikeIcon'; // Импорт обновленного компонента
// import CommentIcon from '../atoms/CommentIcon'; // Импорт иконки комментариев

// interface PostProps {
//   post: {
//     id: string;
//     user_id: string;
//     image_url: string;
//     caption: string;
//     likes_count: number;
//     comments_count: number;
//     created_at: string;
//     user: {
//       username: string;
//       profile_image: string;
//     };
//   };
//   isLikedByUser: boolean;
//   isFollowing: boolean;
// }

// const Post = ({ post, isLikedByUser, isFollowing }: PostProps) => {
//   const { data: session } = useSession();
//   const router = useRouter();

//   const [likesCount, setLikesCount] = useState(post.likes_count);
//   const [commentsCount, setCommentsCount] = useState(post.comments_count);
//   const [liked, setLiked] = useState(isLikedByUser);
//   const [following, setFollowing] = useState(isFollowing);

//   useEffect(() => {
//     setLikesCount(post.likes_count);
//     setCommentsCount(post.comments_count);
//   }, [post]);

//   // Функция для вычисления времени с момента публикации
//   const timeAgo = (date: string) => {
//     const now = new Date();
//     const postDate = new Date(date);
//     const differenceInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

//     if (differenceInSeconds < 60) {
//       return `${differenceInSeconds} seconds ago`;
//     }

//     const differenceInMinutes = Math.floor(differenceInSeconds / 60);
//     if (differenceInMinutes < 60) {
//       return `${differenceInMinutes} minutes ago`;
//     }

//     const differenceInHours = Math.floor(differenceInMinutes / 60);
//     if (differenceInHours < 24) {
//       return `${differenceInHours} hours ago`;
//     }

//     const differenceInDays = Math.floor(differenceInHours / 24);
//     if (differenceInDays < 30) {
//       return `${differenceInDays} days ago`;
//     }

//     const differenceInMonths = Math.floor(differenceInDays / 30);
//     if (differenceInMonths < 12) {
//       return `${differenceInMonths} months ago`;
//     }

//     const differenceInYears = Math.floor(differenceInMonths / 12);
//     return `${differenceInYears} years ago`;
//   };

//   // Обработка лайка
//   const handleLikeToggle = async () => {
//     if (!session?.user?.id) {
//       return router.push('/auth'); // Перенаправление на страницу входа, если нет сессии
//     }

//     const updatedLiked = !liked;
//     setLiked(updatedLiked);

//     // Обновляем лайк в базе данных
//     try {
//       if (updatedLiked) {
//         await fetchPostLikes(post.id, session.user.id);
//         setLikesCount(likesCount + 1);
//       } else {
//         await fetchPostLikes(post.id, session.user.id, true);
//         setLikesCount(likesCount - 1);
//       }
//     } catch (error) {
//       console.error('Failed to update like:', error);
//     }
//   };

//   // Обработка подписки/отписки
//   const handleFollowToggle = async () => {
//     if (!session?.user?.id) {
//       return router.push('/auth'); // Перенаправление на страницу входа, если нет сессии
//     }

//     const updatedFollowing = !following;
//     setFollowing(updatedFollowing);

//     try {
//       if (updatedFollowing) {
//         await followUser(session.user.id, post.user_id);
//       } else {
//         await unfollowUser(session.user.id, post.user_id);
//       }
//     } catch (error) {
//       console.error('Failed to update follow status:', error);
//     }
//   };

//   return (
//     <div className="post-card w-full max-w-[404px] h-[716px] relative border border-gray-300 rounded-lg shadow-md mb-4">
//       <div className="post-header p-4 flex items-center justify-between">
//         <div className="user-avatar flex items-center space-x-2">
//           <Image
//             src={post.user.profile_image || '/default-avatar.png'}
//             alt="User Avatar"
//             width={40}
//             height={40}
//             className="rounded-full"
//           />
//           <div className="user-info">
//             <span className="font-semibold">{post.user.username}</span>
//             <span className="text-sm text-gray-500">{timeAgo(post.created_at)}</span>
//           </div>
//         </div>
//         <button 
//           onClick={handleFollowToggle} 
//           className="follow-button text-sm font-medium text-blue-500 hover:text-blue-700"
//         >
//           {following ? 'Unfollow' : 'Follow'}
//         </button>
//       </div>

//       <div className="post-image">
//         <Image
//           src={post.image_url}
//           alt="Post Image"
//           width={404}
//           height={505}
//           className="object-cover w-full h-[505px] rounded-t-lg"
//         />
//       </div>

//       <div className="post-footer p-4">
//         <div className="post-actions flex items-center space-x-4 mb-2">
//           <LikeIcon liked={liked} onClick={handleLikeToggle} />
//           <CommentIcon onClick={() => router.push(`/post/${post.id}`)} />
//         </div>

//         <div className="likes-count text-sm text-gray-700 mb-2">
//           <span>{likesCount} likes</span>
//         </div>

//         <div className="post-caption text-sm text-gray-900 mb-4">
//           <span className="font-semibold">{post.user.username}: </span>
//           <span>{post.caption}</span>
//         </div>

//         <div className="view-comments text-sm text-blue-500 cursor-pointer" onClick={() => router.push(`/post/${post.id}`)}>
//           View all comments ({commentsCount})
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;

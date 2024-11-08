"use client"

import { useEffect, useState } from "react";
import { $api } from "../api/api";
import styles from "./Posts.module.css";
import { parseData } from "../helpers/parseData";

// Тип поста с добавлением полей для пользователя
type Post = {
  _id: string;
  user_id: string;
  image_url: string;
  caption: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
  __v: number;
};

// Тип данных пользователя (для использования в usersData)
type UserData = {
  profile_image: string;
  user_name: string;
};

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [usersData, setUsersData] = useState<{ [key: string]: UserData }>({});

  // Получение постов и данных пользователей
  useEffect(() => {
    // Получаем посты
    const getPosts = () => {
      $api.get("/post/all").then((res) => {
        setPosts(res.data);
      });
    };

    // Получаем данные пользователей, предположим, что у нас есть API, которое возвращает все данные пользователей
    const getUsersData = () => {
      $api.get(`/users`).then((res) => {
        const users = res.data.reduce((acc: any, user: any) => {
          acc[user._id] = {
            profile_image: user.profile_image,
            user_name: user.user_name,
          };
          return acc;
        }, {});
        setUsersData(users);
      });
    };

    // Запросы данных
    getPosts();
    getUsersData();
  }, []);

  return (
    <ul className={styles.postList}>
      {posts.length > 0 ? (
        posts.map((item: Post) => (
          <PostItem
            key={item._id}
            item={{
              ...item,
              profile_image: usersData[item.user_id]?.profile_image || "", // Используем данные пользователя
              user_name: usersData[item.user_id]?.user_name || "", // Имя пользователя
            }}
            isFollow={true}
          />
        ))
      ) : (
        <li>No Posts</li>
      )}
    </ul>
  );
};

// Тип данных, которые мы передаем в PostItem
type ItemProps = {
  item: {
    caption: string;
    created_at: string;
    image_url: string;
    profile_image: string;
    user_name: string;
    user_id: string;
    likes_count: number;
  };
  isFollow: boolean;
};

const PostItem = ({ item, isFollow }: ItemProps) => {
  return (
    <li className={styles.postItem}>
      <div>
        {/* Информация о пользователе */}
        <img src={item.profile_image} alt="avatar" />
        <span>{item.user_name}</span>
        <span className={styles.created}>
          &#8226;{parseData(item.created_at)}&#8226;
        </span>
        <FollowButton
          isFollow={isFollow}
          userId={item.user_id} // ID пользователя
          targetUserId={item.user_id}
        />
      </div>
      <img src={item.image_url} alt="Post Image" />
      <p>{item.caption}</p>
    </li>
  );
};

// Компонент FollowButton для кнопки следования
interface FollowButtonProps {
  isFollow: boolean;
  userId: string;
  targetUserId: string;
}

function FollowButton({ isFollow, userId, targetUserId }: FollowButtonProps) {
  const handleFollow = () => {
    if (!isFollow) {
      $api.post(`/follow/${userId}/follow/${targetUserId}`);
    } else {
      $api.delete(`/follow/${userId}/unfollow/${targetUserId}`);
    }
  };

  return (
    <button onClick={handleFollow}>{isFollow ? "Unfollow" : "Follow"}</button>
  );
}

export default PostsList;

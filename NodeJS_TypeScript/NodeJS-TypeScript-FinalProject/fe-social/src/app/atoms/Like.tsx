import React, { useState, useEffect } from "react";
import { LikeIcon, LikedIcon } from "../atoms/LikeIcon";
import { $api } from "../api/api";

interface LikeProps {
  postId: string;
  userId: string;
  onLikesCountChange: (newCount: number) => void;
}

const Like: React.FC<LikeProps> = ({ postId, userId, onLikesCountChange }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // Получаем количество лайков и информацию о том, лайкнул ли пользователь
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await $api.get(`/api/likes/${postId}/likes`);
        setLikesCount(response.data.likesCount);
        setLiked(response.data.likedByUser);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Ошибка получения лайков:", error.message);
        } else {
          console.error("Неизвестная ошибка при изменении состояния лайка:", error);
        }
      }
    };

    fetchLikes();
  }, [postId]);

  // Обработчик клика по лайку
  const handleLikeToggle = async () => {
    try {
      let response;
      if (liked) {
        // Если пост уже лайкнут, снимаем лайк
        response = await $api.delete(`/api/likes/${postId}/unlike/${userId}`);
        setLiked(false);
        setLikesCount((prev) => prev - 1);
      } else {
        // Если пост не лайкнут, ставим лайк
        response = await $api.post(`/api/likes/${postId}/like/${userId}`);
        setLiked(true);
        setLikesCount((prev) => prev + 1);
      }

      // Обновляем количество лайков в родительском компоненте
      onLikesCountChange(likesCount + (liked ? -1 : 1));  // Обновляем с учётом изменения
    } catch (error) {
      if (error instanceof Error) {
        console.error("Ошибка изменения состояния лайка:", error.message);
      } else {
        console.error("Неизвестная ошибка при изменении состояния лайка:", error);
      }
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {liked ? (
        <LikedIcon liked={liked} onClick={handleLikeToggle} />
      ) : (
        <LikeIcon liked={liked} onClick={handleLikeToggle} />
      )}
      {/* <span>{likesCount} likes</span> */}
    </div>
  );
};

export default Like;

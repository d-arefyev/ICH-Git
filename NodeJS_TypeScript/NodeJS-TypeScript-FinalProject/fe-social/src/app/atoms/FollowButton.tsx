import React, { useState } from "react";
import axios from "axios";

interface FollowButtonProps {
  userId: string;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = async () => {
    try {
      if (isFollowing) {
        // Отписка
        await axios.delete(`/api/follow/unfollow/${userId}`);
      } else {
        // Подписка
        await axios.post(`/api/follow/${userId}`);
      }
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error("Ошибка при подписке/отписке:", error);
    }
  };

  return (
    <button onClick={handleFollowToggle} className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md">
      {isFollowing ? "Отписаться" : "Подписаться"}
    </button>
  );
};

export default FollowButton;

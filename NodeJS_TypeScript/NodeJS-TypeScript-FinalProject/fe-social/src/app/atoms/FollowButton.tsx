"use client";

import { $api } from "../api/api";

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
    <button
      onClick={handleFollow}
      className={`${
        isFollow ? "text-color-accent" : "text-color-accent"
      } font-semibold text-[12px] hover:text-color-dark ml-[6px]`}
    >
      {isFollow ? "Unfollow" : "Follow"}
    </button>
  );
}

export default FollowButton;

"use client";

import { useState } from "react";
import { $api } from "../api/api";

// Типы данных для кнопки Follow
type FollowButtonProps = {
  isFollow: boolean;
  userId: string;
  targetUserId: string;
};

function FollowButton({ isFollow, userId, targetUserId }: FollowButtonProps) {
  const [follow, setFollow] = useState(isFollow);

  const handleFollow = () => {
    if (!userId || !targetUserId) {
      console.error("User IDs are missing.");
      return;
    }

    // Если следуем, выполняем POST-запрос
    if (!follow) {
      $api
        .post(`/follow/${userId}/follow/${targetUserId}`)
        .then(() => setFollow(true))
        .catch((error) => console.error("Error following user:", error));
    } else {
      // Если отписываемся, выполняем DELETE-запрос
      $api
        .delete(`/follow/${userId}/unfollow/${targetUserId}`)
        .then(() => setFollow(false))
        .catch((error) => console.error("Error unfollowing user:", error));
    }
  };

  return (
    <button
      onClick={handleFollow}
      className={`${
        follow ? "text-color-accent" : "text-color-accent"
      } font-semibold text-[12px] hover:text-color-dark ml-[6px]`}
    >
      {follow ? "Unfollow" : "Follow"}
    </button>
  );
}

export default FollowButton;





// import React, { useState } from "react";
// import { $api } from "../api/api";
// import Button from "./Button"; // Путь к Button компоненту

// type FollowButtonProps = {
//   isFollow: boolean;
//   userId: string;
//   targetUserId: string;
// };

// function FollowButton({ isFollow, userId, targetUserId }: FollowButtonProps) {
//   const [follow, setFollow] = useState(isFollow);

//   const handleFollow = async () => {
//     if (!userId || !targetUserId) {
//       console.error("User IDs are missing.");
//       return;
//     }

//     console.log(`Button clicked: ${follow ? "Unfollow" : "Follow"}`);

//     // Если пользователь еще не подписан, подписываем
//     if (!follow) {
//       try {
//         console.log("Sending follow request...");
//         await $api.post(`/follow/${userId}/follow/${targetUserId}`);
//         setFollow(true); // Устанавливаем статус подписки
//         console.log("Followed successfully!");
//       } catch (error) {
//         console.error("Error following user:", error);
//       }
//     } else {
//       // Если уже подписан, отписываем
//       try {
//         console.log("Sending unfollow request...");
//         await $api.delete(`/follow/${userId}/unfollow/${targetUserId}`);
//         setFollow(false); // Убираем статус подписки
//         console.log("Unfollowed successfully!");
//       } catch (error) {
//         console.error("Error unfollowing user:", error);
//       }
//     }
//   };

//   return (
//     <Button
//       onClick={handleFollow}
//       className="font-semibold text-[12px] hover:text-color-dark ml-[6px]"
//     >
//       {follow ? "Unfollow" : "Follow"}
//     </Button>
//   );
// }

// export default FollowButton;

// src/app/user/User.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { $api } from "../api/api"; // Подключение API
import Input from "../atoms/Input"; // Подключаем компонент Input
import Button from "../atoms/Button"; // Подключаем компонент Button

const User = () => {
  const [userData, setUserData] = useState<any>(null);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState<any>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Функция для получения профиля пользователя
  const fetchUserProfile = async () => {
    try {
      const response = await $api.get(`/api/user/${localStorage.getItem('userId')}`);
      setUserData(response.data);
      setUsername(response.data.username);
      setBio(response.data.bio);
      setProfileImage(response.data.profile_image);
    } catch (err: any) {
      setError("Не удалось загрузить профиль");
    }
  };

  // Функция для обновления данных пользователя
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("username", username);
    formData.append("bio", bio);
    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    try {
      const response = await $api.put("/api/user/current", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUserData(response.data);
      setIsLoading(false);
    } catch (err: any) {
      setError("Ошибка обновления профиля");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile(); // Загружаем данные при монтировании компонента
  }, []);

  return (
    <div className="flex justify-center items-center mt-[80px]">
      <div className="w-[350px] flex flex-col items-center gap-[20px]">
        <div className="text-center">
          <h2 className="text-lg font-semibold">User Profile</h2>
        </div>

        {/* Profile Image */}
        <div className="w-[100px] h-[100px] bg-gray-200 rounded-full">
          <img
            src={profileImage ? `data:image/jpeg;base64,${profileImage}` : "/default-profile.png"}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Form to update profile */}
        <form onSubmit={handleUpdateProfile} className="flex flex-col w-full gap-[12px]">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setProfileImage(e.target.files?.[0])}
            className="border-[1px] border-gray-300 p-[8px] rounded"
          />

          {error && <p className="text-red-500 text-center">{error}</p>}
          <Button type="submit" variant="primary" className="mt-[12px]" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Profile"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default User;

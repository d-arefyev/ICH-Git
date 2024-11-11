// src/app/edit-profile/EditProfile.tsx
"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { $api } from "../api/api";
import ProfileImageUploader from "../molecules/ProfileImageUploder"; // Убедитесь, что импорт верный

const EditProfile = () => {
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [profileImageUrl, setProfileImageUrl] = useState<string>("/default-profile.png");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  // Получаем данные профиля пользователя
  const fetchUserProfile = async () => {
    try {
      const userId = localStorage.getItem("userId");
      console.log("userId:", userId); // Логируем значение userId
      if (!userId) {
        setError("User ID not found");
        return;
      }
      const response = await $api.get(`/api/user/${userId}`);
      const userData = response.data;

      setUsername(userData.username);
      setBio(userData.bio);
      setWebsite(userData.website);
      setProfileImageUrl(userData.profile_image || "/default-profile.png");
    } catch (error) {
      setError("Не удалось загрузить профиль");
      console.error("Ошибка получения профиля:", error);
    }
  };

  // Обновление профиля пользователя
  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Отправка данных профиля, включая URL изображения
      await $api.put("/api/user/current", {
        username,
        bio,
        website,
        profile_image: profileImageUrl, // используем URL загруженного изображения
      });
      router.refresh(); // обновляем страницу после успешного обновления
      setError(""); // сброс ошибки при успешном обновлении
    } catch (error) {
      console.error("Ошибка обновления профиля:", error);
      setError("Ошибка обновления профиля");
    } finally {
      setIsLoading(false);
    }
  };

  // Используется ProfileImageUploader для загрузки изображения и обновления URL
  const handleImageUploadSuccess = (url: string) => {
    setProfileImageUrl(url); // Устанавливаем URL нового изображения в состояние
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">Edit profile</h3>

      <div className="flex items-center gap-4 mb-6 bg-gray-100 p-4 rounded-lg">
        <img
          src={profileImageUrl}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <div>
          <p className="text-lg font-semibold">{username}</p>
        </div>
      </div>

      {/* Включаем компонент ProfileImageUploader */}
      <ProfileImageUploader onUploadSuccess={handleImageUploadSuccess} />

      <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4 mt-4">
        <div>
          <label className="block font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Website</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Website"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">About</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={150}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="About"
          />
          <p className="text-right text-gray-500 text-sm">{bio.length} / 150</p>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition mt-4"
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
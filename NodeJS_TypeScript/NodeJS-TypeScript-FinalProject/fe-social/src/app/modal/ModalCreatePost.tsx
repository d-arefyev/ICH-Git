"use client"

import React, { useState } from "react";
import { $api } from "../api/api";

interface ModalCreatePostProps {
  onClose: () => void;
}

const ModalCreatePost: React.FC<ModalCreatePostProps> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Функция для отправки картинки на сервер
  const handleImageUpload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const response = await $api.post("/post", formData);
      setFilePath(response.data.image_url); // Получаем URL изображения
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostSubmit = async () => {
    if (!content) {
      alert("Введите текст поста!");
      return;
    }

    const postData = {
      caption: content, // Текст поста
      image_url: filePath, // URL загруженного изображения
    };

    try {
      setLoading(true);
      await $api.post("/post", postData); // Отправляем новый пост
      onClose(); // Закрываем модальное окно
    } catch (error) {
      console.error("Ошибка при создании поста:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[500px] p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Останавливаем клик по модалке
      >
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>

        {/* Поле для текста */}
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-40 p-2 border border-gray-300 rounded mb-4"
        />

        {/* Загрузка изображения */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          className="border border-gray-300 p-2 rounded mb-4"
        />

        {/* Кнопка для загрузки изображения на сервер */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleImageUpload}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </div>

        {/* Отображаем изображение, если оно загружено */}
        {filePath && (
          <div className="mt-4">
            <p className="text-sm text-green-500">Image uploaded successfully!</p>
            <img src={filePath} alt="Uploaded" className="w-full h-auto mt-2" />
          </div>
        )}

        {/* Кнопка для отправки поста */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handlePostSubmit}
            disabled={loading || !content}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCreatePost;


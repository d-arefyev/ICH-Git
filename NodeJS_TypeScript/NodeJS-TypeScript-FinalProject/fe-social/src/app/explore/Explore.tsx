// src/app/explore/Explore.tsx
"use client"; // Убедитесь, что это клиентский код

import { useState, useEffect } from "react";
import { $api } from "../api/api"; // Убедитесь, что $api настроен правильно

// Тип для поста
interface Post {
  _id: string;
  title: string;
  content: string;
  image_url?: string; // Возможно, у постов может быть изображение
  createdAt: string;
}

const Explore: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Состояние для хранения постов
  const [loading, setLoading] = useState<boolean>(true); // Состояние для загрузки
  const [error, setError] = useState<string | null>(null); // Состояние для ошибки

  // Функция для загрузки постов с сервера
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await $api.get("/api/post"); // Запрос на сервер для получения постов
        setPosts(response.data); // Устанавливаем полученные посты в состояние
      } catch (err: any) {
        console.error("Ошибка при загрузке постов:", err); // Логируем ошибку
        setError("Ошибка при загрузке постов"); // Обрабатываем ошибку
      } finally {
        setLoading(false); // Отключаем индикатор загрузки
      }
    };

    fetchPosts(); // Загружаем посты при монтировании компонента
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-6">Explore Posts</h1>
      {loading ? (
        <p>Загрузка...</p> // Показываем индикатор загрузки
      ) : error ? (
        <p className="text-red-500">{error}</p> // Показываем ошибку
      ) : posts.length === 0 ? (
        <p>Нет постов для отображения.</p> // Если нет постов
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
              
              {/* Если есть изображение, показываем его */}
              {post.image_url && (
                <div className="mt-4">
                  <img src={post.image_url} alt="Post Image" className="w-full h-auto" />
                </div>
              )}

              <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;

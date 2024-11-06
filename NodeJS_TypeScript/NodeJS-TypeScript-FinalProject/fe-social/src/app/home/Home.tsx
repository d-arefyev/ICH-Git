// src/app/home/Home.tsx

"use client";

import { useEffect, useState } from "react";
import { $api } from "../api/api";

interface Post {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await $api.get("/posts"); 
      setPosts(response.data);
    } catch (err: any) {
      setError("Ошибка при загрузке постов");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <h1 className="text-center my-4">Все Посты</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : posts.length === 0 ? (
        <p>Нет постов для отображения.</p>
      ) : (
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post._id} className="post-card p-4 border rounded mb-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
              <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}
      {/* <div className="h-[800px] bg-red-200"></div> */}
    </div>
  );
}

// src/app/molecules/ImageForm.tsx
"use client";

import { useState } from "react";
import { $api } from "../api/api";

const ImageForm = () => {
  const [file, setFile] = useState<File>();
  const [filePath, setfilePath] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await $api.post("/post", formData);
      setfilePath(response.data.url);
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        onChange={(e) => setFile(e.target.files![0])}
        type="file"
        accept="image/*"
      />
      <button type="submit">Отправить картинку</button>
      <span>url до картинки: {filePath}</span>
    </form>
  );
};

export default ImageForm;

"use client";

import { useState } from "react";
import { $api } from "../api/api";

type ProfileImageUploaderProps = {
  onSuccess: (url: string) => void; // Новый проп
};

const ProfileImageUploader = ({ onSuccess }: ProfileImageUploaderProps) => {
  const [file, setFile] = useState<File>();
  const [filePath, setFilePath] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await $api.post("/post", formData);
      const imageUrl = response.data.url;
      setFilePath(imageUrl);
      onSuccess(imageUrl); // Вызов onSuccess для обновления URL
    } catch (error) {
      console.error("Ошибка загрузки изображения:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFile(e.target.files ? e.target.files[0] : undefined)
        }
        type="file"
        accept="image/*"
      />
      <button type="submit">Отправить картинку</button>
      <span>URL до картинки: {filePath}</span>
    </form>
  );
};

export default ProfileImageUploader;



// "use client"

// import { useState } from "react";
// import { $api } from "../api/api";

// const ProfileImageUploder = () => {
//   const [file, setFile] = useState<File>();
//   const [filePath, setfilePath] = useState("");

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     if (!file) {
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);

//     const response = $api
//       .post("/post", formData) // тут была ошибка
//       .then((res) => setfilePath(res.data.url));
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         required
//         //@ts-ignore
//         onChange={(e) => setFile(e.target.files[0])}
//         type="file"
//         accept="image/*"
//       />
//       <button>Отпправить картинку</button>
//       <span>url до картинки {filePath}</span>
//     </form>
//   );
// };

// export default ProfileImageUploder
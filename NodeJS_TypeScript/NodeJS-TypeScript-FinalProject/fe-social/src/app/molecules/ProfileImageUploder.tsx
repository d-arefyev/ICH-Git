"use client";

import { useState } from "react";
import { $api } from "../api/api";

export const ProfileImageUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    $api.post("/post", formData)
      .then((res) => setFilePath(res.data.url))
      .catch((error) => console.error("Error uploading image:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFile(e.target.files ? e.target.files[0] : null)
        }
        type="file"
        accept="image/*"
      />
      <button type="submit">Отправить картинку</button>
      <span>URL до картинки: {filePath}</span>
    </form>
  );
};


// "use client"

// import { useState } from "react";
// import { $api } from "../api/api";

// export const ProfileImageUploder = () => {
//   const [file, setFile] = useState<File>();
//   const [filePath, setfilePath] = useState("");

//   const handleSubmit = (e) => {
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
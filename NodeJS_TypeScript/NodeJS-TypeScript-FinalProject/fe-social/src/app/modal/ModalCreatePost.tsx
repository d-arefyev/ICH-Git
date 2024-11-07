"use client";

import React, { useState } from "react";
import { $api } from "../api/api";
import ActionButton from "../atoms/ActionButton";
import ModalConfirm from "../modal/ModalConfirm";
import Notification from "../modal/Notification";
import UploadIcon from "../atoms/UploadIcon";

interface ModalCreatePostProps {
  onClose: () => void;
}

const ModalCreatePost: React.FC<ModalCreatePostProps> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handlePostSubmit = async () => {
    if (!content || !file) {
      setNotification({
        message: "Пожалуйста, добавьте текст и изображение.",
        type: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("caption", content);

    try {
      setLoading(true);
      await $api.post("/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Указываем тип контента
        },
      });
      setNotification({
        message: "Пост успешно опубликован!",
        type: "success",
      });
      onClose(); // Закрываем модальное окно
    } catch (error) {
      setNotification({
        message: "Ошибка при создании поста.",
        type: "error",
      });
      console.error("Ошибка при создании поста:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[914px] h-[564px] p-6 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        {/* Шапка */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-center flex-1">Create New Post</h2>
          <ActionButton
            label={loading ? "Posting..." : "Share"}
            onClick={handlePostSubmit}
            color="blue"
          />
        </div>

        {/* Контейнер для изображения и аватара */}
        <div className="flex justify-between mb-4">
          {/* Левая часть (изображение) */}
          <div className="flex flex-col items-center justify-center gap-4 w-1/2">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center mb-2">
                <span>Перетащите или загрузите изображение</span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border border-gray-300 p-2 rounded mb-2"
              />
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="mt-4 w-[200px] h-[200px] object-cover rounded-md"
                />
              )}
            </div>
            <UploadIcon />
          </div>

          {/* Правая часть (аватар и кнопка отмены) */}
          <div className="flex flex-col items-center gap-4 w-1/2">
            <div className="flex items-center justify-center gap-2">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <button
                onClick={() => setShowConfirmModal(true)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>
            {/* Текстовое поле для контента */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Что на вашем уме?"
              className="w-full h-32 p-2 border border-gray-300 rounded mb-4"
            />
            <div className="text-right text-sm text-gray-500">{content.length}/2200</div>
          </div>
        </div>

        {/* Эмоджи */}
        <div className="flex gap-2 mt-4">
          <span role="img" aria-label="smile">😊</span>
          <span role="img" aria-label="heart">❤️</span>
          <span role="img" aria-label="thumbs-up">👍</span>
          {/* Добавьте другие эмоджи по необходимости */}
        </div>
      </div>

      {/* Модалка для подтверждения отмены */}
      {showConfirmModal && (
        <ModalConfirm
          message="Отменить публикацию? Если вы выйдете, изменения не будут сохранены."
          onCancel={() => setShowConfirmModal(false)}
          onConfirm={onClose}
        />
      )}

      {/* Нотификации */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default ModalCreatePost;


// рабочий
// "use client";

// import React, { useState } from "react";
// import { $api } from "../api/api";
// import ActionButton from "../atoms/ActionButton";
// import ModalConfirm from "../modal/ModalConfirm";
// import Notification from "../modal/Notification";

// interface ModalCreatePostProps {
//   onClose: () => void;
// }

// const ModalCreatePost: React.FC<ModalCreatePostProps> = ({ onClose }) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [content, setContent] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [notification, setNotification] = useState<{
//     message: string;
//     type: "success" | "error";
//   } | null>(null);

//   const handlePostSubmit = async () => {
//     if (!content || !file) {
//       setNotification({
//         message: "Пожалуйста, добавьте текст и изображение.",
//         type: "error",
//       });
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);
//     formData.append("caption", content);

//     try {
//       setLoading(true);
//       await $api.post("/post", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", // Указываем тип контента
//         },
//       });
//       setNotification({
//         message: "Пост успешно опубликован!",
//         type: "success",
//       });
//       onClose(); // Закрываем модальное окно
//     } catch (error) {
//       setNotification({
//         message: "Ошибка при создании поста.",
//         type: "error",
//       });
//       console.error("Ошибка при создании поста:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white w-[914px] h-[564px] p-6 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
//         <h2 className="text-xl font-bold text-center mb-4">Create New Post</h2>

//         <div className="flex justify-between items-center mb-4">
//           <div className="flex flex-col items-center justify-center gap-2">
//             <span>Drag or upload a picture</span>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="border border-gray-300 p-2 rounded"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" className="w-12 h-12 rounded-full" />
//             <button onClick={() => setShowConfirmModal(true)} className="text-gray-500 hover:text-gray-700">
//               ✖
//             </button>
//           </div>
//         </div>

//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="What's on your mind?"
//           className="w-full h-32 p-2 border border-gray-300 rounded mb-4"
//         />
//         <div className="text-right text-sm text-gray-500">{content.length}/2200</div>

//         <div className="flex justify-end gap-4 mt-4">
//           <ActionButton label={loading ? "Posting..." : "Share"} onClick={handlePostSubmit} color="blue" />
//         </div>
//       </div>

//       {showConfirmModal && (
//         <ModalConfirm
//           message="Отменить публикацию? Если вы выйдете, изменения не будут сохранены."
//           onCancel={() => setShowConfirmModal(false)}
//           onConfirm={onClose}
//         />
//       )}

//       {notification && (
//         <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />
//       )}
//     </div>
//   );
// };

// export default ModalCreatePost;


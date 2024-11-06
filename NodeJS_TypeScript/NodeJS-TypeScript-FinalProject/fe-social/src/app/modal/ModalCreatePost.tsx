// src/app/components/ModalCreatePost.tsx
import React from "react";

interface ModalCreatePostProps {
  onClose: () => void;
}

const ModalCreatePost: React.FC<ModalCreatePostProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      {/* Контейнер модального окна */}
      <div
        className="bg-white w-[500px] p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}  // Остановка всплытия события клика, чтобы не закрыть модалку при клике внутри
      >
        {/* Заголовок модального окна */}
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>

        {/* Поля для создания поста */}
        <textarea
          placeholder="What's on your mind?"
          className="w-full h-40 p-2 border border-gray-300 rounded mb-4"
        />

        {/* Кнопки отправки и закрытия */}
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => {
              // Логика отправки поста
              onClose();  // Закрыть модальное окно после создания поста
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCreatePost;

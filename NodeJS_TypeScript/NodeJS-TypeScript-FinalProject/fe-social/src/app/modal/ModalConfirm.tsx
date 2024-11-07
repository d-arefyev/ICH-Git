// ModalConfirm.tsx
import React from "react";

interface ModalConfirmProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-[400px] text-center">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;

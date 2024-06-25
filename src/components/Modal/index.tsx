// src/components/Modal/Modal.tsx
import React from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  height?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  height = "75%",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-end md:items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        className="bg-white rounded-lg shadow-lg w-full md:max-w-lg mx-4 md:mx-auto my-8 md:my-16 transform transition-transform duration-300 ease-in-out md:translate-y-0 translate-y-full md:rounded-lg rounded-t-lg"
        style={{ height }}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

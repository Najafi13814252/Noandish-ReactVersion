'use client';

import { createPortal } from "react-dom";

export default function Modal({
  children,
  isOpen,
  onClose
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) {
  
  if (typeof window === 'undefined') return null;
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
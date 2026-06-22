'use client';

import { Icon } from '@iconify/react';
import closeIcon from '@iconify-icons/solar/close-circle-line-duotone'
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {

  useEffect(() => {
    // جلوگیری از اسکرول شدن صفحه پشت مودال
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // پیدا کردن المنت مقصد که در layout ساختیم
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/30 backdrop-blur-xs px-2">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-black dark:hover:text-white"
        >
          <Icon className='text-3xl' icon={closeIcon}/>
        </button>
        <div className="mt-2">
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
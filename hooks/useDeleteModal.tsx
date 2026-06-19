'use client'

import { useState } from "react"
import useModal from "./useModal"

function useDeleteModal() {
  const [courseTitle, setCourseTitle] = useState('')
  const [itemId, setItemId] = useState(0)
  const { openModal, isOpen, closeModal } = useModal()

  // باز و بسته کردن Modal 
  const showDeleteModal = (title: string, id: number) => {
    // تنظیم عنوان و id 
    setCourseTitle(title)
    setItemId(id)

    openModal()
  }

  return {
    showDeleteModal,
    courseTitle,
    itemId,
    isOpen,
    closeModal
  }
}

export default useDeleteModal


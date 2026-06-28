'use client'

import { Drawer } from "vaul";

import { Suspense, useState } from "react";
import SortSection from "./SortSection";

function MobileSortSection() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
            < Drawer.Trigger className="border border-gray-200 rounded-md w-full py-1 cursor-pointer dark:border-gray-800 dark:text-white" >
                مرتب‌سازی
            </Drawer.Trigger >
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 h-88 rounded-t-[10px] dark:bg-darkMode">
                    <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
                        <Drawer.Handle />
                        <div className="mt-4">
                            <Suspense fallback={null}>
                                <SortSection onSelect={() => setIsOpen(false)} />
                            </Suspense>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}

export default MobileSortSection




"use client";

import { useState, useEffect } from 'react';

type SectionId = 'description' | 'headings' | 'aboutTeacher';

const NAV_ITEMS: { id: SectionId; label: string }[] = [
    { id: 'description', label: 'توضیحات' },
    { id: 'headings', label: 'سرفصل‌ها' },
    { id: 'aboutTeacher', label: 'درباره مدرس' },
];

const ScrollNav = () => {
    const [active, setActive] = useState<SectionId>('description');

    useEffect(() => {
        const elements = NAV_ITEMS
            .map((item) => document.getElementById(item.id)) // => HTMLElement | null type
            .filter((el): el is HTMLElement => el !== null); // elهای که null نباشند را نشان بده 

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id as SectionId);
                    }
                });
            },
            { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: SectionId) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="bg-gray-100 p-4 rounded-md sticky top-21 z-30 dark:bg-gray-800">
            <ul className="flex items-center gap-2 overflow-x-auto scrollbar-hide dark:text-white">
                {NAV_ITEMS.map((item) => (
                    <li key={item.id} className="shrink-0">
                        <button
                            onClick={() => scrollTo(item.id)}
                            className={`cursor-pointer transition-all duration-300 px-4 py-1 rounded-md ${active === item.id
                                ? 'bg-sky-300/20 text-sky-500 font-medium dark:bg-sky-500/10 dark:text-sky-500'
                                : ''
                                }`}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScrollNav;
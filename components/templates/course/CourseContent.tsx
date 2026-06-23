"use client";

import React, { useState, useRef, useEffect } from 'react';
import Description from './Description';
import Headings from './Headings';
import Comments from './Comments';
import AboutTeacher from './AboutTeacher';
import { courseType } from '@/types/course';

// type SectionId = 'description' | 'headings' | 'comments' | 'aboutTeacher';
type SectionId = 'description' | 'headings' | 'aboutTeacher';

const CourseContent = ({course}: {course: courseType}) => {
    const [active, setActive] = useState<SectionId>('description');

    const descriptionRef = useRef<HTMLElement>(null);
    const headingsRef = useRef<HTMLElement>(null);
    const commentsRef = useRef<HTMLElement>(null);
    const aboutTeacherRef = useRef<HTMLElement>(null);

    const sectionRefs: Record<SectionId, React.RefObject<HTMLElement | null>> = {
        description: descriptionRef,
        headings: headingsRef,
        // comments: commentsRef,
        aboutTeacher: aboutTeacherRef,
    };

    const scrollTo = (section: SectionId) => {
        const element = sectionRefs[section].current;
        if (element) {
            // اسکرول کردن به بخش مورد نظر
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    useEffect(() => {
        // تنظیمات Observer: وقتی بخش ۵۰٪ در دید باشد، فعال شود
        const observerOptions = {
            root: null, // استفاده از viewport
            rootMargin: '-20% 0px -70% 0px', // تنظیم محدوده برای تشخیص دقیق‌تر (بخش میانی صفحه)
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                // اگر بخش وارد محدوده دید شد
                if (entry.isIntersecting) {
                    const id = entry.target.id as SectionId;
                    if (id) setActive(id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // شروع مشاهده‌ی تمام سکشن‌ها
        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });


        return () => observer.disconnect(); // پاکسازی در هنگام Unmount
    }, []);

    const navItems: { id: SectionId; label: string }[] = [
        { id: 'description', label: 'توضیحات' },
        { id: 'headings', label: 'سرفصل‌ها' },
        // { id: 'comments', label: 'نظرات' },
        { id: 'aboutTeacher', label: 'درباره مدرس' },
    ];

    return (
        <>
            <div className="bg-gray-100 p-4 rounded-md sticky top-21 z-30 dark:bg-gray-800">
                <ul className="flex items-center gap-2 overflow-x-auto scrollbar-hide dark:text-white">
                    {navItems.map((item) => (
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

            <div className="flex flex-col gap-6 scroll-smooth">
                <section id="description" ref={descriptionRef} className="scroll-mt-40">
                    <Description prerequisites={course.prerequisites}/>
                </section>

                <section id="headings" ref={headingsRef} className="scroll-mt-40">
                    <Headings courseId={course.id}/>
                </section>

                {/* <section id="comments" ref={commentsRef} className="scroll-mt-40">
                    <Comments />
                </section> */}

                <section id="aboutTeacher" ref={aboutTeacherRef} className="scroll-mt-40">
                    <AboutTeacher courseId={course.id}/>
                </section>
            </div>
        </>
    );
};

export default CourseContent;

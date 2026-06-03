"use client"

import 'swiper/css';
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { courseType } from '@/types/course';
import { Icon } from '@iconify/react';

import directionIcon from "@iconify-icons/solar/alt-arrow-right-outline"



function CardSlider({ courses }: { courses: courseType[] }) {
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    return (
        <div className="relative mx-3 md:mx-4">
            {/* دکمه‌ها */}
            <section className='flex gap-2 absolute left-36 -top-8.5'>
                <button className={`button-prev-slide navigation-swiper-slider ${isBeginning ? 'border border-gray-300 bg-gray-500/5 dark:border-gray-700' : 'border border-main-100 bg-main-100/5 dark:border-main-200 dark:bg-main-200/5'}`}>
                    <Icon className={`text-2xl ${isBeginning ? 'text-gray-300 dark:text-gray-700' : 'text-main-100 dark:text-main-200'}`} icon={directionIcon} />
                </button>
                <button className={`button-next-slide navigation-swiper-slider ${isEnd ? 'border border-gray-300 bg-gray-500/5 dark:border-gray-700' : 'border border-main-100 bg-main-100/5 dark:border-main-200 dark:bg-main-200/5'}`}>
                    <Icon className={`text-2xl rotate-180 ${isEnd ? 'text-gray-300 dark:text-gray-700' : 'text-main-100 dark:text-main-200'}`} icon={directionIcon} />
                </button>
            </section>

            <Swiper className="overflow-hidden h-full" slidesPerView={4.5} spaceBetween={24} slidesPerGroup={1} modules={[Navigation]}
                navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide"
                }}
                onSwiper={(swiper) => {
                    setIsBeginning(swiper.isBeginning)
                    setIsEnd(swiper.isEnd)
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning)
                    setIsEnd(swiper.isEnd)
                }} breakpoints={{
                    360: { slidesPerView: 1.2 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4.5 },
                }}>
                {
                    courses.map(course => (
                        <SwiperSlide key={course.id}>
                            <Card {...course} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    )
}

export default CardSlider

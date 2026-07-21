"use server"

import { apiFetch } from "@/services/api"
import { courseType } from "@/types/course"
import { revalidatePath } from "next/cache"

export async function courseAction() {
    const { data: courses } = await apiFetch('/courses', {
        method: "GET"
    })

    const popularCourses = courses.filter((course: courseType) => course.discount === 0)
    const discountCourses = courses.filter((course: courseType) => course.discount !== 0 && course.discount !== 100)
    const freeCourses = courses.filter((course: courseType) => course.discount === 100)

    return { popularCourses, discountCourses, freeCourses }
}

export async function courseByIdAction(courseId: number) {
    const { data } = await apiFetch(`/courses/${courseId}`, {
        method: "GET",
        cache: "no-store"
    })

    return data
}

export async function teacherCourseAction(courseId: number) {
    const { data } = await apiFetch(`/courses/${courseId}/teacher`, {
        method: "GET"
    })

    return data
}

export async function contentCourseAction(courseId: number) {
    const { data } = await apiFetch(`/courses/${courseId}/content`, {
        method: "GET"
    })

    return data
}

export async function getFavoriteCourseAction() {
    const { data } = await apiFetch("/favorites", {
        method: "GET"
    })

    return data
}

export async function toggleFavoriteCourseAction(courseId: number) {
    const { data } = await apiFetch("/favorites/toggle", {
        method: "POST",
        body: JSON.stringify({ course_id: courseId })
    })

    revalidatePath("/panel/favorites")

    return data.isFavorite
}
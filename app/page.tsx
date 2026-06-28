import BestCategories from "@/components/templates/home/BestCategories";
import DiscountCourses from "@/components/templates/home/DiscountCourses";
import FreeCourses from "@/components/templates/home/FreeCourses";
import Hero from "@/components/templates/home/Hero";
import Introduction from "@/components/templates/home/Introduction";
import PopularCourses from "@/components/templates/home/PopularCourses";
import { apiFetch } from "@/services/api";


export default async function Home() {
  const courses = await apiFetch('/courses')
  return (
    <>
      <Hero />

      <section className="flex flex-col gap-20 my-32">
        <PopularCourses courses={courses}/>
        <BestCategories />
        <DiscountCourses courses={courses}/>
        <FreeCourses courses={courses}/>
        <Introduction />
      </section>
    </>
  );
}

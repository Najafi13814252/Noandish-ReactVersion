import BestCategories from "@/components/templates/BestCategories";
import DiscountCourses from "@/components/templates/DiscountCourses";
import FreeCourses from "@/components/templates/FreeCourses";
import Hero from "@/components/templates/home/Hero";
import PopularCourses from "@/components/templates/PopularCourses";


export default function Home() {
  return (
    <>
      <Hero />

      <section className="flex flex-col gap-20 my-32">
        <PopularCourses />
        <BestCategories />
        <DiscountCourses />
        <FreeCourses />
      </section>
    </>
  );
}

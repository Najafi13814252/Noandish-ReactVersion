import BestCategories from "@/components/templates/home/BestCategories";
import DiscountCourses from "@/components/templates/home/DiscountCourses";
import FreeCourses from "@/components/templates/home/FreeCourses";
import Hero from "@/components/templates/home/Hero";
import Introduction from "@/components/templates/home/Introduction";
import PopularCourses from "@/components/templates/home/PopularCourses";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="flex flex-col gap-20 my-32">
        <PopularCourses />
        <BestCategories />
        <DiscountCourses />
        <FreeCourses />
        <Introduction />
      </section>
    </>
  );
}

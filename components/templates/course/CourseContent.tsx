import Description from './Description';
import Headings from './Headings';
import AboutTeacher from './AboutTeacher';
import { courseType } from '@/types/course';
import ScrollNav from './ScrollNav';

const CourseContent = ({ course }: { course: courseType }) => {
    return (
        <>
            <ScrollNav />

            <div className="flex flex-col gap-6 scroll-smooth">
                <section id="description" className="scroll-mt-40">
                    <Description prerequisites={course.prerequisites} />
                </section>

                <section id="headings" className="scroll-mt-40">
                    <Headings courseId={course.id} />
                </section>

                <section id="aboutTeacher" className="scroll-mt-40">
                    <AboutTeacher courseId={course.id} />
                </section>
            </div>
        </>
    );
};

export default CourseContent;
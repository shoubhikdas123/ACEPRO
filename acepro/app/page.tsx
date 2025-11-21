import Image from "next/image";
import Hero from "./components/Hero";
import SliderSection from "./components/Slider";
import AddonServices from "./components/AddonServices";
import ExpertMentorCTA from "./components/Cto";
import StickyCourseNav from "./components/Tabs";
import OverviewSection from "@/components/ui/OverViewSection";
import TakeawaysSection from "./components/TakeAway";
import BenefitsSection from "./components/BenifitsSections";
import { AceproEdgeSection } from "./components/Acepro";
import CourseAudienceSection from "./components/CourseAudienceSection";
import InstructorsSection from "./components/InstructorSection";
import CertificateSection from "./components/CertificateSection";
import TestimonialsSection from "./components/Testimonials";
import FaqSection from "./components/Faq";
import TeamLevelUpCTA from "./components/TeamLevelUpCta";
import RelatedCoursesSection from "./components/RelatedCourses";
import MainFooter from "./components/Footer";
import CourseSidebar from "./components/SideBar";
import ScheduleCard from "./components/ScheduleCard";
import CurriculumSection from "./components/Curriculum";
import ClientLogosSection from "./components/ClientLogoSection";
export default function Home() {
  return (
    <><Hero />

      <SliderSection />
      <AddonServices />
      <ExpertMentorCTA />
      <div className="">
        <StickyCourseNav />
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 md:mr-2 md:ml-6">
            <OverviewSection />
            <TakeawaysSection />
            {/* Mobile sidebar */}
            <div className="flex justify-center md:hidden mb-6">
              <CourseSidebar />
            </div>
            <BenefitsSection />
            <AceproEdgeSection />
            <ScheduleCard />
            <CurriculumSection />
            <CourseAudienceSection />
            <InstructorsSection />
          </div>
          {/* Desktop sidebar */}
          <div className="hidden md:block w-full md:w-1/3 md:mr-4 mt-8 md:mt-0">
            <CourseSidebar />
          </div>
        </div>
      </div>
      <CertificateSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <FaqSection />
      <TeamLevelUpCTA />

      <RelatedCoursesSection />
      <MainFooter />
    </>
  );
}

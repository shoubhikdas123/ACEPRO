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
export default function Home() {
  return (
    <><Hero />

      <SliderSection />
      <AddonServices />
      <ExpertMentorCTA />
      <div className="ml-4">
        <StickyCourseNav />
        <div className="w-full  flex">
          <div className="w-3/4 mr-8 ml-6">
            <OverviewSection />
            <TakeawaysSection />
            <BenefitsSection />
            <AceproEdgeSection />
            <CourseAudienceSection />
            <InstructorsSection />
          </div>
          <div className="1/4 mr-6"> <CourseSidebar /></div>
        </div>
      </div>
      <CertificateSection />

      <TestimonialsSection />
      <FaqSection />
      <TeamLevelUpCTA />

      <RelatedCoursesSection />
      <MainFooter />
    </>
  );
}

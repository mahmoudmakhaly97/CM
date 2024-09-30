import { Footer } from "@/components/Footer";
import { HeroNav } from "@/components/hero-nav";
import { AboutProgrameSection } from "@/components/sections/AboutProgrameSection";
import { BecomeContentMasterSection } from "@/components/sections/BecomeContentMasterSection";
import { CurriculumOverviewSection } from "@/components/sections/CurriculumOverviewSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfluencerSection } from "@/components/sections/InfluencerSection";
import { JoinSection } from "@/components/sections/JoinSection";
import { JoinTheMastersSection } from "@/components/sections/JoinTheMastersSection";
import { ProgramBenefitsSection } from "@/components/sections/ProgramBenefitsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyYouShouldApplySection } from "@/components/sections/WhyYouShouldApplySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroNav />
      <AboutProgrameSection />
      <InfluencerSection />
      <JoinTheMastersSection />
      <ProgramBenefitsSection />
      {/* <WhyYouShouldApplySection /> */}
      <TestimonialsSection />
      <CurriculumOverviewSection />
      {/* <BecomeContentMasterSection /> */}
      <FAQSection />
      <JoinSection />
      <Footer />
    </>
  );
}

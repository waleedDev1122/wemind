import ClientsLogoSection from "@/components/ClientsLogoSection";
import DemoSection from "@/components/DemoSection";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import GrowthStatsSection from "@/components/GrowthStatsSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";


export default function Home() {
  return (
    <> 
      <Header />
      <HeroSection />
      <ClientsLogoSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <DemoSection />
      <GrowthStatsSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
}

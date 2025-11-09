import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SafetySection from "@/components/SafetySection";
import EnvironmentalSection from "@/components/EnvironmentalSection";
import SpaceSection from "@/components/SpaceSection";
import CitiesSection from "@/components/CitiesSection";
import TransportationSection from "@/components/TransportationSection";
import SolutionSection from "@/components/SolutionSection";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <SafetySection />
      <EnvironmentalSection />
      <SpaceSection />
      <CitiesSection />
      {/* <TransportationSection /> */}
      <SolutionSection />
      <CallToActionSection />
    </main>
  );
};

export default Index;

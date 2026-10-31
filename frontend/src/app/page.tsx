import About from "@/components/LandingPage/AboutSection";
import BrandCampaigns from "@/components/LandingPage/BrandCampaigns";
import BrandPaths from "@/components/LandingPage/BrandPaths";
import Contact from "@/components/LandingPage/ContactSection";
import Deliverables from "@/components/LandingPage/DeliverablesSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import IdBookSection from "@/components/LandingPage/IdBookSection";
import IdentityDocumented from "@/components/LandingPage/IdentityDocumentId";
import LegalDocuments from "@/components/LandingPage/LegalDocumentsSection";
import Method from "@/components/LandingPage/MethodSection";
import Partners from "@/components/LandingPage/PartnersSection";
import Portfolio from "@/components/LandingPage/PortfolioSection";
import Services from "@/components/LandingPage/ServicesSection";
import Social from "@/components/LandingPage/SocialSection";
import SpecialProjects from "@/components/LandingPage/SpecialProjects";
import StrategyFeature from "@/components/LandingPage/StrategyFeature";
import ValuesAndMethod from "@/components/LandingPage/ValuesAndMethod";
import VisionDesign from "@/components/LandingPage/VisionDesign";

export default function Home() {
  return (
    <>
      <HeroSection />

      <Portfolio />

      <StrategyFeature />

      <IdentityDocumented />

      <ValuesAndMethod />

      <VisionDesign />

      <BrandCampaigns />

      <About />

      <Services />

      <BrandPaths />

      <IdBookSection />

      <Deliverables />

      <Method />

      <SpecialProjects />

      <Partners />

      <Social />

      <Contact />

      <LegalDocuments />
    </>
  );
}

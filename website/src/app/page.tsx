import Hero from "@/components/Sections/Hero";
import QuickDifferentials from "@/components/Sections/QuickDifferentials";
import ProblemSection from "@/components/Sections/ProblemSection";
import SolutionsGrid from "@/components/Sections/SolutionsGrid";
import WmsHighlight from "@/components/Sections/WmsHighlight";
import IntelligenceHighlight from "@/components/Sections/IntelligenceHighlight";
import IntegrationsDiagram from "@/components/Sections/IntegrationsDiagram";
import MethodSection from "@/components/Sections/MethodSection";
import CasesSection from "@/components/Sections/CasesSection";
import ArticlesSection from "@/components/Sections/ArticlesSection";
import FinalCta from "@/components/Sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickDifferentials />
      <ProblemSection />
      <SolutionsGrid />
      <WmsHighlight />
      <IntelligenceHighlight />
      <IntegrationsDiagram />
      <MethodSection />
      <CasesSection />
      <ArticlesSection />
      <FinalCta />
    </>
  );
}

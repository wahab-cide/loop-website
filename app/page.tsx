import { AppShowcase } from "@/components/app-showcase";
import { EnhancedSafety } from "@/components/enhanced-safety";
import { FrequentlyAskedQuestions } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { SavingsCarousel } from "@/components/savings-carousel";
import { Sustainability } from "@/components/sustainability";

export default function Home() {
  return (
    <div>
      <Hero />
      <AppShowcase />
      <SavingsCarousel />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="safety">
        <EnhancedSafety />
      </div>
      <Sustainability />
      <FrequentlyAskedQuestions />
    </div>
  );
}

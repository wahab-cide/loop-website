import CTA from "@/components/cta";
import { DriverEarnings } from "@/components/driver-earnings";
import { EnhancedSafety } from "@/components/enhanced-safety";
import { FrequentlyAskedQuestions } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { RideInfo } from "@/components/ride-info";
import { SmartRefunds } from "@/components/smart-refunds";
import { Sustainability } from "@/components/sustainability";

export default function Home() {
  return (
    <div>
      <Hero />
      <RideInfo />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="safety">
        <EnhancedSafety />
      </div>
      <DriverEarnings />
      <SmartRefunds />
      <Sustainability />
      <FrequentlyAskedQuestions />
      <CTA />
    </div>
  );
}

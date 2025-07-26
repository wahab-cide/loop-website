import CTA from "@/components/cta";
import { DriverEarnings } from "@/components/driver-earnings";
import { EnhancedSafety } from "@/components/enhanced-safety";
import { FrequentlyAskedQuestions } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { RideInfo } from "@/components/ride-info";
import { SmartPricing } from "@/components/smart-pricing";
import { Sustainability } from "@/components/sustainability";

export default function Home() {
  return (
    <div>
      <Hero />
      <RideInfo />
      <SmartPricing />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="safety">
        <EnhancedSafety />
      </div>
      <DriverEarnings />
      <Sustainability />
      <FrequentlyAskedQuestions />
      <CTA />
    </div>
  );
}

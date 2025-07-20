import CTA from "@/components/cta";
import { FrequentlyAskedQuestions } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { RideInfo } from "@/components/ride-info";
import { Sustainability } from "@/components/sustainability";

export default function Home() {
  return (
    <div>
      <Hero />
      <RideInfo />
      <Features />
      <Sustainability />
      <Pricing />
      <FrequentlyAskedQuestions />
      <CTA />
    </div>
  );
}

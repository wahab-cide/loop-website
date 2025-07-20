import CTA from "@/components/cta";
import { FrequentlyAskedQuestions } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <FrequentlyAskedQuestions />
      <CTA />
    </div>
  );
}

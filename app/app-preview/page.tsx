import { AppShowcase } from "@/components/app-showcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "See poolUp in Action - App Preview | Loop Platform, Inc.",
  description:
    "Explore the poolUp app interface and see how easy it is to book rides, track your journey, and manage your transportation.",
  keywords: [
    "poolUp app",
    "app preview",
    "rideshare app demo",
    "book rides",
    "track rides",
    "manage bookings"
  ],
};

export default function AppPreviewPage() {
  return (
    <div>
      <AppShowcase />
    </div>
  );
}
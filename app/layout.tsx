import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/toast";
import { StructuredData } from "./structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loop - Community Rideshare & Carpool App | Safe, Affordable Transportation",
  description:
    "Join the Loop community for safe, affordable rideshare. Connect with verified drivers in your area. Trusted transportation for everyone.",
  keywords: [
    "community rideshare",
    "verified drivers",
    "carpool app",
    "ride sharing",
    "trusted driver app",
    "safe rideshare",
    "affordable transportation",
    "community rides",
    "verified community"
  ],
  authors: [{ name: "Loop Platform, Inc." }],
  creator: "Loop Platform, Inc.",
  publisher: "Loop Platform, Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://looprides.dev",
    title: "Loop - Community Rideshare & Carpool App | Safe, Affordable Transportation",
    description:
      "Join the Loop community for safe, affordable rideshare. Connect with verified drivers in your area. Trusted transportation for everyone.",
    siteName: "Loop",
    images: [
      {
        url: "https://looprides.dev/dashboard.png",
        width: 1920,
        height: 1080,
        alt: "Loop Rideshare App Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loop - Community Rideshare & Carpool App | Safe, Affordable Transportation",
    description:
      "Join the Loop community for safe, affordable rideshare. Connect with verified drivers in your area.",
    images: ["https://looprides.dev/dashboard.png"],
    creator: "@looprides",
  },
  metadataBase: new URL("https://looprides.dev"),
  alternates: {
    canonical: "https://looprides.dev",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased bg-black overflow-x-hidden", inter.className)}>
        <StructuredData />
        <ToastProvider>
          <Navbar />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

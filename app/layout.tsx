import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/toast";
import { StructuredData } from "./structured-data";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "poolUp - Student Social Network & Campus Coordination | by Loop Platform, Inc.",
  description:
    "A social networking platform connecting verified college students for campus activities, shared transportation, and fleet coordination. Join your campus community on poolUp.",
  keywords: [
    "student social network",
    "campus community",
    "college students",
    "student carpool",
    "campus coordination",
    "college fleet management",
    "student connections",
    "campus rideshare",
    "verified students",
    "college community app"
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
    title: "poolUp - Student Social Network & Campus Coordination Platform",
    description:
      "Connect with verified students at your college. Share rides, coordinate campus activities, and access fleet vehicles. A social networking platform for college communities.",
    siteName: "poolUp",
    images: [
      {
        url: "https://looprides.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "poolUp Student Social Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "poolUp - Student Social Network & Campus Coordination Platform",
    description:
      "Connect with verified students at your college. Share rides, coordinate activities, and access fleet vehicles.",
    images: ["https://looprides.dev/og-image.png"],
    creator: "@looprides",
  },
  metadataBase: new URL("https://looprides.dev"),
  alternates: {
    canonical: "https://looprides.dev",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
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
        <SmoothScrollProvider>
          <ToastProvider>
            <Navbar />
            {children}
            <Footer />
          </ToastProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

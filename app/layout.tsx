import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://dilan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dilan Aragón — AI Engineer & Full Stack Developer",
  description:
    "Dilan Smith Aragón Ortiz — independent full-stack developer with an AI-native workflow. React, Next.js, Flutter, Node.js, Supabase and Claude-powered products.",
  keywords: [
    "Dilan Aragón",
    "AI Engineer",
    "Full Stack Developer",
    "Flutter Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Dilan Smith Aragón Ortiz" }],
  creator: "Dilan Smith Aragón Ortiz",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Dilan Aragón — AI Engineer & Full Stack Developer",
    description:
      "Independent full-stack developer with an AI-native workflow. Explore projects, skills and open-source activity.",
    siteName: "dilan.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilan Aragón — AI Engineer & Full Stack Developer",
    description:
      "Independent full-stack developer with an AI-native workflow. Explore projects, skills and open-source activity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`no-js ${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-bg text-text1">
        <Script id="no-js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.remove('no-js')"}
        </Script>
        <MotionConfig reducedMotion="user">
          <LanguageProvider>{children}</LanguageProvider>
        </MotionConfig>
      </body>
    </html>
  );
}

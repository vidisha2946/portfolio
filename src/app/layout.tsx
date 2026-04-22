import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import InteractiveBackground from "@/components/InteractiveBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "UI/UX Designer Portfolio",
  description: "Interactive personal portfolio with Next.js and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black text-white font-sans`}
      >
        <CustomCursor />
        <InteractiveBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

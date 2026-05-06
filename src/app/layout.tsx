import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Skoolen — Build Better Websites, Apps, and Business Systems",
  description:
    "Skoolen helps businesses design, develop, optimize, and manage digital products that work beautifully and perform smoothly.",
  keywords: [
    "web development",
    "app development",
    "workflow automation",
    "website design",
    "website management",
    "digital agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${ibmPlexMono.variable} ${playfairDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

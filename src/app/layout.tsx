import React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Premium Porto Experiences",
    default: "Porto Bike Rentals & Douro River Tours",
  },
  description: "Experience Porto in true style. Browse premium bike rentals, book exclusive Douro River private boat tours, and reserve private tastings in our historic wine cellars. Premium experiences crafted for modern explorers.",
  openGraph: {
    title: "Porto Bike Rentals & Douro River Tours | Premium Porto Experiences",
    description: "Experience Porto in true style. Browse premium bike rentals, book exclusive Douro River private boat tours, and reserve private tastings in our historic wine cellars.",
    url: "https://premium-porto-experiences.com",
    siteName: "Premium Porto Experiences",
    images: [
      {
        url: "/assets/branding/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Porto Experiences - Bike Rentals, Douro Boat Tours, Wine Cellars",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Porto Bike Rentals & Douro River Tours | Premium Porto Experiences",
    description: "Experience Porto in true style. Browse premium bike rentals, book exclusive Douro River private boat tours, and reserve private tastings in our historic wine cellars.",
    images: ["/assets/branding/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased bg-brand-light text-brand-dark min-h-screen`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

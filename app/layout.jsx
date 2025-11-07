

import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevSage Solutions",
  description:
    "DevSage Solutions is a leading software development company specializing in cutting-edge web applications, mobile solutions, and digital transformation services. We deliver scalable, high-performance software solutions tailored to your business needs.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "digital solutions",
    "technology consulting",
    "DevSage Solutions",
  ],
  authors: [{ name: "DevSage Solutions" }],
  openGraph: {
    title: "DevSage Solutions - Innovative Software Development & Technology Solutions",
    description:
      "Leading software development company specializing in cutting-edge web applications, mobile solutions, and digital transformation services. We deliver scalable, high-performance software solutions tailored to your business needs.",
    url: "https://devsagesolutions.vercel.app",
    siteName: "DevSage Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2106",
        width: 1200,
        height: 630,
        alt: "DevSage Solutions - Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSage Solutions - Innovative Software Development & Technology Solutions",
    description:
      "Leading software development company specializing in cutting-edge web applications, mobile solutions, and digital transformation services.",
    images: [
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2106",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://devsagesolutions.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

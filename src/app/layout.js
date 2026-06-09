import "./globals.css";

import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space",
});

export const metadata = {
  metadataBase: new URL("https://ykwgulshan.vercel.app"),

  title: {
    default: "Gulshan | Modern Web Developer",
    template: "%s | Gulshan",
  },

  description:
    "Full stack web developer creating modern websites, premium user experiences, and interactive digital products with Next.js, React, and motion-driven design.",

  keywords: [
    "Gulshan",
    "Web Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Freelance Web Developer",
    "Portfolio",
    "UI Design",
    "Motion Design",
  ],

  authors: [
    {
      name: "Gulshan",
      url: "https://ykwgulshan.vercel.app",
    },
  ],

  creator: "Gulshan",

  openGraph: {
    title: "Gulshan | Modern Web Developer",

    description:
      "Building modern digital experiences through design, motion, and development.",

    url: "https://ykwgulshan.vercel.app",

    siteName: "Gulshan Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gulshan Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Gulshan | Modern Web Developer",

    description:
      "Building modern digital experiences through design, motion, and development.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  applicationName: "Gulshan Portfolio",
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
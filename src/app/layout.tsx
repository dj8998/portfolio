import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Staatliches } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cartoon"
});

export const metadata: Metadata = {
  title: "Dinesh Jangid | Portfolio",
  description: "The personal portfolio of Dinesh Jangid. Product builder, creative technologist, and lifelong learner.",
  keywords: "Product Manager, Fintech, JavaScript, React, Next.js, Portfolio",
  authors: [{ name: "Dinesh Jangid" }],
  openGraph: {
    title: "Dinesh Jangid - Product Manager & Developer",
    description: "Product Manager with fintech expertise at Kotak & HDFC Life. Building digital solutions and innovative web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${staatliches.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HBS Dental Care",
    template: "%s | HBS Dental Care",
  },
  description:
    "Providing world-class dental care services including implants, prosthodontics, root canal treatment, cosmetic dentistry and more.",
  keywords: [
    "Dental Clinic",
    "Dentist",
    "Mumbai Dentist",
    "Implants",
    "Root Canal",
    "Cosmetic Dentistry",
    "Prosthodontics",
    "Dental Care Mumbai",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HBS Dental Care",
    description: "Book an appointment with top dental specialists.",
    url: "https://yourdomain.com",
    siteName: "HBS Dental Care",
    locale: "en_IN",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

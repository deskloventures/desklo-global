import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your preferred font
import "./globals.css";

// Import your layout components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desklo Global | Performance Marketing",
  description: "We engineer predictable revenue for high-growth companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
        The <head> tag is automatically managed by Next.js Metadata, 
        but everything visible must go inside the <body> 
      */}
      <body className={`${inter.className} antialiased selection:bg-[#00c2b2] selection:text-white`}>
        
        {/* CORRECT: Header is inside the body */}
        <Header />
        
        {/* Page content (<main> tags from page.tsx files) will render here */}
        {children}
        
        {/* CORRECT: Footer is inside the body */}
        <Footer />
        
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { M_PLUS_Code_Latin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Over_the_Rainbow } from 'next/font/google';
const MPLUSCodeLatin = M_PLUS_Code_Latin({
  subsets: ["latin"],
});
const overTheRainbow = Over_the_Rainbow({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-over-the-rainbow', 
});

export const metadata: Metadata = {
  title: "Prototype 2.0",
  description:
    "8+ hours of hackathon to build a prototype. Stay tuned for more updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MPLUSCodeLatin.className} dark ${overTheRainbow.variable}`} suppressHydrationWarning>
        <div className="fixed inset-0 z-[-1] page-background"></div>
        <Navbar />
        <main className="pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
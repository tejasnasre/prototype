import type { Metadata } from "next";
import { M_PLUS_Code_Latin } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/Navbar";

const MPLUSCodeLatin = M_PLUS_Code_Latin({
  subsets: ["latin"],
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
      <body className={`${MPLUSCodeLatin.className} dark`}>
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}

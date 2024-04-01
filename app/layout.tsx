import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "Ted x IIITD",
  description: "The official homepage of TEDxIIITD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

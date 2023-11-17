import type { Metadata } from "next";

import "./globals.css";
import {NavBar, Footer }from "@/components";


export const metadata: Metadata = {
  title: "DriveEasy",
  description:
    "DriveEasy makes car rentals as simple as it should be. With our intuitive interface and a variety of options, planning your next trip is as easy as taking a spin in your dream car.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
       <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

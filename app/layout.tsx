import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/common/header";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Car Market | True Value",
  description: "Sell / Buy Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UV-LAB Store | Electronics & Components in Cameroon",
  description: "Shop microcontrollers, sensors, Arduino boards, and electronic components with express delivery across Buea, Douala, and Cameroon.",
  verification: {
    google: "HcAHMXwRGGmTrKk5Sw9fNE6-t7HYVFFC4nAe1UsG8i4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
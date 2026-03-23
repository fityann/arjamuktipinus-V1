import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from 'flowbite-react';  // <-- hanya ini yang diimport untuk dark mode

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arjamukti Pinus - Landing Page",
  description: "Iklan dan Portfolio Perusahaan Kami di Tasikmalaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <ThemeModeScript />  
      </head>
      <body className={inter.className}>
        {children}  
      </body>
    </html>
  );
}
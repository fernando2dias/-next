import type { Metadata } from "next";
import Link from 'next/link'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fernando2dias - web developer",
  description: "my portifolio and my dev studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-violet-900 flex justify-between pl-12 pr-12 pt-6 pb-6">
          <div>
            <Link href="/">
              <h1 className="text-2xl text-yellow-500">fernando2dias</h1>
              <h2 className="text-xs text-yellow-50">Web Developer Full Stack</h2>
            </Link>
          </div>
          <ul className="flex justify-around items-center w-50">
            <li><Link href='/projects'>My projects</Link></li>
            <li><Link href="/studies" target="_self">Studies</Link></li>
            <li><Link href="/my-links" target="_self">Links</Link></li>
          </ul>
        </header>
        <div className="container mx-auto px-1">
          {children}
        </div>
      </body>
    </html>
  );
}

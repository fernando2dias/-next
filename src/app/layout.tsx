import type { Metadata } from "next";
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
  title: "Create Next App",
  description: "Generated by create next app",
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
            <h1 className="text-2xl text-yellow-500">fernando2dias</h1>
            <h2 className="text-xs text-yellow-50">Web Developer Full Stack</h2>
          </div>
          <ul className="flex justify-around items-center w-50">
            <li><a href="#" target="_self">Projetos</a></li>
            <li><a href="#" target="_self">Estudos</a></li>
            <li><a href="#" target="_self">Links</a></li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}

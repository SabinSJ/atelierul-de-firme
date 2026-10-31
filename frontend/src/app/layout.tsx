import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer";
import ChatDemo from "@/components/ChatDemo";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelierul de firme",
  description: "Infrastructură. Strategie. Business.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="min-w-0 flex-1">
            {children}
            <Footer />
            <ChatDemo />
          </main>
        </div>
      </body>
    </html>
  );
}

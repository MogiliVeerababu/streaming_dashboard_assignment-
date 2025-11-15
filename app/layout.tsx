import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Streaming Dashboard - Demo",
  description: "A mini Netflix-style streaming dashboard built with Next.js and the TMDB API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white`}
      >
        <header className="p-4 border-b border-white/10">
          <h1 className="text-xl font-semibold">Streaming Dashboard</h1>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="p-4 text-center border-t border-white/10 opacity-70">
          © {new Date().getFullYear()} Streaming Dashboard Demo
        </footer>
      </body>
    </html>
  );
}

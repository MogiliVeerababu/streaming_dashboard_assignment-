"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-transparent">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Image src="/netflix-logo.png" width={120} height={60} alt="Logo" />

        <button className="bg-red-600 px-4 py-1 rounded">Sign In</button>
      </nav>
    </header>
  );
}

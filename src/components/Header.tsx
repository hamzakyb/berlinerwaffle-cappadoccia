"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 w-full z-50 transition-all duration-300 bg-light-pink border-b-4 border-black ${
        isScrolled
          ? "backdrop-blur-xl shadow-[0_8px_0_0_#000]"
          : ""
      }`}
    >
      <div className="relative flex justify-between items-center px-margin-mobile md:px-margin-desktop py-2 max-w-container-max mx-auto">
        {/* Brand Logo — centered vertically in the header row */}
        <Link
          className="relative z-50 shrink-0 hover:rotate-3 hover:scale-105 active:scale-95 transition-all origin-center select-none overflow-hidden block"
          href="/"
        >
          <img
            src="/logowaffle.png"
            alt="Berliner Waffle Cappadocia"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-black font-black text-xl hover:text-strawberry-pop transition-colors hover:scale-110 duration-200"
            href="/"
          >
            Anasayfa
          </Link>
          <Link
            className="text-black font-black text-xl hover:text-strawberry-pop transition-colors hover:scale-110 duration-200"
            href="/menu"
          >
            Menü
          </Link>
          <Link
            className="text-black font-black text-xl hover:text-strawberry-pop transition-colors hover:scale-110 duration-200"
            href="/hakkimizda"
          >
            Hakkımızda
          </Link>
        </nav>

        {/* Trailing Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/iletisim"
            className="hidden md:flex items-center justify-center bg-strawberry-pop text-white border-4 border-black font-black text-xl px-8 py-3 rounded-2xl sticker-shadow sticker-shadow-hover sticker-shadow-active transition-all -rotate-2"
          >
            İletişim
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black bg-white border-4 border-black rounded-xl p-2 sticker-shadow"
          >
            <span className="material-symbols-outlined text-[32px] font-bold">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-light-pink border-t-4 border-black px-margin-mobile py-6 flex flex-col gap-4">
          <Link
            className="text-black font-black text-xl hover:text-strawberry-pop transition-colors"
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Anasayfa
          </Link>
          <Link
            className="text-black font-black text-xl hover:text-strawberry-pop transition-colors"
            href="/menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menü
          </Link>
          <Link
            className="text-black font-black text-xl hover:text-strawberry-pop transition-colors"
            href="/hakkimizda"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletisim"
            className="w-full flex items-center justify-center bg-strawberry-pop text-white border-4 border-black font-black text-xl py-3 rounded-2xl sticker-shadow mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            İletişim
          </Link>
        </nav>
      )}
    </header>
  );
}

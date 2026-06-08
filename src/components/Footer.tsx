import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-24 bg-black py-16 border-t-8 border-black relative overflow-hidden select-none">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <a
            className="hover:scale-105 origin-left transition-transform w-fit block"
            href="#"
          >
            <img
              src="/logowaffle.png"
              alt="Berliner Waffle Cappadocia"
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
            />
          </a>
          <p className="font-bold text-xl text-white max-w-xs bg-white/10 p-4 rounded-xl border-2 border-white/20">
            Sokak lezzetinin en tatlı, en pratik ve en premium hali.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          <h4 className="font-black text-2xl text-tertiary-container uppercase mb-2 drop-shadow-[2px_2px_0px_#000]">
            Sosyal Medya
          </h4>
          <a
            className="font-bold text-xl text-white hover:text-strawberry-pop transition-colors hover:translate-x-2 w-fit flex items-center gap-2"
            href="https://www.instagram.com/berlinerwaffle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">photo_camera</span> Instagram
          </a>
          <a
            className="font-bold text-xl text-white hover:text-strawberry-pop transition-colors hover:translate-x-2 w-fit flex items-center gap-2"
            href="https://www.tiktok.com/@berlinerwaffle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">play_circle</span> TikTok
          </a>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col gap-4">
          <h4 className="font-black text-2xl text-[#ffdea8] uppercase mb-2 drop-shadow-[2px_2px_0px_#000]">
            Yasal
          </h4>
          <a
            className="font-bold text-xl text-white hover:text-honey-glaze transition-colors hover:translate-x-2 w-fit"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-bold text-xl text-white hover:text-honey-glaze transition-colors hover:translate-x-2 w-fit"
            href="#"
          >
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className="col-span-1 md:col-span-3 pt-8 mt-8 border-t-4 border-white/20 flex justify-between items-center flex-wrap gap-4">
          <p className="font-black text-lg text-white/60 uppercase">
            © 2024 Berliner Waffle Cappadocia. Indulge in every bite.
          </p>
          <div className="bg-strawberry-pop p-3 rounded-full border-4 border-black sticker-shadow rotate-6">
            <span className="material-symbols-outlined text-white text-[32px] icon-fill">bolt</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

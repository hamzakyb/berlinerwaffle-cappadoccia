import React from "react";

export default function Marquee() {
  const items = (
    <div className="flex items-center gap-8 px-4">
      <span className="text-honey-glaze font-black text-[36px] sm:text-[48px] md:text-[60px] uppercase">Belçika Çikolatası</span>
      <span className="material-symbols-outlined text-honey-glaze text-[80px] sm:text-[110px] md:text-[140px] icon-fill">favorite</span>
      <span className="text-tertiary-container font-black text-[36px] sm:text-[48px] md:text-[60px] uppercase text-outline">Taptaze Meyveler</span>
      <span className="material-symbols-outlined text-strawberry-pop text-[80px] sm:text-[110px] md:text-[140px] icon-fill">star</span>
      <span className="text-white font-black text-[36px] sm:text-[48px] md:text-[60px] uppercase">Berliner Waffle Cappadocia</span>
      <span className="material-symbols-outlined text-tertiary-container text-[80px] sm:text-[110px] md:text-[140px] icon-fill">favorite</span>
      <span className="text-strawberry-pop font-black text-[36px] sm:text-[48px] md:text-[60px] uppercase text-outline">Sınırsız Topping</span>
      <span className="material-symbols-outlined text-honey-glaze text-[80px] sm:text-[110px] md:text-[140px] icon-fill">star</span>
      <span className="text-honey-glaze font-black text-[36px] sm:text-[48px] md:text-[60px] uppercase text-outline">Günlük Taze Hamur</span>
      <span className="material-symbols-outlined text-strawberry-pop text-[80px] sm:text-[110px] md:text-[140px] icon-fill">favorite</span>
      <span className="text-white font-black text-[36px] sm:text-[48px] md:text-[60px] uppercase">Mutluluk Kutusu</span>
      <span className="material-symbols-outlined text-tertiary-container text-[80px] sm:text-[110px] md:text-[140px] icon-fill">star</span>
    </div>
  );

  return (
    <div className="w-full bg-black border-y-8 border-black py-4 md:py-6 overflow-hidden rotate-2 scale-105 my-12 z-20 relative select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {items}
        {items}
      </div>
    </div>
  );
}

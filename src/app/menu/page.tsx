/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MenuItem {
  id: string;
  name: string;
  category: "bucket" | "cup" | "drink" | "extra";
  categoryLabel: string;
  price: string;
  description: string;
  image: string;
  isPopular?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  // Kova Waffles
  {
    id: "b1",
    name: "Choco Loco Kova",
    category: "bucket",
    categoryLabel: "Kova Waffle",
    price: "₺180",
    description: "Belçika çikolatası, muz, çilek, fındık kırığı ve özel krema.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCfYp0wR4wNjV73QZAvBqUhozwSDioSb_KVSPD1B7N8pdLr5ygSPY9tziq1f5YGvRP248VlRdEHulmj5kxWsaiIGN8cR8qE_IosCbV7SW0_2yQLFnWHBiUYH7oidIOSWKnGhacWjEapdv6xEBzZautFjQABbd2w3sAFw1T8TiCxMNYFxLTH_r18eZeCYLTW2Rw7JDigUyvXtpwBt7TPUv0Bl-mDo_PREcxQuD_eZWVkpbkq4a0HmbBxR9hsZfGn-1aDKRuCQiBsc0",
    isPopular: true,
  },
  {
    id: "b2",
    name: "Berry Splash Kova",
    category: "bucket",
    categoryLabel: "Kova Waffle",
    price: "₺195",
    description: "Orman meyveleri, beyaz çikolata sos, frambuaz drajeler.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv2YqHMhHAy37ahmF-paxJz7Ey2z8Pd96pPIqnqCf_jLkPrwsRHp50iLp1MSYB6Gw9f_je0k-fHxyBZ8-o7sfLb97haTFun7RnDVaFAA-2v9pZ5Jv8nYMbTPMn4a3O4lEXhk5urXPjVAErF0XsyZvB2MrJCkmM88FwRwW6DYyMcEG_H-BrRlQizF9oEaFXBaa-hbYZQ-iAW7ShJwG3hTsqbrsStS4qM3XPWTnJHoIDVpNJ-gYccViNIlsleax26ykKF6nmU7svd3E",
  },
  {
    id: "b3",
    name: "Karamel Crunch",
    category: "bucket",
    categoryLabel: "Kova Waffle",
    price: "₺185",
    description: "Karamel sos, lotus bisküvi kırığı, ceviz ve süt reçeli.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfbS2e4V9plXfAn6nzeLzCR4Lyts8n_nUy5K-v-mynv1-rXH4Lc0TtHef8P66XUCR7fztGNhggUYMoEBtcUtVpqaPUymKQLfr8s4yTTBwTLUCDiSxguC43ULbtBDK6T4ehrc-M_GMenVGnef4X9NTad0e2PY-WqMgpIoDwX8BSIEBpZ-P-bpNxJkaSBKpdUkHQ9cSRFzp0zyYQj-qgYSHGlp1I1HzsCdy48BZ3pYFBu18Pzb-meFNuTovudt7qTLqnYUGT-1Bq7oU",
  },
  {
    id: "b4",
    name: "White Dream",
    category: "bucket",
    categoryLabel: "Kova Waffle",
    price: "₺190",
    description: "Antep fıstığı, beyaz çikolata, muz ve çikolata parçaları.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  // Bardak Waffles
  {
    id: "c1",
    name: "Mini Joy Cup",
    category: "cup",
    categoryLabel: "Bardak Waffle",
    price: "₺120",
    description: "Çikolata soslu, çilek ve bisküvi parçacıklı pratik bardak waffle.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "c2",
    name: "Nutty Cup",
    category: "cup",
    categoryLabel: "Bardak Waffle",
    price: "₺135",
    description: "Fındık kreması, fıstık ezmesi, muz ve ceviz kırıkları.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "c3",
    name: "Exotic Cup",
    category: "cup",
    categoryLabel: "Bardak Waffle",
    price: "₺140",
    description: "Tropikal meyveler, mango sosu ve hindistan cevizi.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1ebb8465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  // İçecekler
  {
    id: "d1",
    name: "Ev Yapımı Limonata",
    category: "drink",
    categoryLabel: "İçecek",
    price: "₺60",
    description: "Taze nane ve limon dilimleriyle ferahlatıcı.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "d2",
    name: "Waffle Shake",
    category: "drink",
    categoryLabel: "İçecek",
    price: "₺90",
    description: "Waffle parçacıklı, çikolatalı ve vanilyalı özel shake.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isPopular: true,
  },
  {
    id: "d3",
    name: "Bubble Tea",
    category: "drink",
    categoryLabel: "İçecek",
    price: "₺85",
    description: "Çilek veya yaban mersini aromalı patlayan incili çay.",
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "d4",
    name: "Filtre Kahve",
    category: "drink",
    categoryLabel: "İçecek",
    price: "₺65",
    description: "Taze çekilmiş premium kahve çekirdeklerinden filtre kahve.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  // Ekstralar
  {
    id: "e1",
    name: "Ekstra Belçika Çikolatası",
    category: "extra",
    categoryLabel: "Ekstra",
    price: "₺30",
    description: "Yoğun, akışkan sütlü veya beyaz Belçika çikolatası.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "e2",
    name: "Antep Fıstığı Kırığı",
    category: "extra",
    categoryLabel: "Ekstra",
    price: "₺35",
    description: "Taze kavrulmuş, duble Antep fıstığı parçacıkları.",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "e3",
    name: "Marshmallow & Draje",
    category: "extra",
    categoryLabel: "Ekstra",
    price: "₺25",
    description: "Rengarenk mini marshmallowlar ve çıtır çikolatalı drajeler.",
    image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "e4",
    name: "Ekstra Taze Meyve",
    category: "extra",
    categoryLabel: "Ekstra",
    price: "₺30",
    description: "Mevsimin en tatlı çilekleri ve taze muz dilimleri.",
    image: "https://images.unsplash.com/photo-1519996521430-02b798c1d881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  }
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "bucket" | "cup" | "drink" | "extra">("all");

  const filteredItems = selectedCategory === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="flex-grow min-h-screen pb-24">
        {/* Page Title / Hero */}
        <section className="relative w-full bg-light-pink border-b-8 border-black py-16 px-margin-mobile md:px-margin-desktop overflow-hidden text-center select-none">
          {/* Decorative icons */}
          <span className="material-symbols-outlined text-[80px] md:text-[100px] text-strawberry-pop absolute -top-5 left-10 -z-10 animate-float opacity-80 mix-blend-color-burn">
            favorite
          </span>
          <span className="material-symbols-outlined text-[80px] md:text-[100px] text-tertiary-container absolute -bottom-5 right-10 -z-10 animate-spin-slow opacity-80 mix-blend-color-burn">
            star
          </span>
          
          <div className="max-w-container-max mx-auto">
            <h1 className="font-display-lg text-[40px] sm:text-[56px] md:text-[80px] font-extrabold text-black tracking-tight uppercase">
              <span className="text-honey-glaze block rotate-2 bg-black px-6 py-2.5 sm:px-8 sm:py-3 w-fit mx-auto rounded-3xl mb-4">
                MENÜMÜZ
              </span>
            </h1>
            <p className="font-body-lg text-lg sm:text-xl md:text-2xl font-black text-black bg-white/80 p-4 rounded-2xl border-4 border-black w-fit max-w-[280px] sm:max-w-md md:max-w-none mx-auto sticker-shadow -rotate-1 mt-4">
              Sınırsız Malzeme, Bol Lezzet. Waffle Sokağının En Premium Hali!
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-12 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {[
              { id: "all", label: "HEPSİ", icon: "grid_view" },
              { id: "bucket", label: "KOVA (BUCKET)", icon: "takeout_dining" },
              { id: "cup", label: "BARDAK (CUP)", icon: "local_cafe" },
              { id: "drink", label: "İÇECEKLER", icon: "local_bar" },
              { id: "extra", label: "EKSTRALAR", icon: "add_circle" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-2xl font-black text-base md:text-xl border-4 border-black sticker-shadow transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-strawberry-pop text-white -translate-y-1"
                    : "bg-white text-black hover:bg-honey-glaze"
                }`}
              >
                <span className="material-symbols-outlined">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredItems.map((item, index) => {
              const bgColors = [
                "bg-tertiary-container",
                "bg-honey-glaze",
                "bg-[#ffdea8]",
                "bg-white"
              ];
              const cardBg = bgColors[index % bgColors.length];
              
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border-8 border-black sticker-shadow flex flex-col hover:-translate-y-4 hover:rotate-1 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="relative h-64 overflow-hidden bg-surface-variant border-b-8 border-black">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      src={item.image}
                    />
                    
                    {/* Category Label */}
                    <div className="absolute top-4 left-4 bg-black text-white border-4 border-black font-black text-sm px-3 py-1 rounded-xl shadow-[2px_2px_0px_0px_rgba(255,215,0,1)] -rotate-3">
                      {item.categoryLabel}
                    </div>

                    {/* Popular Badge */}
                    {item.isPopular && (
                      <div className="absolute top-4 right-4 bg-strawberry-pop text-white border-4 border-black font-black text-sm px-3 py-1 rounded-xl sticker-shadow rotate-3 animate-pulse">
                        🔥 POPÜLER
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className={`p-6 sm:p-8 flex flex-col flex-grow ${cardBg}`}>
                    <div className="flex justify-between items-start mb-4 gap-2">
                      <h3 className="font-black text-[20px] sm:text-[24px] text-black leading-tight uppercase">
                        {item.name}
                      </h3>
                      <span className="font-black text-[24px] sm:text-[28px] text-black bg-white px-3 py-1 rounded-xl border-4 border-black -rotate-3 shrink-0">
                        {item.price}
                      </span>
                    </div>
                    
                    <p className="font-bold text-base sm:text-lg text-black flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

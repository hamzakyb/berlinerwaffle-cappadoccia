/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Menu() {
  const [activeTab, setActiveTab] = useState<"bucket" | "cup">("bucket");
  const [visibleTab, setVisibleTab] = useState<"bucket" | "cup">("bucket");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (activeTab !== visibleTab) {
      setOpacity(0);
      const timeout = setTimeout(() => {
        setVisibleTab(activeTab);
        setOpacity(0);
        const secondTimeout = setTimeout(() => {
          setOpacity(1);
        }, 50);
        return () => clearTimeout(secondTimeout);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [activeTab, visibleTab]);

  return (
    <section className="py-12 md:py-24 relative z-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Segmented Control */}
        <div className="flex justify-center mb-16">
          <div
            className="bg-black p-2 rounded-3xl flex flex-col sm:flex-row items-center w-full max-w-2xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,46,99,1)] rotate-1"
            role="tablist"
          >
            <button
              aria-selected={activeTab === "bucket"}
              onClick={() => setActiveTab("bucket")}
              className={`w-full flex-1 flex items-center justify-center gap-3 px-4 py-3 sm:px-8 sm:py-5 rounded-2xl font-black text-lg sm:text-2xl transition-all cursor-pointer ${
                activeTab === "bucket"
                  ? "bg-honey-glaze text-black border-4 border-black"
                  : "text-white hover:bg-white/20"
              }`}
              role="tab"
            >
              <span className="material-symbols-outlined text-[24px] sm:text-[32px]">takeout_dining</span>
              KOVA (BUCKET)
            </button>
            <button
              aria-selected={activeTab === "cup"}
              onClick={() => setActiveTab("cup")}
              className={`w-full flex-1 flex items-center justify-center gap-3 px-4 py-3 sm:px-8 sm:py-5 rounded-2xl font-black text-lg sm:text-2xl transition-all cursor-pointer ${
                activeTab === "cup"
                  ? "bg-honey-glaze text-black border-4 border-black"
                  : "text-white hover:bg-white/20"
              }`}
              role="tab"
            >
              <span className="material-symbols-outlined text-[24px] sm:text-[32px]">local_cafe</span>
              BARDAK (CUP)
            </button>
          </div>
        </div>

        {/* Product Grid (Kova) */}
        {visibleTab === "bucket" && (
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 transition-opacity duration-300 ${
              opacity === 0 ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border-8 border-black sticker-shadow flex flex-col hover:-translate-y-4 hover:rotate-2 transition-all duration-300">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-surface-variant border-b-8 border-black">
                <img
                  alt="Choco Loco Bucket"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCfYp0wR4wNjV73QZAvBqUhozwSDioSb_KVSPD1B7N8pdLr5ygSPY9tziq1f5YGvRP248VlRdEHulmj5kxWsaiIGN8cR8qE_IosCbV7SW0_2yQLFnWHBiUYH7oidIOSWKnGhacWjEapdv6xEBzZautFjQABbd2w3sAFw1T8TiCxMNYFxLTH_r18eZeCYLTW2Rw7JDigUyvXtpwBt7TPUv0Bl-mDo_PREcxQuD_eZWVkpbkq4a0HmbBxR9hsZfGn-1aDKRuCQiBsc0"
                />
                <div className="absolute top-4 left-4 bg-strawberry-pop text-white border-4 border-black font-black text-sm sm:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl sticker-shadow -rotate-6">
                  🔥 EN ÇOK SATAN
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow bg-tertiary-container">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-[22px] sm:text-[28px] text-black leading-tight uppercase">
                    Choco Loco<br />Kova
                  </h3>
                  <span className="font-black text-[26px] sm:text-[32px] text-black bg-white px-3 py-1 rounded-xl border-4 border-black -rotate-3">
                    ₺180
                  </span>
                </div>
                <p className="font-bold text-lg sm:text-xl text-black flex-grow">
                  Belçika çikolatası, muz, çilek, fındık kırığı ve özel krema.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border-8 border-black sticker-shadow flex flex-col hover:-translate-y-4 hover:-rotate-2 transition-all duration-300">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-surface-variant border-b-8 border-black">
                <img
                  alt="Berry Splash Bucket"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv2YqHMhHAy37ahmF-paxJz7Ey2z8Pd96pPIqnqCf_jLkPrwsRHp50iLp1MSYB6Gw9f_je0k-fHxyBZ8-o7sfLb97haTFun7RnDVaFAA-2v9pZ5Jv8nYMbTPMn4a3O4lEXhk5urXPjVAErF0XsyZvB2MrJCkmM88FwRwW6DYyMcEG_H-BrRlQizF9oEaFXBaa-hbYZQ-iAW7ShJwG3hTsqbrsStS4qM3XPWTnJHoIDVpNJ-gYccViNIlsleax26ykKF6nmU7svd3E"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow bg-honey-glaze">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-[22px] sm:text-[28px] text-black leading-tight uppercase">
                    Berry Splash<br />Kova
                  </h3>
                  <span className="font-black text-[26px] sm:text-[32px] text-black bg-white px-3 py-1 rounded-xl border-4 border-black rotate-3">
                    ₺195
                  </span>
                </div>
                <p className="font-bold text-lg sm:text-xl text-black flex-grow">
                  Orman meyveleri, beyaz çikolata sos, frambuaz drajeler.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border-8 border-black sticker-shadow flex flex-col hover:-translate-y-4 hover:rotate-2 transition-all duration-300">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-surface-variant border-b-8 border-black">
                <img
                  alt="Caramel Crunch Bucket"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfbS2e4V9plXfAn6nzeLzCR4Lyts8n_nUy5K-v-mynv1-rXH4Lc0TtHef8P66XUCR7fztGNhggUYMoEBtcUtVpqaPUymKQLfr8s4yTTBwTLUCDiSxguC43ULbtBDK6T4ehrc-M_GMenVGnef4X9NTad0e2PY-WqMgpIoDwX8BSIEBpZ-P-bpNxJkaSBKpdUkHQ9cSRFzp0zyYQj-qgYSHGlp1I1HzsCdy48BZ3pYFBu18Pzb-meFNuTovudt7qTLqnYUGT-1Bq7oU"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow bg-[#ffdea8]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-[22px] sm:text-[28px] text-black leading-tight uppercase">
                    Karamel<br />Crunch
                  </h3>
                  <span className="font-black text-[26px] sm:text-[32px] text-black bg-white px-3 py-1 rounded-xl border-4 border-black -rotate-2">
                    ₺185
                  </span>
                </div>
                <p className="font-bold text-lg sm:text-xl text-black flex-grow">
                  Karamel sos, lotus bisküvi kırığı, ceviz ve süt reçeli.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid (Cup View) */}
        {visibleTab === "cup" && (
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-300 ${
              opacity === 0 ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="col-span-3 text-center py-16 md:py-24 bg-white border-8 border-black rounded-3xl sticker-shadow rotate-1 px-4">
              <span className="material-symbols-outlined text-[60px] md:text-[80px] text-black mb-6 animate-bounce">
                local_cafe
              </span>
              <h3 className="font-black text-2xl sm:text-3xl md:text-[40px] text-black mb-4 uppercase leading-tight">
                Bardak Waffle Menüsü Hazırlanıyor!
              </h3>
              <p className="font-bold text-lg sm:text-2xl text-black">
                Çok yakında yeni bardak sunumlarımızla buradayız.
              </p>
            </div>
          </div>
        )}

        {/* Tümünü Gör Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            href="/menu"
            className="bg-strawberry-pop text-white border-4 border-black font-black text-xl sm:text-2xl px-8 py-4 sm:px-12 sm:py-5 rounded-3xl sticker-shadow sticker-shadow-hover sticker-shadow-active transition-all -rotate-1 hover:rotate-1 flex items-center gap-3 group select-none cursor-pointer"
          >
            TÜMÜNÜ GÖR
            <span className="material-symbols-outlined text-[24px] sm:text-[32px] group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

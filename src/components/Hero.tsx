/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center px-margin-mobile md:px-margin-desktop py-12">
      {/* Floating Background Elements */}
      <span
        className="material-symbols-outlined text-tertiary-container absolute top-0 left-0 z-0 pointer-events-none animate-star-dance opacity-80"
        style={{fontSize: '262px', lineHeight: 1, fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48"}}
      >
        star
      </span>
      <span
        className="material-symbols-outlined text-strawberry-pop absolute bottom-0 right-0 z-0 pointer-events-none animate-heart-orbit opacity-80"
        style={{fontSize: '262px', lineHeight: 1, fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48"}}
      >
        favorite
      </span>
      <div className="w-48 h-48 md:w-64 md:h-64 bg-white border-8 border-black rounded-full absolute -left-16 bottom-0 -z-20 sticker-shadow"></div>
      
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2 bg-black text-honey-glaze font-black text-lg md:text-xl px-5 py-2.5 sm:px-6 sm:py-3 rounded-full w-fit border-4 border-black shadow-[4px_4px_0px_0px_#FF2E63] rotate-3 hover:-rotate-3 transition-transform">
            <span className="material-symbols-outlined icon-fill text-strawberry-pop text-2xl animate-pulse">
              local_fire_department
            </span>
            Şehrin En Yeni Çılgınlığı!
          </div>
          
          <h1 className="font-display-lg text-[44px] leading-[44px] sm:text-[60px] sm:leading-[60px] md:text-[100px] md:leading-[90px] font-extrabold text-black tracking-tighter uppercase">
            <span className="whitespace-nowrap">Mutluluğun</span><br />
            <span className="text-outline-pink block my-2 -rotate-2">En Tatlı</span>
            Hali:
            <span className="text-honey-glaze block mt-4 rotate-2 bg-black px-4 py-2 w-fit rounded-3xl text-[24px] sm:text-[36px] md:text-[50px] lg:text-[60px] leading-none">
              Berliner Waffle Cappadocia
            </span>
          </h1>
          
          <p className="font-body-lg text-lg sm:text-2xl md:text-3xl font-bold text-black max-w-[600px] bg-white/80 p-4 sm:p-6 rounded-3xl border-4 border-black sticker-shadow backdrop-blur-md mt-4">
            Taptaze hamur, bol malzeme ve sınır tanımayan soslar. Kutuda ya da bardakta, sokağın{" "}
            <span className="relative inline-block text-strawberry-pop">
              en premium
              <svg
                className="absolute left-0 w-full"
                style={{ bottom: "-14px" }}
                height="18"
                viewBox="0 0 100 18"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="marker-rough" x="-5%" y="-80%" width="110%" height="260%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="4" seed="3" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
                  </filter>
                </defs>
                <path
                  d="M1,11 C14,8 28,13 44,10 C60,7 75,12.5 99,10"
                  stroke="#FF2E63"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#marker-rough)"
                />
              </svg>
            </span>{" "}
            hali!
          </p>
        </div>

        {/* Hero Image (Cutout style) */}
        <div className="relative h-[380px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] aspect-square animate-float">
            {/* Decorative sticker behind image */}
            <div className="absolute inset-0 bg-strawberry-pop rounded-full blur-3xl opacity-50 mix-blend-multiply scale-150"></div>
            <img
              alt="Bucket Waffle"
              className="w-full h-full object-cover rounded-full border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] sm:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg_Ugk2Lz9MRWG3nyqpqB3HcjFLzXFAsByZFq6rQcxKKsH0GY95b3TR9b2S7qBgNFdWS6A17UKW6RdREr7ysDvfB66YhqIYDNb-Rt89AICXXrU3TAP20qQqnpZJ0WIPx9-WOJq60MKFK_ogvxqE47o12fekNLPewEIk5S635u31Wrqhj5muhG8_QRKhrVSdjOdHy7lVpOsjxBShyoZiFJlNzsh5P8PZsSUnFkHqrdlm-s7pqBemhiq1A4V9uavxYTvSYkFQ09qrtk"
              style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
            />
            {/* Floating badges */}
            <div className="absolute -top-6 -right-4 sm:-top-10 sm:-right-10 bg-honey-glaze border-4 border-black text-black font-black text-xs sm:text-xl md:text-2xl w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full sticker-shadow rotate-12 animate-pulse flex items-center justify-center shrink-0 select-none">
              <span className="text-center leading-tight">
                KOVA<br />BOY!
              </span>
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 bg-tertiary-container border-4 border-black text-black font-black text-xs sm:text-lg md:text-xl px-3 py-1.5 sm:px-6 sm:py-4 rounded-3xl sticker-shadow -rotate-12 flex items-center gap-1 sm:gap-2 select-none">
              <span className="material-symbols-outlined text-base sm:text-2xl">icecream</span> Sınırsız Topping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

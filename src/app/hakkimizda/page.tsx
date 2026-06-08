/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow min-h-screen pb-24">
        {/* Page Header */}
        <section className="relative w-full bg-honey-glaze border-b-8 border-black py-16 px-margin-mobile md:px-margin-desktop overflow-hidden text-center select-none">
          {/* Floating design elements */}
          <span className="material-symbols-outlined text-[80px] md:text-[100px] text-tertiary-container absolute -top-5 left-10 -z-10 animate-spin-slow opacity-80 mix-blend-color-burn">
            star
          </span>
          <span className="material-symbols-outlined text-[80px] md:text-[100px] text-strawberry-pop absolute -bottom-5 right-10 -z-10 animate-float opacity-80 mix-blend-color-burn">
            favorite
          </span>
          
          <div className="max-w-container-max mx-auto">
            <h1 className="font-display-lg text-[40px] sm:text-[56px] md:text-[80px] font-extrabold text-black tracking-tight uppercase">
              <span className="text-outline block rotate-2 bg-black px-6 py-2.5 sm:px-8 sm:py-3 w-fit mx-auto rounded-3xl mb-4">
                HAKKIMIZDA
              </span>
            </h1>
            <p className="font-body-lg text-lg sm:text-xl md:text-2xl font-black text-black bg-white/80 p-4 rounded-2xl border-4 border-black w-fit max-w-[280px] sm:max-w-md md:max-w-none mx-auto sticker-shadow -rotate-1 mt-4">
              Hikayemiz, Değerlerimiz ve Çılgın Lezzet Aşkımız!
            </p>
          </div>
        </section>

        {/* Story Section (Hikayemiz) */}
        <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-6 md:p-16 rounded-[40px] border-8 border-black sticker-shadow rotate-1">
            {/* Text column */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <h2 className="font-black text-[28px] sm:text-[40px] md:text-[56px] leading-tight text-black uppercase drop-shadow-[4px_4px_0px_#FF2E63]">
                Bir Sokak Lezzeti<br />Devrimi!
              </h2>
              <div className="flex flex-col gap-6 font-bold text-base sm:text-lg md:text-xl text-black">
                <p className="bg-honey-glaze/30 p-4 rounded-xl border-2 border-black/10">
                  Her şey, klasik tabak waffle sunumunun sıradanlığına karşı duyduğumuz tatlı bir isyanla başladı. 
                  Sokak lezzetleri kültürünü, en kaliteli malzemelerle ve modern bir pratiklikle birleştirmek istedik. 
                  Böylece, çatal bıçak aramadan, dilediğiniz yerde keyifle yiyebileceğiniz **Kova** ve **Bardak** waffle konseptini hayata geçirdik.
                </p>
                <p>
                  Berliner Waffle Cappadocia olarak, hamurumuzun kalitesinden asla ödün vermedik. Her sabah taze hazırlanan özel 
                  reçeteli hamurumuzu, en premium Belçika çikolataları ve mevsimin en taze meyveleriyle buluşturduk. 
                  Indulgent (şımartan) tatlarımızı, sokağın o dinamik ve samimi enerjisiyle harmanladık.
                </p>
                <p>
                  Bugün, şehrin en gözde noktasında waffle severlere alışılmışın dışında, bol soslu ve rengarenk 
                  deneyimler yaşatmaya devam ediyoruz. Biz sadece tatlı yapmıyoruz; her kutuda mutluluğun en tatlı, 
                  en çılgın halini sunuyoruz!
                </p>
              </div>
            </div>
            
            {/* Image column */}
            <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] md:h-[450px] flex items-center justify-center mt-8 lg:mt-0">
              <div className="w-full h-full rounded-[40px] overflow-hidden border-8 border-black sticker-shadow rotate-3 hover:rotate-0 transition-transform duration-500 bg-surface-variant">
                <img
                  alt="Waffle House Story"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                />
              </div>
              {/* Badge sticker overlay */}
              <div className="absolute -bottom-4 left-4 sm:-left-6 sm:-bottom-6 bg-strawberry-pop border-4 border-black text-white font-black text-lg sm:text-xl px-4 py-3 sm:px-6 sm:py-4 rounded-3xl sticker-shadow -rotate-12 select-none animate-pulse">
                🧁 Mutluluk Kutusu!
              </div>
            </div>
          </div>
        </section>

        {/* Values Section (Değerlerimiz) */}
        <section className="py-12 bg-black border-y-8 border-black text-white relative overflow-hidden select-none">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-display-lg text-[32px] sm:text-[40px] md:text-[56px] font-extrabold text-center text-honey-glaze uppercase drop-shadow-[4px_4px_0px_#FF2E63] mb-16">
              BİZİ BİZ YAPANLAR
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {/* Value 1 */}
              <div className="bg-white text-black p-6 sm:p-8 rounded-3xl border-8 border-white sticker-shadow -rotate-2 hover:rotate-0 transition-transform duration-300 flex flex-col gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-tertiary-container border-4 border-black flex items-center justify-center -rotate-6 shadow-[4px_4px_0px_0px_#000]">
                  <span className="material-symbols-outlined text-black text-2xl sm:text-3xl font-bold">verified</span>
                </div>
                <h3 className="font-black text-xl sm:text-2xl uppercase">Duble Kalite</h3>
                <p className="font-bold text-base sm:text-lg text-neutral-ink">
                  Dondurulmuş ürünlere karşıyız! Hamurumuz her sabah taze yoğrulur, Belçika çikolatalarımız en saf haliyle eritilir.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white text-black p-6 sm:p-8 rounded-3xl border-8 border-white sticker-shadow rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-honey-glaze border-4 border-black flex items-center justify-center rotate-6 shadow-[4px_4px_0px_0px_#000]">
                  <span className="material-symbols-outlined text-black text-2xl sm:text-3xl font-bold">mood</span>
                </div>
                <h3 className="font-black text-xl sm:text-2xl uppercase">Samimi Enerji</h3>
                <p className="font-bold text-base sm:text-lg text-neutral-ink">
                  Şubemize adım attığınız andan itibaren yüksek enerjili müzikler, renkli stickerlar ve güler yüzle karşılanırsınız.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white text-black p-6 sm:p-8 rounded-3xl border-8 border-white sticker-shadow -rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-strawberry-pop border-4 border-black flex items-center justify-center -rotate-3 shadow-[4px_4px_0px_0px_#000]">
                  <span className="material-symbols-outlined text-white text-2xl sm:text-3xl font-bold">celebration</span>
                </div>
                <h3 className="font-black text-xl sm:text-2xl text-black uppercase">Sınır Yok!</h3>
                <p className="font-bold text-base sm:text-lg text-neutral-ink">
                  Waffle'ınızın patronu sizsiniz! Sosların, taze meyvelerin ve çıtır toppinglerin miktarını tamamen zevkinize göre seçin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section (Sayılarla Biz) */}
        <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-white rounded-[40px] border-8 border-black sticker-shadow p-6 md:p-16 -rotate-1">
            <h2 className="font-black text-[26px] sm:text-[36px] md:text-[48px] text-center text-black uppercase mb-16">
              SAYILARLA BERLİNER WAFFLE CAPPADOCİA
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
              {/* Stat 1 */}
              <div className="flex flex-col gap-2 p-4 sm:p-6 bg-tertiary-container rounded-2xl border-4 border-black sticker-shadow rotate-2 hover:rotate-0 transition-transform duration-300">
                <span className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                  50K+
                </span>
                <span className="font-bold text-sm sm:text-md md:text-lg text-black uppercase">
                  Mutlu Müşteri
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-2 p-4 sm:p-6 bg-honey-glaze rounded-2xl border-4 border-black sticker-shadow -rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                  1
                </span>
                <span className="font-bold text-sm sm:text-md md:text-lg text-black uppercase">
                  Şube
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col gap-2 p-4 sm:p-6 bg-[#ffdea8] rounded-2xl border-4 border-black sticker-shadow rotate-1 hover:rotate-0 transition-transform duration-300">
                <span className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                  15+
                </span>
                <span className="font-bold text-sm sm:text-md md:text-lg text-black uppercase">
                  Sos & Topping
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col gap-2 p-4 sm:p-6 bg-strawberry-pop rounded-2xl border-4 border-black sticker-shadow -rotate-2 hover:rotate-0 transition-transform duration-300 text-white">
                <span className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold">
                  %100
                </span>
                <span className="font-bold text-sm sm:text-md md:text-lg uppercase">
                  Lezzet Garantisi
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Branches Section (Şubelerimiz) */}
        <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-black text-[26px] sm:text-[36px] md:text-[48px] text-center text-black uppercase mb-4">
            ŞUBELERİMİZ
          </h2>
          <p className="text-center font-bold text-lg text-neutral-ink mb-12">
            Sizi en yakın noktada bekliyoruz!
          </p>

          <div className="max-w-lg mx-auto">
            {/* Branch 1 — Nevşehir Merkez */}
            <div className="bg-strawberry-pop rounded-[32px] border-8 border-black sticker-shadow p-8 flex flex-col gap-4 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-strawberry-pop text-3xl icon-fill">location_on</span>
                </div>
                <div>
                  <h3 className="font-black text-2xl uppercase text-white">Nevşehir Merkez</h3>
                  <span className="inline-block bg-white text-strawberry-pop font-black text-xs px-3 py-1 rounded-full mt-1">Tek Şubemiz</span>
                </div>
              </div>
              <p className="font-bold text-lg text-white">
                2000 Evler Mahallesi, Nevşehir Merkez
              </p>
              <div className="flex items-center gap-2 font-bold text-sm text-white/80">
                <span className="material-symbols-outlined text-base">schedule</span>
                Her gün açık
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSent(true);
      // Reset form fields
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Clear message after 4 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 4000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      <main className="flex-grow min-h-screen pb-24">
        {/* Page Header */}
        <section className="relative w-full bg-light-pink border-b-8 border-black py-16 px-margin-mobile md:px-margin-desktop overflow-hidden text-center select-none">
          {/* Floating design elements */}
          <span className="material-symbols-outlined text-[80px] md:text-[100px] text-strawberry-pop absolute -top-5 left-10 -z-10 animate-float opacity-80 mix-blend-color-burn">
            favorite
          </span>
          <span className="material-symbols-outlined text-[80px] md:text-[100px] text-tertiary-container absolute -bottom-5 right-10 -z-10 animate-spin-slow opacity-80 mix-blend-color-burn">
            star
          </span>
          
          <div className="max-w-container-max mx-auto">
            <h1 className="font-display-lg text-[40px] sm:text-[56px] md:text-[80px] font-extrabold text-black tracking-tight uppercase">
              <span className="text-honey-glaze block rotate-2 bg-black px-6 py-2.5 sm:px-8 sm:py-3 w-fit mx-auto rounded-3xl mb-4">
                İLETİŞİM
              </span>
            </h1>
            <p className="font-body-lg text-lg sm:text-xl md:text-2xl font-black text-black bg-white/80 p-4 rounded-2xl border-4 border-black w-fit max-w-[280px] sm:max-w-md md:max-w-none mx-auto sticker-shadow -rotate-1 mt-4">
              Bize Ulaşın, Tatlı Sohbetlere Başlayalım!
            </p>
          </div>
        </section>

        {/* Contact Form & Info Cards */}
        <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-6 md:p-12 rounded-[40px] border-8 border-black sticker-shadow rotate-1">
              <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-black uppercase mb-8 drop-shadow-[2px_2px_0px_#FF2E63]">
                İletişim Formu
              </h2>

              {isSent && (
                <div className="bg-tertiary-container text-black border-4 border-black font-black text-base sm:text-xl px-6 py-4 rounded-2xl sticker-shadow -rotate-2 mb-8 animate-bounce">
                  🎉 Mesajınız bize ulaştı! En kısa sürede dönüş yapacağız.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-bold text-base sm:text-lg">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-black uppercase">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adınız ve Soyadınız"
                    className="border-4 border-black font-bold text-lg sm:text-xl px-4 py-3 sm:px-6 sm:py-4 rounded-2xl w-full focus:outline-none focus:bg-honey-glaze/10 focus:border-honey-glaze transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-black uppercase">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="E-posta Adresiniz"
                    className="border-4 border-black font-bold text-lg sm:text-xl px-4 py-3 sm:px-6 sm:py-4 rounded-2xl w-full focus:outline-none focus:bg-honey-glaze/10 focus:border-honey-glaze transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-black uppercase">Konu</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Mesajınızın Konusu"
                    className="border-4 border-black font-bold text-lg sm:text-xl px-4 py-3 sm:px-6 sm:py-4 rounded-2xl w-full focus:outline-none focus:bg-honey-glaze/10 focus:border-honey-glaze transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-black uppercase">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Waffle Aşkınızı Bizimle Paylaşın..."
                    className="border-4 border-black font-bold text-lg sm:text-xl px-4 py-3 sm:px-6 sm:py-4 rounded-2xl w-full focus:outline-none focus:bg-honey-glaze/10 focus:border-honey-glaze transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="bg-strawberry-pop text-white border-4 border-black font-black text-xl sm:text-2xl py-4 sm:py-5 rounded-2xl sticker-shadow sticker-shadow-hover sticker-shadow-active transition-all cursor-pointer mt-4 flex justify-center items-center gap-3"
                >
                  MESAJI GÖNDER
                  <span className="material-symbols-outlined text-[24px] sm:text-[32px]">send</span>
                </button>
              </form>
            </div>

            {/* Info Cards Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
              {/* Card 1 - Phone & Mail */}
              <div className="bg-[#ffdea8] p-6 sm:p-8 rounded-[32px] border-8 border-black sticker-shadow -rotate-2 hover:rotate-0 transition-transform duration-300 flex flex-col gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_#000]">
                  <span className="material-symbols-outlined text-black text-xl sm:text-2xl font-bold">call</span>
                </div>
                <h3 className="font-black text-xl sm:text-2xl uppercase text-black">Hızlı İletişim</h3>
                <div className="font-bold text-base sm:text-lg text-black flex flex-col gap-1">
                  <span>📞 Telefon: +90 (212) 555 44 33</span>
                  <span>✉️ E-posta: merhaba@berlinerwaffle.com</span>
                </div>
              </div>

              {/* Card 2 - Address */}
              <div className="bg-tertiary-container p-6 sm:p-8 rounded-[32px] border-8 border-black sticker-shadow rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_#000]">
                  <span className="material-symbols-outlined text-black text-xl sm:text-2xl font-bold">location_on</span>
                </div>
                <h3 className="font-black text-xl sm:text-2xl uppercase text-black">Şubemiz</h3>
                <p className="font-bold text-base sm:text-lg text-black">
                  Berliner Waffle Cappadocia<br />
                  2000 Evler Mahallesi<br />
                  Nevşehir Merkez, Nevşehir
                </p>
              </div>

              {/* Card 3 - Hours */}
              <div className="bg-honey-glaze p-6 sm:p-8 rounded-[32px] border-8 border-black sticker-shadow -rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_#000]">
                  <span className="material-symbols-outlined text-black text-xl sm:text-2xl font-bold">schedule</span>
                </div>
                <h3 className="font-black text-xl sm:text-2xl uppercase text-black">Çalışma Saatleri</h3>
                <div className="font-bold text-base sm:text-lg text-black">
                  <p>Hafta İçi & Sonu: 12:00 - 02:00</p>
                  <p className="text-strawberry-pop underline decoration-wavy decoration-2 mt-1">
                    Gece acıkanlar için servisimiz devam ediyor!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branch Office Section */}
        <section className="py-12 bg-black border-y-8 border-black text-white relative overflow-hidden select-none">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-display-lg text-[28px] sm:text-[40px] md:text-[56px] font-extrabold text-center text-honey-glaze uppercase drop-shadow-[4px_4px_0px_#FF2E63] mb-16">
              ŞUBEMİZ
            </h2>
            
            <div className="flex justify-center text-black">
              {/* Single Branch Card */}
              <div className="bg-white p-6 sm:p-10 md:p-12 rounded-[32px] border-8 border-white sticker-shadow rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-xl text-center">
                <h3 className="font-black text-2xl sm:text-3xl uppercase mb-4">Nevşehir Merkez Şube</h3>
                <p className="font-bold text-lg sm:text-xl text-neutral-ink mb-6">
                  2000 Evler Mahallesi, Nevşehir Merkez / Nevşehir
                </p>
                <span className="bg-tertiary-container font-black text-base sm:text-lg px-4 py-2.5 sm:px-6 sm:py-3 border-4 border-black rounded-2xl sticker-shadow cursor-pointer hover:bg-honey-glaze transition-colors inline-block">
                  📍 Şubeyi Haritada Gör
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

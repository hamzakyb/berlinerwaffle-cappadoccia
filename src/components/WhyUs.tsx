/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function WhyUs() {
  return (
    <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-hidden relative select-none">
      {/* Big decorative text */}
      <div className="absolute top-0 left-0 -z-10 opacity-20 pointer-events-none w-full overflow-hidden">
        <h2 className="font-black text-[120px] md:text-[200px] leading-none text-outline whitespace-nowrap -rotate-12 transform -translate-y-10 md:-translate-y-20">
          WAFFLE JOY WAFFLE JOY
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-6 sm:p-8 md:p-16 rounded-[40px] border-8 border-black sticker-shadow rotate-1">
        {/* Text Content */}
        <div className="lg:col-span-6 flex flex-col gap-10">
          <div>
            <h2 className="font-black text-[36px] sm:text-[48px] md:text-[64px] leading-tight text-black mb-6 uppercase drop-shadow-[4px_4px_0px_#FF2E63]">
              Sıradanlığı<br />Unutun!
            </h2>
            <p className="font-bold text-lg sm:text-2xl text-black bg-honey-glaze p-4 sm:p-6 rounded-2xl border-4 border-black -rotate-1">
              Berliner Waffle Cappadocia olarak, klasik tabak waffle anlayışını yıkıyoruz. Sokak lezzeti
              kültürünü, en kaliteli malzemelerle ve{" "}
              <span className="bg-black text-white px-2">modern bir sunumla</span> birleştiriyoruz.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="flex items-center gap-4 sm:gap-6 bg-tertiary-container p-4 sm:p-6 rounded-3xl border-4 border-black sticker-shadow hover:translate-x-2 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-4 border-black flex items-center justify-center shrink-0 -rotate-6">
                <span className="material-symbols-outlined text-black text-2xl sm:text-3xl">egg_alt</span>
              </div>
              <div>
                <h4 className="font-black text-xl sm:text-2xl text-black mb-1 uppercase">Günlük Taze Hamur</h4>
                <p className="font-bold text-sm sm:text-lg text-black">
                  Asla dondurulmuş ürün kullanmıyoruz. Hamurumuz her sabah taze hazırlanır.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 sm:gap-6 bg-strawberry-pop text-white p-4 sm:p-6 rounded-3xl border-4 border-black sticker-shadow hover:translate-x-2 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-4 border-black flex items-center justify-center shrink-0 rotate-6">
                <span className="material-symbols-outlined text-black text-2xl sm:text-3xl">nutrition</span>
              </div>
              <div>
                <h4 className="font-black text-xl sm:text-2xl mb-1 uppercase">Premium Malzemeler</h4>
                <p className="font-bold text-sm sm:text-lg">
                  En kaliteli Belçika çikolataları ve mevsimin en taze meyvelerini seçiyoruz.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 sm:gap-6 bg-[#ffdea8] p-4 sm:p-6 rounded-3xl border-4 border-black sticker-shadow hover:translate-x-2 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-4 border-black flex items-center justify-center shrink-0 -rotate-3">
                <span className="material-symbols-outlined text-black text-2xl sm:text-3xl">directions_walk</span>
              </div>
              <div>
                <h4 className="font-black text-xl sm:text-2xl text-black mb-1 uppercase">Pratik Sunum</h4>
                <p className="font-bold text-sm sm:text-lg text-black">
                  Kova veya bardak konseptimizle, lezzeti dilediğin yere rahatça taşı.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Composition */}
        <div className="lg:col-span-6 relative h-[360px] sm:h-[480px] md:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
          <div className="absolute top-6 right-0 w-4/5 h-3/4 rounded-[30px] sm:rounded-[40px] overflow-hidden border-8 border-black sticker-shadow z-10 hover:rotate-3 transition-transform duration-500 bg-surface-variant">
            <img
              alt="Fresh Batter"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSXF4kshIpyCMnCBNtsXgrDntcswx_BOLacQhukiXfVZilpUWhm5_uMrJ7O2wO8ZYsNzYqJymISi4LxU5wAZWc4uim-uuDSDbT3klAigjvDO2vumF04nB0dTNA-OfblwQYjofWzjI5MUkn1Vq1TLfeBGKhB-F-WXx79OtTatqGpNNLhynKaXRxY77RG1bNrkfhaB6Cn-9ynZQ5fck4SW16sbzjDOed09R6LsKPwjQYKA9IK7CT3Gg0Gq2J9DGvB_IyrlAKddXTVkA"
            />
          </div>
          <div className="absolute bottom-6 left-0 w-3/4 h-2/3 rounded-[30px] sm:rounded-[40px] overflow-hidden border-8 border-black sticker-shadow z-20 -rotate-6 hover:-rotate-2 transition-transform duration-500 bg-surface-variant">
            <img
              alt="Premium Ingredients"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu7HXX3lQZKB2o4U7swWmTmH9kfHmUxVi9ni_MW-2pt3FSrATCrOoz1KiEeQIW5ph2vdv4HhR-JD6Ka9V8sRWfW6NlPSm4LTyVFvT6cKAfbAMHkJg5yR9TXl9ANf4sqmf_eTiAbmxEu7mb95W_Z8GC1ZBPKfaESguQKzxZKuKOz_ZqUarOULqkKFceFXiXRASjN3D6ZTjCyXK7IjYDkMSmhsrQuOPg6tAeqE-PFqAWxOeMtGbeHlez9XHpPLBGNI5pcc-BK_fMiKs"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-honey-glaze rounded-full mix-blend-multiply opacity-80 blur-2xl z-30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

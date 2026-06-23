"use client";

import { ArrowRight, Star, Heart, Shield, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_DATA, WHATSAPP_NUMBER, WHATSAPP_TEMPLATE_DEFAULT } from "../data";

export default function Hero() {
  const handleRegisterClick = () => {
    const customMessage = "Halo Admin Al Azzhar, saya ingin mendaftarkan anak saya. Bagaimana prosedur pendaftaran siswa baru untuk tahun ajaran aktif?";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
    window.open(url, "_blank", "referrer");
  };

  const scrollToFasilitas = () => {
    const element = document.getElementById("fasilitas");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-36 bg-gradient-to-b from-brand-purple/10 via-white to-white overflow-hidden"
    >
      {/* Ambient background kids elements - hand crafted pastel blobs */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-joy-yellow/25 rounded-full filter blur-2xl -z-10 animate-pulse duration-[8s]" />
      <div className="absolute right-10 top-40 w-72 h-72 bg-joy-pink/20 rounded-full filter blur-3xl -z-10 animate-bounce duration-[12s]" />
      <div className="absolute left-[30%] bottom-10 w-64 h-64 bg-joy-green/20 rounded-full filter blur-2xl -z-10" />

      {/* Floating Animated Bee Mascot */}
      <motion.div
        animate={{
          x: [0, 35, 15, -25, 0],
          y: [0, -25, 15, -10, 0],
          rotate: [0, 8, -12, 8, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-24 left-[12%] text-4xl select-none z-10 pointer-events-none cursor-pointer group"
      >
        <span className="inline-block hover:scale-125 transition-transform duration-300 pointer-events-auto">🐝</span>
      </motion.div>

      {/* Smiling Sun Mascot */}
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-16 right-[12%] text-5xl select-none -z-10 pointer-events-none opacity-95"
      >
        ☀️
      </motion.div>

      {/* Floating Butterfly Mascot */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-3, 8, -3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-[6%] text-3xl select-none z-10 pointer-events-auto cursor-pointer hover:scale-125 transition-transform"
      >
        🦋
      </motion.div>

      {/* Soft Clouds */}
      <motion.div
        animate={{ x: [-8, 8, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[32%] text-4xl opacity-35 pointer-events-none -z-10"
      >
        ☁️
      </motion.div>
      <motion.div
        animate={{ x: [8, -8, 8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-64 left-[4%] text-3xl opacity-30 pointer-events-none -z-10"
      >
        ☁️
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Promos and Headings */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Promo Tag banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center self-center lg:self-start space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3.5 py-1.5 rounded-full mb-6"
              id="hero-banner-accent"
            >
              <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">
                PPDB TA {BRAND_DATA.academicYear} • Dibuka {BRAND_DATA.registrationStart}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6"
              id="hero-main-heading"
            >
              Belajar Seru, <br />
              Tumbuh Ceria di <br />
              <span className="text-brand-purple relative inline-block">
                {BRAND_DATA.name}
                <svg
                  className="absolute bottom-1 left-0 w-full h-3 text-joy-yellow -z-10 fill-current"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0,7 C30,2 70,2 100,7 L100,10 L0,10 Z" />
                </svg>
              </span>
            </motion.h1>

            {/* Supportive Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
              id="hero-subtagline"
            >
              {BRAND_DATA.subTagline}
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              id="hero-action-container"
            >
              {/* Primary: WhatsApp registered */}
              <button
                id="btn-hero-register"
                onClick={handleRegisterClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-purple text-white hover:bg-brand-purple/90 font-bold rounded-bubble shadow-lg hover:shadow-brand-purple/20 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center space-x-2 text-base text-center"
              >
                <span>Daftar PPDB Online</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary: scroll to fasilitas */}
              <button
                id="btn-hero-facilities"
                onClick={scrollToFasilitas}
                className="w-full sm:w-auto px-7 py-4 bg-white text-gray-700 hover:text-brand-purple border border-gray-200 hover:border-brand-purple/30 rounded-bubble font-bold hover:shadow-md transition-all cursor-pointer flex items-center justify-center space-x-1 text-base text-center"
              >
                <span>Lihat Fasilitas Kami</span>
              </button>
            </motion.div>

            {/* Trust Badges - Stat Mini Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
              id="hero-trust-badges"
            >
              <div className="flex flex-col items-center lg:items-start p-3 bg-white hover:shadow-sm border border-gray-100 rounded-2xl transition-all">
                <div className="flex items-center space-x-1.5 mb-1 text-brand-purple">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-bold">AKREDITASI</span>
                </div>
                <span className="text-sm font-extrabold text-gray-800 leading-tight">Grade A (2000-Skrg)</span>
              </div>

              <div className="flex flex-col items-center lg:items-start p-3 bg-white hover:shadow-sm border border-gray-100 rounded-2xl transition-all">
                <div className="flex items-center space-x-1.5 mb-1 text-joy-green">
                  <Star className="w-4 h-4 fill-joy-green" />
                  <span className="text-sm font-bold">METODE</span>
                </div>
                <span className="text-sm font-extrabold text-gray-800 leading-tight">Indoor & Outdoor</span>
              </div>

              <div className="flex flex-col items-center lg:items-start p-3 bg-white hover:shadow-sm border border-gray-100 rounded-2xl transition-all">
                <div className="flex items-center space-x-1.5 mb-1 text-joy-pink">
                  <Heart className="w-4 h-4 fill-joy-pink text-joy-pink" />
                  <span className="text-sm font-bold">BELAJAR</span>
                </div>
                <span className="text-sm font-extrabold text-gray-800 leading-tight">Karakter & Outbond</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Beautiful High Fidelity Cover Grid */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none"
              id="hero-visual-frame"
            >
              {/* Outer play decorations */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-2xl bg-joy-yellow flex items-center justify-center transform -rotate-12 shadow-md">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="absolute -bottom-6 right-8 w-14 h-14 rounded-full bg-joy-pink flex items-center justify-center transform rotate-12 shadow-lg">
                <Heart className="w-7 h-7 text-white fill-white" />
              </div>
              <div className="absolute top-[40%] -right-4 w-10 h-10 rounded-xl bg-joy-green flex items-center justify-center transform rotate-45 shadow-sm">
                <Shield className="w-5 h-5 text-white" />
              </div>

              {/* Main Styled Photo Container */}
              <div className="bg-white p-3 rounded-bubble shadow-xl border border-gray-100 transform hover:rotate-1 transition-all duration-500">
                <div className="overflow-hidden rounded-bubble aspect-symmetrical relative">
                  <img
                    src="/images/Hero_section.png"
                    alt="Anak-anak gembira sedang belajar bersama guru di TK Al Azzhar Muara Enim"
                    referrerPolicy="no-referrer"
                    className="w-full h-[360px] md:h-[420px] object-cover rounded-bubble hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating floating label in bottom block */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-brand-purple/5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-joy-yellow flex items-center justify-center">
                        <span className="text-base">🤗</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 tracking-wider">LOKASI</p>
                        <p className="text-xs font-extrabold text-brand-purple">{BRAND_DATA.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tiny decorative sticker */}
              <div className="absolute left-6 -bottom-4 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 flex items-center space-x-2">
                <Star className="w-2.5 h-2.5  fill-joy-green text-joy-green" />
                <span className="text-xs font-bold text-gray-600">Terakreditasi BAN-PAUD</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Playful Wavy SVG Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[32px] md:h-[48px] text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

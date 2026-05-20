import { useState } from "react";
import { BookOpen, Check, Target, Compass, Award, ShieldAlert, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND_DATA } from "../data";

export default function Profil() {
  const [activeTab, setActiveTab] = useState<"sejarah" | "visimisi">("sejarah");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const pillars = [
    {
      title: "Pendidikan Islami",
      description: "Pembekalan karakter muslim sejak dini meliputi shalat dhuha Berjamaah, doa harian, & akhlakul karimah.",
      icon: Compass,
      color: "bg-brand-purple/10 text-brand-purple border-brand-purple/20"
    },
    {
      title: "Active Joyful Learning",
      description: "Proses belajar berbasis bermain (learning by playing) untuk memicu nalar kritis, rasa ingin tahu dasar & motorik.",
      icon: BookOpen,
      color: "bg-joy-green/15 text-emerald-700 border-joy-green/30"
    },
    {
      title: "Pendekatan Individu",
      description: "Memahami keunikan minat bakat masing-masing anak dengan penuh kasih sayang tanpa membandingkan.",
      icon: Award,
      color: "bg-joy-yellow/15 text-amber-700 border-joy-yellow/35"
    }
  ];

  const faqs = [
    {
      q: "Berapakah batas minimal usia anak untuk mendaftar?",
      a: "Bagi jenjang Playgroup (Kelompok Bermain), minimal usia anak adalah berkisar 3 tahun di awal tahun pelajaran. Sedangkan untuk jenjang TK A minimal 4 tahun, dan TK B minimal 5 tahun."
    },
    {
      q: "Bagaimanakah kurikulum utama yang diajarkan?",
      a: "Kami menggunakan integrasi istimewa antara Kurikulum Merdeka PAUD Republik Indonesia dengan muatan khusus nilai Keislaman khas Al Azzhar yang dikemas menyenangkan (sentra bermain kreatif, praktik adab, mengaji, dan pengenalan karakter)."
    },
    {
      q: "Apakah disediakan katering makanan/snack sehat?",
      a: "Sekolah secara rutin menyelenggarakan 'Hari Snack Sehat Bersama' sebanyak satu kali seminggu demi membiasakan anak menyantap asupan bergizi seimbang (buah, sayur, sereal, susu) tanpa pungutan biaya tambahan."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section
      id="profil"
      className="py-16 md:py-24 bg-white relative scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-purple uppercase tracking-widest bg-brand-purple/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Mengenal Sekolah Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 font-sans tracking-tight">
            Profil & Yayasan <span className="text-brand-purple">Al Azzhar</span>
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto rounded-full mt-4" />
        </div>

        {/* Dynamic Nav-Tabs for Sejarah vs Visi Misi */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1.5 rounded-2xl inline-flex space-x-1 border border-gray-200 shadow-inner">
            <button
              id="tab-sejarah"
              onClick={() => setActiveTab("sejarah")}
              className={`px-6 py-3 text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === "sejarah"
                  ? "bg-white text-brand-purple shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Sejarah & Profil Singkat
            </button>
            <button
              id="tab-visimisi"
              onClick={() => setActiveTab("visimisi")}
              className={`px-6 py-3 text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === "visimisi"
                  ? "bg-white text-brand-purple shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Visi, Misi & Tujuan
            </button>
          </div>
        </div>

        {/* Tabs Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT INTERACTIVE AREA: CONTENT SPECIFIC */}
          <div className="lg:col-span-7 relative">
            {/* Playful star sticker */}
            <div className="absolute -top-6 -left-6 text-2xl select-none animate-bounce z-15 pointer-events-none">⭐</div>
            <div className="absolute -bottom-6 right-6 text-2xl select-none animate-pulse z-15 pointer-events-none">✨</div>

            <AnimatePresence mode="wait">
              {activeTab === "sejarah" ? (
                <motion.div
                  key="sejarah-content"
                  initial={{ opacity: 0, scale: 0.98, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 bg-white border-2 border-dashed border-brand-purple/30 rounded-bubble p-6 sm:p-8 md:p-10 shadow-md relative -rotate-0.5"
                  id="profile-sejarah-card"
                >
                  {/* Binder Spirals */}
                  <div className="absolute -top-4.5 left-10 right-10 flex justify-between px-6 z-10 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-3.5 h-8 bg-gray-300 rounded-full border-2 border-gray-400 shadow-sm" />
                    ))}
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 leading-tight pt-2">
                    Membangun Fondasi Masa Depan yang Cemerlang
                  </h3>
                  <p className="text-gray-650 leading-relaxed font-semibold">
                    {BRAND_DATA.history}
                  </p>
                  
                  <div className="p-6 bg-brand-purple/5 border border-brand-purple/10 rounded-2xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-brand-purple/5 rounded-full -mr-8 -mt-8" />
                    <h4 className="text-base font-extrabold text-brand-purple mb-2">Nilai Inti Bimbingan Kami:</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-semibold">
                      Kami berpegang teguh bahwa dunia anak adalah dunia bermain. Setiap sentuhan edukasi diarahkan tanpa tekanan fisik maupun verbal, menciptakan jaminan rasa aman yang mendalam di hati guru, siswa, dan orang tua murid.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-joy-green/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      </div>
                      <span className="text-xs font-bold text-gray-700">Lingkungan sejuk 100% full AC</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-joy-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-amber-600 stroke-[3]" />
                      </div>
                      <span className="text-xs font-bold text-gray-700">Rasio belajar kondusif (8 siswa/guru)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-joy-pink/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-rose-600 stroke-[3]" />
                      </div>
                      <span className="text-xs font-bold text-gray-700">Pendidikan pembiasaan akhlak harian</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-purple stroke-[3]" />
                      </div>
                      <span className="text-xs font-bold text-gray-700">Gedung representatif mudah diakses</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="visimisi-content"
                  initial={{ opacity: 0, scale: 0.98, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 bg-white border-2 border-dashed border-brand-purple/30 rounded-bubble p-6 sm:p-8 md:p-10 shadow-md relative rotate-0.5"
                  id="profile-visimisi-card"
                >
                  {/* Binder Spirals */}
                  <div className="absolute -top-4.5 left-10 right-10 flex justify-between px-6 z-10 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-3.5 h-8 bg-gray-300 rounded-full border-2 border-gray-400 shadow-sm" />
                    ))}
                  </div>

                  {/* Visi */}
                  <div className="p-6 bg-joy-pink/10 border-2 border-dashed border-joy-pink/40 rounded-3xl relative pt-8">
                    <div className="absolute -top-4 left-6 bg-joy-pink text-white px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md -rotate-2">
                      Visi Utama
                    </div>
                    <p className="text-base sm:text-lg font-black text-gray-900 leading-relaxed">
                      &quot;{BRAND_DATA.vision}&quot;
                    </p>
                  </div>

                  {/* Misi */}
                  <div>
                    <h4 className="text-base font-extrabold text-gray-900 mb-4 flex items-center space-x-2">
                      <Target className="w-5 h-5 text-brand-purple" />
                      <span>Misi Yayasan Al Azzhar:</span>
                    </h4>
                    <ul className="space-y-3.5">
                      {BRAND_DATA.missions.map((mission, index) => (
                        <li key={index} className="flex items-start space-x-3 bg-gray-50 p-3.5 rounded-2xl border border-gray-100 hover:border-brand-purple/10 transition-all hover:scale-[1.01]">
                          <div className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            {index + 1}
                          </div>
                          <span className="text-xs sm:text-sm text-gray-750 font-bold leading-relaxed">
                            {mission}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDEBAR: CORE PILLARS & ACCORDION FAQS */}
          <div className="lg:col-span-5 space-y-8">
            {/* Core Pillars Widget */}
            <div className="space-y-4" id="profile-pillars-list">
              <h4 className="text-sm font-extrabold text-gray-400 tracking-wider uppercase mb-2">3 Pilar Utama Kami</h4>
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white border rounded-2xl flex items-start space-x-4 shadow-xs"
                  >
                    <div className={`p-3 rounded-2xl shrink-0 ${pillar.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-gray-900 text-base mb-1">{pillar.title}</h5>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Accordion FAQs widget */}
            <div className="p-6 bg-gray-50/80 border border-gray-100 rounded-3xl space-y-4" id="profile-faq-section">
              <h4 className="text-sm font-extrabold text-gray-900 tracking-wide mb-2">
                Pertanyaan Sering Diajukan (FAQ)
              </h4>
              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isExpanded = expandedFaq === index;
                  return (
                    <div
                      key={index}
                      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-rotate-0.5 active:scale-[0.99] ${
                        isExpanded
                          ? "border-brand-purple/40 shadow-md ring-4 ring-brand-purple/5"
                          : "border-gray-100 shadow-sm"
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4.5 font-bold text-gray-800 text-xs md:text-sm text-left hover:text-brand-purple transition-colors cursor-pointer"
                        id={`faq-btn-${index}`}
                      >
                        <span className="pr-4 flex items-center space-x-2">
                          <span className="text-joy-pink font-extrabold text-sm">❓</span>
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${
                            isExpanded ? "transform rotate-180 text-brand-purple" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="p-4.5 pt-0 text-xs md:text-sm text-gray-500 font-semibold leading-relaxed border-t border-dashed border-gray-100 bg-gray-50/50">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

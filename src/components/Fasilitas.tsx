import { useState } from "react";
import { Baby, Tv, BookOpen, Compass, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { FACILITIES_DATA } from "../data";

export default function Fasilitas() {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const getExtraInfo = (id: string) => {
    switch (id) {
      case "fac-1":
        return [
          "Karpet busa EVA tebal 3cm berstandar keselamatan.",
          "Semua mainan lolos uji kelayakan SNI bebas racun (BPA free).",
          "Dibersihkan menggunakan disinfektan ramah anak setiap sore."
        ];
      case "fac-2":
        return [
          "Suhu terjaga stabil pada rentang sejuk sehat 24-25°C.",
          "Smart TV LED 55 inci interaktif untuk lagu edukatif anak.",
          "Meja kursi tumpul ergonomis mencegah si kecil terbentur."
        ];
      case "fac-3":
        return [
          "Tersedia lebih dari 200 koleksi buku dongeng & ensiklopedia mini.",
          "Didesain akustik hening agar meningkatkan ketenangan baca.",
          "Karpet bulu halus nyaman untuk mendengarkan dongeng bersama."
        ];
      default:
        return [];
    }
  };

  return (
    <section
      id="fasilitas"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-purple uppercase tracking-widest bg-brand-purple/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Kenyamanan Si Kecil Utama
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 font-sans tracking-tight">
            Fasilitas Sekolah <span className="text-brand-purple">Representatif</span>
          </h2>
          <p className="text-gray-550 mt-4 text-base font-semibold max-w-xl mx-auto">
            Setiap jengkal sarana fisik di yayasan didesain prima untuk kenyamanan berekspresi, keselamatan fisik, serta stimulasi audio-visual si kecil.
          </p>
          <div className="w-16 h-1 bg-brand-purple mx-auto rounded-full mt-4" />
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FACILITIES_DATA.map((facility) => {
            // Determine icon Component
            const getIcon = (name: string) => {
              if (name === "Baby") return <Baby className="w-6 h-6 text-brand-purple" />;
              if (name === "Tv") return <Tv className="w-6 h-6 text-rose-500" />;
              return <BookOpen className="w-6 h-6 text-emerald-600" />;
            };

            const isSelected = selectedFacility === facility.id;

            return (
              <motion.div
                key={facility.id}
                whileHover={{ y: -5 }}
                className={`flex flex-col h-full bg-white border border-gray-100 rounded-bubble p-4 shadow-sm transition-all relative overflow-hidden`}
                id={`facility-card-${facility.id}`}
              >
                {/* Image layout inside card */}
                <div className="relative overflow-hidden rounded-2xl aspect-video mb-5 shadow-xs">
                  <img
                    src={facility.imageUrl}
                    alt={facility.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 p-2 rounded-xl shadow-md border border-gray-50">
                    {getIcon(facility.iconName)}
                  </div>
                </div>

                {/* Info Text */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-900 mb-2 leading-tight">
                      {facility.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed mb-4">
                      {facility.description}
                    </p>
                  </div>

                  {/* Dynamic interactive detail button */}
                  <div>
                    <button
                      id={`btn-toggle-facility-detail-${facility.id}`}
                      onClick={() => setSelectedFacility(isSelected ? null : facility.id)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-purple hover:underline cursor-pointer group/btn"
                    >
                      <span>{isSelected ? "Sembunyikan Standard Keamanan" : "Lihat Spesifikasi Layanan"}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "rotate-95" : "group-hover/btn:translate-x-0.5"}`} />
                    </button>

                    {/* Expandable Safety Details */}
                    {isSelected && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-200/50 animate-fade-in">
                        {getExtraInfo(facility.id).map((info, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-brand-purple mt-0.5 text-xs text-rose-500 shrink-0">✨</span>
                            <span className="text-xs font-bold text-gray-750 leading-relaxed">{info}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Safety trust badge bottom bar */}
        <div className="mt-16 bg-brand-purple/5 border border-brand-purple/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs text-xl">
              🛡️
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm">Prinsip Lingkungan Belajar Nihil Bahaya</h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Semua instalasi listrik terlindung penutup khusus, ujung dinding dilapisi karet tebal, serta diawasi cermat.</p>
            </div>
          </div>
          <button
            id="btn-fasilitas-chat-now"
            onClick={() => {
              const url = `https://wa.me/${6285368942200}?text=${encodeURIComponent("Halo Admin, saya ingin menanyakan lebih detail mengenai standar kebersihan dan pengawasan fisik anak di lingkungan sekolah Al Azzhar.")}`;
              window.open(url, "_blank");
            }}
            className="w-full sm:w-auto px-5 py-3 bg-brand-purple text-white hover:bg-brand-purple/90 rounded-xl font-bold text-xs whitespace-nowrap cursor-pointer transition-all"
          >
            Tanya Pengawasan Fisik
          </button>
        </div>

      </div>
    </section>
  );
}

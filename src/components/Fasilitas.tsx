"use client";

import { useState } from "react";
import { Baby, Compass, ChevronRight, BookOpen, Waves } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FACILITIES_DATA } from "../data";

export default function Fasilitas() {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const getExtraInfo = (id: string) => {
    switch (id) {
      case "fac-1":
        return [
          "Didesain khusus ramah anak dengan sajadah mini empuk.",
          "Sarana tempat wudhu balita dengan tinggi aman disesuaikan.",
          "Pembelajaran praktik sholat dhuha jamaah & hafalan doa harian."
        ];
      case "fac-2":
        return [
          "Dilengkapi dengan meja-kursi ukuran anak-anak yang ergonomis dan aman.",
          "Ventilasi sirkulasi udara alami yang optimal didukung kipas angin agar kelas tetap sejuk.",
          "Pajangan hasil karya kreativitas anak untuk membangkitkan rasa percaya diri belajar."
        ];
      case "fac-3":
        return [
          "Dilengkapi ayunan kokoh, perosotan fiberglass, & jungkat-jungkit.",
          "Lingkungan hijau asri, teduh, dengan pagar keliling 100% aman.",
          "Pengawasan super melekat oleh guru pendamping selama jam bermain."
        ];
      case "fac-4":
        return [
          "Kedalaman kolam renang yang sangat dangkal dan dirancang 100% aman bagi anak usia dini.",
          "Dilengkapi dengan aneka mainan bola warna-warni ceria yang disukai anak-anak.",
          "Wajib didampingi langsung oleh guru kelas pendamping untuk keamanan bermain air."
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
            Setiap sarana fisik didesain prima untuk kenyamanan bermain, keselamatan fisik, serta stimulasi motorik ceria si kecil.
          </p>
          <div className="w-16 h-1 bg-brand-purple mx-auto rounded-full mt-4" />
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((facility) => {
            // Determine icon Component
            const getIcon = (name: string) => {
              if (name === "Compass") return <Compass className="w-6 h-6 text-brand-purple" />;
              if (name === "BookOpen") return <BookOpen className="w-6 h-6 text-rose-500" />;
              if (name === "Baby") return <Baby className="w-6 h-6 text-amber-500" />;
              return <Waves className="w-6 h-6 text-emerald-600" />;
            };

            const getCardStyles = (id: string) => {
              switch (id) {
                case "fac-1":
                  return {
                    borderColor: "border-brand-purple/40",
                    hoverBorderColor: "hover:border-brand-purple",
                    stickerText: "Ibadah 🕌",
                    stickerBg: "bg-brand-purple text-white"
                  };
                case "fac-2":
                  return {
                    borderColor: "border-joy-pink/60",
                    hoverBorderColor: "hover:border-joy-pink",
                    stickerText: "Belajar 📚",
                    stickerBg: "bg-joy-pink text-rose-950"
                  };
                case "fac-3":
                  return {
                    borderColor: "border-joy-yellow/60",
                    hoverBorderColor: "hover:border-joy-yellow",
                    stickerText: "Bermain 🎈",
                    stickerBg: "bg-joy-yellow text-amber-950"
                  };
                default: // fac-4
                  return {
                    borderColor: "border-joy-green/60",
                    hoverBorderColor: "hover:border-joy-green",
                    stickerText: "Renang 🏊",
                    stickerBg: "bg-joy-green text-emerald-950"
                  };
              }
            };

            const isSelected = selectedFacility === facility.id;
            const cardStyles = getCardStyles(facility.id);

            return (
              <motion.div
                key={facility.id}
                whileHover={{ y: -8, rotate: facility.id === "fac-1" ? -1 : facility.id === "fac-2" ? 1 : facility.id === "fac-3" ? -0.5 : 0.5 }}
                className={`flex flex-col h-full bg-white border-2 border-dashed ${cardStyles.borderColor} ${cardStyles.hoverBorderColor} rounded-bubble p-5 shadow-sm transition-all relative overflow-hidden`}
                id={`facility-card-${facility.id}`}
              >
                {/* Cute Corner Sticker Tape */}
                <div className={`absolute -top-1.5 -right-1 px-4 py-2 z-10 text-[9px] font-black uppercase tracking-wider shadow-sm ${cardStyles.stickerBg} -rotate-6 border-b border-l border-white/20 rounded-bl-xl`}>
                  {cardStyles.stickerText}
                </div>

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
                    <h3 className="text-md font-black text-gray-900 mb-2 leading-tight">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-semibold leading-relaxed mb-4">
                      {facility.description}
                    </p>
                  </div>

                  {/* Dynamic interactive detail button */}
                  <div>
                    <button
                      id={`btn-toggle-facility-detail-${facility.id}`}
                      onClick={() => setSelectedFacility(isSelected ? null : facility.id)}
                      className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-brand-purple hover:underline cursor-pointer group/btn"
                    >
                      <span>{isSelected ? "Sembunyikan Standard Keamanan" : "Lihat Spesifikasi Layanan"}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "rotate-95" : "group-hover/btn:translate-x-0.5"}`} />
                    </button>

                    {/* Expandable Safety Details */}
                    {isSelected && (
                      <div className="mt-4 p-3 bg-gray-55 rounded-xl space-y-2 border border-dashed border-gray-300 animate-fade-in">
                        {getExtraInfo(facility.id).map((info, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-brand-purple mt-0.5 text-xs text-rose-500 shrink-0">✨</span>
                            <span className="text-[10px] font-bold text-gray-750 leading-relaxed">{info}</span>
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
        </div>

      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { MessageCircle, X, ShieldAlert, BadgeInfo, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WHATSAPP_NUMBER, WHATSAPP_TEMPLATE_DEFAULT } from "../data";

export default function WhatsAppCTA() {
  const [showPopover, setShowPopover] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  // Automatically trigger assistant greeting bubble after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setShowPopover(true);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [hasClosed]);

  const handleOpeningAction = (customMsg?: string) => {
    const textMsg = customMsg || WHATSAPP_TEMPLATE_DEFAULT;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textMsg)}`;
    window.open(url, "_blank", "referrer");
  };

  const chips = [
    {
      label: "💰 Rincian Biaya",
      msg: "Halo Admin Al Azzhar, saya ingin bertanya lebih lanjut tentang kemudahan skema biaya angsuran masuk TK/Playgroup. Apakah ada diskon pendaftaran bulan ini?"
    },
    {
      label: "📝 Syarat Daftar",
      msg: "Halo Admin Al Azzhar, apa saja berkas atau kelengkapan administrasi yang perlu disiapkan untuk mendaftarkan anak saya sebagai siswa baru?"
    },
    {
      label: "🏫 Info Kelas",
      msg: "Halo Admin Al Azzhar, boleh kami dijelaskan perbedaan aktivitas belajar harian antara Kelompok Bermain (Playgroup) dengan kelas TK?"
    }
  ];

  return (
    <div id="floating-whatsapp-trigger" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 1. Welcoming Assistant Popover */}
      <AnimatePresence>
        {showPopover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-brand-purple/15 rounded-3xl p-5 mb-4 shadow-2xl max-w-[280px] sm:max-w-xs relative text-left"
            id="whatsapp-greeting-popover"
          >
            {/* Soft backdrop circle inside popover */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-brand-purple/5 rounded-full -mr-3 -mt-3" />

            {/* Bubble Header */}
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-extrabold text-gray-900">Admin Utama Yayasan</span>
              </div>
              <button
                onClick={() => {
                  setShowPopover(false);
                  setHasClosed(true);
                }}
                className="text-gray-400 hover:text-gray-600 p-0.5 rounded-neutral cursor-pointer"
                aria-label="Close popover"
                id="btn-close-popover"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body Quote */}
            <p className="text-xs text-gray-600 leading-relaxed font-semibold mb-3">
              Selamat datang Ayah & Bunda! Ada yang bisa kami bantu? Klik topik di bawah untuk memproses pesan Anda langsung secara instan:
            </p>

            {/* Inquiries Fast Chips */}
            <div className="space-y-1.5 mb-2">
              {chips.map((chip, idx) => (
                <button
                  key={idx}
                  id={`whatsapp-popover-chip-${idx}`}
                  onClick={() => handleOpeningAction(chip.msg)}
                  className="w-full text-left bg-gray-55 hover:bg-brand-purple/5 border border-gray-100 hover:border-brand-purple/20 px-3 py-2 rounded-xl text-[11px] font-bold text-gray-700 hover:text-brand-purple transition-all cursor-pointer flex items-center justify-between group"
                >
                  <span>{chip.label}</span>
                  <span className="text-[10px] text-gray-300 group-hover:text-brand-purple font-bold">→</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Primary Pulsating Circular WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleOpeningAction()}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-whatsapp text-white flex items-center justify-center shadow-xl hover:bg-emerald-500 transition-all cursor-pointer relative"
        aria-label="Chat admin on WhatsApp"
        id="btn-floating-whatsapp-bubble"
      >
        {/* Pulsing ring layers */}
        <span className="absolute inset-0 rounded-full bg-brand-whatsapp animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        
        {/* Small orange unread marker notification */}
        {!showPopover && !hasClosed && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="block w-1.5 h-1.5 bg-white rounded-full" />
          </span>
        )}
      </motion.button>

    </div>
  );
}

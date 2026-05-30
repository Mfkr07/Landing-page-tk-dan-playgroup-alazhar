import { useState } from "react";
import { Check, Info, FileText, Send, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FEE_STRUCTURES, WHATSAPP_NUMBER } from "../data";

export default function Biaya() {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  // Track selected fee component IDs for the calculator
  const [selectedFeeIds, setSelectedFeeIds] = useState<Record<string, boolean>>(() => {
    // Select all components initially
    const initial: Record<string, boolean> = {};
    FEE_STRUCTURES.forEach((prog) => {
      prog.items.forEach((item) => {
        initial[item.id] = true;
      });
    });
    return initial;
  });

  const activeProgram = FEE_STRUCTURES[activeTabIdx];

  const toggleFeeSelection = (id: string) => {
    setSelectedFeeIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Compute calculated values
  const currentSelectedItems = activeProgram.items.filter((item) => selectedFeeIds[item.id]);
  const calculatedTotal = currentSelectedItems.reduce((acc, item) => acc + item.nominal, 0);

  // Formatting Rupiah currencies elegantly
  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleShareCostToWhatsapp = () => {
    const listText = currentSelectedItems
      .map((item) => `- ${item.component}: ${formatRupiah(item.nominal)}`)
      .join("\n");

    const textPrompt = `Halo Admin Al Azzhar, saya sudah mencoba simulasi kalkulator biaya masuk sekolah untuk jenjang *${activeProgram.programName}* di website. 

Berikut adalah opsi rincian yang saya pilih:
${listText}

*ESTIMASI TOTAL AWAL:* ${formatRupiah(calculatedTotal)}

Boleh kami menanyakan informasi ketersediaan kuota siswa baru, jadwal pendaftaran fisik terdekat, serta opsi skema pembayaran angsuran? Terima kasih banyak.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textPrompt)}`;
    window.open(url, "_blank", "referrer");
  };

  return (
    <section
      id="biaya"
      className="py-16 md:py-24 bg-gray-50/50 border-y border-gray-100 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-purple uppercase tracking-widest bg-brand-purple/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Transparansi Finansial Yayasan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 font-sans tracking-tight">
            Rincian Biaya <span className="text-brand-purple">Pendaftaran</span>
          </h2>
          <p className="text-gray-550 mt-4 text-gray-600 text-sm md:text-base font-semibold max-w-xl mx-auto">
            Kami menjamin tidak ada biaya siluman (tersembunyi). Rincian biaya dirancang bertahap demi keadilan operasional dan kenyamanan orang tua wali.
          </p>
          <div className="w-16 h-1 bg-brand-purple mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT AREA: INTERACTIVE CALCULATOR ENGINE */}
          <div className="lg:col-span-7 space-y-6">

            {/* Tab switchers */}
            <div className="flex bg-white p-1 rounded-2xl border border-gray-150 shadow-xs">
              {FEE_STRUCTURES.map((program, idx) => (
                <button
                  key={idx}
                  id={`btn-tab-biaya-${idx}`}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`flex-1 text-center py-3 px-4 text-xs md:text-sm font-extrabold rounded-xl transition-all cursor-pointer ${activeTabIdx === idx
                    ? "bg-brand-purple text-white shadow-xs"
                    : "text-gray-500 hover:text-gray-800"
                    }`}
                >
                  {program.programName}
                </button>
              ))}
            </div>

            {/* List of items under active tab */}
            <div className="bg-white border rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="border-b border-gray-100 pb-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-md font-extrabold text-gray-950 uppercase tracking-wide">
                    {activeProgram.programName}
                  </h3>
                  <p className="text-xs text-gray-400 font-bold mt-0.5">{activeProgram.subTitle}</p>
                </div>
                
                {/* Program Details Badges */}
                <div className="flex flex-wrap gap-2 shrink-0">
                  <span className="text-[10px] font-black bg-brand-purple/10 text-brand-purple px-2.5 py-1 rounded-lg border border-brand-purple/20">
                    🕒 {activeProgram.hours}
                  </span>
                  <span className="text-[10px] font-black bg-joy-pink/15 text-rose-700 px-2.5 py-1 rounded-lg border border-joy-pink/30">
                    👶 Usia: {activeProgram.ageLimit}
                  </span>
                </div>
              </div>

              <div className="space-y-3.5" id="biaya-items-list">
                {activeProgram.items.map((item) => {
                  const isChecked = !!selectedFeeIds[item.id];
                  const isIncluded = item.nominal === 0;

                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: isIncluded ? 1 : 1.01, x: isIncluded ? 0 : 4 }}
                      whileTap={{ scale: isIncluded ? 1 : 0.99 }}
                      id={`biaya-item-container-${item.id}`}
                      onClick={() => !isIncluded && toggleFeeSelection(item.id)}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        isIncluded
                          ? "bg-emerald-50/30 border-emerald-250 cursor-default"
                          : isChecked
                          ? "bg-brand-purple/5 border-brand-purple shadow-sm cursor-pointer"
                          : "bg-white border-dashed border-gray-250 opacity-75 hover:opacity-100 cursor-pointer"
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        {/* Checkbox circle indicator */}
                        <div
                          className={`w-5.5 h-5.5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                            isIncluded
                              ? "bg-emerald-500 border-emerald-500 text-white"
                              : isChecked
                              ? "bg-brand-purple border-brand-purple text-white animate-wiggle"
                              : "bg-white border-gray-300"
                          }`}
                        >
                          {(isIncluded || isChecked) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>

                        {/* Component title & description */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                            <span className="font-black text-gray-900 text-sm sm:text-base leading-tight">
                              {item.component}
                            </span>
                            <span className={`font-black text-sm sm:text-base shrink-0 ${isIncluded ? "text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200" : "text-brand-purple"}`}>
                              {isIncluded ? "Termasuk (Free)" : formatRupiah(item.nominal)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 font-semibold leading-relaxed mb-2 pr-4">
                            {item.description}
                          </p>

                          {/* One-time vs Monthly badge */}
                          <span
                            className={`inline-block text-[9px] font-black px-2.5 py-0.5 rounded-md ${
                              isIncluded
                                ? "bg-emerald-100 text-emerald-700"
                                : item.isOneTime
                                ? "bg-violet-100 text-brand-purple"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {isIncluded ? "Fasilitas Gratis Paket" : item.isOneTime ? "Sekali di Awal" : "Iuran Bulanan / Rutin"}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Calculator Helpful Notice banner */}
              <div className="pt-4 flex items-start space-x-2.5 text-gray-400">
                <Info className="w-4.5 h-4.5 text-brand-purple shrink-0 mt-0.5" />
                <p className="text-[11px] font-semibold leading-relaxed">
                  Gunakan tombol centang di atas untuk mematikan atau menghidupkan item biaya guna mensimulasikan kisaran total keuangan awal yang perlu Anda persiapkan.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: FINALIZED BILLING ESTIMATION REPORT CARD */}
          <div className="lg:col-span-5 relative pt-4">
            <div className="bg-white border-2 border-dashed border-brand-purple/35 p-6 sm:p-8 rounded-3xl shadow-xl sticky top-24 relative overflow-hidden">
              {/* Notebook binding dots overlay */}
              <div className="absolute top-0 inset-x-0 h-3 flex justify-around px-8 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 -mt-1 rounded-full bg-gray-250 border border-gray-300 shadow-inner" />
                ))}
              </div>

              <div className="flex items-center space-x-2 text-brand-purple mb-4 pt-2">
                <FileText className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">Kalkulator Biaya</span>
              </div>

              <h4 className="text-lg font-black text-gray-950 mb-4 leading-tight">
                Simulasi Keuangan Masuk Sekolah
              </h4>

              {/* Breakdown line items mini widget */}
              <div className="space-y-3 pb-6 mb-6 border-b border-dashed border-gray-200">
                {currentSelectedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-semibold truncate max-w-[200px]">{item.component}</span>
                    <span className="text-gray-900 font-bold">{formatRupiah(item.nominal)}</span>
                  </div>
                ))}
                {currentSelectedItems.length === 0 && (
                  <p className="text-xs text-center text-gray-400 py-4 font-bold">
                    Silakan centang opsi komponen biaya di sebelah kiri.
                  </p>
                )}
              </div>

              {/* Large Grand Total Box */}
              <div className="bg-joy-yellow/10 border-2 border-dashed border-joy-yellow p-4.5 rounded-2xl mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-950">ESTIMASI TOTAL AWAL</span>
                  <span className="text-[9px] font-black bg-joy-yellow text-amber-950 px-2 py-0.5 rounded-md shadow-xs">TERHITUNG</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-brand-purple tracking-tight mt-1">
                  {formatRupiah(calculatedTotal)}
                </div>
              </div>

              {/* Call to action: Whatsapp registered */}
              <button
                id="btn-share-biaya-wa"
                onClick={handleShareCostToWhatsapp}
                disabled={currentSelectedItems.length === 0}
                className={`w-full flex items-center justify-center space-x-2 text-white py-4 rounded-2xl font-black text-sm shadow-md transition-all cursor-pointer hover:scale-103 active:scale-97 transform ${currentSelectedItems.length > 0
                  ? "bg-brand-whatsapp hover:bg-emerald-500 hover:shadow-lg"
                  : "bg-gray-300 pointer-events-none"
                  }`}
              >
                <Send className="w-4.5 h-4.5" />
                <span>Kirim Rincian ke Admin</span>
              </button>

              <div className="mt-4 flex items-center justify-center space-x-1.5 text-xs text-gray-400 font-semibold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Tersedia harga angsuran termuda di Admin!</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

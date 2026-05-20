import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimoni() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const activeTesti = TESTIMONIALS_DATA[currentIdx];

  // Auto scroll testimonials every 8 seconds for responsive layout
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star
        key={idx}
        className={`w-4 h-4 ${
          idx < rating ? "text-joy-yellow fill-joy-yellow" : "text-gray-200"
        }`}
      />
    ));
  };

  // Custom motion variants for slide animations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section
      id="testimoni"
      className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-12"
    >
      {/* Visual Ambient elements */}
      <div className="absolute top-10 left-[-5%] w-40 h-40 bg-joy-pink/10 rounded-full filter blur-xl" />
      <div className="absolute bottom-10 right-[-5%] w-48 h-48 bg-joy-green/10 rounded-full filter blur-xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-purple uppercase tracking-widest bg-brand-purple/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Kata Orang Tua Wali
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 font-sans tracking-tight">
            Bagaimana Pengalaman <span className="text-brand-purple">Mereka?</span>
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto rounded-full mt-4" />
        </div>

        {/* Carousel Content */}
        <div className="relative max-w-3xl mx-auto">
          {/* Floating decorative stickers */}
          <div className="absolute -top-12 -right-6 text-4xl select-none animate-float pointer-events-none z-10">🎈</div>
          <div className="absolute -bottom-8 -left-6 text-3xl select-none animate-float-slow pointer-events-none z-10">🌸</div>

          <div className="bg-white border-2 border-dashed border-brand-purple/30 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-lg relative" id="testimoni-card-frame">
            {/* Soft background blob inside */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-joy-pink/5 rounded-full -mr-8 -mb-8 pointer-events-none" />

            {/* Huge Quote Graphic Mark */}
            <div className="absolute top-6 left-6 text-brand-purple/10">
              <Quote className="w-14 h-14 rotate-180" />
            </div>

            <div className="min-h-[180px] flex flex-col justify-between relative z-10">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIdx}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Star rating */}
                  <div className="flex space-x-1 hover:scale-105 transition-transform duration-300 cursor-pointer">{renderStars(activeTesti.rating)}</div>

                  {/* Comment quote */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 font-extrabold italic leading-relaxed text-left">
                    &quot;{activeTesti.quote}&quot;
                  </p>

                  {/* Presenter info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-dashed border-gray-150">
                    <img
                      src={activeTesti.avatarUrl}
                      alt={activeTesti.parentName}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-purple/30 shadow-sm"
                    />
                    <div className="text-left">
                      <h4 className="font-black text-gray-900 text-sm sm:text-md">
                        {activeTesti.parentName}
                      </h4>
                      <p className="text-xs text-brand-purple font-black">
                        Wali dari {activeTesti.childName}
                      </p>
                      <p className="text-[10px] text-gray-400 font-bold">
                        {activeTesti.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slide Navigator Buttons - Manual Arrows */}
          <div className="flex justify-center items-center space-x-4 mt-8" id="testi-manual-controls">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white hover:bg-brand-purple/5 text-gray-600 hover:text-brand-purple border border-gray-150 flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
              aria-label="Previous quote"
              id="btn-prev-testi"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Micro Dots indicators */}
            <div className="flex space-x-2">
              {TESTIMONIALS_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  id={`btn-dot-testi-${dotIdx}`}
                  onClick={() => {
                    setDirection(dotIdx > currentIdx ? 1 : -1);
                    setCurrentIdx(dotIdx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    dotIdx === currentIdx
                      ? "bg-brand-purple w-7"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white hover:bg-brand-purple/5 text-gray-600 hover:text-brand-purple border border-gray-150 flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
              aria-label="Next quote"
              id="btn-next-testi"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

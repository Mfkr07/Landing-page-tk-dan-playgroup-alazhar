import { useState, MouseEvent } from "react";
import { ZoomIn, X, MessageCircle, Heart, FolderCheck, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ACTIVITIES_DATA, WHATSAPP_NUMBER } from "../data";
import { ActivityPhoto } from "../types";

export default function Galeri() {
  const [selectedPhoto, setSelectedPhoto] = useState<ActivityPhoto | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setLikedPhotos(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAskAboutActivity = (photo: ActivityPhoto) => {
    const customMessage = `Halo Admin Al Azzhar, saya melihat dokumentasi aktivitas anak mengenai "${photo.title}" (${photo.category}) di website. Boleh diceritakan lebih lanjut bagaimana rutinitas kegiatan tersebut berlangsung?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
    window.open(url, "_blank", "referrer");
  };

  return (
    <section
      id="galeri"
      className="py-16 md:py-24 bg-gray-50 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-brand-purple uppercase tracking-widest bg-brand-purple/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Meriah & Menyenangkan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 font-sans tracking-tight">
            Galeri Kegiatan <span className="text-brand-purple">Si Kecil</span>
          </h2>
          <p className="text-gray-550 mt-4 text-base font-semibold max-w-xl mx-auto">
            Dokumentasi orisinal aktivitas harian anak di sekolah. Pembelajaran seru dikemas cerdas untuk menyalakan potensi kepemimpinan si kecil.
          </p>
          <div className="w-16 h-1 bg-brand-purple mx-auto rounded-full mt-4" />
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="gallery-photo-grid">
          <AnimatePresence mode="popLayout">
            {ACTIVITIES_DATA.map((photo, index) => {
              const isLiked = !!likedPhotos[photo.id];
              const rotationDeg = index % 2 === 0 ? -1.5 : 1.5;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1, rotate: rotationDeg }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.04, rotate: rotationDeg * -0.5, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  key={photo.id}
                  id={`gallery-item-${photo.id}`}
                  onClick={() => setSelectedPhoto(photo)}
                  className="bg-white p-3.5 pb-6 rounded-bubble shadow-sm border border-gray-150 cursor-pointer hover:shadow-xl transition-shadow relative flex flex-col justify-between h-[310px]"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-square w-full shadow-xs mb-3 bg-gray-50">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />

                    {/* Category Pill Overlays on top right */}
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-xs py-0.5 px-2 rounded-full text-[9px] font-bold text-brand-purple border border-brand-purple/10">
                      {photo.category}
                    </div>

                    {/* Like Button Overlay on top left */}
                    <button
                      onClick={(e) => toggleLike(photo.id, e)}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-gray-400 hover:text-rose-500 hover:scale-110 active:scale-90 transition-all cursor-pointer shadow-sm"
                      aria-label="Like photo"
                      id={`btn-like-photo-${photo.id}`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-500 text-rose-500 animate-ping" : ""}`} />
                      {isLiked && <Heart className="absolute w-3.5 h-3.5 fill-rose-500 text-rose-500" />}
                    </button>
                  </div>

                  {/* Polaroid handwritten-like bottom label */}
                  <div className="text-center px-1">
                    <span className="text-xs font-black text-gray-800 tracking-wide line-clamp-1 group-hover:text-brand-purple">
                      {photo.title}
                    </span>
                    <div className="mt-1.5 flex items-center justify-center text-[10px] text-brand-purple font-extrabold">
                      <ZoomIn className="w-3 h-3 mr-1" />
                      <span>Lihat Detail</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Facebook Link Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.facebook.com/profile.php?id=100095022677052"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple hover:bg-brand-purple/90 text-white font-extrabold px-8 py-3.5 rounded-full inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer text-xs md:text-sm"
            id="btn-gallery-more-facebook"
          >
            <Facebook className="w-4 h-4" />
            <span>Lihat Lebih Banyak di Facebook</span>
          </a>
        </div>

        {/* Lightbox Overlay Drawer Component */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              id="gallery-lightbox-modal"
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <div
                className="relative bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button top-right */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
                  id="btn-close-lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Display Body */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 sm:h-80 md:h-[400px] bg-gray-100">
                    <img
                      src={selectedPhoto.imageUrl}
                      alt={selectedPhoto.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-bold rounded-full inline-block mb-3.5">
                        {selectedPhoto.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-3">
                        {selectedPhoto.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        {selectedPhoto.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-400 font-semibold mb-3">
                        Tertarik menerapkan bimbingan harian ini ke si buah hati?
                      </p>
                      <button
                        id="btn-lightbox-ask-admin"
                        onClick={() => handleAskAboutActivity(selectedPhoto)}
                        className="w-full flex items-center justify-center space-x-2 bg-brand-whatsapp text-white py-3 rounded-xl font-extrabold text-xs shadow-md hover:bg-emerald-500 cursor-pointer transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Tanyakan Mengenai Kelas Ini</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

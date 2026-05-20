import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAVIGATION_ITEMS, BRAND_DATA, WHATSAPP_NUMBER, WHATSAPP_TEMPLATE_DEFAULT } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky header
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

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEMPLATE_DEFAULT)}`;
    window.open(url, "_blank", "referrer");
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md py-3 border-b border-brand-purple/10"
          : "bg-white/80 backdrop-blur-xs py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-3 cursor-pointer text-left group"
              id="header-logo"
            >
              <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Logo Al Azzhar"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="block text-lg font-bold text-brand-purple leading-tight font-sans">
                  AL AZZHAR
                </span>
                <span className="block text-xs text-gray-400 font-medium tracking-wide">
                  MUARA ENIM
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.targetId}
                  onClick={() => scrollToSection(item.targetId)}
                  className="px-3 py-2 text-sm font-semibold text-gray-600 hover:text-brand-purple rounded-xl transition-all duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button
                id="btn-desktop-chat-admin"
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 bg-brand-whatsapp text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-emerald-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Admin</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-600 hover:text-brand-purple hover:bg-gray-100 transition-all duration-200"
                aria-label="Toggle menu"
                id="btn-mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="mobile-navigation-overlay"
            className="fixed inset-0 z-30 pt-20 bg-white/98 backdrop-blur-md flex flex-col justify-between"
          >
            <div className="px-6 py-4 flex flex-col space-y-2 overflow-y-auto">
              <div className="pb-4 mb-4 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Menu Navigasi</span>
              </div>
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.button
                  key={item.targetId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.targetId)}
                  className="w-full text-left py-3 px-4 text-base font-bold text-gray-700 hover:text-brand-purple hover:bg-brand-purple/5 rounded-2xl transition-all duration-200 cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="p-6 bg-gray-50/80 border-t border-gray-100">
              <p className="text-xs text-center text-gray-500 mb-4 font-medium">
                Punya pertanyaan cepat? Hubungi nomor admin utama kami melalui WhatsApp.
              </p>
              <button
                id="btn-mobile-chat-admin"
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2 bg-brand-whatsapp text-white py-3.5 rounded-2xl font-bold rounded-bubble shadow-md hover:bg-emerald-500 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hubungi Admin Utama</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

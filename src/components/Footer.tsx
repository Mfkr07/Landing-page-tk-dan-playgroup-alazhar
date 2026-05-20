import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, Send } from "lucide-react";
import { BRAND_DATA, WHATSAPP_NUMBER } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleRegisterClick = () => {
    const customMessage = "Halo Admin Al Azzhar, saya tertarik menyekolahkan anak saya di TK & Playgroup Al Azzhar Muara Enim. Boleh dibantu pendaftaran gelombang baru?";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
    window.open(url, "_blank", "referrer");
  };

  return (
    <footer id="footer-control" className="bg-gray-950 text-gray-300">
      
      {/* 1. Concluding Interactive Banner Section */}
      <div className="relative py-14 sm:py-20 bg-brand-purple overflow-hidden text-center text-white">
        {/* Background bubbles */}
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest bg-white/20 px-4 py-1.5 rounded-full inline-block">
            Mulai Bersama Kami
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans leading-tight">
            Berikan Fondasi Terbaik <br className="hidden sm:block" />
            Bagi Masa Depan Si Buah Hati
          </h3>
          <p className="text-md sm:text-lg text-white/90 max-w-xl mx-auto font-medium">
            Kursi pendaftaran terbatas di setiap gelombang kelas demi menjamin kenyamanan rasio mengajar anak.
          </p>
          <div className="pt-2">
            <button
              id="btn-footer-bottom-register"
              onClick={handleRegisterClick}
              className="px-8 py-4 bg-joy-yellow text-amber-950 font-extrabold hover:bg-yellow-400 rounded-bubble font-bold shadow-xl hover:shadow-yellow-500/15 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-base"
            >
              Daftar Siswa Baru Sekarang (WhatsApp)
            </button>
          </div>
        </div>
      </div>

      {/* 2. Structured Information Blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Col 1: Brand details & accreditation */}
          <div className="lg:col-span-4 space-y-5" id="footer-col-brand">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5.5 h-5.5"
                >
                  <path d="m12 3-1.912 5.886H3.886L9 12.553l-1.912 5.886L12 14.827l4.912 3.612L15 12.553l5.114-3.667h-6.202L12 3z" />
                </svg>
              </div>
              <div>
                <span className="block text-lg font-bold tracking-tight">AL AZZHAR</span>
                <span className="block text-xs text-gray-500 font-bold tracking-widest">MUARA ENIM</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-semibold leading-relaxed">
              {BRAND_DATA.subTagline}
            </p>
            <div className="flex items-center space-x-2.5 text-xs text-gray-400 bg-white/5 border border-white/10 p-3 rounded-xl max-w-sm">
              <ShieldCheck className="w-5 h-5 text-joy-green shrink-0" />
              <span className="font-bold leading-normal">
                Yayasan Al Azzhar resmi berizin Kemenkumham RI & Terakreditasi Badan Akreditasi Nasional (BAN-PAUD)
              </span>
            </div>
          </div>

          {/* Col 2: Operational Info & Phone numbers */}
          <div className="lg:col-span-4 space-y-5" id="footer-col-operasional">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-2 border-brand-purple pl-2.5">
              Info Kontak & Layanan
            </h4>

            <ul className="space-y-3 px-0.5">
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="w-4.5 h-4.5 text-joy-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-gray-200">Jam Operasional:</span>
                  <span className="block text-xs text-gray-400 font-semibold mt-0.5">Senin - Jumat: 07:30 - 12:00 WIB</span>
                  <span className="block text-xs text-gray-400 font-semibold">Sabtu: 08:00 - 11:00 WIB</span>
                </div>
              </li>

              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-4.5 h-4.5 text-joy-pink shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-gray-200">Kontak Admin Utama:</span>
                  <a
                    href="https://wa.me/6285368942200"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-xs text-brand-whatsapp hover:underline font-extrabold mt-0.5"
                  >
                    +62 853-6894-2200 (Admin)
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-4.5 h-4.5 text-joy-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-gray-200">Surel Resmi Yayasan:</span>
                  <span className="block text-xs text-gray-400 font-medium mt-0.5">admin@alazzharmuaraenim.sch.id</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Elegant Google map integration and location details */}
          <div className="lg:col-span-4 space-y-5" id="footer-col-location">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-2 border-brand-purple pl-2.5">
              Alamat Kampus Kami
            </h4>

            {/* Address snippet */}
            <div className="flex items-start space-x-3 text-xs md:text-sm">
              <MapPin className="w-4.5 h-4.5 text-brand-purple shrink-0 mt-0.5" />
              <span className="text-gray-400 font-semibold leading-relaxed">
                Jl. Jenderal Sudirman No. 12, Kel. Pasar III, Kec. Muara Enim, Kabupaten Muara Enim, Sumatera Selatan, 31311.
              </span>
            </div>

            {/* Embedded maps iframe */}
            <div className="w-full h-36 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title="Peta Lokasi TK & Playgroup Al Azzhar Muara Enim"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127393.18956976935!2d103.74861218534346!3d-3.6521743936643663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e39958933b91fa3%3A0xe2ecdf56ddc73656!2sMuara%20Enim%2C%20Kec.%20Muara%20Enim%2C%20Kabupaten%20Muara%20Enim%2C%20Sumatera%20Selatan!5e0!3m2!1sid!2sid!4v1716186000000!5m2!1sid!2sid"
                className="w-full h-full border-none"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* 3. Bottom Credits */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-semibold gap-4">
          <p className="text-center sm:text-left">
            &copy; {currentYear} TK & Playgroup Al Azzhar Muara Enim. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center space-x-1.5 justify-center">
            <span>Dikembangkan dengan</span>
            <Heart className="w-3.5 h-3.5 text-joy-pink fill-joy-pink" />
            <span>untuk anak-anak hebat Muara Enim.</span>
          </div>
        </div>

      </div>

    </footer>
  );
}

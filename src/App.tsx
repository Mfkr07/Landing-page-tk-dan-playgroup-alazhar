import Header from "./components/Header";
import Hero from "./components/Hero";
import Profil from "./components/Profil";
import Fasilitas from "./components/Fasilitas";
import Galeri from "./components/Galeri";
import Biaya from "./components/Biaya";
import Testimoni from "./components/Testimoni";
import Footer from "./components/Footer";
import WhatsAppCTA from "./components/WhatsAppCTA";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-white selection:bg-brand-purple/20 selection:text-brand-purple">
      {/* 1. Header Navigation Bar */}
      <Header />

      {/* 2. Main Site sections */}
      <main id="main-content">
        {/* Section 1: Hero Cover */}
        <Hero />

        {/* Section 2: Profil & Visi Misi */}
        <Profil />

        {/* Section 3: Fasilitas Sekolah */}
        <Fasilitas />

        {/* Section 4: Galeri Aktivitas */}
        <Galeri />

        {/* Section 5: Rincian Biaya & Kalkulator */}
        <Biaya />

        {/* Section 6: Testimoni Orang Tua */}
        <Testimoni />
      </main>

      {/* 3. Footer Block & Maps */}
      <Footer />

      {/* 4. Floating Conversion Assistant Component */}
      <WhatsAppCTA />
    </div>
  );
}

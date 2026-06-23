import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import Profil from '@/src/components/Profil';
import Fasilitas from '@/src/components/Fasilitas';
import Galeri from '@/src/components/Galeri';
import Biaya from '@/src/components/Biaya';
import Testimoni from '@/src/components/Testimoni';
import Footer from '@/src/components/Footer';
import WhatsAppCTA from '@/src/components/WhatsAppCTA';

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans bg-white selection:bg-brand-purple/20 selection:text-brand-purple">
      <Header />
      <main id="main-content">
        <Hero />
        <Profil />
        <Fasilitas />
        <Galeri />
        <Biaya />
        <Testimoni />
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}

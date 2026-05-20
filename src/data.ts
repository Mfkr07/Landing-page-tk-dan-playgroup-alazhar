import { Facility, ActivityPhoto, ProgramFee, Testimonial, NavItem } from "./types";

export const WHATSAPP_NUMBER = "6281374141166"; // Real-looking Admin phone number in international format
export const WHATSAPP_TEMPLATE_DEFAULT = "Halo Admin Al Azzhar, saya tertarik untuk mendaftarkan anak saya di TK & Playgroup Al Azzhar Muara Enim. Boleh minta informasi lebih lanjut mengenai tata cara pendaftaran?";

export const BRAND_DATA = {
  name: "Al Azzhar Muara Enim",
  fullName: "TK & Playgroup Al Azzhar Muara Enim",
  tagline: "Membentuk Generasi Cerdas, Berkarakter Islami & Ceria",
  subTagline: "Pilihan terbaik bimbingan anak usia dini demi fondasi masa depan gemilang dengan lingkungan belajar ramah anak, berlimpah kasih sayang, dan metode bermain yang seru.",
  history: "Berdiri di bawah Yayasan Al Azzhar Muara Enim, lembaga kami berdedikasi tinggi menyajikan pendidikan karakter anak usia dini (PAUD). Kami percaya bahwa usia emas (golden age) adalah momentum krusial yang harus diisi dengan pembelajaran penuh sukacita, penanaman iman, dan stimulasi potensi minat bakat yang berimbang.",
  vision: "Menjadi lembaga pendidikan anak usia dini percontohan yang unggul dalam membentuk kepribadian Islami, kreatif, mandiri, dan berwawasan lingkungan.",
  missions: [
    "Menanamkan kecintaan pada nilai-nilai keislaman melalui pembiasaan ibadah harian yang menyenangkan.",
    "Mengembangkan kreativitas dan rasa ingin tahu anak secara optimal lewat metode active learning.",
    "Membiasakan sikap mandiri, peduli sesama, dan tanggung jawab sejak dini.",
    "Menyediakan lingkungan belajar yang aman, nyaman, higienis, serta asri.",
    "Membangun kemitraan yang harmonis dengan orang tua dalam mengawal tumbuh kembang anak."
  ]
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Beranda", targetId: "hero" },
  { label: "Profil", targetId: "profil" },
  { label: "Fasilitas", targetId: "fasilitas" },
  { label: "Galeri Kegiatan", targetId: "galeri" },
  { label: "Rincian Biaya", targetId: "biaya" },
  { label: "Testimoni", targetId: "testimoni" }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "fac-1",
    name: "Playground Indoor Ceria",
    description: "Area bermain dalam ruangan yang aman, berkarpet empuk, dilengkapi perosotan, kolam bola, dan balok susun kreatif untuk melatih motorik kasar anak secara bebas tanpa khawatir cuaca panas.",
    bgClass: "bg-joy-yellow/15 border-joy-yellow/40 hover:bg-joy-yellow/25",
    iconName: "Baby",
    imageUrl: "https://images.unsplash.com/photo-1566371486490-560ded239fe6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-2",
    name: "Ruang Kelas Full AC & Smart TV",
    description: "Ruang belajar sejuk dengan sirkulasi udara optimal dan meja-kursi ergonomis berukuran mini. Dilengkapi TV pintar interaktif untuk menunjang media pembelajaran audio-visual.",
    bgClass: "bg-joy-pink/15 border-joy-pink/40 hover:bg-joy-pink/25",
    iconName: "Tv",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-3",
    name: "Pojok Baca & Cozy Library",
    description: "Sudut baca interaktif dengan aneka buku bergambar, dongeng edukatif, sofa mini, dan boneka tangan sebagai sarana merangsang imajinasi serta kecintaan anak pada literasi sejak dini.",
    bgClass: "bg-joy-green/15 border-joy-green/40 hover:bg-joy-green/25",
    iconName: "BookOpen",
    imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop"
  }
];

export const ACTIVITIES_DATA: ActivityPhoto[] = [
  {
    id: "act-1",
    title: "Sentra Seni & Prakarya Mandiri",
    category: "Seni & Kreativitas",
    description: "Melukis dengan jari (finger painting), membuat karya kolase dari lilin malam, origami lucu, guna melatih saraf motorik halus serta keberanian berekspresi estetis.",
    imageUrl: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "act-2",
    title: "Pendidikan Karakter & Hafalan Doa",
    category: "Imtaq & Karakter",
    description: "Kegiatan wudhu bersama, shalat berjamaah dhuha, muraja’ah surat pendek juz amma, membiasakan adab kesopanan sehari-hari (senyum, sapa, salam, sopan, santun).",
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "act-3",
    title: "Eksplorasi Kebun & Sains Anak",
    category: "Sains & Lingkungan",
    description: "Menanam benih bunga sederhana di pot, melakukan uji coba pelangi dalam gelas air, melatih kepekaan ilmiah sederhana mengenai objek sekitar dengan terukur ceria.",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "act-4",
    title: "Senam Ceria & Fun Motoric Outdoors",
    category: "Olahraga & Fisik",
    description: "Senam pagi terpadu di setiap hari Jumat dengan musik ritmis gembira, dilanjutkan dengan lomba lari estafet kecil untuk membangun kebersamaan tim dan fisik prima.",
    imageUrl: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop"
  }
];

export const FEE_STRUCTURES: ProgramFee[] = [
  {
    programName: "Playgroup (KB - Kelompok Bermain)",
    subTitle: "Jenjang usia emas 3 - 4 tahun",
    items: [
      {
        id: "fee-kb-1",
        component: "Uang Pangkal / Pembangunan",
        nominal: 1100000,
        description: "Dibayarkan sekali di awal masuk. Meliputi pemeliharaan gedung, pemeliharaan AC, dan iuran sarana bermain.",
        isOneTime: true
      },
      {
        id: "fee-kb-2",
        component: "Seragam Lengkap (4 Setel)",
        nominal: 550000,
        description: "Meliputi seragam batik yayasan, olahraga, muslim formal, dan kasual rompi.",
        isOneTime: true
      },
      {
        id: "fee-kb-3",
        component: "Buku Paket & Alat Belajar (1 Tahun)",
        nominal: 400000,
        description: "Buku kerja bergambar, krayon kustom, portofolio anak, serta seluruh bahan eksperimen selama setahun.",
        isOneTime: true
      },
      {
        id: "fee-kb-4",
        component: "SPP Bulanan (Iuran SPP)",
        nominal: 180000,
        description: "Iuran operasional bulanan yang mencakup snack sehat bergizi seimbang satu kali seminggu.",
        isOneTime: false
      }
    ]
  },
  {
    programName: "Taman Kanak-Kanak (TK A & TK B)",
    subTitle: "Jenjang kesiapan sekolah dasar usia 4 - 6 tahun",
    items: [
      {
        id: "fee-tk-1",
        component: "Uang Pangkal / Pembangunan",
        nominal: 1350000,
        description: "Dibayarkan sekali di awal masuk. Meliputi pemeliharaan gedung, AC, sarana kelas interaktif, dan dana dhuha.",
        isOneTime: true
      },
      {
        id: "fee-tk-2",
        component: "Seragam Lengkap (5 Setel)",
        nominal: 650000,
        description: "Meliputi seragam batik khas, jas rompi unggulan, olahraga, busana muslim, kaos pramuka prasiaga.",
        isOneTime: true
      },
      {
        id: "fee-tk-3",
        component: "Buku Paket & Alat Belajar (1 Tahun)",
        nominal: 500000,
        description: "Pendistribusian buku tema terpadu dinas, buku hafalan hadits/surat, alat gambar lengkap, krayon, dan modul praktikum.",
        isOneTime: true
      },
      {
        id: "fee-tk-4",
        component: "SPP Bulanan (Iuran SPP)",
        nominal: 220000,
        description: "Iuran operasional bulanan komprehensif, mencakup kunjungan luar (Field Trip lokal) tanpa pungutan tambahan berkelanjutan.",
        isOneTime: false
      }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    parentName: "Bunda Rini Kartika",
    childName: "Rafandra (TK Swarna A)",
    role: "Ibu Rumah Tangga, Muara Enim",
    quote: "Awalnya Rafandra sangat tidak sabaran dan pemalu. Setelah 3 bulan di TK Al Azzhar, perkembangannya mencengangkan! Dia jadi antusias menghafal doa harian di rumah, bahkan setiap pagi bersemangat merapikan tas sendiri. Guru-guru di sini memperlakukan anak bagai permata pribadi, penuh kasih sayang dan sabar luar biasa.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-2",
    parentName: "Bapak Aditya Nugraha",
    childName: "Zahra (KB Melati)",
    role: "Karyawan BUMN, Muara Enim",
    quote: "Saya paling salut dengan transparansi manajemen keuangan yayasan dan kebersihan sekolahnya. Ruangan yang full AC membuat anak betah beraktivitas fisik tanpa gerah. Dan yang paling penting, anak saya bercerita ceria terus setiap kali pulang sekolah. Tidak ada paksaan belajar mencatut, semuanya lewat metode main ceria yang efektif.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-3",
    parentName: "Bunda Fatmawati",
    childName: "Kamil (TK Swarna B)",
    role: "Tenaga Kesehatan, Muara Enim",
    quote: "Sangat bersyukur menyekolahkan Kamil di sini. Metode pengenalan sains sederhana sangat melatih daya nalar kritisnya. Setiap hari ada saja hal menarik yang ia ceritakan, mulai dari mencampur warna sampai merawat bibit pohon tomatnya sendiri. Fasilitas lengkap, guru komunikatif, sangat kami rekomendasikan!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  }
];

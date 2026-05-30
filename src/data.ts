import { Facility, ActivityPhoto, ProgramFee, Testimonial, NavItem } from "./types";

export const WHATSAPP_NUMBER = "6285609913691"; // Primary contact from brochure
export const WHATSAPP_TEMPLATE_DEFAULT = "Halo Admin Al Azzhar, saya tertarik untuk mendaftarkan anak saya di TK & Playgroup Al Azzhar Muara Enim. Boleh minta informasi lebih lanjut mengenai tata cara pendaftaran?";

export const CONTACTS_DATA = [
  { name: "Admin 1", phone: "6285609913691", display: "0856-0991-3691" },
  { name: "Admin 2", phone: "6285764040080", display: "0857-6404-0080" },
  { name: "Admin 3", phone: "628974481560", display: "0897-4481-560" }
];

export const BRAND_DATA = {
  name: "Al Azzhar Muara Enim",
  fullName: "TK & Playgroup Al Azzhar Muara Enim",
  tagline: "Membentuk Generasi Cerdas, Berkarakter Islami & Ceria",
  subTagline: "Pilihan terbaik bimbingan anak usia dini demi fondasi masa depan gemilang dengan lingkungan belajar ramah anak, berlimpah kasih sayang, dan metode bermain yang seru.",
  history: "Berdiri di bawah Lembaga Pendidikan Islam Al-Azzhar, yayasan kami berdedikasi tinggi menyajikan pendidikan karakter anak usia dini (PAUD) berkualitas. Kami percaya bahwa usia emas (golden age) adalah momentum krusial yang harus diisi dengan pembelajaran penuh sukacita, penanaman iman, dan stimulasi potensi minat bakat yang berimbang.",
  vision: "Menjadi lembaga pendidikan anak usia dini percontohan yang unggul dalam membentuk kepribadian Islami, kreatif, mandiri, dan berwawasan lingkungan.",
  address: "Jalan: Ahmad yani no.4 b muara enim (Depan Enggano)",
  accreditation: "Akreditasi A (Tahun 2000-sekarang)",
  registrationStart: "Desember 2025",
  academicYear: "2026 / 2027",
  missions: [
    "Menanamkan kecintaan pada nilai-nilai keislaman melalui pembiasaan ibadah harian yang menyenangkan.",
    "Mengembangkan kreativitas dan rasa ingin tahu anak secara optimal lewat metode active learning.",
    "Membiasakan sikap mandiri, peduli sesama, dan tanggung jawab sejak dini.",
    "Menyediakan lingkungan belajar yang aman, nyaman, higienis, serta asri.",
    "Membangun kemitraan yang harmonis dengan orang tua dalam mengawal tumbuh kembang anak."
  ],
  programsUnggulan: [
    "Pembelajaran Karakter Per-tema Via Outbond",
    "Upacara Bendera",
    "Apel Pagi (Selasa-Sabtu)",
    "Senam Pagi",
    "Sholat Dhuha",
    "Pelatihan Sholat",
    "Mengaji",
    "Baca Tulis Hitung",
    "Bahasa Indonesia",
    "Bahasa Inggris Dasar",
    "Bahasa Arab Dasar",
    "Sempoa",
    "Cooking Class",
    "Kegiatan Pembelajaran Indoor dan Outdoor",
    "Pembelajaran Yang Interaktif dan Menyenangkan"
  ],
  programsSekolah: [
    "Pengenalan kegiatan Pembelajaran (Pra Screening)",
    "Puncak Tema (Outdoor)",
    "Kegiatan Projek",
    "Menabung",
    "Class Performance",
    "Drumband",
    "Manasik Haji",
    "Outbound",
    "Islamic Children Ramadhan",
    "Buka Puasa Bersama",
    "ZakatFitrah",
    "Pentas Seni",
    "Sharing Perkembangan",
    "Parenting",
    "Homeschooling"
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
    name: "Mini Masjid",
    description: "Fasilitas masjid ukuran anak-anak yang nyaman untuk mengenalkan ibadah sholat, berwudhu, serta membina pembiasaan akhlak Islami mulia sejak usia dini.",
    bgClass: "bg-brand-purple/15 border-brand-purple/40 hover:bg-brand-purple/25",
    iconName: "Compass",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-2",
    name: "Mini Lapangan Futsal",
    description: "Lapangan olahraga khusus berukuran mini yang aman bagi anak-anak untuk melatih fisik motorik kasar, koordinasi tubuh, kelincahan, serta jiwa sportivitas tim.",
    bgClass: "bg-joy-pink/15 border-joy-pink/40 hover:bg-joy-pink/25",
    iconName: "Target",
    imageUrl: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-3",
    name: "Area Bermain Yang Luas",
    description: "Taman bermain luas, hijau, dan representatif dengan aneka ayunan, perosotan, jungkat-jungkit untuk memicu rasa riang gembira dan interaksi sosial anak.",
    bgClass: "bg-joy-yellow/15 border-joy-yellow/40 hover:bg-joy-yellow/25",
    iconName: "Baby",
    imageUrl: "https://images.unsplash.com/photo-1566371486490-560ded239fe6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "fac-4",
    name: "Kolam Renang Anak",
    description: "Kolam air dangkal khusus balita berstandar keselamatan prima untuk melatih kemampuan motorik renang dasar, kesegaran fisik, serta keberanian bermain air.",
    bgClass: "bg-joy-green/15 border-joy-green/40 hover:bg-joy-green/25",
    iconName: "Waves",
    imageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop"
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
    subTitle: "Membina keceriaan & stimulasi awal si kecil",
    ageLimit: "2.5 Tahun",
    hours: "07.15 - 10.00 WIB",
    items: [
      {
        id: "fee-pg-1",
        component: "First Fee (Biaya Pertama) - All in",
        nominal: 1750000,
        description: "Biaya masuk awal menyeluruh mencakup seragam sekolah lengkap, iuran sekolah awal, serta penyediaan alat tulis dan modul mewarnai untuk 1 tahun penuh.",
        isOneTime: true
      },
      {
        id: "fee-pg-2",
        component: "Seragam Lengkap (Full Uniforms)",
        nominal: 0, // Included
        description: "Sudah termasuk (Free) 4 setel seragam premium bernuansa Islami khas Al-Azzhar.",
        isOneTime: true
      },
      {
        id: "fee-pg-3",
        component: "Alat Tulis Satu Tahun (Stationery)",
        nominal: 0, // Included
        description: "Sudah termasuk (Free) paket pensil, buku gambar, krayon ramah anak, dan seluruh bahan prakarya selama satu tahun.",
        isOneTime: true
      },
      {
        id: "fee-pg-4",
        component: "Free Catering Sehat",
        nominal: 0, // Included
        description: "Fasilitas katering makan siang/snack bergizi gratis khusus bagi 40 pendaftar pertama.",
        isOneTime: true
      }
    ]
  },
  {
    programName: "Kelompok A (TK A)",
    subTitle: "Eksplorasi motorik halus & nalar kreatif mandiri",
    ageLimit: "4 Tahun",
    hours: "07.15 - 10.30 WIB",
    items: [
      {
        id: "fee-tka-1",
        component: "First Fee (Biaya Pertama) - All in",
        nominal: 1750000,
        description: "Biaya masuk awal menyeluruh mencakup seragam sekolah lengkap, iuran sekolah awal, serta penyediaan alat tulis dan modul mewarnai untuk 1 tahun penuh.",
        isOneTime: true
      },
      {
        id: "fee-tka-2",
        component: "Seragam Lengkap (Full Uniforms)",
        nominal: 0,
        description: "Sudah termasuk (Free) seragam lengkap berkualitas yang nyaman dipakai bermain seharian.",
        isOneTime: true
      },
      {
        id: "fee-tka-3",
        component: "Alat Tulis Satu Tahun (Stationery)",
        nominal: 0,
        description: "Sudah termasuk (Free) penyediaan buku paket kurikulum merdeka PAUD & peralatan lukis.",
        isOneTime: true
      },
      {
        id: "fee-tka-4",
        component: "Free Catering Sehat",
        nominal: 0,
        description: "Fasilitas katering makan siang/snack bergizi gratis khusus bagi 40 pendaftar pertama.",
        isOneTime: true
      }
    ]
  },
  {
    programName: "Kelompok B (TK B)",
    subTitle: "Persiapan matang menyambut jenjang Sekolah Dasar",
    ageLimit: "5 Tahun",
    hours: "07.15 - 11.30 WIB",
    items: [
      {
        id: "fee-tkb-1",
        component: "First Fee (Biaya Pertama) - All in",
        nominal: 1750000,
        description: "Biaya masuk awal menyeluruh mencakup seragam sekolah lengkap, iuran sekolah awal, serta penyediaan alat tulis dan modul mewarnai untuk 1 tahun penuh.",
        isOneTime: true
      },
      {
        id: "fee-tkb-2",
        component: "Seragam Lengkap (Full Uniforms)",
        nominal: 0,
        description: "Sudah termasuk (Free) seragam lengkap berkualitas yang nyaman dipakai bermain seharian.",
        isOneTime: true
      },
      {
        id: "fee-tkb-3",
        component: "Alat Tulis Satu Tahun (Stationery)",
        nominal: 0,
        description: "Sudah termasuk (Free) seluruh buku paket persiapan Calistung penunjang masuk SD.",
        isOneTime: true
      },
      {
        id: "fee-tkb-4",
        component: "Free Catering Sehat",
        nominal: 0,
        description: "Fasilitas katering makan siang/snack bergizi gratis khusus bagi 40 pendaftar pertama.",
        isOneTime: true
      }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    parentName: "Bunda Rini Kartika",
    childName: "Rafandra (TK A)",
    role: "Ibu Rumah Tangga, Muara Enim",
    quote: "Awalnya Rafandra sangat pemalu dan sulit bergaul. Setelah bergabung di TK Al Azzhar, perkembangannya mencengangkan! Dia jadi antusias menghafal doa harian di rumah, bahkan setiap pagi bersemangat merapikan tas sendiri. Guru-guru di sini mendampingi anak penuh kasih sayang dan sabar luar biasa.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-2",
    parentName: "Bapak Aditya Nugraha",
    childName: "Zahra (Playgroup)",
    role: "Karyawan BUMN, Muara Enim",
    quote: "Saya paling salut dengan kebersihan sekolah, area masjid ramah anak, dan lapangan bermainnya yang aman. Fasilitas lengkap membuat anak betah beraktivitas fisik tanpa gerah. Anak saya selalu pulang sekolah dengan wajah ceria dan bercerita tentang keseruan belajar sambil bermain di kelas.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-3",
    parentName: "Bunda Fatmawati",
    childName: "Kamil (TK B)",
    role: "Tenaga Kesehatan, Muara Enim",
    quote: "Sangat bersyukur menyekolahkan Kamil di sini. Metode pengenalan karakter harian dan pembiasaan sholat dhuha berjamaah melatih kemandirian spiritualnya sejak dini. Fasilitas lengkap, guru komunikatif, dan katering catering bergizi seimbang yang anak-anak dapatkan sangat membantu!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  }
];

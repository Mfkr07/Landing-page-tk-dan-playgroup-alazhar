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
    "Mewujudkan manusia muslim yang bertaqwa, berakhlak mulia, cakap, perdcaya diri, cinta tanah air dan berguna bagi masyarakat yang adil dan makmur dan di-ridhoi Allah SWT.",
    "Memajukan dan mengembangkan pengetahuan umum, bahasa inggris, dan agama serta keterampilan untuk memajukan umat dan bangsa.",
    "Bersama pendidikan dan kebudayaan sesuai UUD 1945 pasal 31.",
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
    name: "Mini Musholla",
    description: "Fasilitas Musholla ukuran anak-anak yang nyaman untuk mengenalkan ibadah sholat, berwudhu, serta membina pembiasaan akhlak Islami mulia sejak usia dini.",
    bgClass: "bg-brand-purple/15 border-brand-purple/40 hover:bg-brand-purple/25",
    iconName: "Compass",
    imageUrl: "/images/musholla.jpg"
  },
  {
    id: "fac-2",
    name: "Ruang Kelas Yang Nyaman",
    description: "Ruang kelas bersih, terang, dan penuh warna yang dirancang khusus untuk kenyamanan belajar dan stimulasi kreativitas si kecil tanpa tekanan.",
    bgClass: "bg-joy-green/15 border-joy-green/40 hover:bg-joy-green/25",
    iconName: "BookOpen",
    imageUrl: "/images/ruang_kelas.jpg"
  },
  {
    id: "fac-3",
    name: "Area Bermain Yang Luas",
    description: "Taman bermain luas, hijau, dan representatif dengan aneka ayunan, perosotan, jungkat-jungkit untuk memicu rasa riang gembira dan interaksi sosial anak.",
    bgClass: "bg-joy-yellow/15 border-joy-yellow/40 hover:bg-joy-yellow/25",
    iconName: "Baby",
    imageUrl: "/images/taman_bermain.png"
  },
  {
    id: "fac-4",
    name: "Kolam Renang Anak",
    description: "Kolam renang dangkal yang aman dengan permainan bola warna-warni, dilengkapi pendampingan guru khusus selama sesi bermain air.",
    bgClass: "bg-joy-green/15 border-joy-green/40 hover:bg-joy-green/25",
    iconName: "Waves",
    imageUrl: "/images/kolam_renang.jpg"
  }
];

export const ACTIVITIES_DATA: ActivityPhoto[] = [
  {
    id: "act-1",
    title: "Sentra Seni & Prakarya Mandiri",
    category: "Seni & Kreativitas",
    description: "Melukis dengan jari (finger painting), membuat karya kolase dari lilin malam, origami lucu, guna melatih saraf motorik halus serta keberanian berekspresi estetis.",
    imageUrl: "/images/prakarya2.jpg "
  },
  {
    id: "act-2",
    title: "Pendidikan Karakter & Hafalan Doa",
    category: "Imtaq & Karakter",
    description: "Kegiatan wudhu bersama, shalat berjamaah dhuha, muraja’ah surat pendek juz amma, membiasakan adab kesopanan sehari-hari (senyum, sapa, salam, sopan, santun).",
    imageUrl: "/images/belajar_agama.jpg"
  },
  {
    id: "act-3",
    title: "Eksplorasi Kebun & Sains Anak",
    category: "Sains & Lingkungan",
    description: "Menanam benih bunga sederhana di pot, melakukan uji coba pelangi dalam gelas air, melatih kepekaan ilmiah sederhana mengenai objek sekitar dengan terukur ceria.",
    imageUrl: "/images/belajar_sains.jpg"
  },
  {
    id: "act-4",
    title: "Senam Ceria & Fun Motoric Outdoors",
    category: "Olahraga & Fisik",
    description: "Senam pagi terpadu di setiap hari Jumat dengan musik ritmis gembira, dilanjutkan dengan lomba lari estafet kecil untuk membangun kebersamaan tim dan fisik prima.",
    imageUrl: "/images/senam.jpg"
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
    parentName: "Umi Nafiah Febrini",
    childName: "Fakhri (TK A)",
    role: "Pegawai Negeri Sipil, Muara Enim",
    quote: "Awalnya Fakhri sangat pemalu dan sulit bergaul. Setelah bergabung di TK Al Azzhar, perkembangannya mencengangkan! Dia jadi antusias menghafal doa harian di rumah, bahkan setiap pagi bersemangat merapikan tas sendiri. Guru-guru di sini mendampingi anak penuh kasih sayang dan sabar luar biasa.",
    rating: 5,
    avatarUrl: "/images/Febrini.jpg"
  },
  {
    id: "test-2",
    parentName: "Bapak Cholid",
    childName: "Zahra (Playgroup)",
    role: "Camat Tanjung Agung, Muara Enim",
    quote: "Saya paling salut dengan kebersihan sekolah, area masjid ramah anak, dan lapangan bermainnya yang aman. Fasilitas lengkap membuat anak betah beraktivitas fisik tanpa gerah. Anak saya selalu pulang sekolah dengan wajah ceria dan bercerita tentang keseruan belajar sambil bermain di kelas.",
    rating: 5,
    avatarUrl: "/images/cholid.jpg"
  },
  {
    id: "test-3",
    parentName: "Bunda Oktavia Adjie",
    childName: "Akbar (TK B)",
    role: "Guru SMA Negeri 7 Muara Enim, Muara Enim",
    quote: "Alhamdulillah, sangat bersyukur menyekolahkan Akbar di sini. Metode pengenalan karakter harian dan pembiasaan sholat dhuha berjamaah melatih kemandirian spiritualnya sejak dini. Fasilitas lengkap, guru komunikatif, dan katering catering bergizi seimbang yang anak-anak dapatkan sangat membantu!",
    rating: 5,
    avatarUrl: "/images/oktavia.jpg"
  }
];

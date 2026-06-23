import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://www.alazzhar-muaraenim.my.id';

export const metadata: Metadata = {
  title: 'TK dan Playgroup Al-Azhar Muara Enim | PAUD Terbaik Akreditasi A',
  description:
    'TK dan Playgroup Al-Azhar Muara Enim — sekolah PAUD Islam terbaik di Muara Enim dengan akreditasi A. Menerima pendaftaran siswa baru TK A, TK B, dan Kelompok Bermain (Playgroup). Fasilitas lengkap, kurikulum merdeka berkarakter Islami, biaya terjangkau. Daftar sekarang!',
  keywords: [
    'tk di muara enim',
    'tk muara enim',
    'tk dan playgroup',
    'tk dan playgroup muara enim',
    'PAUD muara enim',
    'playgroup muara enim',
    'sekolah anak usia dini muara enim',
    'pendaftaran tk muara enim',
    'tk islam muara enim',
    'tk al azzhar muara enim',
    'tk al azhar muara enim',
    'PAUD terbaik muara enim',
    'kelompok bermain muara enim',
    'tk akreditasi a muara enim',
    'pendaftaran PAUD muara enim',
    'sekolah tk terbaik muara enim',
    'tk berkarakter islami muara enim',
    'biaya tk muara enim',
    'tk terjangkau muara enim',
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'TK & Playgroup Al-Azhar Muara Enim',
    title: 'TK dan Playgroup Al-Azhar Muara Enim | PAUD Terbaik Akreditasi A',
    description:
      'Sekolah TK dan Playgroup terbaik di Muara Enim. PAUD Islam berkarakter dengan akreditasi A, fasilitas lengkap, kolam renang, musholla anak, dan biaya terjangkau. Pendaftaran dibuka!',
    images: [
      {
        url: '/images/Hero_section.png',
        width: 1200,
        height: 630,
        alt: 'TK dan Playgroup Al-Azhar Muara Enim — Sekolah PAUD Islam Terbaik',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TK dan Playgroup Al-Azhar Muara Enim | PAUD Terbaik',
    description:
      'Sekolah TK dan Playgroup Islam terbaik di Muara Enim. Akreditasi A, fasilitas lengkap, biaya terjangkau.',
    images: ['/images/Hero_section.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pXs6atJy8_JIFdWsphf-MOn6fzrmimlQ35UlSmlWjWQ',
  },
  category: 'education',
  authors: [{ name: 'TK & Playgroup Al-Azhar Muara Enim' }],
};

const jsonLdEducationalOrganization = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: 'TK & Playgroup Al-Azhar Muara Enim',
  alternateName: [
    'TK Al Azzhar Muara Enim',
    'TK Al Azhar Muara Enim',
    'Playgroup Al Azzhar Muara Enim',
    'PAUD Al Azzhar Muara Enim',
    'TK dan Playgroup Al-Azzhar Muara Enim',
  ],
  description:
    'TK dan Playgroup Al-Azhar Muara Enim adalah sekolah pendidikan anak usia dini (PAUD) Islam terbaik di Kabupaten Muara Enim, Sumatera Selatan. Terakreditasi A sejak tahun 2000 dengan kurikulum merdeka berkarakter Islami.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/Hero_section.png`,
  telephone: ['+6285609913691', '+6285764040080', '+628974481560'],
  email: 'alazzhar2000@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jalan Ahmad Yani No.4B (Depan Enggano)',
    addressLocality: 'Muara Enim',
    addressRegion: 'Sumatera Selatan',
    postalCode: '31315',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -3.6521743936643663,
    longitude: 103.74861218534346,
  },
  areaServed: {
    '@type': 'City',
    name: 'Muara Enim',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=100095022677052',
  ],
  foundingDate: '2000',
  accreditation: 'Akreditasi A (Tahun 2000 - Sekarang)',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Program Pendidikan',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'Playgroup (Kelompok Bermain)',
          description: 'Program stimulasi awal untuk anak usia 2.5 tahun',
          educationalLevel: 'Pendidikan Anak Usia Dini (PAUD)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'TK A (Kelompok A)',
          description: 'Eksplorasi motorik halus dan nalar kreatif mandiri untuk anak usia 4 tahun',
          educationalLevel: 'Taman Kanak-Kanak',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'TK B (Kelompok B)',
          description: 'Persiapan matang menyambut jenjang Sekolah Dasar untuk anak usia 5 tahun',
          educationalLevel: 'Taman Kanak-Kanak',
        },
      },
    ],
  },
};

const jsonLdFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Berapa usia minimal anak untuk mendaftar di TK Al-Azhar Muara Enim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usia belajar anak untuk jenjang Playgroup (Kelompok Bermain) adalah 2.5 tahun, Kelompok A (TK A) berusia 4 tahun, dan Kelompok B (TK B) berusia 5 tahun.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana kurikulum yang digunakan di TK dan Playgroup Al-Azhar Muara Enim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami menggunakan integrasi Kurikulum Merdeka PAUD Republik Indonesia dengan muatan khusus nilai Keislaman khas Al-Azhar yang dikemas menyenangkan melalui sentra bermain kreatif, praktik adab, mengaji, dan pengenalan karakter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa biaya pendaftaran TK di Muara Enim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Biaya masuk pertama (First Fee All-in) untuk semua jenjang di TK & Playgroup Al-Azhar Muara Enim adalah Rp 1.750.000 yang sudah mencakup seragam lengkap, alat tulis satu tahun, dan fasilitas catering gratis untuk 40 pendaftar pertama.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah TK Al-Azhar Muara Enim menyediakan fasilitas katering makanan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, sekolah menyediakan katering makan siang/snack bergizi gratis khusus bagi 40 pendaftar pertama. Selain itu, sekolah juga menyelenggarakan Hari Snack Sehat Bersama setiap minggu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa saja fasilitas yang tersedia di TK Al-Azhar Muara Enim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fasilitas lengkap meliputi: Mini Musholla ramah anak, ruang kelas yang nyaman dan terang, area bermain luas dengan ayunan dan perosotan, serta kolam renang anak dengan pendampingan guru khusus.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdEducationalOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdFaqPage),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

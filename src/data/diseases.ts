export interface Disease {
  slug: string;
  name: string;
  summary: string;
  wave: number;
  image?: string;
  sections?: {
    header?: string;
    apaItu?: string;
    faktorRisiko?: string[];
    gejala?: string[];
    tandaBahaya?: string[];
    pemeriksaan?: string[];
    penanganan?: string[];
    checklist?: string[];
    faq?: string[];
  };
  quiz?: {
    question: string;
    options: string[];
    answer: number;
  }[];
}

export const diseases: Disease[] = [
  {
    slug: 'asam-urat',
    name: 'Asam Urat',
    summary: 'Penumpukan kristal asam urat yang menimbulkan nyeri sendi mendadak.',
    wave: 1,
  },
  {
    slug: 'dermatitis',
    name: 'Dermatitis',
    summary: 'Peradangan kulit yang menyebabkan gatal dan ruam.',
    wave: 1,
  },
  {
    slug: 'diabetes',
    name: 'Diabetes',
    summary: 'Kadar gula darah tinggi kronis akibat gangguan produksi atau kerja insulin.',
    wave: 1,
  },
  {
    slug: 'dorsalgia',
    name: 'Dorsalgia',
    summary: 'Nyeri punggung akibat masalah otot, tulang, atau saraf.',
    wave: 1,
  },
  {
    slug: 'dispepsia',
    name: 'Dispepsia',
    summary: 'Gangguan pencernaan bagian atas seperti perut kembung dan cepat kenyang.',
    wave: 1,
  },
  {
    slug: 'gea',
    name: 'GEA (Diare & Keracunan Makanan)',
    summary: 'Infeksi atau toksin yang memicu diare akut dan muntah.',
    wave: 1,
  },
  {
    slug: 'gerd',
    name: 'GERD',
    summary: 'Refluks asam lambung yang menyebabkan nyeri ulu hati dan rasa asam di mulut.',
    wave: 1,
  },
  {
    slug: 'sakit-kepala',
    name: 'Sakit Kepala',
    summary: 'Nyeri pada kepala dari berbagai penyebab ringan hingga berat.',
    wave: 1,
  },
  {
    slug: 'hipertensi',
    name: 'Hipertensi',
    summary: 'Tekanan darah tinggi yang sering tanpa gejala namun berisiko serius.',
    wave: 1,
    sections: {
      header: "Hipertensi — 'Si senyap yang suka muncul tanpa gejala.'",
      apaItu:
        'Tekanan darah sistemik ≥140/90 mmHg berulang, meningkatkan risiko penyakit jantung, stroke, gangguan ginjal.',
      faktorRisiko: [
        'Genetik',
        'Obesitas',
        'Konsumsi garam tinggi',
        'Alkohol',
        'Kurang aktivitas',
        'Stres',
        'Merokok',
        'Usia',
      ],
      gejala: [
        'Sering tanpa gejala',
        'Pusing',
        'Berdebar',
        'Pandangan kabur',
        'Sakit kepala',
      ],
      tandaBahaya: [
        'Nyeri dada',
        'Kelumpuhan mendadak',
        'Bicara pelo',
        'Sakit kepala hebat disertai muntah atau kebingungan',
      ],
      pemeriksaan: [
        'Pengukuran tekanan darah berulang',
        'Pemeriksaan organ target',
        'Pemeriksaan gula darah',
        'Profil lipid',
      ],
      penanganan: [
        'Diet rendah garam (<2 g natrium/hari)',
        'Pola makan seimbang',
        'Olahraga 150 menit/minggu',
        'Berhenti merokok',
        'Tidur cukup',
        'Obat sesuai keputusan dokter',
      ],
      checklist: [
        'Catat tensi tiap pagi',
        'Minum obat sesuai resep',
        'Kurangi garam dan makanan olahan',
        'Jalan 30 menit, 5x/minggu',
        'Turunkan berat badan bila overweight',
        'Berhenti merokok dan batasi alkohol',
        'Tidur 7–8 jam dan lakukan relaksasi',
      ],
      faq: [
        '"Tidak pusing berarti normal?" → Tidak selalu.',
        '"Boleh jamu?" → Konsultasi dulu.',
        '"Sudah minum obat, boleh makan bebas?" → Tidak.',
        '"Tensi naik hanya saat marah?" → Tetap perlu evaluasi.',
        '"Kapan ke UGD?" → Saat muncul tanda bahaya.',
      ],
    },
    quiz: [
      {
        question: 'Berapa batas tekanan darah untuk diagnosis hipertensi?',
        options: ['≥140/90 mmHg', '≥120/80 mmHg', '≥160/100 mmHg', '≥100/70 mmHg'],
        answer: 0,
      },
      {
        question: 'Faktor risiko utama hipertensi berikut adalah?',
        options: ['Konsumsi garam tinggi', 'Olahraga teratur', 'Berat badan ideal', 'Tidur cukup'],
        answer: 0,
      },
      {
        question: 'Tanda bahaya hipertensi yang memerlukan UGD adalah?',
        options: ['Nyeri dada', 'Pusing ringan', 'Keringat dingin', 'Kaki bengkak'],
        answer: 0,
      },
      {
        question: 'Batas konsumsi garam per hari untuk penderita hipertensi?',
        options: ['<2 gram natrium', '<5 gram natrium', '<10 gram natrium', '<1 gram natrium'],
        answer: 0,
      },
      {
        question: 'Durasi olahraga aerobik yang dianjurkan per minggu?',
        options: ['150 menit', '60 menit', '300 menit', '30 menit'],
        answer: 0,
      },
    ],
  },
  {
    slug: 'isk',
    name: 'ISK',
    summary: 'Infeksi saluran kemih yang ditandai nyeri saat berkemih dan anyang-anyangan.',
    wave: 1,
  },
  {
    slug: 'ispa',
    name: 'ISPA / Common Cold',
    summary: 'Infeksi saluran napas atas yang menyebabkan batuk, pilek, dan demam ringan.',
    wave: 1,
  },
  {
    slug: 'kejang-demam',
    name: 'Kejang Demam',
    summary: 'Kejang pada anak yang dipicu kenaikan suhu tubuh cepat.',
    wave: 1,
  },
  {
    slug: 'konjungtivitis',
    name: 'Konjungtivitis',
    summary: 'Radang selaput bening mata yang membuat merah dan berair.',
    wave: 1,
  },
  {
    slug: 'migrain',
    name: 'Migrain',
    summary: 'Sakit kepala berdenyut yang disertai mual atau sensitif terhadap cahaya.',
    wave: 1,
  },
  {
    slug: 'osteoartritis',
    name: 'Osteoartritis',
    summary: 'Kerusakan sendi degeneratif yang menimbulkan nyeri dan kaku.',
    wave: 1,
  },
  {
    slug: 'pneumonia',
    name: 'Pneumonia',
    summary: 'Infeksi paru-paru yang menyebabkan demam, batuk, dan sesak napas.',
    wave: 1,
  },
  {
    slug: 'ppok-rokok',
    name: 'PPOK / Rokok',
    summary: 'Kerusakan paru kronis, sering akibat merokok, yang membuat napas pendek.',
    wave: 1,
  },
  {
    slug: 'skabies',
    name: 'Skabies',
    summary: 'Infestasi tungau yang menimbulkan gatal hebat terutama malam hari.',
    wave: 1,
  },
  {
    slug: 'stroke',
    name: 'Stroke',
    summary: 'Gangguan aliran darah otak mendadak yang menyebabkan kelumpuhan atau gangguan bicara.',
    wave: 1,
  },
  {
    slug: 'tb-paru',
    name: 'TB Paru',
    summary: 'Infeksi bakteri Tuberkulosis pada paru-paru yang menimbulkan batuk kronis.',
    wave: 1,
  },
  {
    slug: 'tifoid',
    name: 'Tifoid',
    summary: 'Infeksi bakteri Salmonella typhi yang menyebabkan demam tinggi dan gangguan pencernaan.',
    wave: 1,
  },
  {
    slug: 'vertigo-hipotensi',
    name: 'Vertigo (BPPV) & Hipotensi',
    summary: 'Pusing berputar akibat gangguan telinga dalam atau tekanan darah rendah.',
    wave: 1,
  },
];

export function getDiseaseBySlug(slug: string) {
  return diseases.find((d) => d.slug === slug);
}


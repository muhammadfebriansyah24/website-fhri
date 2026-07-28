export const getCorporateCultureData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Budaya & Acara Perusahaan",
        title: "Membangun Budaya Kerja Berkinerja Tinggi",
        description: "Dari lokakarya etika profesional hingga acara perusahaan dan pelatihan outbound, kami membantu organisasi mengubah budaya menjadi keuntungan yang terukur — bukan sekadar nilai-nilai yang menempel di dinding."
      },
      services: {
        eyebrow: "Apa yang Kami Berikan",
        title: "Budaya, Acara & Pengembangan Tim",
        description: "Tiga program terhubung yang dirancang untuk memperkuat bagaimana karyawan Anda bekerja, berkumpul, dan tumbuh bersama.",
        items: [
          {
            n: '01',
            tag: 'Lokakarya',
            accent: '#DC2626',
            title: 'Etika Kerja Profesional',
            desc: 'Lokakarya yang menanamkan akuntabilitas, integritas, disiplin, kolaborasi, dan manajemen waktu — berlabuh pada standar keunggulan layanan yang berpusat pada pelanggan.',
            tags: ['Akuntabilitas', 'Integritas', 'Disiplin', 'Kolaborasi', 'Manajemen Waktu', 'Layanan Berpusat Pelanggan'],
            meta: [
              { label: 'Format', value: 'In-house atau On-site' },
              { label: 'Durasi', value: 'Intensif 1–2 Hari' },
              { label: 'Terbaik Untuk', value: 'Garis Depan & Manajemen Menengah' },
            ],
            img: 'https://images.unsplash.com/photo-1558698972-c50e325e6799?q=80&w=1400&auto=format&fit=crop',
            rotate: '-rotate-2',
          },
          {
            n: '02',
            tag: 'Acara',
            accent: '#00263C',
            title: 'Penyelenggara Acara Perusahaan',
            desc: 'Perencanaan dan pelaksanaan pertemuan perusahaan dari awal hingga akhir — dari desain tema dan logistik vendor hingga produksi susunan acara — untuk town hall dan acara penghargaan tahunan yang memperkuat identitas dan kohesi.',
            tags: ['Desain Konsep & Tema', 'Vendor & Logistik', 'Produksi Susunan Acara', 'Koordinasi di Tempat'],
            meta: [
              { label: 'Format', value: 'Layanan Penuh atau Hari-H' },
              { label: 'Skala', value: '50–2.000+ Peserta' },
              { label: 'Terbaik Untuk', value: 'Tim HR & Komunikasi Korporat' },
            ],
            img: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1400&auto=format&fit=crop',
            rotate: 'rotate-2',
          },
          {
            n: '03',
            tag: 'Team Building',
            accent: '#DC2626',
            title: 'Pelatihan Outbound',
            desc: 'Program luar ruangan berbasis aktivitas yang membangun kepercayaan, kerja sama tim, dan kepemimpinan melalui pengalaman langsung secara bersama — dari tantangan alam bebas hingga sesi evaluasi (debrief) terstruktur yang menghubungkan setiap aktivitas kembali ke perilaku nyata di tempat kerja.',
            tags: ['Latihan Kepercayaan & Tim', 'Simulasi Kepemimpinan', 'Evaluasi Terstruktur', 'Pencarian Lokasi Khusus'],
            meta: [
              { label: 'Format', value: 'Program 1–3 Hari' },
              { label: 'Lokasi', value: 'Berbagai Lokasi Nasional' },
              { label: 'Terbaik Untuk', value: 'Lintas Fungsi & Kepemimpinan' },
            ],
            img: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1400&auto=format&fit=crop',
            rotate: '-rotate-2',
          },
        ]
      },
      approach: {
        eyebrow: "Pendekatan Kami",
        title: "Program yang Dibangun Mengelilingi Budaya Anda",
        description: "Setiap program dimulai dengan realitas organisasi Anda, bukan templat umum — sehingga hasilnya benar-benar melekat.",
        steps: [
          {
            n: '01',
            title: 'Penilaian Kebutuhan Budaya',
            text: 'Kami mendiagnosis kesenjangan budaya kerja saat ini melalui wawancara, survei, dan sesi penyelarasan pemangku kepentingan.',
            dark: true,
            rotate: 'md:-rotate-2',
          },
          {
            n: '02',
            title: 'Desain Program',
            text: 'Kurikulum yang disesuaikan atau konsep acara dibangun berdasarkan ukuran tim, industri, dan tujuan perilaku spesifik Anda.',
            dark: false,
            rotate: 'md:rotate-2',
          },
          {
            n: '03',
            title: 'Fasilitasi & Eksekusi',
            text: 'Fasilitator kami menjalankan lokakarya, acara, atau program outbound di lokasi, dengan hasil terukur yang dilacak pasca-program.',
            dark: true,
            rotate: 'md:-rotate-2',
          },
        ]
      }
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "Corporate Culture & Events",
      title: "Building a Work Culture That Performs",
      description: "From professional ethics workshops to corporate events and outbound training, we help organizations turn culture into a measurable advantage — not just a set of values on a wall."
    },
    services: {
      eyebrow: "What We Deliver",
      title: "Culture, Events & Team Development",
      description: "Three connected programs designed to strengthen how your people work, gather, and grow together.",
      items: [
        {
          n: '01',
          tag: 'Workshop',
          accent: '#DC2626',
          title: 'Professional Work Ethic',
          desc: 'A workshop that instills accountability, integrity, discipline, collaboration, and time management — anchored by a customer-centric standard of service excellence.',
          tags: ['Accountability', 'Integrity', 'Discipline', 'Collaboration', 'Time Management', 'Customer-Centric Service'],
          meta: [
            { label: 'Format', value: 'In-house or On-site' },
            { label: 'Duration', value: '1–2 Day Intensive' },
            { label: 'Best For', value: 'Frontline & Mid-Management' },
          ],
          img: 'https://images.unsplash.com/photo-1558698972-c50e325e6799?q=80&w=1400&auto=format&fit=crop',
          rotate: '-rotate-2',
        },
        {
          n: '02',
          tag: 'Events',
          accent: '#00263C',
          title: 'Corporate Event Organizer',
          desc: 'End-to-end planning and execution of corporate gatherings — from theme design and vendor logistics to run-of-show production — for town halls and annual recognition events that strengthen identity and cohesion.',
          tags: ['Concept & Theme Design', 'Vendor & Logistics', 'Run-of-Show Production', 'On-site Coordination'],
          meta: [
            { label: 'Format', value: 'Full-Service or Day-Of' },
            { label: 'Scale', value: '50–2,000+ Attendees' },
            { label: 'Best For', value: 'HR & Corporate Comms Teams' },
          ],
          img: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1400&auto=format&fit=crop',
          rotate: 'rotate-2',
        },
        {
          n: '03',
          tag: 'Team Building',
          accent: '#DC2626',
          title: 'Outbound Training',
          desc: 'Activity-based outdoor programs that build trust, teamwork, and leadership through direct, shared experience — from wilderness challenges to structured debrief sessions linking every activity back to real workplace behavior.',
          tags: ['Trust & Team Exercises', 'Leadership Simulations', 'Structured Debrief', 'Custom Venue Scouting'],
          meta: [
            { label: 'Format', value: '1–3 Day Program' },
            { label: 'Location', value: 'Nationwide Venues' },
            { label: 'Best For', value: 'Cross-Functional & Leadership' },
          ],
          img: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1400&auto=format&fit=crop',
          rotate: '-rotate-2',
        },
      ]
    },
    approach: {
      eyebrow: "Our Approach",
      title: "A Program Built Around Your Culture",
      description: "Every engagement starts with your organization's reality, not a generic template — so the outcome actually sticks.",
      steps: [
        {
          n: '01',
          title: 'Culture Needs Assessment',
          text: 'We diagnose current work culture gaps through interviews, surveys, and stakeholder alignment sessions.',
          dark: true,
          rotate: 'md:-rotate-2',
        },
        {
          n: '02',
          title: 'Program Design',
          text: "A tailored curriculum or event concept is built around your team's size, industry, and specific behavioral goals.",
          dark: false,
          rotate: 'md:rotate-2',
        },
        {
          n: '03',
          title: 'Facilitation & Execution',
          text: 'Our facilitators run the workshop, event, or outbound program on-site, with measurable outcomes tracked post-engagement.',
          dark: true,
          rotate: 'md:-rotate-2',
        },
      ]
    }
  };
};
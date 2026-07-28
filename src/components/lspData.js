export const getLspData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        badge: "Lembaga Sertifikasi Profesi",
        title: "Memvalidasi Keunggulan & Meningkatkan Kompetensi HR",
        description: "Jelajahi program kelas dunia komprehensif kami yang dirancang untuk mengukur keterampilan, mengakreditasi pelatihan, dan mengakselerasi jalur karier profesional."
      },
      categories: [
        {
          id: 'hr-certification',
          number: '01',
          badge: 'Sertifikasi Inti',
          title: 'Program Sertifikasi HR',
          subtitle: 'Validasi dan tingkatkan kredibilitas profesional Anda dengan standar yang diakui secara global.',
          description: 'Jalur sertifikasi kami dirancang secara cermat untuk praktisi HR di semua tingkatan. Baik Anda yang baru memasuki peran spesialis atau mengelola sumber daya manusia berskala perusahaan, kredensial kami membuktikan penguasaan Anda dalam kerangka kerja HR modern.',
          features: [
            'Kurikulum komprehensif yang mencakup manajemen HR strategis.',
            'Penilaian ketat yang diselaraskan dengan kompetensi industri saat ini.',
            'Lencana digital dan sertifikat resmi untuk profil profesional.'
          ],
          accentColor: 'border-red-500 text-[#DC0017] bg-red-50'
        },
        {
          id: 'competency-standards',
          number: '02',
          badge: 'Kerangka & Kualitas',
          title: 'Standar Kompetensi',
          subtitle: 'Kerangka kerja kemampuan standar industri dan pedoman operasional.',
          description: 'Tetapkan tolak ukur kinerja yang jelas dalam organisasi Anda. Kami menyediakan model kompetensi terstruktur yang mengukur keterampilan secara akurat dan mendorong budaya perbaikan berkelanjutan.',
          features: [
            'Matriks kompetensi yang disesuaikan untuk berbagai sektor perusahaan.',
            'Protokol untuk menjaga ruang kerja yang bersih, aman, dan terorganisir.',
            'Perangkat evaluasi kinerja untuk para pemimpin tim.'
          ],
          accentColor: 'border-blue-500 text-blue-600 bg-blue-50'
        },
        {
          id: 'training-accreditation',
          number: '03',
          badge: 'Pertumbuhan Institusi',
          title: 'Akreditasi Pelatihan',
          subtitle: 'Validasi resmi program pelatihan perusahaan dan modul pembelajaran.',
          description: 'Pastikan akademi korporat atau modul pelatihan internal Anda memenuhi standar profesional elit. Akreditasi meningkatkan kredibilitas konten pendidikan Anda dan memaksimalkan hasil belajar karyawan.',
          features: [
            'Audit kualitas independen terhadap materi pembelajaran.',
            'Dukungan (endorsement) dari lembaga sumber daya manusia yang diakui.',
            'Penjaminan mutu berkelanjutan dan putaran umpan balik.'
          ],
          accentColor: 'border-emerald-500 text-emerald-600 bg-emerald-50'
        },
        {
          id: 'credential-verification',
          number: '04',
          badge: 'Kepercayaan & Keamanan',
          title: 'Verifikasi Kredensial',
          subtitle: 'Validasi transparan dan autentikasi kredensial profesional.',
          description: 'Hilangkan hambatan dan risiko selama proses akuisisi talenta. Sistem verifikasi kami menawarkan validasi instan dan aman untuk sertifikat kandidat, riwayat pekerjaan masa lalu, dan pemeriksaan latar belakang profesional.',
          features: [
            'Registri sertifikat digital berbasis blockchain yang aman.',
            'Portal verifikasi instan untuk para perekrut perusahaan.',
            'Pencegahan penipuan dan transparansi data secara mutlak.'
          ],
          accentColor: 'border-amber-500 text-amber-600 bg-amber-50'
        },
        {
          id: 'career-pathways',
          number: '05',
          badge: 'Kesiapan Masa Depan',
          title: 'Jalur Karier',
          subtitle: 'Peta perkembangan terstruktur dengan pencapaian yang jelas untuk pertumbuhan profesional.',
          description: 'Berdayakan tenaga kerja Anda dengan peta karier transparan. Karyawan dapat memvisualisasikan lintasan pertumbuhan mereka dalam organisasi, menghubungkan pengembangan keterampilan secara langsung dengan promosi dan peluang kepemimpinan.',
          features: [
            'Pemetaan karier langkah demi langkah untuk spesialis HR.',
            'Pelacakan pencapaian untuk jalur kepemimpinan eksekutif.',
            'Analisis kesenjangan keterampilan dan rekomendasi langkah pengembangan.'
          ],
          accentColor: 'border-purple-500 text-purple-600 bg-purple-50'
        },
        {
          id: 'continuing-education',
          number: '06',
          badge: 'Pembelajaran Sepanjang Hayat',
          title: 'Pendidikan Berkelanjutan',
          subtitle: 'Program pengembangan profesional berkelanjutan untuk praktisi tersertifikasi.',
          description: 'Lanskap HR berkembang pesat. Unit pendidikan berkelanjutan (CEU) kami memastikan profesional tersertifikasi tetap terdepan dalam undang-undang kepatuhan baru, teknologi tempat kerja, dan pergeseran tren keterlibatan karyawan.',
          features: [
            'Kelas master eksklusif dan webinar yang dipimpin oleh pakar.',
            'Pembaruan triwulanan tentang peraturan ketenagakerjaan dan tenaga kerja.',
            'Forum jejaring (networking) dengan para eksekutif industri tingkat atas.'
          ],
          accentColor: 'border-indigo-500 text-indigo-600 bg-indigo-50'
        }
      ],
      labels: {
        category: "Kategori",
        status: "Status: Aktif & Terbuka",
        standard: "Standar FHRI"
      },
      ctaBanner: {
        title: "Siap Memvalidasi Keahlian HR Anda?",
        description: "Bergabunglah dengan ribuan profesional tersertifikasi yang telah mengubah karier dan organisasi mereka melalui First HR Indonesia Institute.",
        btnPrimary: "Daftar Sertifikasi",
        btnSecondary: "Kembali ke Beranda"
      }
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      badge: "Professional Certification Institute",
      title: "Validating Excellence & Elevating HR Competencies",
      description: "Explore our comprehensive, world-class programs designed to benchmark skills, accredit training, and accelerate professional career paths."
    },
    categories: [
      {
        id: 'hr-certification',
        number: '01',
        badge: 'Core Certification',
        title: 'HR Certification Programs',
        subtitle: 'Validate and elevate your professional credibility with globally recognized standards.',
        description: 'Our certification tracks are meticulously designed for HR practitioners at all levels. Whether you are stepping into a specialist role or managing enterprise-wide human capital, our credentials prove your mastery in modern HR frameworks.',
        features: [
          'Comprehensive curriculum covering strategic HR management.',
          'Rigorous assessment aligned with current industry competencies.',
          'Digital badge and official certificate for professional profiles.'
        ],
        accentColor: 'border-red-500 text-[#DC0017] bg-red-50'
      },
      {
        id: 'competency-standards',
        number: '02',
        badge: 'Framework & Quality',
        title: 'Competency Standards',
        subtitle: 'Industry-standard capability frameworks and operational guidelines.',
        description: 'Establish clear benchmarks for performance within your organization. We provide structured competency models that measure skills accurately and foster a culture of continuous improvement.',
        features: [
          'Tailored competency matrices for diverse corporate sectors.',
          'Protocols for maintaining clean, safe, and organized workspaces.',
          'Performance evaluation toolkits for team leaders.'
        ],
        accentColor: 'border-blue-500 text-blue-600 bg-blue-50'
      },
      {
        id: 'training-accreditation',
        number: '03',
        badge: 'Institutional Growth',
        title: 'Training Accreditation',
        subtitle: 'Official validation of corporate training programs and learning modules.',
        description: 'Ensure your internal corporate academy or training modules meet elite professional standards. Accreditation boosts the credibility of your educational content and maximizes employee learning outcomes.',
        features: [
          'Independent quality audit of learning materials.',
          'Endorsement from recognized human resource institutes.',
          'Continuous quality assurance and feedback loops.'
        ],
        accentColor: 'border-emerald-500 text-emerald-600 bg-emerald-50'
      },
      {
        id: 'credential-verification',
        number: '04',
        badge: 'Trust & Security',
        title: 'Credential Verification',
        subtitle: 'Transparent validation and authentication of professional credentials.',
        description: 'Eliminate friction and risk during the talent acquisition process. Our verification system offers instant, secure validation of candidate certificates, past employment records, and professional background checks.',
        features: [
          'Secure blockchain-backed digital certificate registry.',
          'Instant verification portal for corporate recruiters.',
          'Fraud prevention and absolute data transparency.'
        ],
        accentColor: 'border-amber-500 text-amber-600 bg-amber-50'
      },
      {
        id: 'career-pathways',
        number: '05',
        badge: 'Future Readiness',
        title: 'Career Pathways',
        subtitle: 'Structured progression maps with clear milestones for professional growth.',
        description: 'Empower your workforce with transparent career maps. Employees can visualize their growth trajectory within the organization, linking skill development directly to promotions and leadership opportunities.',
        features: [
          'Step-by-step career mapping for HR specialists.',
          'Milestone tracking for executive leadership pipelines.',
          'Skill gap analysis and recommended developmental steps.'
        ],
        accentColor: 'border-purple-500 text-purple-600 bg-purple-50'
      },
      {
        id: 'continuing-education',
        number: '06',
        badge: 'Lifelong Learning',
        title: 'Continuing Education',
        subtitle: 'Ongoing professional development programs for certified practitioners.',
        description: 'The HR landscape evolves rapidly. Our continuing education units (CEUs) ensure certified professionals stay ahead of new compliance laws, workplace technologies, and shifting employee engagement trends.',
        features: [
          'Exclusive masterclasses and expert-led webinars.',
          'Quarterly updates on employment regulations and labor laws.',
          'Networking forums with top-tier industry executives.'
        ],
        accentColor: 'border-indigo-500 text-indigo-600 bg-indigo-50'
      }
    ],
    labels: {
      category: "Category",
      status: "Status: Active & Open",
      standard: "FHRI Standard"
    },
    ctaBanner: {
      title: "Ready to Validate Your HR Expertise?",
      description: "Join thousands of certified professionals who have transformed their careers and organizations through First HR Indonesia Institute.",
      btnPrimary: "Register for Certification",
      btnSecondary: "Back to Home"
    }
  };
};
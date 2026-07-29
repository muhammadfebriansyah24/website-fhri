export const getNavbarData = (locale) => {
  if (locale === 'id') {
    return {
      ui: {
        learnMore: "Pelajari Lebih Lanjut",
        viewAll: "Lihat Semua →"
      },
      businessTabs: [
        {
          id: 'support',
          title: 'Layanan Dukungan Bisnis',
          path: '/business/business-support',
          subtitle: 'Dukungan komprehensif untuk memperkuat operasi dan strategi bisnis Anda.',
          icon: 'icons/ic_briefcase-outline.svg',
          subMenus: [
            { title: 'Pendirian Perusahaan', desc: 'Panduan ahli melalui kepatuhan peraturan lokal dan perizinan.' },
            { title: 'Solusi Kesesuaian Budaya', desc: 'Lokakarya untuk menjembatani kesenjangan budaya dan integrasi tim.' },
            { title: 'Pengadaan Perizinan', desc: 'Penanganan cepat atas semua izin operasional spesifik sektor.' },
            { title: 'Penataan Entitas', desc: 'Saran strategis tentang pengaturan PMA dan kerangka kepatuhan.' },
            { title: 'Harmoni Lintas Budaya', desc: 'Lokakarya interaktif untuk menumbuhkan saling pengertian.' },
            { title: 'Pelatihan Kepemimpinan', desc: 'Membekali pemimpin dengan strategi manajemen tim lintas budaya.' },
          ]
        },
        {
          id: 'hcs',
          title: 'Solusi Human Capital',
          path: '/business/humancapital-solutions',
          subtitle: 'Solusi strategis untuk mengoptimalkan dan mengembangkan aset SDM Anda.',
          icon: 'icons/ic_search-outline.svg',
          subMenus: [
            { title: 'Pencarian Eksekutif', desc: 'Pendekatan proaktif untuk merekrut talenta C-suite pasif.' },
            { title: 'Layanan Rekrutmen', desc: 'Manajemen rekrutmen menyeluruh untuk posisi menengah & spesialis.' },
            { title: 'Asesmen Talenta', desc: 'Evaluasi psikometrik ketat, pemetaan kompetensi, & kecocokan budaya.' },
            { title: 'Kumpulan Talenta Elit', desc: 'Akses eksklusif ke jaringan kandidat pasif berkinerja tinggi.' },
            { title: 'Pemetaan Pasar', desc: 'Analisis industri untuk mengidentifikasi calon pemimpin prospektif.' },
            { title: 'Kalibrasi Kandidat', desc: 'Pengujian perilaku terstruktur dan pemeriksaan referensi.' },
          ]
        },
        {
          id: 'payroll',
          title: 'Penggajian & Alih Daya',
          path: '/business/payroll',
          subtitle: 'Manajemen penggajian terpadu dan solusi alih daya proses bisnis.',
          icon: 'icons/ic_circle-stack-outline.svg',
          subMenus: [
            { title: 'Pemrosesan Penggajian', desc: 'Pemrosesan gaji yang akurat selaras dengan peraturan tenaga kerja & PPh 21.' },
            { title: 'Alih Daya Staf', desc: 'Solusi tenaga kerja fleksibel yang mengurangi beban administratif.' },
            { title: 'Kepatuhan Hukum', desc: 'Administrasi dan kepatuhan jaminan sosial (BPJS) lengkap.' },
            { title: 'Pelaporan Transparan', desc: 'Pelaporan terstruktur untuk pengawasan keuangan manajemen.' },
            { title: 'Administrasi Pajak', desc: 'Kepatuhan ketat terhadap kewajiban pajak lokal dan pelaporan PPh 21.' },
            { title: 'Administrasi HR', desc: 'Menyederhanakan dokumen, kontrak, dan mengurangi biaya overhead.' },
          ]
        },
        {
          id: 'assessment',
          title: 'Alat Asesmen',
          path: '/business/assessment-tools',
          subtitle: 'Alat penilaian canggih untuk mengevaluasi kompetensi dan potensi karyawan.',
          icon: 'icons/ic_education-outline.svg',
          subMenus: [
            { title: 'Keterampilan & Kinerja', desc: 'Evaluasi kesiapan teknis dan pencapaian target kerja.' },
            { title: 'Umpan Balik 360-Derajat', desc: 'Dapatkan pandangan komprehensif dari struktur interaksi profesional.' },
            { title: 'Potensi & Kepribadian', desc: 'Petakan DNA psikologis karyawan untuk kesiapan suksesi masa depan.' },
            { title: 'Promosi & Suksesi', desc: 'Identifikasi pemimpin masa depan dan siapkan talenta terbaik.' },
            { title: 'Dukungan Restrukturisasi', desc: 'Petakan ulang kemampuan selama merger, akuisisi, atau efisiensi.' },
            { title: 'Kebutuhan Pelatihan (TNA)', desc: 'Temukan kesenjangan keterampilan untuk merancang program pelatihan.' },
          ]
        },
        {
          id: 'bootcamp',
          title: 'Boot Camp HR',
          path: '/business/hr-bootcamp',
          subtitle: 'Program pelatihan intensif untuk membangun keunggulan HR strategis.',
          icon: 'icons/ic_computer-outline.svg',
          subMenus: [
            { title: 'Boot Camp HRBP', desc: 'Program transisi intensif untuk menjadi HR Business Partner strategis.' },
            { title: 'Studi Kasus Langsung', desc: 'Analisis studi kasus praktis dan sesi resolusi bisnis dunia nyata.' },
            { title: 'Bimbingan CHRO', desc: 'Pelatihan langsung dari pemimpin human capital korporat berpengalaman.' },
            { title: 'Analitik SDM', desc: 'Pelajari penggunaan data untuk memprediksi dan mengukur ROI bisnis HR.' },
            { title: 'Keputusan Berbasis AI', desc: 'Integrasikan AI ke dalam alur kerja HR untuk otomatisasi.' },
            { title: 'Manajemen Pemangku Kepentingan', desc: 'Kuasai kerangka kerja untuk mengelola perubahan & mempengaruhi.' },
          ]
        },
        {
          id: 'legal',
          title: 'Hubungan Industrial & Hukum',
          path: '/business/industrial-relations',
          subtitle: 'Panduan ahli tentang hubungan kerja, hukum ketenagakerjaan, & sengketa.',
          icon: 'icons/ic_building-library-outline.svg',
          subMenus: [
            { title: 'Kepatuhan Hukum', desc: 'Pengembangan dan tinjauan Peraturan Perusahaan (PP) & PKB.' },
            { title: 'Manajemen Risiko', desc: 'Mitigasi risiko restrukturisasi, kontrak, dan pemutusan hubungan kerja.' },
            { title: 'Penyelesaian Sengketa', desc: 'Negosiasi bipartit efektif dan layanan mediasi konflik tempat kerja.' },
            { title: 'Panduan Advokasi Pengadilan', desc: 'Panduan ahli untuk mediasi, konsiliasi, dan kasus PHI.' },
            { title: 'Kemitraan Serikat Pekerja', desc: 'Bangun hubungan kolaboratif dengan serikat pekerja.' },
            { title: 'Audit Kepatuhan HI', desc: 'Audit proaktif penyelarasan dengan peraturan tenaga kerja terbaru.' },
          ]
        },
        {
          id: 'hse',
          title: 'Kesehatan & Keselamatan Lingkungan',
          path: '/business/hse',
          subtitle: 'Program K3L komprehensif untuk keselamatan tempat kerja.',
          icon: 'icons/ic_check-shield-outline.svg',
          subMenus: [
            { title: 'Penilaian Risiko', desc: 'Identifikasi bahaya, investigasi insiden, dan tindakan korektif.' },
            { title: 'Pembuatan Kebijakan & SOP', desc: 'Pembuatan manual dan panduan sistem manajemen ISO 45001.' },
            { title: 'Kepatuhan Lingkungan', desc: 'Pengurusan izin (UKL-UPL, AMDAL) dan persiapan audit PROPER.' },
            { title: 'Budaya 5S', desc: 'Implementasi lapangan untuk menjaga area kerja tertata.' },
            { title: 'Pencegahan Proaktif', desc: 'Hilangkan potensi bahaya sejak dini untuk mencegah insiden kritis.' },
            { title: 'Peta Jalan Sertifikasi', desc: 'Langkah terpandu dari analisis kesenjangan hingga kepatuhan resmi.' },
          ]
        },
        {
          id: 'culture',
          title: 'Budaya & Acara Perusahaan',
          path: '/business/corporate-culture',
          subtitle: 'Bangun budaya perusahaan berkembang melalui program strategis.',
          icon: 'icons/ic_users-outline.svg',
          subMenus: [
            { title: 'Etika Kerja Profesional', desc: 'Lokakarya penanaman akuntabilitas, integritas, dan kolaborasi.' },
            { title: 'Penyelenggara Acara Korporat', desc: 'Perencanaan town hall dan acara penghargaan tahunan.' },
            { title: 'Pelatihan Outbound', desc: 'Aktivitas luar ruangan membangun kepercayaan, tim, & kepemimpinan.' },
            { title: 'Asesmen Budaya', desc: 'Diagnosis pola perilaku dan kesenjangan budaya.' },
            { title: 'Kustomisasi Kurikulum', desc: 'Menyesuaikan program transformasi budaya khusus.' },
            { title: 'Fasilitasi Dinamis', berner: 'Eksekusi lokakarya interaktif berenergi tinggi untuk mendorong perubahan.' },
          ]
        },
        {
          id: 'lsp',
          title: 'Lembaga Sertifikasi Profesi',
          path: '/business/lsp',
          subtitle: 'Program sertifikasi untuk memvalidasi dan meningkatkan kompetensi HR.',
          icon: 'icons/ic_check-badge-outline.svg',
          subMenus: [
            { title: 'Sertifikasi HR', desc: 'Sertifikasi profesional yang diakui untuk spesialis & praktisi HR.' },
            { title: 'Standar Kompetensi', desc: 'Kerangka kerja kompetensi dan kriteria penilaian standar industri.' },
            { title: 'Akreditasi Pelatihan', desc: 'Akreditasi resmi untuk program dan penyedia pelatihan.' },
            { title: 'Verifikasi Kredensial', desc: 'Verifikasi dan validasi kredensial serta sertifikasi profesional.' },
            { title: 'Jalur Karier', desc: 'Jalur perkembangan karier terstruktur dengan pencapaian yang jelas.' },
            { title: 'Pendidikan Berkelanjutan', desc: 'Program pengembangan profesional untuk mempertahankan kredensial.' },
          ]
        }
      ]
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    ui: {
      learnMore: "Learn More",
      viewAll: "View All →"
    },
    businessTabs: [
      {
        id: 'support',
        title: 'Business Support Services',
        path: '/business/business-support',
        subtitle: 'Comprehensive support to strengthen your business operations and strategy.',
        icon: 'icons/ic_briefcase-outline.svg',
        subMenus: [
          { title: 'Company Establishment', desc: 'Expert guidance through local regulatory compliance, licensing, and legal requirements for new market entrants.' },
          { title: 'Cultural Fit Solutions', desc: 'Workshops and coaching sessions designed to bridge cultural gaps and create harmonious team integration.' },
          { title: 'Licensing Procurement', desc: 'Expedited handling of all necessary operational and sector-specific permits for your business.' },
          { title: 'Entity Structuring', desc: 'Strategic advice on PMA (Foreign Direct Investment) setups and compliance frameworks.' },
          { title: 'Cross-Cultural Harmony', desc: 'Interactive workshops designed to foster mutual understanding and day-one harmony among teams.' },
          { title: 'Leadership Coaching', desc: 'Equipping expatriate and local leaders with strategies for cross-cultural team management.' },
        ]
      },
      {
        id: 'hcs',
        title: 'Human Capital Solutions',
        path: '/business/humancapital-solutions',
        subtitle: 'Strategic solutions to optimize and develop your human capital assets.',
        icon: 'icons/ic_search-outline.svg',
        subMenus: [
          { title: 'Executive Search', desc: 'A proactive, targeted approach to recruiting passive C-suite talents and senior leaders.' },
          { title: 'Recruitment Services', desc: 'End-to-end recruitment process management for mid-level positions and specialists across industries.' },
          { title: 'Talent Assessment', desc: 'Rigorous psychometric evaluations, competency mapping, and culture compatibility tests.' },
          { title: 'Elite Talent Pool', desc: 'Exclusive access to a curated network of high-performing passive candidates in Indonesia.' },
          { title: 'Market Mapping', desc: 'Industry-wide analysis to identify prospective leaders who fit your exact structural objectives.' },
          { title: 'Candidate Calibration', desc: 'Structured behavioral testing and reference checks for full management-style alignment.' },
        ]
      },
      {
        id: 'payroll',
        title: 'Payroll & Outsourcing',
        path: '/business/payroll',
        subtitle: 'End-to-end payroll management and business process outsourcing solutions.',
        icon: 'icons/ic_circle-stack-outline.svg',
        subMenus: [
          { title: 'Payroll Processing', desc: 'Accurate, timely payroll processing aligned with Indonesian labor and PPh 21 tax regulations.' },
          { title: 'Staff Outsourcing', desc: 'Flexible workforce solutions that scale with your business and reduce administrative burden.' },
          { title: 'Statutory Compliance', desc: 'Complete social security (BPJS Kesehatan & Ketenagakerjaan) administration and compliance.' },
          { title: 'Transparent Reporting', desc: 'Structured reporting to provide clear financial and operational oversight for management.' },
          { title: 'Tax Administration', desc: 'Strict compliance with local tax obligations, withholding, and annual PPh 21 reporting.' },
          { title: 'HR Administration', desc: 'Streamlining employee documents, contracts, and manual calculations to reduce overhead.' },
        ]
      },
      {
        id: 'assessment',
        title: 'Assessment Tools',
        path: '/business/assessment-tools',
        subtitle: 'Advanced assessment tools to evaluate employee competencies and potential.',
        icon: 'icons/ic_education-outline.svg',
        subMenus: [
          { title: 'Skill & Performance', desc: 'Evaluate technical readiness and work target achievements with measurable metrics.' },
          { title: '360-Degree Feedback', desc: 'Gain a comprehensive view from the entire professional interaction structure via anonymous feedback.' },
          { title: 'Potential & Personality', desc: 'Map the psychological DNA of your employees for future succession readiness.' },
          { title: 'Promotion & Succession', desc: 'Objectively identify future leaders and prepare top talent for key organizational positions.' },
          { title: 'Restructuring Support', desc: 'Remap talent and capabilities during corporate mergers, acquisitions, or efficiency drives.' },
          { title: 'Training Needs (TNA)', desc: 'Precisely discover skill gaps to design effective training and development programs.' },
        ]
      },
      {
        id: 'bootcamp',
        title: 'HR Boot Camp',
        path: '/business/hr-bootcamp',
        subtitle: 'Intensive training programs to build HR excellence and strategic capabilities.',
        icon: 'icons/ic_computer-outline.svg',
        subMenus: [
          { title: 'HRBP Boot Camp', desc: 'Intensive cohort-based program to transition traditional HR practitioners into strategic business partners.' },
          { title: 'Live Case Studies', desc: 'Practical case study analysis and real-world business resolution sessions with peer collaboration.' },
          { title: 'CHRO Mentorship', desc: 'Direct coaching and real-world guidance from experienced corporate human capital leaders.' },
          { title: 'People Analytics', desc: 'Learn to harness organizational data to predict turnover and quantify the business ROI of HR.' },
          { title: 'AI-Powered Decisions', desc: 'Integrate AI tools into your HR workflows to automate administration and boost execution velocity.' },
          { title: 'Stakeholder Management', desc: 'Master advanced frameworks for consulting, managing change, and influencing without authority.' },
        ]
      },
      {
        id: 'legal',
        title: 'Industrial Relations & Legal Advisory',
        path: '/business/industrial-relations',
        subtitle: 'Expert guidance on labor relations, employment law, and dispute resolution.',
        icon: 'icons/ic_building-library-outline.svg',
        subMenus: [
          { title: 'Labor Law Compliance', desc: 'Development and review of Company Regulations (PP) and Collective Labor Agreements (PKB).' },
          { title: 'Risk Management', desc: 'Mitigate employment risks related to restructuring, contracts, and legally compliant termination.' },
          { title: 'Dispute Resolution', desc: 'Effective bipartite negotiations and professional mediation services for workplace conflicts.' },
          { title: 'Court Advocacy Guidance', desc: 'Expert guidance on preparing for mediation, conciliation, and Industrial Relations Court (PHI) cases.' },
          { title: 'Union Partnerships', desc: 'Build collaborative, constructive relationships with labor unions to foster workplace harmony.' },
          { title: 'IR Compliance Audits', desc: 'Proactive audits to ensure complete alignment with the latest Indonesian manpower regulations.' },
        ]
      },
      {
        id: 'hse',
        title: 'Health, Safety, and Environment',
        path: '/business/hse',
        subtitle: 'Comprehensive HSE programs to ensure workplace safety and employee wellbeing.',
        icon: 'icons/ic_check-shield-outline.svg',
        subMenus: [
          { title: 'Risk Assessment', desc: 'Proactively identify workplace hazards, conduct incident investigations, and determine corrective actions.' },
          { title: 'Policy & SOP Creation', desc: 'Creation of safety manuals and guidance for implementing standard ISO 45001 management systems.' },
          { title: 'Environmental Compliance', desc: 'Processing environmental permits (UKL-UPL, AMDAL) and preparation for ministry PROPER audits.' },
          { title: '5S Culture', desc: 'Systematic field implementation to keep work areas Sorted, Organized, and Sustained.' },
          { title: 'Proactive Prevention', desc: 'Eliminate potential hazards early to prevent critical fire, electrical, or operational incidents.' },
          { title: 'Roadmap to Certification', desc: 'Guided steps from initial gap analysis to official safety and environmental compliance.' },
        ]
      },
      {
        id: 'culture',
        title: 'Corporate Culture & Events',
        path: '/business/corporate-culture',
        subtitle: 'Build a thriving corporate culture through strategic programs and events.',
        icon: 'icons/ic_users-outline.svg',
        subMenus: [
          { title: 'Professional Work Ethic', desc: 'Workshops instilling accountability, integrity, collaboration, and service excellence standards.' },
          { title: 'Corporate Event Organizing', desc: 'End-to-end planning of town halls and annual recognition events to strengthen cohesion.' },
          { title: 'Outbound Training', desc: 'Outdoor activities building trust, teamwork, and leadership through shared challenges.' },
          { title: 'Culture Assessment', desc: 'Diagnosing behavioral patterns and cultural gaps to identify development opportunities.' },
          { title: 'Curriculum Customization', desc: 'Tailoring custom culture transformation programs and event formats for alignment.' },
          { title: 'Dynamic Facilitation', berner: 'High-energy execution of interactive workshops to drive organizational change.' }, 
        ]
      },
      {
        id: 'lsp',
        title: 'Professional Certification Institute',
        path: '/business/lsp',
        subtitle: 'Professional certification programs to validate and enhance HR competencies.',
        icon: 'icons/ic_check-badge-outline.svg',
        subMenus: [
          { title: 'HR Certification', desc: 'Recognized professional certifications for HR specialists and practitioners.' },
          { title: 'Competency Standards', desc: 'Industry-standard competency frameworks and assessment criteria.' },
          { title: 'Training Accreditation', desc: 'Official accreditation of training programs and training providers.' },
          { title: 'Credential Verification', desc: 'Verification and validation of professional credentials and certifications.' },
          { title: 'Career Pathways', desc: 'Structured career progression paths with clear certification milestones.' },
          { title: 'Continuing Education', desc: 'Ongoing professional development programs for credential maintenance.' },
        ]
      }
    ]
  };
};
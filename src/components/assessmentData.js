export const getAssessmentData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Alat Asesmen",
        title1: "Ukur Kemampuan,",
        title2: "Hilangkan Asumsi dalam",
        titleHighlight: "Keputusan HR Anda",
        description: "Hadirkan presisi dalam pengembangan talenta. Evaluasi potensi kepemimpinan, kemampuan teknis, dan kesesuaian budaya secara objektif melalui alat asesmen berstandar industri.",
        badge: "Analitik Asesmen",
        mockupTitle: "Potensi Kepemimpinan",
        mockupDesc: "Kandidat mencapai skor 92% pada strategi eksekusi."
      },
      portfolio: {
        eyebrow: "Portofolio Inti",
        title: "Alat Asesmen Berbasis Data",
        description: "Kami menggunakan pendekatan multidimensi untuk mengukur apa yang benar-benar berdampak pada kinerja dan pertumbuhan organisasi Anda.",
        labels: {
          focus: "Fokus Evaluasi",
          methodology: "Metodologi",
          output: "Hasil Akhir"
        },
        tabs: [
          {
            id: 'skill',
            title: 'Penilaian Keterampilan & Kinerja',
            shortDesc: 'Evaluasi kesiapan teknis dan pencapaian target kerja dengan metrik yang terukur.',
            focus: 'Mengukur kesenjangan kompetensi teknis & pencapaian Key Performance Indicators (KPI).',
            methodology: 'Tes fungsional, simulasi praktis, dan studi kasus spesifik industri.',
            output: 'Skor kuantitatif kesiapan teknis karyawan dan matriks kinerja.',
            image: 'https://images.unsplash.com/photo-1701980889802-55ff39e2e973?auto=format&fit=crop&w=800&q=80',
          },
          {
            id: '360',
            title: 'Umpan Balik 360-Derajat',
            shortDesc: 'Dapatkan pandangan komprehensif dari seluruh struktur interaksi profesional.',
            focus: 'Mengevaluasi efektivitas kolaborasi, gaya komunikasi, dan kepemimpinan.',
            methodology: 'Kuesioner anonim yang dikalibrasi dari atasan, rekan kerja, dan bawahan.',
            output: 'Pemetaan titik buta (blind spot) interpersonal dan laporan efektivitas kolaborasi.',
            image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=800&q=80',
          },
          {
            id: 'potential',
            title: 'Potensi & Kepribadian',
            shortDesc: 'Petakan DNA psikologis karyawan Anda untuk kesiapan suksesi di masa depan.',
            focus: 'Kesiapan suksesi, ketangkasan belajar (learning agility), dan gaya kerja.',
            methodology: 'Tes psikometri, inventarisasi kepribadian, dan evaluasi kecocokan budaya.',
            output: 'Profil psikologis komprehensif dan rekomendasi jalur karier yang tepat.',
            image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&w=800&q=80',
          }
        ]
      },
      context: {
        eyebrow: "Konteks Implementasi",
        title: "Skenario Implementasi Strategis",
        description: "Alat asesmen kami dirancang untuk mendukung keputusan krusial di seluruh siklus hidup manajemen HR di perusahaan Anda.",
        cards: [
          {
            title: "Promosi & Suksesi",
            desc: "Identifikasi calon pemimpin masa depan secara objektif dan siapkan talenta terbaik untuk mengisi posisi kunci organisasi."
          },
          {
            title: "Restrukturisasi",
            desc: "Petakan ulang talenta dan kemampuan selama merger, akuisisi, atau upaya efisiensi operasional perusahaan."
          },
          {
            title: "Kebutuhan Pelatihan (TNA)",
            desc: "Temukan kesenjangan keterampilan (skill gap) secara tepat untuk merancang program pelatihan dan pengembangan yang efektif."
          },
          {
            title: "Evaluasi Kinerja",
            desc: "Berikan data pendukung yang valid dan objektif untuk keputusan kompensasi, bonus tahunan, dan retensi."
          }
        ]
      },
      methodology: {
        eyebrow: "Metodologi Asesmen",
        title: "Proses Terstruktur, Hasil Terukur",
        description: "Kami memastikan setiap tahap asesmen berjalan transparan, efisien, dan memberikan data yang benar-benar relevan dengan tujuan bisnis Anda.",
        steps: [
          {
            title: "Penemuan & Penyelarasan",
            desc: "Sesi diskusi mendalam dengan pemangku kepentingan untuk menentukan indikator kompetensi, kriteria, dan metrik keberhasilan yang selaras dengan budaya perusahaan."
          },
          {
            title: "Penerapan Aman",
            desc: "Distribusi alat tes dan kuesioner ke seluruh peserta melalui platform digital yang aman, meminimalkan kendala teknis, dan dilengkapi instruksi yang jelas."
          },
          {
            title: "Analisis Multi-Dimensi",
            desc: "Pemrosesan data mentah menggunakan sistem analitik terkalibrasi untuk meminimalkan bias (menjaga 100% objektivitas) dan memetakan pola kompetensi."
          },
          {
            title: "Pelaporan Eksekutif & Debriefing",
            desc: "Penyampaian laporan visual komprehensif, diikuti sesi presentasi dengan konsultan ahli kami untuk mendiskusikan wawasan yang dapat ditindaklanjuti."
          }
        ]
      },
      output: {
        eyebrow: "Hasil Akhir",
        title: "Laporan Komprehensif yang Mendorong Keputusan.",
        description: "Kami tidak memberikan Anda tumpukan data mentah yang membingungkan. Setiap proses asesmen diakhiri dengan pelaporan visual yang tajam, terstruktur, dan siap ditindaklanjuti oleh tim eksekutif.",
        items: [
          {
            title: "Wawasan yang Dapat Ditindaklanjuti",
            desc: "Laporan dilengkapi dengan rencana tindakan konkret, bukan sekadar serangkaian skor numerik tanpa konteks."
          },
          {
            title: "Visualisasi yang Jelas",
            desc: "Penyajian data melalui bagan radar, peta panas (heat maps), dan perbandingan normatif yang sangat mudah dibaca sekilas."
          },
          {
            title: "Rahasia & Aman",
            desc: "Distribusi laporan dijamin rahasia dengan enkripsi tingkat tinggi untuk mematuhi regulasi privasi data perusahaan."
          }
        ]
      }
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "Assessment Tools",
      title1: "Measure Capabilities,",
      title2: "Eliminate Assumptions in Your",
      titleHighlight: "HR Decisions",
      description: "Bring precision to talent development. Objectively evaluate leadership potential, technical capabilities, and cultural fit through industry-standard assessment tools.",
      badge: "Assessment Analytics",
      mockupTitle: "Leadership Potential",
      mockupDesc: "Candidate achieved a 92% score on execution strategy."
    },
    portfolio: {
      eyebrow: "Core Portfolio",
      title: "Data-Driven Assessment Tools",
      description: "We use a multidimensional approach to measure what truly impacts the performance and growth of your organization.",
      labels: {
        focus: "Evaluation Focus",
        methodology: "Methodology",
        output: "Final Output"
      },
      tabs: [
        {
          id: 'skill',
          title: 'Skill & Performance Appraisal',
          shortDesc: 'Evaluate technical readiness and work target achievements with measurable metrics.',
          focus: 'Measuring technical competency gaps & Key Performance Indicators (KPI) achievements.',
          methodology: 'Functional tests, practical simulations, and industry-specific case studies.',
          output: 'Quantitative scores of employee technical readiness and performance matrices.',
          image: 'https://images.unsplash.com/photo-1701980889802-55ff39e2e973?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: '360',
          title: '360-Degree Feedback',
          shortDesc: 'Gain a comprehensive view from the entire professional interaction structure.',
          focus: 'Evaluating collaboration effectiveness, communication styles, and leadership.',
          methodology: 'Calibrated anonymous questionnaires from superiors, peers, and subordinates.',
          output: 'Interpersonal blind spot mapping and collaboration effectiveness reports.',
          image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'potential',
          title: 'Potential & Personality',
          shortDesc: 'Map the psychological DNA of your employees for future succession readiness.',
          focus: 'Succession readiness, learning agility, and working styles.',
          methodology: 'Psychometric tests, personality inventories, and cultural fit evaluations.',
          output: 'Comprehensive psychological profiles and precise career path recommendations.',
          image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&w=800&q=80',
        }
      ]
    },
    context: {
      eyebrow: "Implementation Context",
      title: "Strategic Implementation Scenarios",
      description: "Our assessment tools are designed to support crucial decisions throughout the HR management lifecycle in your company.",
      cards: [
        {
          title: "Promotion & Succession",
          desc: "Objectively identify future leaders and prepare top talent to fill key organizational positions."
        },
        {
          title: "Restructuring",
          desc: "Remap talent and capabilities during mergers, acquisitions, or corporate operational efficiency efforts."
        },
        {
          title: "Training Needs (TNA)",
          desc: "Precisely discover skill gaps to design effective training and development programs."
        },
        {
          title: "Performance Eval.",
          desc: "Provide valid and objective supporting data for compensation decisions, annual bonuses, and retention."
        }
      ]
    },
    methodology: {
      eyebrow: "Assessment Methodology",
      title: "Structured Process, Measurable Results",
      description: "We ensure every assessment stage runs transparently, efficiently, and provides data that is truly relevant to your business objectives.",
      steps: [
        {
          title: "Discovery & Alignment",
          desc: "In-depth discussion sessions with stakeholders to determine competency indicators, success criteria, and success metrics aligned with your company's culture and strategic goals."
        },
        {
          title: "Secure Deployment",
          desc: "Distribution of test tools and questionnaires to all participants through a secure digital platform, minimizing technical issues, and equipped with clear instructions."
        },
        {
          title: "Multi-Dimensional Analysis",
          desc: "Processing raw data using calibrated analytical systems to minimize bias (maintaining 100% objectivity) and map competency patterns across individuals and teams."
        },
        {
          title: "Executive Reporting & Debriefing",
          desc: "Delivery of comprehensive visual reports (complete with charts and executive summaries), followed by presentation sessions with our expert consultants to discuss actionable insights."
        }
      ]
    },
    output: {
      eyebrow: "Final Output",
      title: "Comprehensive Reports That Drive Decisions.",
      description: "We don't give you piles of confusing raw data. Every assessment process ends with sharp, structured visual reporting ready to be actioned by the executive team.",
      items: [
        {
          title: "Actionable Insights",
          desc: "Reports are equipped with concrete action plans, not just a series of numerical scores without context."
        },
        {
          title: "Clear Visualizations",
          desc: "Data presentation through radar charts, heat maps, and normative comparisons that are very easy to read at a glance."
        },
        {
          title: "Confidential & Secure",
          desc: "Report distribution is guaranteed confidential with high-level encryption to comply with corporate data privacy regulations."
        }
      ]
    }
  };
};
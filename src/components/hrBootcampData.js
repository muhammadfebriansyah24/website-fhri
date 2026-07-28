export const getHRBootcampData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Seri Pendidikan Eksekutif",
        title1: "Akselerasi Keunggulan HR Anda dengan ",
        titleHighlight: "Boot Camp Intensif",
        description: "Transformasikan lintasan karier Anda melalui program kami yang ketat dan berorientasi pada hasil. Dirancang bagi para profesional berpikiran maju yang siap menguasai metodologi HR strategis dan mendorong dampak bisnis yang terukur."
      },
      flagship: {
        eyebrow: "Kohort Unggulan",
        title: "Boot Camp HRBP",
        description: "Program berbasis kohort intensif yang dirancang secara cermat untuk mentransisikan praktisi HR tradisional menjadi HR Business Partner yang sangat strategis. Kuasai kerangka kerja yang dibutuhkan untuk menyelaraskan inisiatif human capital secara langsung dengan tujuan bisnis inti.",
        bullets: [
          "Kurikulum Imersif 12 Minggu",
          "Analisis & Penyelesaian Studi Kasus Langsung",
          "Bimbingan Langsung dari CHRO Industri"
        ]
      },
      pillars: {
        eyebrow: "Pilar Utama",
        title: "Pilar Pembelajaran Inti",
        description: "Metodologi kami dibangun di atas pilar-pilar dasar yang mendefinisikan eksekutif HR modern yang berdampak tinggi.",
        cards: [
          {
            title: "Wawasan Berbasis Data",
            badge: "ANALITIK SDM",
            desc: "Melampaui intuisi. Pelajari cara memanfaatkan data organisasi untuk memprediksi perputaran karyawan, mengoptimalkan perencanaan tenaga kerja, dan mengukur ROI dari intervensi HR."
          },
          {
            title: "Pengambilan Keputusan Berbasis AI",
            badge: "AUGMENTASI PROSES",
            desc: "Integrasikan kecerdasan buatan ke dalam tumpukan teknologi HR Anda secara aman dan etis. Otomatiskan beban administratif untuk fokus pada inisiatif strategis bernilai tinggi."
          },
          {
            title: "Manajemen Pemangku Kepentingan Strategis",
            badge: "PENGARUH & KESELARASAN",
            desc: "Kuasai seni memengaruhi tanpa otoritas. Pelajari kerangka kerja tingkat lanjut untuk berkonsultasi dengan para pemimpin bisnis dan mengelola perubahan organisasi."
          }
        ]
      },
      outcomes: {
        eyebrow: "Hasil Terukur",
        title: "Pengembangan Berorientasi Hasil",
        description: "Kami tidak hanya mengajarkan teori, kami merekayasa transformasi. Boot camp kami dievaluasi secara eksklusif berdasarkan Dampak Bisnis Terverifikasi yang dihasilkan oleh alumni kami setelah kelulusan.",
        features: [
          {
            title: "KETAJAMAN KOMERSIAL",
            desc: "Lulusan secara konsisten menunjukkan peningkatan 40% dalam kemampuan menghubungkan metrik HR secara langsung dengan hasil Laba & Rugi (P&L)."
          },
          {
            title: "KECEPATAN EKSEKUSI",
            desc: "Kurangi waktu implementasi untuk inisiatif HR besar melalui metodologi tangkas (agile) yang dipelajari."
          }
        ],
        testimonial: {
          badge: "PROGRAM BOOT CAMP HR",
          quote: "\"ROI-nya langsung terasa. Dalam beberapa minggu, saya berhasil merestrukturisasi jalur talenta kami.\"",
          author: "— Sarah Jenkins, VP HR"
        }
      }
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "Executive Education Series",
      title1: "Accelerate Your HR Excellence with Intensive ",
      titleHighlight: "Boot Camps",
      description: "Transform your career trajectory through our rigorous, result-oriented programs. Designed for forward-thinking professionals ready to master strategic HR methodologies and drive quantifiable business impact."
    },
    flagship: {
      eyebrow: "Flagship Cohort",
      title: "HRBP Boot Camp",
      description: "An intensive cohort-based program meticulously engineered to transition traditional HR practitioners into highly strategic HR Business Partners. Master the frameworks needed to align human capital initiatives directly with core business objectives.",
      bullets: [
        "12-Week Immersive Curriculum",
        "Live Case Study Analysis & Resolution",
        "Direct Mentorship from Industry CHROs"
      ]
    },
    pillars: {
      eyebrow: "Core Pillars",
      title: "Core Learning Pillars",
      description: "Our methodology is built upon these foundational pillars that define the modern, high-impact HR executive.",
      cards: [
        {
          title: "Data-Driven Insights",
          badge: "PEOPLE ANALYTICS",
          desc: "Transcend intuition. Learn to harness organizational data to predict turnover, optimize workforce planning, and quantify the ROI of HR interventions."
        },
        {
          title: "AI-Powered Decision Making",
          badge: "PROCESS AUGMENTATION",
          desc: "Integrate artificial intelligence into your HR tech stack safely and ethically. Automate administrative overhead to focus on high-value strategic initiatives."
        },
        {
          title: "Strategic Stakeholder Management",
          badge: "INFLUENCE & ALIGNMENT",
          desc: "Master the art of influence without authority. Learn advanced frameworks for consulting with business leaders, managing organizational change."
        }
      ]
    },
    outcomes: {
      eyebrow: "Measurable Outcomes",
      title: "Result-Oriented Development",
      description: "We don't just teach theory, we engineer transformations. Our boot camps are evaluated exclusively on the Verifiable Business Impact generated by our alumni post-graduation.",
      features: [
        {
          title: "COMMERCIAL ACUMEN",
          desc: "Graduates consistently demonstrate a 40% increase in ability to link HR metrics directly to P&L outcomes."
        },
        {
          title: "EXECUTION VELOCITY",
          desc: "Reduce time to implementation for major HR initiatives through agile methodologies learned."
        }
      ],
      testimonial: {
        badge: "HR BOOT CAMP PROGRAMS",
        quote: "\"The ROI was immediate. Within weeks, I restructured our talent pipeline.\"",
        author: "— Sarah Jenkins, VP of HR"
      }
    }
  };
};
export const getHumanCapitalData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Solusi Human Capital",
        title: "Menghubungkan Bisnis Anda dengan Talenta Luar Biasa",
        description: "Memenuhi kebutuhan sumber daya manusia mulai dari tingkat pemula hingga eksekutif puncak. Kami memberikan solusi talenta strategis yang dirancang untuk mendukung pertumbuhan dan stabilitas operasional perusahaan Anda."
      },
      pillars: {
        eyebrow: "Pilar Utama",
        title: "Infrastruktur Talenta Komprehensif",
        description: "Menyelaraskan kemampuan kepemimpinan dan nilai-nilai perusahaan di setiap tingkatan. Tiga pilar fokus kami menghilangkan risiko perekrutan dan mendorong retensi organisasi jangka panjang.",
        card1: {
          pillar: "Pilar 01",
          badge: "Pencarian Rahasia",
          title: "Pencarian Eksekutif & Headhunting",
          desc: "Pendekatan proaktif dan sangat bertarget untuk merekrut talenta C-suite pasif dan pemimpin senior yang memiliki rekam jejak terbukti dalam mengarahkan organisasi menuju kesuksesan.",
          bullets: [
            "Pemetaan bertarget para pemimpin pasar elit yang pasif",
            "Verifikasi latar belakang berlapis secara rahasia",
            "Pemeriksaan keselarasan budaya & kepemimpinan"
          ],
          footerLabel: "Area Fokus",
          footerValue: "C-Suite & Dewan Direksi"
        },
        card2: {
          pillar: "Pilar 02",
          badge: "Ujung-ke-Ujung",
          title: "Rekrutmen Komprehensif",
          desc: "Manajemen proses rekrutmen menyeluruh yang disesuaikan untuk manajer tingkat menengah, spesialis kunci, dan peran operasional di berbagai sektor.",
          footerLabel: "Estimasi Waktu",
          footerValue: "Penempatan 3–6 Minggu"
        },
        card3: {
          pillar: "Pilar 03",
          badge: "Berbasis Data",
          title: "Asesmen Talenta",
          desc: "Pengujian psikometrik, pemetaan kompetensi teknis, dan tolak ukur kecocokan budaya untuk menjamin retensi jangka panjang.",
          footerLabel: "Metodologi",
          footerValue: "Pengujian Berbasis Bukti"
        },
        card4: {
          pillar: "Pilar 04",
          badge: "Jaringan Eksklusif",
          title: "Akses Kumpulan Talenta Pasif Elit Indonesia",
          desc: "Dengan bermitra bersama First HR Indonesia, Anda masuk ke dalam jaringan eksklusif dan rahasia yang dibangun selama bertahun-tahun melalui hubungan tepercaya, menghindari hambatan rekrutmen standar.",
          stat1Label: "Tingkat Keberhasilan Penempatan",
          stat2Label: "Rata-rata Waktu Pengisian Posisi",
          footerLabel: "Keunggulan Strategis",
          footerValue: "Jaringan Premium FHRI"
        }
      },
      process: {
        eyebrow: "Proses Kami",
        title: "Metodologi yang Ketat & Terstruktur",
        description: "Kami tidak sekadar mencocokkan resume; kami menganalisis struktur. Setiap konsultan pencarian bekerja secara eksklusif dalam vertikal mereka untuk menjamin keahlian domain.",
        steps: [
          {
            n: '01',
            stepLabel: 'Langkah 01',
            title: 'Pemetaan Pasar Tertarget',
            text: 'Memetakan industri untuk mengidentifikasi calon pemimpin yang sesuai dengan tujuan struktural pasti Anda.',
            icon: '/ic_trending-up.svg'
          },
          {
            n: '02',
            stepLabel: 'Langkah 02',
            title: 'Penjangkauan & Penawaran Rahasia',
            text: 'Percakapan pribadi yang sangat rahasia untuk menyajikan proposisi nilai Anda langsung kepada para pemimpin.',
            icon: '/ic_chat-text-outline.svg'
          },
          {
            n: '03',
            stepLabel: 'Langkah 03',
            title: 'Kalibrasi Ketat',
            text: 'Pengujian perilaku, pemeriksaan referensi, dan kalibrasi budaya untuk keselarasan gaya manajemen yang utuh.',
            icon: '/ic_check-shield-outline.svg'
          }
        ]
      }
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "Human Capital Solutions",
      title: "Connecting Your Business with Exceptional Talent",
      description: "Fulfilling human resource needs from entry-level to top executives. We deliver strategic talent solutions designed to support your company's growth and operational stability."
    },
    pillars: {
      eyebrow: "Core Pillars",
      title: "Comprehensive Talent Infrastructure",
      description: "Aligning leadership capabilities and corporate values at every level. Our three focused pillars eliminate hiring risks and drive long-term organizational retention.",
      card1: {
        pillar: "Pillar 01",
        badge: "Confidential Search",
        title: "Executive Search & Headhunting",
        desc: "A proactive, highly targeted approach to recruiting passive C-suite talents and senior leaders who possess a proven track record of steering organizations to success.",
        bullets: [
          "Targeted mapping of inactive, elite market leaders",
          "Discrete multi-tier background verification",
          "Cultural & leadership alignment checks"
        ],
        footerLabel: "Focus Area",
        footerValue: "C-Suite & Board Directors"
      },
      card2: {
        pillar: "Pillar 02",
        badge: "End-To-End",
        title: "Comprehensive Recruitment",
        desc: "End-to-end recruitment process management tailored for mid-level managers, key specialists, and operational roles across multiple sectors.",
        footerLabel: "Estimated Timeline",
        footerValue: "3–6 Weeks Placement"
      },
      card3: {
        pillar: "Pillar 03",
        badge: "Data-Driven",
        title: "Talent Assessment",
        desc: "Psychometric testing, technical competency mapping, and culture compatibility benchmarks to guarantee long-term retention.",
        footerLabel: "Methodology",
        footerValue: "Evidence-Based Testing"
      },
      card4: {
        pillar: "Pillar 04",
        badge: "Exclusive Network",
        title: "Access Indonesia's Elite Passive Talent Pool",
        desc: "By partnering with First HR Indonesia, you step into an exclusive, confidential network built over years of trusted relationships, bypassing standard recruitment friction.",
        stat1Label: "Placement Success Rate",
        stat2Label: "Average Time-to-Fill",
        footerLabel: "Strategic Advantage",
        footerValue: "FHRI Premium Network"
      }
    },
    process: {
      eyebrow: "Our Process",
      title: "Rigorous, Structured Methodology",
      description: "We don't just match resumes; we analyze structures. Every search consultant works exclusively within their vertical to guarantee domain expertise.",
      steps: [
        {
          n: '01',
          stepLabel: 'Step 01',
          title: 'Targeted Market Mapping',
          text: 'Mapping the industry to identify prospective leaders who fit your exact structural objectives.',
          icon: '/ic_trending-up.svg'
        },
        {
          n: '02',
          stepLabel: 'Step 02',
          title: 'Discreet Outreach & Pitching',
          text: 'Personal, highly confidential conversations presenting your value proposition directly to leaders.',
          icon: '/ic_chat-text-outline.svg'
        },
        {
          n: '03',
          stepLabel: 'Step 03',
          title: 'Rigorous Calibration',
          text: 'Behavioral testing, reference checks, and cultural calibration for full management-style alignment.',
          icon: '/ic_check-shield-outline.svg'
        }
      ]
    }
  };
};
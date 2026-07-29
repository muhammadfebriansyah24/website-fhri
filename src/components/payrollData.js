export const getPayrollData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Penggajian & Alih Daya",
        title1: "Fokus pada Pertumbuhan,",
        title2: "Kami Tangani Sisanya",
        description: "Manajemen operasional SDM dan administrasi yang komprehensif. Berdayakan perusahaan Anda untuk sepenuhnya fokus pada pertumbuhan bisnis inti sementara kami mengelola kompleksitasnya dengan ahli."
      },
      core: {
        eyebrow: "Layanan Inti",
        title: "Solusi Terstruktur untuk Ketenangan Pikiran",
        description: "Biarkan kami mengelola kompleksitasnya sehingga Anda dapat fokus pada pertumbuhan. Solusi kami memastikan kepatuhan, akurasi, dan keunggulan operasional.",
        modules: [
          { 
            title: 'Manajemen Penggajian', 
            desc: 'Pemrosesan yang akurat dan tepat waktu yang diselaraskan dengan peraturan ketenagakerjaan dan persyaratan pajak Indonesia.',
            icon: '/icons/ic_money-cash-outline.svg'
          },
          { 
            title: 'Alih Daya Staf', 
            desc: 'Solusi tenaga kerja fleksibel yang menyesuaikan skala kebutuhan bisnis Anda dan mengurangi beban administratif.',
            icon: '/icons/ic_user-group-outline.svg'
          },
          { 
            title: 'Kepatuhan Penuh', 
            desc: 'Kepatuhan hukum lengkap dan administrasi jaminan sosial (BPJS) komprehensif.',
            icon: '/icons/ic_check-shield-outline.svg'
          },
          { 
            title: 'Pelaporan Transparan', 
            desc: 'Pelaporan yang jelas, akurat, dan terstruktur untuk memberikan pengawasan keuangan yang lebih baik bagi manajemen Anda.',
            icon: '/icons/ic_document-chart-bar-outline.svg'
          }
        ]
      },
      zigZag: [
        {
          eyebrow: "Presisi & Ketepatan Waktu",
          title: "Manajemen Penggajian Akurat",
          desc: "Pemrosesan penggajian yang akurat dan tepat waktu, selaras sempurna dengan peraturan ketenagakerjaan dan kewajiban pajak Indonesia (PPh 21).",
          bullets: [
            "Memastikan pencairan gaji tepat waktu dan bebas dari kesalahan.",
            "Kepatuhan ketat terhadap undang-undang pajak Indonesia (PPh 21).",
            "Meminimalkan perhitungan manual dan kesalahan administratif."
          ],
          image: "/images/business-po-precision.jpg"
        },
        {
          eyebrow: "Fleksibilitas Tenaga Kerja",
          title: "Alih Daya Staf Fleksibel",
          desc: "Solusi tenaga kerja fleksibel yang dirancang untuk menskalakan kebutuhan bisnis spesifik Anda sambil secara signifikan mengurangi beban administratif Anda.",
          bullets: [
            "Sesuaikan skala tenaga kerja Anda secara dinamis berdasarkan permintaan bisnis.",
            "Kurangi rekrutmen internal dan biaya administratif overhead.",
            "Dapatkan akses langsung ke talenta yang memenuhi syarat dan telah disaring sebelumnya."
          ],
          image: "/images/business-po-workforce.jpg"
        },
        {
          eyebrow: "Mitigasi Risiko",
          title: "Kepatuhan Hukum Penuh",
          desc: "Manajemen komprehensif administrasi jaminan sosial dan kepatuhan hukum penuh untuk melindungi aset perusahaan Anda.",
          bullets: [
            "Manajemen BPJS dan jaminan sosial secara menyeluruh.",
            "Menjamin kepatuhan penuh terhadap undang-undang ketenagakerjaan terbaru.",
            "Memitigasi risiko hukum yang terkait dengan ketenagakerjaan."
          ],
          image: "/images/business-po-risk.jpg"
        },
        {
          eyebrow: "Wawasan Berbasis Data",
          title: "Pelaporan Transparan",
          desc: "Pelaporan yang jelas, terstruktur, dan transparan untuk memberikan wawasan keuangan dan operasional yang dibutuhkan tim manajemen Anda.",
          bullets: [
            "Rincian mendetail tentang pengeluaran gaji dan pajak.",
            "Laporan yang dapat diakses untuk audit dan perencanaan keuangan.",
            "Wawasan berbasis data untuk memantau efisiensi tenaga kerja."
          ],
          image: "/images/business-po-data.jpg"
        }
      ]
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "Payroll & Outsourcing",
      title1: "Focus on Growth,",
      title2: "We Handle the Rest",
      description: "Comprehensive administrative and HR operational management. Empower your company to focus entirely on core business growth while we expertly manage the complexity."
    },
    core: {
      eyebrow: "Core Services",
      title: "Structured Solutions for Peace of Mind",
      description: "Let us manage the complexity so you can focus on growth. Our solutions ensure compliance, accuracy, and operational excellence.",
      modules: [
        { 
          title: 'Payroll Management', 
          desc: 'Accurate, timely processing aligned with Indonesian labour regulations and tax requirements.',
          icon: '/icons/ic_money-cash-outline.svg'
        },
        { 
          title: 'Staff Outsourcing', 
          desc: 'Flexible workforce solutions that scale with your business needs and reduce administrative burden.',
          icon: '/icons/ic_user-group-outline.svg'
        },
        { 
          title: 'Full Compliance', 
          desc: 'Complete statutory compliance and comprehensive social security (BPJS) administration.',
          icon: '/icons/ic_check-shield-outline.svg'
        },
        { 
          title: 'Transparent Reporting', 
          desc: 'Clear, accurate, and structured reporting to provide better financial oversight for your management.',
          icon: '/icons/ic_document-chart-bar-outline.svg'
        }
      ]
    },
    zigZag: [
      {
        eyebrow: "Precision & Timeliness",
        title: "Accurate Payroll Management",
        desc: "Accurate and timely payroll processing, perfectly aligned with Indonesian labor regulations and tax obligations (PPh 21).",
        bullets: [
          "Ensure on-time and error-free salary disbursements.",
          "Strict compliance with Indonesian tax laws (PPh 21).",
          "Minimize manual calculations and administrative errors."
        ],
        image: "/images/business-po-precision.jpg"
      },
      {
        eyebrow: "Workforce Flexibility",
        title: "Flexible Staff Outsourcing",
        desc: "Flexible workforce solutions designed to scale with your specific business needs while significantly reducing your administrative burden.",
        bullets: [
          "Scale your workforce dynamically based on business demands.",
          "Reduce internal recruitment and administrative overhead.",
          "Gain immediate access to pre-screened, qualified talent."
        ],
        image: "/images/business-po-workforce.jpg"
      },
      {
        eyebrow: "Risk Mitigation",
        title: "Full Statutory Compliance",
        desc: "Comprehensive management of social security administration and full legal compliance to protect your corporate assets.",
        bullets: [
          "End-to-end management of BPJS and social securities.",
          "Guarantee full compliance with the latest labor laws.",
          "Mitigate legal risks associated with employment."
        ],
        image: "/images/business-po-risk.jpg"
      },
      {
        eyebrow: "Data-Driven Insights",
        title: "Transparent Reporting",
        desc: "Clear, structured, and transparent reporting to provide your management team with the financial and operational insights they need.",
        bullets: [
          "Detailed breakdown of payroll and tax expenditures.",
          "Accessible reports for auditing and financial planning.",
          "Data-driven insights to monitor workforce efficiency."
        ],
        image: "/images/business-po-data.jpg"
      }
    ]
  };
};
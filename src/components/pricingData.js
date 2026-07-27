export const getPricingData = (locale) => {
  // BLOK BAHASA INDONESIA (id)
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Harga FHRI",
        title: "Maksimalkan Pertumbuhan Karier Anda\ndengan Pelatihan HR Berstandar Industri",
        billedYearly: "Ditagih Tahunan",
        billedMonthly: "Ditagih Bulanan",
        saveBadge: "HEMAT 20% DENGAN PENAGIHAN TAHUNAN"
      },
      plans: {
        bootcamp: {
          title: "Bootcamp HR",
          desc: "Dapatkan promosi dengan mempelajari keterampilan baru dan meraih sertifikat",
          priceYearly: "8,850,000",
          priceMonthly: "850,000",
          periodYearly: "1 Program Sertifikat",
          periodMonthly: "/ per bulan",
          features: [
            "1 Program Sertifikat",
            "Akses 12 bulan",
            "Komunitas & dukungan ahli",
            "Garansi uang kembali 30 hari"
          ]
        },
        academy: {
          badge: "Investasi Terbaik",
          title: "Akses Akademi Penuh",
          desc: "Jadilah pembelajar berkelanjutan dan ikuti perkembangan keterampilan HR yang paling dicari",
          originalPriceYearly: "Rp 18,200,000",
          priceYearly: "14,560,000",
          priceMonthly: "1,456,000",
          periodYearly: "/ per tahun",
          periodMonthly: "/ per bulan",
          highlightText: "• Semua 16 Program",
          features: [
            "Semua 16 Program Sertifikat",
            "Akses 12 bulan",
            "Komunitas & dukungan ahli",
            "Garansi uang kembali 60 hari",
            "85+ kursus (mini)",
            "300+ Template siap unduh",
            "Webinar Mingguan",
            "FHRI Copilot",
            "Pusat Soft Skill",
            "Pelatihan personal (coaching)"
          ]
        },
        team: {
          title: "Lisensi Tim",
          desc: "Berdayakan tim beranggotakan 2+ orang dengan keterampilan dan asesmen HR kelas dunia",
          startingFrom: "Mulai dari",
          price: "23,690,000",
          period: "Semua 16 Program Sertifikat",
          features: [
            "Semua 16 Program Sertifikat (per pengguna)",
            "Akses 12 bulan",
            "Komunitas & dukungan ahli",
            "Garansi uang kembali 60 hari",
            "85+ kursus (mini)",
            "300+ Template siap unduh",
            "Webinar Mingguan",
            "FHRI Copilot",
            "Pusat Soft Skill",
            "Pelatihan personal (coaching)",
            "Konsultan Pembelajaran*",
            "Pelaporan & analitik tim*"
          ]
        }
      },
      compare: {
        eyebrow: "Perbandingan Paket",
        title: "Rincian Fitur Mendetail",
        subtitle: "Cari tahu secara persis apa saja yang termasuk dalam setiap paket pelatihan kami dan pilih yang paling selaras dengan tujuan karier Anda.",
        col1Title: "Bootcamp HR",
        col1Sub: "Keterampilan Tunggal",
        col2Title: "Akademi Penuh",
        col2Sub: "Nilai Terbaik",
        col3Title: "Lisensi Tim",
        col3Sub: "Untuk Bisnis",
        groupedFeatures: [
          {
            category: "Program & Pengalaman Belajar",
            items: [
              { name: "Kurikulum", c1: "1 Program Sertifikat", c2: "16 Program Sertifikat", c3: "16 Program Sertifikat", info: false },
              { name: "Periode akses", c1: "12 bulan", c2: "12 bulan", c3: "12 bulan", info: false },
              { name: "Sepenuhnya mandiri", c1: true, c2: true, c3: true, info: true },
              { name: "Proyek dunia nyata", c1: true, c2: true, c3: true, info: true },
              { name: "Aplikasi ponsel pintar", c1: true, c2: true, c3: true, info: true },
            ]
          },
          {
            category: "Alat, Sumber Daya & Analitik",
            items: [
              { name: "300+ Template siap unduh", c1: false, c2: true, c3: true, info: true },
              { name: "FHRI Copilot", c1: false, c2: true, c3: true, info: true },
              { name: "Pusat Soft Skill", c1: false, c2: true, c3: true, info: false },
              { name: "Pembaruan konten", c1: false, c2: true, c3: true, info: true },
              { name: "Pelaporan & analitik", c1: false, c2: false, c3: true, info: true },
            ]
          },
          {
            category: "Dukungan & Komunitas",
            items: [
              { name: "Dukungan luar biasa", c1: true, c2: true, c3: true, info: true },
              { name: "Komunitas ahli & dukungan", c1: true, c2: true, c3: true, info: true },
              { name: "Webinar Mingguan dengan pakar HR", c1: false, c2: true, c3: true, info: false },
              { name: "Pelatihan personal", c1: false, c2: true, c3: true, info: true },
              { name: "Konsultan Pembelajaran Khusus*", c1: false, c2: false, c3: true, info: true },
            ]
          },
          {
            category: "Sertifikasi & Penjaminan",
            items: [
              { name: "Sertifikat digital", c1: true, c2: true, c3: true, info: true },
              { name: "Kredit resertifikasi", c1: true, c2: true, c3: true, info: true },
              { name: "Garansi uang kembali", c1: "30 hari", c2: "60 hari (tahunan)\n30 hari (bulanan)", c3: "60 hari", info: true },
            ]
          }
        ]
      },
      ctaBanner: {
        eyebrow: "Mulai Perjalanan Anda",
        title: "Siap Mentransformasi Karier Anda?",
        description: "Jangan tunggu untuk membangun keterampilan HR masa depan. Hubungi tim kami untuk memilih paket yang tepat dan mulai pengembangan profesional Anda.",
        button: "Bergabung"
      }
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "FHRI Pricing",
      title: "Maximize Your Career Growth \nwith Industry-Leading HR Training",
      billedYearly: "Billed Yearly",
      billedMonthly: "Billed Monthly",
      saveBadge: "SAVE 20% WITH ANNUAL BILLING"
    },
    plans: {
      bootcamp: {
        title: "HR Boot Camp",
        desc: "Land a promotion by learning a new skill and earning a certificate",
        priceYearly: "8,850,000",
        priceMonthly: "850,000",
        periodYearly: "1 Certificate Program",
        periodMonthly: "/ per month",
        features: [
          "1 Certificate Program",
          "12 months access",
          "Expert community & support",
          "30-day money-back guarantee"
        ]
      },
      academy: {
        badge: "Best Investment",
        title: "Full Academy Access",
        desc: "Become a continuous learner and stay up-to-date with in-demand HR skills",
        originalPriceYearly: "Rp 18,200,000",
        priceYearly: "14,560,000",
        priceMonthly: "1,456,000",
        periodYearly: "/ per year",
        periodMonthly: "/ per month",
        highlightText: "• All 16 Programs",
        features: [
          "All 16 Certificate Programs",
          "12 months access",
          "Expert community & support",
          "60-day money-back guarantee",
          "85+ (mini) courses",
          "300+ Downloadable templates",
          "Weekly Webinars",
          "FHRI Copilot",
          "Soft Skills Hub",
          "Personal coaching"
        ]
      },
      team: {
        title: "Team License",
        desc: "Empower teams of 2+ with world-class HR skills and assessments",
        startingFrom: "Starting from",
        price: "23,690,000",
        period: "All 16 Certificate Programs",
        features: [
          "All 16 Certificate Programs (per user)",
          "12 months access",
          "Expert community & support",
          "60-day money-back guarantee",
          "85+ (mini) courses",
          "300+ Downloadable templates",
          "Weekly Webinars",
          "FHRI Copilot",
          "Soft Skills Hub",
          "Personal coaching",
          "Learning Consultant*",
          "Team reporting & analytics*"
        ]
      }
    },
    compare: {
      eyebrow: "Plan Comparison",
      title: "Detailed Feature Breakdown",
      subtitle: "Find out exactly what is included in each of our training plans and choose the one that perfectly aligns with your career goals.",
      col1Title: "HR Boot Camp",
      col1Sub: "Single Skill",
      col2Title: "Full Academy",
      col2Sub: "Best Value",
      col3Title: "Team License",
      col3Sub: "For Business",
      groupedFeatures: [
        {
          category: "Program & Learning Experience",
          items: [
            { name: "Curriculum", c1: "1 Certificate program", c2: "16 Certificate Programs", c3: "16 Certificate Programs", info: false },
            { name: "Access period", c1: "12 months", c2: "12 months", c3: "12 months", info: false },
            { name: "Fully self-paced", c1: true, c2: true, c3: true, info: true },
            { name: "Real-world projects", c1: true, c2: true, c3: true, info: true },
            { name: "Smartphone app", c1: true, c2: true, c3: true, info: true },
          ]
        },
        {
          category: "Tools, Resources & Analytics",
          items: [
            { name: "300+ Downloadable templates", c1: false, c2: true, c3: true, info: true },
            { name: "FHRI Copilot", c1: false, c2: true, c3: true, info: true },
            { name: "Soft Skills Hub", c1: false, c2: true, c3: true, info: false },
            { name: "Content upgrades", c1: false, c2: true, c3: true, info: true },
            { name: "Reporting & analytics", c1: false, c2: false, c3: true, info: true },
          ]
        },
        {
          category: "Support & Community",
          items: [
            { name: "Amazing support", c1: true, c2: true, c3: true, info: true },
            { name: "Expert community & support", c1: true, c2: true, c3: true, info: true },
            { name: "Weekly Webinars with HR experts", c1: false, c2: true, c3: true, info: false },
            { name: "Personal coaching", c1: false, c2: true, c3: true, info: true },
            { name: "Dedicated Learning Consultant*", c1: false, c2: false, c3: true, info: true },
          ]
        },
        {
          category: "Certification & Assurance",
          items: [
            { name: "Digital certificate(s)", c1: true, c2: true, c3: true, info: true },
            { name: "Recertification credits", c1: true, c2: true, c3: true, info: true },
            { name: "Money-back guarantee", c1: "30 days", c2: "60 days (annual)\n30 days (monthly)", c3: "60 days", info: true },
          ]
        }
      ]
    },
    ctaBanner: {
      eyebrow: "Start Your Journey",
      title: "Ready to Transform Your Career?",
      description: "Don't wait to build the HR skills of tomorrow. Connect with our team to choose the right plan and begin your professional development.",
      button: "Join Us"
    }
  };
};
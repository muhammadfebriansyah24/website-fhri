export const getRecruitmentData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Karier di FHRI",
        title1: "Bangun Masa Depan Anda Bersama",
        title2: "First HR Indonesia",
        description: "Kami lebih dari sekadar firma konsultan, kami adalah komunitas inovator yang disatukan oleh dorongan bersama untuk berkembang, memimpin, dan mentransformasikan lanskap HR di Indonesia.",
        viewPositions: "Lihat Lowongan"
      },
      perks: {
        eyebrow: "Mengapa Bergabung dengan Kami",
        title: "Lebih dari Sekadar Tempat Kerja",
        subtitle: "Kami berinvestasi besar pada sumber daya manusia karena kami percaya bahwa keunggulan organisasi bermula dari dalam.",
        cards: [
          {
            title: "Pembelajaran Berkelanjutan",
            desc: "Akses ke pelatihan HR premium, sertifikasi, dan bimbingan dari para veteran industri untuk mempercepat pertumbuhan profesional Anda."
          },
          {
            title: "Pekerjaan yang Berdampak",
            desc: "Bekerjalah pada proyek strategis yang secara langsung memengaruhi budaya organisasi dan kinerja bisnis perusahaan-perusahaan teratas di Indonesia."
          },
          {
            title: "Budaya Kolaboratif",
            desc: "Bergabunglah dengan tim yang suportif dan tangkas di mana transparansi, kepercayaan, dan pemecahan masalah proaktif dirayakan setiap hari."
          }
        ]
      },
      jobsSection: {
        eyebrow: "Bergabunglah dengan Tim",
        title: "Lowongan Saat Ini",
        subtitle: "Temukan langkah karier Anda berikutnya bersama First HR Indonesia.",
        showingText: "Menampilkan",
        positionsText: "posisi",
        generalOption: "Lainnya (Lamaran Umum)"
      },
      form: {
        eyebrow: "Siap Melamar?",
        title: "Kirimkan Lamaran Anda",
        description: "Ceritakan kepada kami tentang latar belakang profesional dan aspirasi Anda. Pilih peran yang Anda lamar, dan tim rekrutmen kami akan segera menghubungi Anda.",
        officeLocation: "Lokasi Kantor",
        officeLocationVal: "Jakarta, Indonesia",
        generalInquiry: "Pertanyaan Umum",
        nameLabel: "Nama Lengkap *",
        namePlaceholder: "Budi Santoso",
        emailLabel: "Alamat Email *",
        emailPlaceholder: "nama@email.com",
        posLabel: "Pilih Posisi *",
        posPlaceholder: "Pilih peran...",
        linkedinLabel: "URL LinkedIn / Portofolio",
        coverLabel: "Ringkasan Surat Lamaran (Cover Letter)",
        coverPlaceholder: "Ceritakan mengapa Anda cocok untuk peran ini...",
        submitBtn: "Kirim Lamaran"
      },
      jobOpenings: [
        {
          id: 1,
          title: "Senior HR Consultant",
          department: "Human Capital Solutions",
          location: "Jakarta, Indonesia",
          type: "Penuh waktu (Full-time)",
          desc: "Memimpin proyek transformasi HR strategis, merancang kerangka kerja kompetensi, dan memberikan bimbingan ahli kepada klien enterprise kami."
        },
        {
          id: 2,
          title: "Industrial Relations Specialist",
          department: "Legal Advisory",
          location: "Jakarta, Indonesia",
          type: "Penuh waktu (Full-time)",
          desc: "Memberikan konseling ahli tentang kepatuhan hukum ketenagakerjaan, mengelola resolusi sengketa, dan merancang Peraturan Perusahaan / PKB."
        },
        {
          id: 3,
          title: "Talent Acquisition Associate",
          department: "Executive Search",
          location: "Jakarta, Indonesia",
          type: "Penuh waktu (Full-time)",
          desc: "Menggerakkan proses rekrutmen end-to-end, melakukan headhunting untuk peran eksekutif, dan memastikan pengalaman kandidat yang mulus."
        },
        {
          id: 4,
          title: "HSE Corporate Trainer",
          department: "Health & Safety",
          location: "Jakarta, Indonesia",
          type: "Kontrak / Berbasis Proyek",
          desc: "Merancang dan menyampaikan program pelatihan Kesehatan, Keselamatan, dan Lingkungan (K3L/HSE) yang berdampak bagi klien manufaktur dan korporat."
        },
        {
          id: 5,
          title: "Digital Marketing Executive",
          department: "Marketing & Sales",
          location: "Jakarta, Indonesia",
          type: "Penuh waktu (Full-time)",
          desc: "Mengelola kampanye media sosial, membuat konten yang menarik, dan mendorong pembuatan prospek (lead generation) untuk HR Bootcamp dan Acara Korporat."
        },
        {
          id: 6,
          title: "Payroll Processing Officer",
          department: "Payroll & Outsourcing",
          location: "Jakarta, Indonesia",
          type: "Penuh waktu (Full-time)",
          desc: "Memastikan eksekusi penggajian yang akurat dan tepat waktu, mengelola administrasi BPJS, dan menjaga kepatuhan penuh terhadap regulasi PPh 21."
        }
      ]
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "Careers at FHRI",
      title1: "Build Your Future with",
      title2: "First HR Indonesia",
      description: "We are more than a consulting firm, we are a community of innovators united by a shared drive to grow, lead, and transform the HR landscape in Indonesia.",
      viewPositions: "View Open Positions"
    },
    perks: {
      eyebrow: "Why Join Us",
      title: "More Than Just a Workplace",
      subtitle: "We invest heavily in our people because we believe that organizational excellence starts from within.",
      cards: [
        {
          title: "Continuous Learning",
          desc: "Access to premium HR training, certifications, and mentorship from industry veterans to accelerate your professional growth."
        },
        {
          title: "Impactful Work",
          desc: "Work on strategic projects that directly influence the organizational culture and business performance of top companies in Indonesia."
        },
        {
          title: "Collaborative Culture",
          desc: "Join a supportive, agile team where transparency, trust, and proactive problem-solving are celebrated daily."
        }
      ]
    },
    jobsSection: {
      eyebrow: "Join The Team",
      title: "Current Openings",
      subtitle: "Discover your next career move with First HR Indonesia.",
      showingText: "Showing",
      positionsText: "positions",
      generalOption: "Other (General Application)"
    },
    form: {
      eyebrow: "Ready to Apply?",
      title: "Submit Your Application",
      description: "Tell us about your professional background and aspirations. Select the role you are applying for, and our recruitment team will get back to you shortly.",
      officeLocation: "Office Location",
      officeLocationVal: "Jakarta, Indonesia",
      generalInquiry: "General Inquiry",
      nameLabel: "Full Name *",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address *",
      emailPlaceholder: "name@email.com",
      posLabel: "Select Position *",
      posPlaceholder: "Choose a role...",
      linkedinLabel: "LinkedIn URL / Portfolio",
      coverLabel: "Brief Cover Letter",
      coverPlaceholder: "Tell us why you are a great fit for this role...",
      submitBtn: "Submit Application"
    },
    jobOpenings: [
      {
        id: 1,
        title: "Senior HR Consultant",
        department: "Human Capital Solutions",
        location: "Jakarta, Indonesia",
        type: "Full-time",
        desc: "Lead strategic HR transformation projects, design competency frameworks, and provide expert mentoring to our enterprise clients."
      },
      {
        id: 2,
        title: "Industrial Relations Specialist",
        department: "Legal Advisory",
        location: "Jakarta, Indonesia",
        type: "Full-time",
        desc: "Provide expert counsel on labor law compliance, manage dispute resolutions, and draft collective labor agreements (PKB)."
      },
      {
        id: 3,
        title: "Talent Acquisition Associate",
        department: "Executive Search",
        location: "Jakarta, Indonesia",
        type: "Full-time",
        desc: "Drive end-to-end recruitment processes, conduct headhunting for executive roles, and ensure a seamless candidate experience."
      },
      {
        id: 4,
        title: "HSE Corporate Trainer",
        department: "Health & Safety",
        location: "Jakarta, Indonesia",
        type: "Contract / Project-based",
        desc: "Design and deliver impactful Health, Safety, and Environment (HSE) training programs for manufacturing and corporate clients."
      },
      {
        id: 5,
        title: "Digital Marketing Executive",
        department: "Marketing & Sales",
        location: "Jakarta, Indonesia",
        type: "Full-time",
        desc: "Manage social media campaigns, create engaging content, and drive lead generation for our HR Bootcamps and Corporate Events."
      },
      {
        id: 6,
        title: "Payroll Processing Officer",
        department: "Payroll & Outsourcing",
        location: "Jakarta, Indonesia",
        type: "Full-time",
        desc: "Ensure accurate and timely payroll execution, manage BPJS administration, and maintain full compliance with PPh 21 regulations."
      }
    ]
  };
};
export const getLegalData = (locale) => {
  // BLOK BAHASA INDONESIA (id)
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Legal & Kepatuhan",
        title1: "Hubungan Industrial",
        title2: "& Penasihat Hukum",
        description: "Memberikan panduan ahli tentang kepatuhan ketenagakerjaan, mitigasi risiko, dan hubungan tempat kerja yang harmonis untuk melindungi aset perusahaan sekaligus memastikan lingkungan kerja yang adil.",
        badgeStatus: "Status",
        badgeText: "100% Patuh"
      },
      expertise: {
        title: "Area Keahlian Kami",
        services: [
          {
            id: "01",
            title: "Kepatuhan Hukum Ketenagakerjaan",
            desc: "Pastikan kepatuhan terhadap peraturan ketenagakerjaan terbaru melalui pengembangan dan peninjauan Peraturan Perusahaan (PP) dan Perjanjian Kerja Bersama (PKB).",
            icon: 'ic_document-text-outline.svg'
          },
          {
            id: "02",
            title: "Manajemen Risiko",
            desc: "Mitigasi risiko ketenagakerjaan terkait restrukturisasi organisasi, status ketenagakerjaan (PKWT & PKWTT), dan proses PHK yang sesuai hukum.",
            icon: 'ic_check-shield-outline.svg'
          },
          {
            id: "03",
            title: "Penyelesaian Sengketa & Litigasi",
            desc: "Perkuat kemampuan melalui negosiasi bipartit yang efektif dan panduan mediasi, konsiliasi, serta proses Pengadilan Hubungan Industrial (PHI).",
            icon: 'ic_scale.svg'
          },
          {
            id: "04",
            title: "Kemitraan Serikat Pekerja",
            desc: "Bangun hubungan konstruktif dan kolaboratif dengan serikat pekerja untuk mendorong hubungan industrial yang positif dan lingkungan kerja yang produktif.",
            icon: 'ic_user-group-outline.svg'
          }
        ]
      },
      whyMatters: {
        eyebrow: "Mengapa Bermitra dengan Kami?",
        title1: "Memitigasi Risiko,",
        title2: "Melindungi Aset.",
        description: "Dalam lingkungan peraturan yang dinamis, kesalahan langkah dalam hubungan industrial dapat menyebabkan perselisihan yang mahal dan kerusakan reputasi. Kami memberikan strategi proaktif untuk memastikan bisnis Anda tetap patuh dan harmonis.",
        bullets: [
          "Identifikasi dan mitigasi risiko proaktif.",
          "Representasi ahli dalam negosiasi bipartit dan PHI.",
          "Strategi kepatuhan yang disesuaikan untuk industri spesifik Anda.",
          "Mendorong lingkungan yang produktif dan ramah serikat pekerja."
        ]
      },
      chatbot: {
        header: "Bot Legal FHRI",
        online: "Online",
        welcome: "Halo! Selamat datang di Layanan Bantuan Legal & Hubungan Industrial FHRI.",
        prompt: "Ada yang bisa kami bantu hari ini? Silakan pilih menu di bawah:",
        btnNew: "Konsultasi Baru",
        btnTopUp: "Top-Up Token (Beli Lagi)",
        btnFaq: "Tanya Jawab (FAQ)",
        faqTitle: "Berikut adalah pertanyaan yang sering diajukan kepada kami:",
        faqMore: "Punya pertanyaan lain atau ingin lanjut konsultasi?",
        btnBack: "Kembali ke Menu Utama",
        inputPromptNew: "Baik. Silakan ceritakan secara singkat masalah Anda (misal: Sengketa PHK, Pembuatan PKB, dll).",
        inputPromptTopUp: "Siap membantu! Silakan ketik Nama Lengkap atau Nama Perusahaan Anda yang terdaftar sebelumnya.",
        inputPlaceholderNew: "Ketik masalah...",
        inputPlaceholderTopUp: "Ketik nama/perusahaan...",
        packagePromptNew: "Masalah Anda membutuhkan penanganan presisi. Silakan pilih paket konsultasi di bawah ini untuk terhubung dengan pakar kami:",
        packagePromptTopUp: "Terima kasih. Silakan pilih paket Top-Up Token yang Anda inginkan:",
        waNewIntro: "Halo Admin Legal FHRI,%0A%0ASaya ingin *Konsultasi Baru* mengenai:",
        waTopUpIntro: "Halo Admin Legal FHRI,%0A%0AToken konsultasi saya sudah habis. Saya ingin melakukan *Top-Up Token*.%0A%0ANama / Instansi terdaftar:",
        waPackageSelect: "Saya ingin mengambil paket:",
        waPackageSelectTopUp: "Paket Top-Up yang dipilih:",
        waClosingNew: "Mohon panduannya untuk proses administrasi selanjutnya. Terima kasih.",
        waClosingTopUp: "Mohon panduannya untuk pembayaran. Terima kasih.",
        userSelectionNew: "Konsultasi Baru",
        userSelectionTopUp: "Top-Up Token",
        userSelectionFaq: "Tanya Jawab (FAQ)",
        packages: [
          { id: 1, title: 'Saran Cepat', token: '1 Token', desc: 'Konsultasi 1 pertanyaan spesifik.', price: 'Rp 250.000' },
          { id: 2, title: 'Pembahasan Mendalam', token: '3 Token', desc: 'Bahas tuntas masalah kompleks.', price: 'Rp 600.000' },
          { id: 3, title: 'Review Dokumen', token: 'Sepuasnya (1 Jam)', desc: 'Review dokumen & konsultasi intensif.', price: 'Rp 1.500.000' }
        ],
        faqs: [
          { q: "Apa saja layanan legal yang disediakan FHRI?", a: "Kami menangani pembuatan PKB, Peraturan Perusahaan (PP), pendampingan bipartit, audit kepatuhan ketenagakerjaan, hingga konsultasi penyelesaian sengketa." },
          { q: "Berapa lama proses pembuatan Peraturan Perusahaan (PP)?", a: "Proses drafting hingga pengesahan biasanya memakan waktu 14 hingga 30 hari kerja, tergantung kelengkapan data dari perusahaan Anda." },
          { q: "Apakah FHRI bisa mendampingi ke Pengadilan (PHI)?", a: "Tentu. Kami memiliki tim ahli yang akan mendampingi, memberikan arahan strategis, dan memediasi proses di Pengadilan Hubungan Industrial." },
          { q: "Bagaimana sistem penggunaan Token Konsultasi?", a: "1 Token berlaku untuk 1 topik pertanyaan/sesi. Anda bebas menggunakannya kapan saja selama kuota paket Anda belum habis." }
        ]
      }
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "Legal & Compliance",
      title1: "Industrial Relations",
      title2: "& Legal Advisory",
      description: "Providing expert guidance on labor compliance, risk mitigation, and harmonized workplace relations to protect corporate assets while ensuring a fair working environment.",
      badgeStatus: "Status",
      badgeText: "100% Compliant"
    },
    expertise: {
      title: "Our Area of Expertise",
      services: [
        {
          id: "01",
          title: "Labor Law Compliance",
          desc: "Ensure compliance with the latest labor regulations through the development and review of Company Regulations (PP) and Collective Labor Agreements (PKB).",
          icon: 'ic_document-text-outline.svg'
        },
        {
          id: "02",
          title: "Risk Management",
          desc: "Mitigate employment risks related to organizational restructuring, employment status (fixed-term & permanent), and legally compliant termination processes.",
          icon: 'ic_check-shield-outline.svg'
        },
        {
          id: "03",
          title: "Dispute Resolution & Litigation",
          desc: "Strengthen capabilities through effective bipartite negotiations and guidance on mediation, conciliation, and Industrial Relations Court (PHI) proceedings.",
          icon: 'ic_scale.svg'
        },
        {
          id: "04",
          title: "Trade Union Partnership",
          desc: "Build constructive and collaborative relationships with labor unions to foster positive industrial relations and a productive work environment.",
          icon: 'ic_user-group-outline.svg'
        }
      ]
    },
    whyMatters: {
      eyebrow: "Why Partner With Us?",
      title1: "Mitigating Risks,",
      title2: "Protecting Assets.",
      description: "In a dynamic regulatory environment, missteps in industrial relations can lead to costly disputes and reputational damage. We provide proactive strategies to ensure your business remains compliant and harmonious.",
      bullets: [
        "Proactive risk identification and mitigation.",
        "Expert representation in bipartit and PHI negotiations.",
        "Tailored compliance strategies for your specific industry.",
        "Fostering a productive, union-friendly environment."
      ]
    },
    chatbot: {
      header: "FHRI Legal Bot",
      online: "Online",
      welcome: "Hello! Welcome to the FHRI Legal & Industrial Relations Support Service.",
      prompt: "How can we help you today? Please select an option below:",
      btnNew: "New Consultation",
      btnTopUp: "Top-Up Tokens (Buy More)",
      btnFaq: "Frequently Asked Questions (FAQ)",
      faqTitle: "Here are our most frequently asked questions:",
      faqMore: "Have another question or want to consult?",
      btnBack: "Back to Main Menu",
      inputPromptNew: "Great. Please briefly describe your issue (e.g., Termination Dispute, Collective Labor Agreement Drafting, etc.).",
      inputPromptTopUp: "Ready to help! Please type your Full Name or Registered Company Name.",
      inputPlaceholderNew: "Type your issue...",
      inputPlaceholderTopUp: "Type name/company...",
      packagePromptNew: "Your issue requires precision handling. Please select a consultation package below to connect with our experts:",
      packagePromptTopUp: "Thank you. Please select your desired Token Top-Up package:",
      waNewIntro: "Hello FHRI Legal Admin,%0A%0AI would like a *New Consultation* regarding:",
      waTopUpIntro: "Hello FHRI Legal Admin,%0A%0AMy consultation tokens have run out. I would like to perform a *Token Top-Up*.%0A%0ARegistered Name / Company:",
      waPackageSelect: "I would like to select the package:",
      waPackageSelectTopUp: "Selected Top-Up package:",
      waClosingNew: "Please guide me on the next administrative steps. Thank you.",
      waClosingTopUp: "Please guide me on the payment process. Thank you.",
      userSelectionNew: "New Consultation",
      userSelectionTopUp: "Top-Up Token",
      userSelectionFaq: "FAQ",
      packages: [
        { id: 1, title: 'Quick Advice', token: '1 Token', desc: 'Consultation for 1 specific question.', price: 'Rp 250,000' },
        { id: 2, title: 'Deep Dive', token: '3 Tokens', desc: 'Thorough discussion of complex issues.', price: 'Rp 600,000' },
        { id: 3, title: 'Doc Review', token: 'Unlimited (1 Hour)', desc: 'Document review & intensive consultation.', price: 'Rp 1,500,000' }
      ],
      faqs: [
        { q: "What legal services does FHRI provide?", a: "We handle the drafting of Collective Labor Agreements (PKB), Company Regulations (PP), bipartite assistance, employment compliance audits, to dispute resolution consultations." },
        { q: "How long does it take to draft Company Regulations (PP)?", a: "The drafting to ratification process usually takes 14 to 30 working days, depending on the completeness of data from your company." },
        { q: "Can FHRI provide assistance at the Industrial Relations Court (PHI)?", a: "Certainly. We have a team of experts who will assist, provide strategic direction, and mediate the process at the Industrial Relations Court." },
        { q: "How does the Consultation Token system work?", a: "1 Token is valid for 1 question/session topic. You are free to use it anytime as long as your package quota has not run out." }
      ]
    }
  };
};
export const getJoinData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        title1: "Konsultasikan Kebutuhan",
        title2: "Bisnis Anda",
        title3: "Dengan First HR Indonesia",
        description: "Dapatkan solusi strategis untuk tantangan HR Anda. Kami hadir sebagai mitra terpercaya untuk mengakselerasi pertumbuhan bisnis melalui manajemen human capital yang unggul dan terukur."
      },
      form: {
        successTitle: "Pertanyaan Berhasil Dikirim!",
        successDesc: "Mengalihkan Anda ke admin WhatsApp kami...",
        cardTitle: "Konsultasi Bisnis",
        nameLabel: "Nama Lengkap",
        namePlaceholder: "Masukkan nama Anda",
        phoneLabel: "Nomor Telepon",
        companyLabel: "Nama Perusahaan",
        companyPlaceholder: "Perusahaan Anda",
        emailLabel: "Email",
        serviceLabel: "Layanan yang Diminati",
        submitBtn: "Kirim Pertanyaan"
      },
      services: [
        "Business Support Services",
        "Human Capital Solutions",
        "Payroll & Outsourcing",
        "Assessment Tools",
        "HR Boot Camp",
        "Industrial Relations & Legal Advisory",
        "Health, Safety, and Environment",
        "Corporate Culture & Events",
        "Professional Certification Institute"
      ]
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      title1: "Consult Your",
      title2: "Business Needs",
      title3: "With First HR Indonesia",
      description: "Get strategic solutions for your HR challenges. We are here as a trusted partner to accelerate business growth through superior and measurable human capital management."
    },
    form: {
      successTitle: "Inquiry Sent Successfully!",
      successDesc: "Redirecting you to our WhatsApp admin...",
      cardTitle: "Business Consultation",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      phoneLabel: "Phone Number",
      companyLabel: "Company Name",
      companyPlaceholder: "Your Company",
      emailLabel: "Email",
      serviceLabel: "Inquired Service",
      submitBtn: "Send Inquiry"
    },
    services: [
      "Business Support Services",
      "Human Capital Solutions",
      "Payroll & Outsourcing",
      "Assessment Tools",
      "HR Boot Camp",
      "Industrial Relations & Legal Advisory",
      "Health, Safety, and Environment",
      "Corporate Culture & Events",
      "Professional Certification Institute"
    ]
  };
};
export const getHseData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        badge: "Kesehatan, Keselamatan & Lingkungan",
        title1: "Lindungi Pekerja,",
        title2: "Patuhi Peraturan,",
        title3: "Lestarikan Lingkungan.",
        description: "Solusi K3L komprehensif mulai dari investigasi insiden hingga kepatuhan lingkungan. Kami memastikan operasi bisnis Anda berjalan dengan aman, tertib, dan berkelanjutan.",
        highlights: [
          { value: "ISO 45001", label: "Standar Keselamatan Global" },
          { value: "PROPER", label: "Kepatuhan Lingkungan" },
          { value: "Nol", label: "Target Insiden" }
        ]
      },
      pillars: {
        badge: "Layanan Inti",
        title: "Tiga Pilar Utama K3L",
        description: "Pendekatan komprehensif kami memastikan setiap aspek keselamatan kerja dan keberlanjutan lingkungan di perusahaan Anda dikelola dengan standar tertinggi.",
        cards: [
          {
            title: "Penilaian Risiko & Investigasi",
            desc: "Mengidentifikasi bahaya tempat kerja secara proaktif, melakukan investigasi insiden mendalam, dan menentukan tindakan korektif yang tepat sasaran untuk mencegah kecelakaan berulang."
          },
          {
            title: "Kebijakan & Sistem Manajemen",
            desc: "Pembuatan Standar Operasional Prosedur (SOP) keselamatan dan pendampingan implementasi sistem manajemen standar internasional seperti ISO 45001."
          },
          {
            title: "Kepatuhan Lingkungan",
            desc: "Dukungan penuh dalam pengurusan izin lingkungan (UKL-UPL, AMDAL) dan persiapan menyeluruh untuk menghadapi audit PROPER dari Kementerian LHK."
          }
        ]
      },
      initiatives: {
        badge: "Inisiatif Ekstra Kami",
        title: "Lebih Dari Sekadar Kepatuhan Dokumen.",
        description: "Kesehatan dan keselamatan kerja tidak hanya diukur dari tumpukan sertifikat di atas meja. Kami percaya bahwa keselamatan operasional sejati dimulai dari membangun budaya kerja yang bersih, disiplin, dan terorganisir di lapangan.",
        points: [
          {
            title: "Implementasi Budaya 5S",
            desc: "Penerapan sistematis untuk menjaga area kerja Ringkas, Rapi, Resik, Rawat, dan Rajin. Lingkungan perumahan atau kerja yang normal dan tertata dengan baik adalah garis pertahanan pertama dalam K3."
          },
          {
            title: "Pencegahan Bahaya Proaktif",
            desc: "Lingkungan yang terawat dengan baik meminimalkan anomali secara signifikan. Kami menghilangkan potensi bahaya lebih awal untuk mencegah insiden kritis seperti korsleting, percikan api, atau bahaya kebakaran."
          }
        ],
        status: {
          label: "Status: Aman & Terkendali",
          desc: "Potensi Insiden Nol"
        }
      },
      roadmap: {
        badge: "Alur Sertifikasi",
        title: "Peta Jalan Menuju Kepatuhan Total",
        description: "Kami membimbing perusahaan Anda selangkah demi selangkah. Dari nol hingga Anda resmi memegang sertifikasi kelayakan dan kepatuhan lingkungan.",
        steps: [
          {
            title: "Audit Awal & Analisis Kesenjangan",
            desc: "Evaluasi komprehensif terhadap kondisi fasilitas dan dokumen saat ini. Kami membandingkannya dengan standar regulasi (ISO/PROPER) untuk memetakan kesenjangan kepatuhan yang harus segera ditutup."
          },
          {
            title: "Pengembangan Kebijakan",
            desc: "Pembuatan Standar Operasional Prosedur (SOP), manual keselamatan, dan penyusunan dokumen lingkungan (UKL-UPL/AMDAL) yang disesuaikan secara khusus dengan karakteristik operasional bisnis Anda."
          },
          {
            title: "Implementasi & Pelatihan",
            desc: "Pendampingan langsung di lapangan untuk menerapkan budaya disiplin, pelatihan karyawan mengenai prosedur keselamatan, dan eksekusi langkah mitigasi risiko yang nyata."
          },
          {
            title: "Sertifikasi & Audit Resmi",
            desc: "Pelaksanaan simulasi audit internal (Mock Audit), perbaikan akhir, hingga dukungan penuh saat badan sertifikasi atau kementerian melakukan audit kelayakan resmi."
          }
        ]
      },
      credentials: {
        badge: "Standar Kepatuhan",
        title: "Sistem Kami Mengacu pada Standar Nasional & Internasional",
        items: [
          { title: "45001", subtitle: "Standar Keselamatan" },
          { title: "14001", subtitle: "Lingkungan" },
          { title: "SMK3", subtitle: "Kementerian Ketenagakerjaan" },
          { title: "PROPER", subtitle: "Kementerian LHK" }
        ]
      }
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      badge: "Health, Safety & Environment",
      title1: "Protect Workers,",
      title2: "Comply with Regulations,",
      title3: "Preserve the Environment.",
      description: "Comprehensive HSE solutions from incident investigation to environmental compliance. We ensure your business operations run safely, orderly, and sustainably.",
      highlights: [
        { value: "ISO 45001", label: "Global Safety Standards" },
        { value: "PROPER", label: "Environmental Compliance" },
        { value: "Zero", label: "Incident Target" }
      ]
    },
    pillars: {
      badge: "Core Services",
      title: "Three Main HSE Pillars",
      description: "Our comprehensive approach ensures every aspect of occupational safety and environmental sustainability in your company is managed to the highest standards.",
      cards: [
        {
          title: "Risk Assessment & Investigation",
          desc: "Proactively identify workplace hazards, conduct in-depth incident investigations, and determine targeted corrective actions to prevent recurring accidents."
        },
        {
          title: "Policy & Management Systems",
          desc: "Creation of standard operating procedures (SOP) for safety and assistance in implementing international standard management systems such as ISO 45001."
        },
        {
          title: "Environmental Compliance",
          desc: "Full support in processing environmental permits (UKL-UPL, AMDAL) and thorough preparation for facing PROPER audits from the Ministry of Environment."
        }
      ]
    },
    initiatives: {
      badge: "Our Extra Initiatives",
      title: "More Than Just Document Compliance.",
      description: "Occupational health and safety is not only measured by stacks of certificates on a desk. We believe that true operational safety starts from building a clean, disciplined, and organized work culture in the field.",
      points: [
        {
          title: "5S Culture Implementation",
          desc: "Systematic implementation to keep the work area Sorted, Set in order, Shining, Standardized, and Sustained. A normal and well-organized residential or work environment is the first line of defense in OHS."
        },
        {
          title: "Proactive Hazard Prevention",
          desc: "A well-maintained environment significantly minimizes anomalies. We eliminate potential hazards early to prevent critical incidents like short circuits, sparks, or fire hazards."
        }
      ],
      status: {
        label: "Status: Safe & Controlled",
        desc: "Zero Incident Potential"
      }
    },
    roadmap: {
      badge: "Certification Flow",
      title: "Roadmap to Total Compliance",
      description: "We guide your company step by step. From ground zero until you officially hold environmental feasibility and compliance certifications.",
      steps: [
        {
          title: "Initial Audit & Gap Analysis",
          desc: "Comprehensive evaluation of current facility conditions and documents. We compare them against regulatory standards (ISO/PROPER) to map compliance gaps that must be closed immediately."
        },
        {
          title: "Policy Development",
          desc: "Creation of Standard Operating Procedures (SOP), safety manuals, and preparation of environmental documents (UKL-UPL/AMDAL) specifically tailored to your business operational characteristics."
        },
        {
          title: "Implementation & Training",
          desc: "On-site assistance for applying a disciplined culture, employee training regarding safety procedures, and execution of real risk mitigation measures."
        },
        {
          title: "Certification & Official Audit",
          desc: "Execution of internal audit simulations (Mock Audit), final improvements, to full support when certification bodies or ministries conduct official feasibility audits."
        }
      ]
    },
    credentials: {
      badge: "Compliance Standards",
      title: "Our Systems Refer to National & International Standards",
      items: [
        { title: "45001", subtitle: "Safety Standard" },
        { title: "14001", subtitle: "Environment" },
        { title: "SMK3", subtitle: "Ministry of Manpower" },
        { title: "PROPER", subtitle: "Ministry of Env." }
      ]
    }
  };
};
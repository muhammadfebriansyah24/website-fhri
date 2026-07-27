export const getNewsData = (locale) => {
  if (locale === 'id') {
    return [
      { 
        id: 'annual-hr-summit',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop', 
        title: 'Annual HR Summit 2026', 
        description: 'Bergabunglah dengan para pemimpin industri untuk membahas masa depan kerja dan transformasi HR.',
        publishedAt: '12 Agustus 2026 • 09:00 WIB',
        content: `
          <p>Konferensi tahunan Annual HR Summit kembali hadir tahun ini, mempertemukan para pemimpin industri dari berbagai sektor. Acara ini bertujuan untuk mendefinisikan ulang strategi sumber daya manusia di era transformasi digital yang bergerak cepat.</p>
          <br/>
          <p>Selain berfokus pada adaptasi teknologi dan otomatisasi, salah satu pesan utama dan agenda yang disorot khusus dalam summit ini adalah <strong>menjaga kebersihan lingkungan sekitar kita agar selalu bersih</strong>. Inisiatif ruang kerja hijau diyakini tidak hanya berdampak positif pada keberlanjutan ekosistem, tetapi juga berpengaruh langsung pada kesejahteraan dan produktivitas karyawan secara keseluruhan.</p>
          <br/>
          <p>Peserta akan memiliki kesempatan untuk mengikuti berbagai lokakarya interaktif, sesi diskusi panel dengan para ahli HR global, serta membangun jaringan strategis yang dapat memperkuat fondasi perusahaan Anda di masa depan.</p>
        `
      },
      { 
        id: 'program-launch',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop', 
        title: 'Peluncuran Program Sertifikasi', 
        description: 'Program sertifikasi baru yang tersedia untuk profesional HR tingkat menengah.',
        publishedAt: '18 Agustus 2026 • 13:30 WIB',
        content: `
          <p>First HR Indonesia dengan bangga mengumumkan peluncuran modul sertifikasi terbaru kami yang dirancang khusus untuk profesional HR tingkat menengah. Program ini dibuat untuk menjembatani kesenjangan keterampilan dalam menghadapi tantangan manajemen talenta modern.</p>
          <br/>
          <p>Modul ini mencakup berbagai topik krusial, mulai dari analisis data HR (People Analytics), strategi retensi talenta terbaik, hingga penerapan kebijakan keberagaman dan inklusi. Kami merancang kurikulum ini melalui proses kurasi yang ketat dan studi literatur yang ekstensif.</p>
          <br/>
          <p>Pendaftaran program kini sudah dibuka melalui portal resmi FHRI. Bergabunglah dengan ratusan profesional lainnya untuk mengambil langkah besar dalam eskalasi karier Anda.</p>
        `
      },
      { 
        id: 'future-of-work',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop', 
        title: 'Masa Depan Kerja Hybrid', 
        description: 'Temuan riset mengenai model kerja hybrid dan keterlibatan karyawan pada tahun 2026.',
        publishedAt: '24 Agustus 2026 • 10:15 WIB',
        content: `
          <p>Berdasarkan laporan riset terbaru yang dirilis oleh tim riset internal FHRI, model kerja hybrid kini telah bergeser dari sekadar tren sementara menjadi standar operasional jangka panjang bagi sebagian besar perusahaan multinasional.</p>
          <br/>
          <p>Penelitian menunjukkan bahwa organisasi yang berhasil menyeimbangkan fleksibilitas kerja jarak jauh dengan interaksi tatap muka yang bermakna mengalami peningkatan keterlibatan karyawan hingga 45%. Namun, tantangan terbesar saat ini adalah bagaimana menjaga budaya perusahaan di tengah tim yang terdistribusi.</p>
          <br/>
          <p>Temuan lebih lanjut merinci strategi komunikasi yang efektif, penggunaan platform kolaborasi virtual, dan pentingnya merancang ulang metrik penilaian kinerja yang berfokus pada hasil akhir (output) alih-alih semata-mata pada jam kerja.</p>
        `
      },
      { 
        id: 'partnership-announcement',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop', 
        title: 'Pengumuman Kemitraan Universitas', 
        description: 'FHRI berkolaborasi dengan universitas-universitas terkemuka untuk memperluas modul pembelajaran.',
        publishedAt: '30 Agustus 2026 • 15:45 WIB',
        content: `
          <p>Dalam upaya berkelanjutan untuk menyediakan standar pendidikan sumber daya manusia kelas dunia, First HR Indonesia telah secara resmi menandatangani nota kesepahaman (MoU) strategis dengan tiga universitas terkemuka di tanah air.</p>
          <br/>
          <p>Kolaborasi ini akan menghasilkan pengembangan modul pembelajaran hibrida yang menggabungkan ketajaman teori akademik dan studi kasus praktis dari industri. Mahasiswa yang mengambil spesialisasi Manajemen Sumber Daya Manusia kini dapat mengakumulasikan kredit mereka dengan sertifikasi resmi dari FHRI.</p>
          <br/>
          <p>Inisiatif ini diharapkan dapat menghasilkan lulusan unggul yang lebih siap kerja, memiliki pemahaman mendalam tentang ekosistem HR digital, serta mampu menyelesaikan masalah ketenagakerjaan secara komprehensif sesaat setelah memasuki dunia profesional.</p>
        `
      },
    ];
  }

  // Default Bahasa Inggris (en)
  return [
    { 
      id: 'annual-hr-summit',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop', 
      title: 'Annual HR Summit 2026', 
      description: 'Join industry leaders to discuss the future of work and HR transformation.',
      publishedAt: '12 August 2026 • 09:00 AM',
      content: `
        <p>The annual HR Summit conference is back this year, bringing together industry leaders from various sectors. This event aims to redefine human resource strategies in the era of rapidly moving digital transformation.</p>
        <br/>
        <p>Besides focusing on technological adaptation and automation, one of the main messages and agendas highlighted specifically in this summit is <strong>maintaining the cleanliness of our surrounding environment to always be clean</strong>. The green workspace initiative is believed to not only have a positive impact on ecosystem sustainability but also directly affect overall employee well-being and productivity.</p>
        <br/>
        <p>Participants will have the opportunity to join various interactive workshops, panel discussion sessions with global HR experts, and build strategic networks that can strengthen their company's foundation in the future.</p>
      `
    },
    { 
      id: 'program-launch',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop', 
      title: 'Certification Program Launch', 
      description: 'New certification programs available for mid-level HR professionals.',
      publishedAt: '18 August 2026 • 13:30 PM',
      content: `
        <p>First HR Indonesia proudly announces the launch of our latest certification module designed specifically for mid-level HR professionals. This program was created to bridge the skills gap in facing modern talent management challenges.</p>
        <br/>
        <p>This module covers various crucial topics, ranging from HR data analysis (People Analytics), top talent retention strategies, to the implementation of diversity and inclusion policies. We designed this curriculum through a rigorous curation process and extensive literature study.</p>
        <br/>
        <p>Program registration is now open through the official FHRI portal. Join hundreds of other professionals to take a major step in your career escalation.</p>
      `
    },
    { 
      id: 'future-of-work',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop', 
      title: 'The Future of Hybrid Work', 
      description: 'Research findings on hybrid work models and employee engagement in 2026.',
      publishedAt: '24 August 2026 • 10:15 AM',
      content: `
        <p>Based on the latest research report released by the FHRI internal research team, the hybrid work model has now shifted from just a temporary trend to a long-term operational standard for most multinational companies.</p>
        <br/>
        <p>The research shows that organizations that successfully balance remote work flexibility with meaningful face-to-face interactions experience an increase in employee engagement by up to 45%. However, the biggest challenge today is how to maintain company culture amidst distributed teams.</p>
        <br/>
        <p>Further findings detail effective communication strategies, the use of virtual collaboration platforms, and the importance of redesigning performance appraisal metrics that focus on final results (output) rather than solely on working hours.</p>
      `
    },
    { 
      id: 'partnership-announcement',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop', 
      title: 'University Partnership Announcement', 
      description: 'FHRI collaborates with top universities to expand learning modules.',
      publishedAt: '30 August 2026 • 15:45 PM',
      content: `
        <p>In a continuous effort to provide world-class human resource education standards, First HR Indonesia has officially signed a strategic memorandum of understanding (MoU) with three leading universities in the country.</p>
        <br/>
        <p>This collaboration will result in the development of hybrid learning modules that combine the sharpness of academic theory and practical case studies from the industry. Students taking the Human Resource Management specialization can now accumulate their credits with an official certification from FHRI.</p>
        <br/>
        <p>This initiative is expected to produce excellent graduates who are more job-ready, possess a deep understanding of the digital HR ecosystem, and are capable of solving employment problems comprehensively immediately after entering the professional world.</p>
      `
    },
  ];
};
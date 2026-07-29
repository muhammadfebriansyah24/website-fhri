export const getBusinessSupportData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Layanan Dukungan Bisnis",
        title: "Keunggulan Operasional untuk Ekspansi Bisnis Anda",
        description: "Menavigasi regulasi lokal dan integrasi budaya untuk memastikan perusahaan Anda berkembang sejak hari pertama. Panduan ahli untuk kelancaran memasuki pasar di Indonesia."
      },
      core: {
        eyebrow: "Kemampuan Inti",
        title: "Layanan Dasar untuk Kesuksesan Pasar",
        capabilities: [
          {
            title: 'Pendirian Perusahaan',
            description: 'Panduan ahli melalui kepatuhan peraturan lokal, perizinan, dan persyaratan hukum untuk pendatang pasar baru. Kami memastikan struktur dasar Anda kuat dan patuh sejak hari pertama.',
            icon: '/icons/ic_clipboard-outline.svg'
          },
          {
            title: 'Solusi Kesesuaian Budaya',
            description: 'Lokakarya dan sesi pelatihan yang dirancang untuk menjembatani kesenjangan budaya dan menciptakan integrasi tim yang harmonis. Membangun budaya perusahaan yang kohesif yang menghormati nuansa lokal sambil mempertahankan standar global.',
            icon: '/icons/ic_users-outline.svg'
          }
        ]
      },
      structural: {
        eyebrow: "Integritas Struktural",
        title: "Pendirian Perusahaan yang Sempurna",
        description: "Memasuki pasar baru membutuhkan perhatian yang cermat terhadap detail. Tim dedikasi kami menavigasi kompleksitas hukum perusahaan Indonesia, memastikan entitas Anda terstruktur secara optimal untuk efisiensi operasional dan kepatuhan peraturan penuh.",
        list: [
          { title: 'Pengadaan Izin Lokal', description: 'Penanganan cepat atas semua izin operasional dan izin spesifik sektor yang diperlukan.' },
          { title: 'Penataan Entitas Hukum', description: 'Saran strategis tentang pengaturan PMA (Penanaman Modal Asing) dan kerangka kepatuhan.' }
        ]
      },
      cultural: {
        eyebrow: "Harmoni Organisasi",
        title: "Tantangan Kesesuaian Budaya",
        description: "Keberhasilan memasuki pasar tidak hanya tentang urusan dokumen, tetapi juga tentang manusia. Kami berspesialisasi dalam menyelaraskan budaya perusahaan global dengan dinamika profesional lokal Indonesia, memastikan tim Anda beroperasi secara sinergis sejak hari pertama.",
        list: [
          { title: 'Menjembatani Perbedaan Budaya', description: 'Lokakarya interaktif yang dirancang untuk menumbuhkan saling pengertian dan keharmonisan sejak hari pertama.' },
          { title: 'Pelatihan Kepemimpinan Khusus', description: 'Membekali pemimpin ekspatriat dan lokal dengan strategi untuk manajemen tim lintas budaya.' }
        ]
      }
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "Business Support Services",
      title: "Operational Excellence for Your Business Entry",
      description: "Navigating local regulations and cultural integration to ensure your company thrives from day one. Expert guidance for seamless market entry in Indonesia."
    },
    core: {
      eyebrow: "Core Capabilities",
      title: "Foundational Services for Market Success",
      capabilities: [
        {
          title: 'Company Establishment',
          description: 'Expert guidance through local regulatory compliance, licensing, and legal requirements for new market entrants. We ensure your foundational structures are sound and compliant from day one.',
          icon: '/icons/ic_clipboard-outline.svg'
        },
        {
          title: 'Cultural Fit Solutions',
          description: 'Workshops and coaching sessions designed to bridge cultural gaps and create harmonious team integration. Build a cohesive corporate culture that respects local nuance while maintaining global standards.',
          icon: '/icons/ic_users-outline.svg'
        }
      ]
    },
    structural: {
      eyebrow: "Structural Integrity",
      title: "Flawless Company Establishment",
      description: "Entering a new market requires meticulous attention to detail. Our dedicated team navigates the complexities of Indonesian corporate law, ensuring your entity is structured optimally for operational efficiency and full regulatory compliance.",
      list: [
        { title: 'Local Licensing Procurement', description: 'Expedited handling of all necessary operational and sector-specific permits.' },
        { title: 'Legal Entity Structuring', description: 'Strategic advice on PMA (Foreign Direct Investment) setups and compliance frameworks.' }
      ]
    },
    cultural: {
      eyebrow: "Organizational Harmony",
      title: "The Cultural Fit Challenge",
      description: "A successful business entry is as much about people as it is about paperwork. We specialize in aligning global corporate culture with local Indonesian professional dynamics, ensuring your team operates synergistically from the moment doors open.",
      list: [
        { title: 'Bridging Cultural Differences', description: 'Interactive workshops designed to foster mutual understanding and day-one harmony.' },
        { title: 'Tailored Leadership Coaching', description: 'Equipping expatriate and local leaders with strategies for cross-cultural team management.' }
      ]
    }
  };
};
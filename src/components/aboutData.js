export const getAboutData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Tentang First HR Indonesia",
        title1: "Satu Misi,",
        title2: "Inovasi Tanpa Batas",
        description: "Memberdayakan organisasi melalui solusi human capital strategis. Kami menghubungkan strategi kelas dunia dengan para profesional terbaik Indonesia untuk membentuk dunia kerja yang lebih baik.",
        downloadBtn: "Unduh Company Profile",
        expertLeaders: "Pemimpin Ahli",
        readyToAssist: "Siap membantu Anda"
      },
      visionMission: {
        visionTitle: "Visi Kami",
        visionText: "Menjadi Mitra Strategis Human Capital yang paling terpercaya.",
        missionTitle: "Misi Kami",
        missions: [
          "Memberikan solusi Human Capital yang strategis.",
          "Mengembangkan manusia dan kepemimpinan.",
          "Membangun organisasi berkinerja tinggi.",
          "Bermitra dengan integritas dan keunggulan."
        ]
      },
      coreValues: {
        eyebrow: "Nilai Inti Kami",
        title: "Nilai yang Memandu Kami",
        description: "Empat pilar yang mendefinisikan cara kami bekerja, memperlakukan satu sama lain, dan memberikan dampak nyata.",
        values: [
          {
            title: 'Rasa Memiliki',
            desc: 'Kami bertindak dengan akuntabilitas, mengambil inisiatif, dan mengubah tantangan menjadi peluang melalui pemecahan masalah proaktif.'
          },
          {
            title: 'Keunggulan',
            desc: 'Kami mengejar standar tertinggi, terus berinovasi, dan memberikan hasil luar biasa dengan semangat dan tujuan.'
          },
          {
            title: 'Kepercayaan',
            desc: 'Kami membangun hubungan jangka panjang melalui kepercayaan, integritas, dan akuntabilitas sembari menepati komitmen.'
          },
          {
            title: 'Didorong untuk Berkembang',
            desc: 'Kami tidak pernah berhenti belajar, berkembang, dan bertumbuh menjadi lebih baik setiap hari di lanskap yang dinamis.'
          }
        ]
      },
      executive: {
        eyebrow: "Profil Eksekutif",
        title: "Temui Tim Kepemimpinan",
        subtitle: "Didorong oleh praktisi berpengalaman dan pemikir yang bersemangat dalam mentransformasi masa depan sumber daya manusia.",
        summaryHeader: "Ringkasan Eksekutif"
      },
      journey: {
        eyebrow: "Perjalanan FHRI",
        title1: "9 Tahun. Satu Misi.",
        title2: "Inovasi Tanpa Batas.",
        subtitle: "Linimasa singkat momen penting kami dalam memajukan praktik HR dan pembelajaran berkelanjutan.",
        timeline: [
          { year: '2017', title: 'Meletakkan Fondasi', desc: 'FHRI dimulai dari sebuah blog yang didirikan oleh Robby P. Tambunan, Heru, dan Priadi untuk berbagi wawasan seputar HR berbasis data dan pengambilan keputusan yang lebih baik.' },
          { year: '2018', title: 'Merilis Kursus Pertama', desc: 'FHRI meluncurkan kursus online pertamanya, HR Analytics Leader, untuk membantu profesional HR mengadopsi analitik di organisasi mereka.' },
          { year: '2019-2024', title: 'Memberdayakan Tim HR', desc: 'FHRI memperluas dampaknya dengan bermitra bersama organisasi terkemuka di berbagai industri untuk mengembangkan talenta HR dan mengakselerasi transformasi bisnis.' },
          { year: '2025', title: 'Model HR T-Shaped', desc: 'FHRI memperkenalkan Model Kompetensi HR T-Shaped untuk mendefinisikan ulang pengembangan HR dan memberdayakan para profesional.' },
          { year: '2026', title: 'Penyempurnaan Berkelanjutan', desc: 'Memperluas dampak melalui kemitraan dengan organisasi terkemuka di berbagai industri untuk membangun tim siap masa depan dan mengakselerasi transformasi bisnis.' }
        ]
      },
      gallery: {
        eyebrow: "Galeri",
        title: "Di Balik Layar",
        subtitle: "Masuk ke dalam dunia dinamis First HR Indonesia.",
        badge: "Momen FHRI",
        slides: [
          { id: 1, title: 'Diskusi Kolaboratif', image: '/images/about-gallery-1.jpg' },
          { id: 2, title: 'Lokakarya Ahli', image: '/images/about-gallery-2.jpg' },
          { id: 3, title: 'Sesi Diskusi HR', image: '/images/about-gallery-3.jpg' },
          { id: 4, title: 'Dasbor Analitik Digital', image: '/images/about-gallery-4.jpg' },
          { id: 5, title: 'Mentoring Kepemimpinan', image: '/images/about-gallery-5.jpg' },
          { id: 6, title: 'Aktivitas Team Building', image: '/images/about-gallery-6.jpg' },
        ]
      },
      leadershipTeam: [
        { 
          name: 'Robby P. Tambunan', 
          role: 'Chief Executive Officer', 
          image: '/images/profile_robby.jpg',
          summary: [
            "Robby Tambunan adalah seorang eksekutif berpengalaman di bidang Human Capital dan Transformasi Bisnis dengan pengalaman kepemimpinan lebih dari 30 tahun dalam berbagai fungsi, meliputi Human Resources, Corporate Services, Business Support, Hubungan Industrial, Legal, Governance, Internal Audit, HSE, dan Teknologi Informasi di berbagai sektor industri, termasuk perhotelan, manufaktur, layanan kesehatan, agribisnis, logistik, pertambangan, dan outsourcing.",
            "Sebagai Founder & Principal Consultant First HR Indonesia, beliau bekerja sama dengan pemilik bisnis, dewan direksi, dan jajaran pimpinan eksekutif untuk menyelaraskan strategi sumber daya manusia dengan tujuan bisnis, sehingga mampu mendorong transformasi organisasi, membangun keunggulan kepemimpinan, serta mendukung pertumbuhan bisnis yang berkelanjutan.",
            "Keahliannya mencakup Strategi Human Capital, Transformasi HR, Pengembangan Organisasi, Manajemen Talenta, Pengembangan Kepemimpinan, Executive Coaching, Tata Kelola HR, Manajemen Perubahan, Executive Search, Assessment Center, Learning & Development, serta Business Process Improvement. Dikenal mampu memadukan visi strategis dengan implementasi praktis, beliau membantu organisasi membangun tim berkinerja tinggi, memperkuat kapabilitas organisasi, serta mentransformasikan human capital menjadi keunggulan kompetitif yang berkelanjutan."
          ]
        },
        { 
          name: 'Indriany Rumbi T. Simatupang', 
          role: 'Commissioner', 
          image: '/images/profile_indriany.jpg',
          summary: [
            "Rumbi Simatupang adalah seorang Executive Secretary dan Corporate Secretary yang sangat terorganisir dan berorientasi pada hasil, dengan pengalaman profesional lebih dari 30 tahun, termasuk lebih dari 25 tahun dalam memberikan dukungan eksekutif yang terpercaya kepada jajaran eksekutif tingkat C-level di berbagai perusahaan terkemuka di Indonesia. Dikenal atas profesionalisme, integritas, dan kemampuan organisasinya yang sangat baik, beliau telah membangun reputasi yang kuat dalam mengelola berbagai aktivitas operasional eksekutif yang kompleks secara efisien, tepat, dan penuh kerahasiaan.",
            "Beliau memiliki kemampuan komunikasi dan interpersonal yang sangat baik, rasa tanggung jawab yang tinggi, serta kemampuan dalam mengelola berbagai prioritas secara bersamaan dengan tetap mempertahankan standar kualitas yang tinggi. Pendekatan logis dalam menyelesaikan masalah, yang dipadukan dengan kreativitas dan perhatian terhadap detail, memungkinkannya untuk memberikan solusi yang efektif, mengembangkan sistem kerja yang efisien, dan secara konsisten memberikan hasil yang melampaui ekspektasi. Loyalitas, integritas, dan komitmennya terhadap keunggulan profesional telah memperoleh kepercayaan dari para pemimpin senior sepanjang perjalanan kariernya.",
            "Saat ini, Rumbi menjabat sebagai Executive Secretary & Corporate Secretary pada salah satu perusahaan telekomunikasi terkemuka di Jakarta, posisi yang telah diembannya selama tujuh tahun terakhir. Sebelumnya, beliau menghabiskan enam tahun sebagai Senior Executive Secretary yang mendukung Deputy President Director pada salah satu perusahaan telekomunikasi terkemuka di Indonesia. Sepanjang kariernya, beliau telah mendukung berbagai eksekutif tingkat tinggi di beragam sektor industri, sekaligus berkontribusi dalam meningkatkan efektivitas organisasi, tata kelola perusahaan, dan keunggulan operasional.", 
            "Di luar karier korporasinya, Rumbi juga turut mendirikan dan mengelola bisnis Virtual Assistant bersama dua orang mitra, dengan memanfaatkan pengalaman luasnya dalam memberikan dukungan eksekutif untuk menyediakan layanan profesional jarak jauh bagi para pemimpin bisnis dan wirausahawan. Dengan memadukan pengalaman korporasi selama lebih dari tiga dekade dengan pola pikir kewirausahaan, beliau memberikan dukungan eksekutif yang andal dan berkualitas tinggi untuk meningkatkan produktivitas, menyederhanakan proses operasional, serta memungkinkan klien untuk lebih fokus pada prioritas strategis mereka."
          ]
        },
        { 
          name: 'Julianto Bona Pardamean', 
          role: 'Commissioner', 
          image: '/images/profile_julianto.jpg',
          summary: [
            "Julianto Bona Pardamean adalah seorang profesional berpengalaman dengan lebih dari tiga dekade pengalaman dalam bidang manajemen, pengembangan bisnis, operasional, konsultasi, dan manajemen proyek. Dengan latar belakang pendidikan di bidang Manajemen serta pengalaman luas dalam berbagai posisi kepemimpinan strategis, beliau memiliki keahlian yang luas dalam pengelolaan organisasi, pengembangan bisnis, pembangunan kemitraan strategis, serta pelaksanaan proyek di berbagai sektor industri.",
            "Sepanjang perjalanan kariernya, beliau telah terlibat dalam berbagai aktivitas bisnis dan proyek berskala besar di sektor energi, kelistrikan, infrastruktur, manufaktur, perdagangan, serta jaringan internet. Pengalamannya mencakup memimpin berbagai proyek strategis, mengembangkan peluang bisnis, mengelola pengadaan dan pemasangan infrastruktur kelistrikan, perdagangan komoditas industri, serta pengembangan infrastruktur dan layanan jaringan internet.",
            "Dengan pengalaman menduduki berbagai posisi strategis, termasuk sebagai Direktur Operasional, General Manager, Project Manager, Project Consultant, dan Komisaris Utama, beliau telah membangun kompetensi yang kuat dalam bidang kepemimpinan strategis, manajemen operasional, pelaksanaan proyek, pengembangan bisnis, serta pengelolaan hubungan dengan para pemangku kepentingan di tingkat nasional maupun internasional.",
            "Dengan pengalaman profesional yang luas serta kemampuan dalam mengintegrasikan perspektif strategis, operasional, dan pengembangan bisnis, beliau berkomitmen untuk mendorong pertumbuhan bisnis yang berkelanjutan, menciptakan nilai tambah bagi perusahaan dan para mitranya, serta membangun kolaborasi strategis yang berkontribusi terhadap pengembangan bisnis jangka panjang."
          ]
        },
        { 
          name: 'Charles Gatan', 
          role: 'Chief Operating Officer', 
          image: '/images/profile_gatan.jpg',
          summary: [
            "Charles Gatan adalah seorang profesional di bidang Learning & Organizational Development yang memiliki pengalaman eksekutif lebih dari 20 tahun dalam bidang Learning & Development, Quality Assurance, Organizational Development, dan Service Excellence di berbagai industri, termasuk perhotelan mewah, properti, telekomunikasi, pendidikan, dan konsultasi.",
            "Dikenal atas kemampuannya dalam membangun budaya pembelajaran berkinerja tinggi, Charles memiliki keahlian dalam merancang dan menerapkan strategi pembelajaran terintegrasi yang memperkuat kapabilitas organisasi, meningkatkan efektivitas kepemimpinan, serta meningkatkan pengalaman pelanggan. Keahliannya mencakup Learning Strategy, Training Needs Analysis, Corporate Academy Development, Competency Frameworks, Leadership Development, Quality Assurance, Service Excellence, Organizational Development, Talent Development, Employee Engagement, dan Performance Improvement.",
            "Sepanjang perjalanan kariernya, beliau telah berhasil memimpin fungsi Learning & Development dan Quality Assurance di berbagai organisasi yang diakui secara internasional, termasuk terlibat dalam berbagai proyek pre-opening hotel mewah, di mana beliau membangun sistem pembelajaran, standar operasional, kerangka kerja service excellence, serta kesiapan organisasi yang mendukung keberhasilan peluncuran bisnis dan keberlanjutan kinerja operasional. Pengalamannya juga mencakup pengembangan organisasi korporasi, peningkatan kapabilitas tenaga kerja, manajemen perubahan, serta berbagai inisiatif efektivitas organisasi yang selaras dengan strategi sumber daya manusia dan tujuan bisnis.",
            "Dikenal memiliki pola pikir strategis, kreativitas, dan kemampuan fasilitasi yang kuat, Charles memadukan keahlian operasional dengan metodologi pembelajaran inovatif untuk menciptakan pengalaman belajar yang transformatif. Gaya kepemimpinannya yang komunikatif, didukung kemampuan komunikasi dan pengelolaan pemangku kepentingan yang sangat baik, memungkinkannya untuk menginspirasi individu, membangun budaya kolaboratif, serta mengembangkan pemimpin yang siap menghadapi kebutuhan masa depan di berbagai lingkungan bisnis.",
            "Dengan semangat untuk mengembangkan potensi manusia secara optimal, Charles meyakini bahwa keunggulan organisasi dapat dicapai melalui pemberdayaan individu, pengembangan budaya pembelajaran berkelanjutan, serta penerapan service excellence sebagai bagian yang melekat dalam budaya organisasi. Misinya adalah membantu organisasi mentransformasikan pembelajaran menjadi kapabilitas bisnis strategis yang mampu mendorong pertumbuhan berkelanjutan, memperkuat keunggulan kompetitif, dan menghasilkan dampak bisnis yang terukur."
          ]
        },
        { 
          name: 'Yopie Bungaran Halomoan S.E., M.M.', 
          role: 'Chief Financial Officer', 
          image: '/images/profile_yopie.jpg',
          summary: [
            "Yopie Bungaran Halomoan, S.E., M.M. adalah seorang pemimpin di bidang keuangan yang memiliki pengalaman progresif lebih dari 20 tahun dalam tata kelola perusahaan, perencanaan strategis, dan kepemimpinan di bidang akuntansi.",
            "Dengan gelar Magister Manajemen di bidang Keuangan, beliau mampu memadukan pemahaman teori keuangan tingkat lanjut dengan rekam jejak yang kuat dalam menjalankan fungsi pengawasan pada tingkat eksekutif. Sepanjang perjalanan kepemimpinannya, beliau berhasil merancang dan mengembangkan strategi korporasi yang kuat, kerangka penganggaran untuk berbagai lokasi operasional, serta berbagai inisiatif optimalisasi arus kas yang mendorong pertumbuhan organisasi secara berkelanjutan.",
            "Beliau dikenal atas kemampuannya dalam menyelaraskan tujuan keuangan dengan visi korporasi, serta memberikan rekomendasi berbasis data kepada dewan direksi yang dapat meningkatkan profitabilitas dan memitigasi risiko sistemik.",
            "Dengan kemampuan analitis yang sangat baik dan gaya kerja yang kolaboratif, beliau memiliki keunggulan dalam membangun tim berkinerja tinggi serta mengelola hubungan strategis dengan berbagai pihak regulator.",
            "Integritas profesional yang teguh serta komitmen terhadap keunggulan operasional menjadikannya sosok yang dapat diandalkan bagi organisasi yang berorientasi pada penciptaan nilai jangka panjang."
          ]
        },
        { 
          name: 'Hana Tiranda', 
          role: 'General Manager - Operation', 
          image: '/images/profile_hana.jpg',
          summary: [
            "Hana Tiranda adalah seorang profesional di bidang Human Resources dan Business Support yang berdedikasi, dengan pengalaman progresif lebih dari 14 tahun yang mencakup Administrasi Sumber Daya Manusia, Employee Services, Operasional Perhotelan, Customer Experience, dan Dukungan Eksekutif. Perjalanan kariernya mencerminkan komitmen yang kuat terhadap keunggulan operasional, layanan yang berorientasi pada manusia, serta efektivitas organisasi di sektor perhotelan dan korporasi.",
            "Dengan landasan yang kuat dalam operasional perhotelan dan layanan pelanggan, Hana memiliki pemahaman praktis mengenai pengalaman karyawan dan tamu, sehingga mampu memberikan dukungan HR yang responsif dengan tetap mempertahankan standar profesionalisme, akurasi, dan keunggulan layanan yang tinggi. Keahliannya mencakup administrasi HR, proses onboarding karyawan, koordinasi rekrutmen, pengelolaan data dan dokumen kepegawaian, administrasi kebijakan, dukungan hubungan industrial, koordinasi perjalanan, administrasi eksekutif, serta kepatuhan terhadap peraturan ketenagakerjaan.",
            "Sepanjang perjalanan kariernya, beliau berperan penting dalam mendukung proses employee lifecycle secara menyeluruh, memperkuat operasional HR, mengoordinasikan berbagai aktivitas eksekutif, serta memastikan kelancaran pelaksanaan berbagai inisiatif administratif dan terkait sumber daya manusia. Beliau dikenal memiliki kemampuan organisasi yang sangat baik, perhatian yang tinggi terhadap detail, mampu menjaga kerahasiaan informasi, serta memiliki kemampuan membangun hubungan yang terpercaya dengan berbagai tingkat dalam organisasi.",
            "Dikenal memiliki pola pikir kolaboratif, kemampuan beradaptasi, dan komitmen terhadap perbaikan berkelanjutan, Hana secara konsisten memberikan dukungan administratif dan operasional yang andal untuk meningkatkan efisiensi organisasi dan pengalaman karyawan. Beliau meyakini bahwa Human Resources yang efektif dimulai dari layanan yang responsif, disiplin operasional yang kuat, serta hubungan yang bermakna yang mampu membangun tenaga kerja yang terlibat, produktif, dan berkinerja tinggi.",
            "Sebagai seorang profesional di bidang Human Resources, Hana memiliki semangat untuk menciptakan lingkungan kerja yang terorganisir dan berorientasi pada manusia, di mana keunggulan operasional dan kesejahteraan karyawan dapat berjalan secara harmonis untuk mendukung keberhasilan bisnis yang berkelanjutan."
          ]
        },
        { 
          name: 'Paulus Sebastian', 
          role: 'Sales & Digital Marketing', 
          image: '/images/profile_paulus.jpg',
          summary: [
            "Paulus Sebastian adalah seorang profesional di bidang Sales & Digital Marketing, Agency Builder di FPOne Jakarta—salah satu agensi terkemuka di bawah Prudential Indonesia—serta seorang Trainer dengan pengalaman luas dalam pengembangan bisnis, pembangunan tim, dan strategi pemasaran yang berorientasi pada hasil.",
            "Paulus mengawali kariernya sebagai fotografer profesional dan wirausahawan di industri fotografi pernikahan, di mana selama bertahun-tahun ia membangun merek yang kuat, mengembangkan strategi pemasaran digital, mengelola operasional penjualan, serta memberikan pengalaman pelanggan yang unggul. Perjalanan kewirausahaan tersebut membekalinya dengan pemahaman yang mendalam mengenai perilaku konsumen, membangun hubungan, serta menciptakan pertumbuhan bisnis yang berkelanjutan melalui integrasi strategi penjualan dan pemasaran digital.",
            "Saat ini, sebagai Agency Builder di FPOne Jakarta, Prudential Indonesia, Paulus berfokus pada proses rekrutmen, pembinaan, pelatihan, dan pengembangan Financial Consultant menjadi profesional berkinerja tinggi dan calon pemimpin masa depan. Ia memiliki semangat dalam membangun sistem penjualan yang berkelanjutan dengan memanfaatkan pemasaran digital dan personal branding untuk meningkatkan produktivitas tim, memperluas jangkauan pasar, serta mendorong pertumbuhan bisnis jangka panjang.",
            "Sebagai bentuk pengakuan atas kepemimpinan dan kontribusinya terhadap pertumbuhan organisasi, Paulus telah beberapa kali menerima penghargaan National Leaders Conference (NLC) atas pencapaiannya dalam membangun dan mengembangkan tim berkinerja tinggi di lingkungan Prudential Indonesia.",
            "Keahlian profesionalnya mencakup Strategi Penjualan, Pemasaran Digital, Personal Branding, Pengembangan Bisnis, Pengembangan Kepemimpinan, Rekrutmen, Team Building, Public Speaking, Training & Coaching, Customer Relationship Management (CRM), dan Social Media Marketing.",
            "Paulus meyakini bahwa perpaduan antara strategi penjualan yang efektif, pemasaran digital yang berdampak, dan kepemimpinan yang kuat merupakan fondasi bagi pertumbuhan bisnis yang berkelanjutan serta pengembangan pemimpin masa depan yang mampu menciptakan dampak yang berarti dan berkelanjutan."
          ]
        },
        { 
          name: 'Diza Gondo', 
          role: 'Sales & Digital Marketing', 
          image: '/images/profile_diza.jpg',
          summary: [
            "Diza Yeremia adalah seorang profesional di bidang Sales, Business Development, dan Relationship Management, dengan pengalaman di berbagai industri, termasuk media, kreatif, dan jasa keuangan. Dengan latar belakang pendidikan Diploma (D3) Penyiaran dan Sarjana (S1) Ilmu Komunikasi, beliau memiliki landasan yang kuat dalam komunikasi, strategi pemasaran, serta pengelolaan hubungan jangka panjang dengan klien.",
            "Diza mengawali kariernya sebagai Personal Assistant dan Producer di salah satu jaringan televisi nasional, di mana beliau mengembangkan keahlian dalam manajemen proyek, koordinasi lintas fungsi, komunikasi, serta operasional produksi. Pengalaman tersebut menjadi dasar dalam membangun kemampuan kepemimpinan, pelayanan pelanggan, dan pemecahan masalah yang dimilikinya.",
            "Selanjutnya, beliau turut mendirikan dan mengembangkan bisnis fotografi pernikahan bersama suaminya dengan berperan sebagai Marketing & Client Relationship Manager. Dalam posisi tersebut, beliau mengelola seluruh perjalanan klien, mulai dari konsultasi awal, presentasi layanan, penyusunan proposal, negosiasi kontrak, koordinasi acara, hingga tindak lanjut setelah acara. Beliau juga memimpin berbagai inisiatif pemasaran, pengembangan bisnis, dan pengelolaan hubungan dengan klien, dengan memastikan setiap pelanggan memperoleh pengalaman yang personal dan terbaik.",
            "Saat ini, Diza berkiprah sebagai Agency Builder dan Financial Consultant, membantu individu dan keluarga dalam memperkuat keamanan dan perencanaan keuangan mereka, sekaligus membimbing para profesional yang ingin membangun karier yang bermakna di industri jasa keuangan. Dengan pendekatan yang hangat, empatik, dan berorientasi pada solusi, beliau meyakini bahwa hubungan yang dibangun atas dasar kepercayaan merupakan kunci untuk menciptakan dampak yang berkelanjutan dan pertumbuhan jangka panjang."
          ]
        },
        { 
          name: 'Adriel Tambunan', 
          role: 'Sales & Digital Marketing', 
          image: '/images/profile_adriel.jpg',
          summary: [
            "Adriel Tambunan adalah seorang lulusan Hukum dari Universitas Tarumanagara yang telah membangun landasan yang kuat di bidang Digital Marketing melalui pengalaman praktis dalam pembuatan konten, pengelolaan media sosial, dan komunikasi digital. Dengan memadukan kemampuan berpikir analitis, kreativitas, dan perencanaan strategis, ia mengembangkan berbagai inisiatif pemasaran yang selaras dengan tujuan bisnis dan perkembangan tren pasar.",
            "Keahliannya mencakup perencanaan konten, copywriting, pengelolaan media sosial, produksi video pendek, pelaksanaan kampanye, serta analisis kinerja. Ia mengerjakan setiap proyek dengan perhatian tinggi terhadap detail, serta memastikan kualitas dan konsistensi pada setiap tahapan, mulai dari proses perencanaan hingga evaluasi.",
            "Didorong oleh rasa ingin tahu dan komitmen terhadap pembelajaran berkelanjutan, ia senantiasa mengikuti perkembangan tren digital, perilaku konsumen, dan teknologi baru untuk mengembangkan strategi pemasaran yang relevan dan efektif. Dengan kemampuan beradaptasi, kolaborasi, dan analisis yang baik, ia berkomitmen untuk menghadirkan solusi digital marketing yang inovatif, memberikan dampak yang terukur, serta mendukung pertumbuhan bisnis jangka panjang."
          ]
        },
        { 
          name: 'I. Kadek Lendra Sanjaya', 
          role: 'General Affair', 
          image: '/images/profile_kadek.jpg',
          summary: [
            "Sebagai General Affairs (GA) di sebuah perusahaan penyedia layanan Corporate HR Training, I Kadek Lendra Sanjaya memainkan peran strategis dalam membangun operasional yang kuat guna mendukung ekspansi pasar ke klien korporasi. Dalam tahap persiapan ini, fokus utamanya adalah melakukan standardisasi logistik pelatihan berskala besar, mengelola mobilitas trainer, serta melakukan pengadaan peralatan berkualitas tinggi yang mencerminkan profesionalisme perusahaan. Melalui pengelolaan fasilitas yang adaptif dan pengendalian anggaran yang ketat, GA memastikan seluruh program pelatihan, baik yang dilaksanakan di pusat pelatihan internal maupun di lokasi klien, dapat berjalan dengan lancar tanpa kendala teknis.",
            "Selain itu, ia juga memastikan seluruh dokumen legal perusahaan, perizinan pelatihan, serta sertifikasi keselamatan dan kesehatan kerja (K3) telah lengkap dan terpenuhi. Hal ini dilakukan untuk memenuhi standar kepatuhan yang ketat sebagaimana umumnya dipersyaratkan dalam proses tender vendor dengan perusahaan-perusahaan besar."
          ]
        },
        { 
          name: 'Saut Sitompul, Drs., M.Si., CEM', 
          role: 'Master Trainer, Executive Coach & Senior Facilitator', 
          image: '/images/profile_saut.jpg',
          summary: [
            "Saut Sitompul, Drs., M.Si., CEM adalah seorang Leadership Development Expert, Corporate Culture Strategist, dan motivator yang dikenal secara nasional, dengan pengalaman luas dalam mentransformasi kinerja organisasi melalui pengembangan kepemimpinan berbasis karakter dan etos kerja profesional.",
            "Sebagai pencetus dan penggagas 8 Professional Work Ethics Framework, beliau telah menginspirasi para pemimpin dan organisasi untuk membangun budaya berkinerja tinggi dengan memperkuat nilai-nilai integritas, akuntabilitas, disiplin, kolaborasi, dan kepemimpinan yang berorientasi pada tujuan. Filosofinya menekankan bahwa keunggulan organisasi yang berkelanjutan dimulai dari karakter individu, nilai-nilai bersama, dan budaya kepemilikan yang kuat.",
            "Sepanjang perjalanan kariernya, Saut telah bekerja sama dengan berbagai perusahaan, lembaga pemerintahan, institusi pendidikan, dan pemimpin komunitas untuk merancang dan memfasilitasi berbagai program pengembangan kepemimpinan, inisiatif transformasi budaya, lokakarya efektivitas tim, serta seminar motivasi yang memberikan dampak nyata. Gaya fasilitasi yang menarik memadukan pembelajaran berbasis pengalaman, storytelling, wawasan bisnis praktis, dan teknik transformasi perilaku yang mendorong perubahan berkelanjutan serta memberikan dampak organisasi yang terukur.",
            "Keahliannya mencakup Leadership Development, Corporate Culture Transformation, Employee Engagement, Team Building, Mindset Transformation, Service Excellence, Internalisasi Nilai-Nilai Organisasi, Motivation, dan Performance Improvement. Melalui berbagai inisiatif tersebut, beliau membantu organisasi membangun tim yang tangguh, memperkuat kolaborasi, meningkatkan komitmen karyawan, serta menumbuhkan budaya perbaikan berkelanjutan.",
            "Dikenal luas dengan julukan 'Mr. Spirit', Saut dikenal atas kemampuannya dalam membangkitkan semangat individu dan organisasi serta mentransformasikan pola pikir di tempat kerja menjadi tindakan yang berorientasi pada tujuan. Misinya adalah membantu organisasi membangun tim berkinerja tinggi, di mana karakter yang kuat, etika profesional, dan kepemimpinan yang inspiratif menjadi fondasi bagi keberhasilan bisnis yang berkelanjutan dan keunggulan organisasi dalam jangka panjang."
          ]
        },
        { 
          name: 'Ronald Ticoalu', 
          role: 'Master Trainer, Executive Coach & Senior Facilitator', 
          image: '/images/profile_ronald.jpg',
          summary: [
            "Ronald Ticoalu adalah seorang eksekutif berpengalaman dengan lebih dari 25 tahun pengalaman kepemimpinan di berbagai sektor industri, termasuk perhotelan, layanan kesehatan, properti, dan teknologi. Beliau memiliki rekam jejak yang kuat dalam memimpin operasional bisnis, mendorong pertumbuhan organisasi, serta menghasilkan kinerja bisnis yang berkelanjutan melalui kepemimpinan strategis dan keunggulan operasional.",
            "Keahliannya mencakup strategi bisnis, operasional korporasi, manajemen perhotelan, service excellence, manajemen properti, inovasi teknologi, manajemen risiko, dan pengembangan bisnis. Dengan memadukan pemikiran strategis dan pendekatan yang berorientasi pada hasil, beliau secara konsisten mampu mengubah berbagai tantangan operasional menjadi peluang pertumbuhan, sekaligus membangun tim berkinerja tinggi dan hubungan jangka panjang dengan para pemangku kepentingan.",
            "Dikenal memiliki kemampuan beradaptasi, kepemimpinan yang efektif, serta komitmen terhadap perbaikan berkelanjutan, Ronald mampu menghadirkan perspektif yang seimbang antara pelaksanaan operasional dan strategi bisnis jangka panjang. Pengalamannya yang luas di berbagai sektor industri memungkinkannya untuk menghadapi lingkungan bisnis yang kompleks, memimpin transformasi organisasi, serta menciptakan nilai yang berkelanjutan di tengah perkembangan pasar yang terus berubah."
          ]
        },
        { 
          name: 'Novriadi', 
          role: 'Master Trainer, Executive Coach & Senior Facilitator', 
          image: '/images/profile_novriadi.jpg',
          summary: [
            "Novriadi adalah seorang Senior Operations & Business Excellence Professional dengan pengalaman lebih dari tiga dekade dalam industri manufaktur, distribusi farmasi, dan retail. Sepanjang kariernya, ia memimpin berbagai fungsi strategis meliputi operations, supply chain, warehouse & distribution management, quality management system (QMS), compliance, human resources, serta continuous improvement. Berpengalaman membangun sistem kerja, meningkatkan efisiensi operasional, memperkuat tata kelola organisasi, dan mengembangkan tim untuk menghasilkan kinerja bisnis yang berkelanjutan melalui pendekatan yang praktis, terukur, dan berorientasi pada hasil."
          ]
        },
        { 
          name: 'Priadi Gunanto, S.T.', 
          role: 'Senior Trainer & Senior Facilitator', 
          image: '/images/profile_priadi.jpg',
          summary: [
            "Priadi Gunanto, S.T. adalah seorang profesional di bidang Learning dan Human Capital Development yang memiliki pengalaman lebih dari 15 tahun dalam merancang dan memimpin berbagai inisiatif strategis pengembangan sumber daya manusia di berbagai sektor industri, termasuk manufaktur, makanan dan minuman, perhotelan, logistik, pelayaran, konsultasi, dan perusahaan rintisan teknologi.",
            "Dengan latar belakang pendidikan Teknik Industri, beliau memadukan kemampuan berpikir analitis dengan pemahaman yang mendalam mengenai perilaku organisasi untuk mengembangkan solusi pembelajaran terintegrasi yang meningkatkan kapabilitas tenaga kerja, memperkuat kaderisasi kepemimpinan, dan meningkatkan kinerja bisnis. Keahliannya mencakup Learning & Development, perancangan competency framework, leadership development, performance management, pendirian corporate academy, talent development, pembangunan kapabilitas organisasi, dan transformasi budaya.",
            "Sebagai Trainer Bersertifikasi BNSP, Priadi telah berhasil merancang dan menerapkan sistem pembelajaran berbasis kompetensi, kerangka pengembangan kepemimpinan, inisiatif budaya korporasi, program pengembangan suksesi, serta strategi peningkatan kinerja yang memungkinkan organisasi membangun tim berkinerja tinggi dan mengembangkan pemimpin yang siap menghadapi kebutuhan masa depan. Pendekatannya menekankan penyelarasan strategi pembelajaran dengan tujuan bisnis untuk memastikan terciptanya dampak organisasi yang terukur dan pertumbuhan yang berkelanjutan.",
            "Dikenal memiliki gaya kepemimpinan yang kolaboratif dan pendekatan yang praktis, beliau memiliki pengalaman luas dalam executive coaching, mentoring, experiential learning, fasilitasi, dan kepemimpinan proyek lintas fungsi. Beliau bekerja sama secara erat dengan para pemimpin bisnis untuk membangun organisasi pembelajar, mempercepat pengembangan talenta, serta menciptakan budaya perbaikan berkelanjutan yang mendorong inovasi, keterlibatan karyawan, dan keberhasilan organisasi dalam jangka panjang.",
            "Dengan semangat untuk mengembangkan individu dan organisasi, Priadi meyakini bahwa pertumbuhan bisnis yang berkelanjutan dapat dicapai melalui pemberdayaan individu, penguatan kapabilitas kepemimpinan, dan pembangunan ekosistem pembelajaran yang mampu mentransformasikan potensi manusia menjadi keunggulan kompetitif yang berkelanjutan."
          ]
        },
        { 
          name: 'Martha Nurlia', 
          role: 'Senior Trainer & Senior Facilitator', 
          image: '/images/profile_martha.jpg',
          summary: [
            "Martha Nurlia adalah seorang profesional berpengalaman di bidang Learning dan Talent Development dengan pengalaman lebih dari 21 tahun, yang memadukan pengalaman kepemimpinan operasional yang luas di industri Food & Beverage dengan keahlian mendalam dalam bidang Learning & Development. Perpaduan unik antara keunggulan operasional dan pengembangan sumber daya manusia tersebut memungkinkannya untuk merancang strategi pembelajaran yang praktis dan berorientasi pada kebutuhan bisnis guna memperkuat kapabilitas organisasi serta meningkatkan kinerja tenaga kerja.",
            "Beliau memiliki spesialisasi dalam Training Needs Analysis (TNA), pengembangan strategi pembelajaran, instructional design, pengembangan berbasis kompetensi, talent management, succession planning, leadership development, dan capability building. Sepanjang perjalanan kariernya, beliau telah berhasil mengembangkan dan menerapkan berbagai inisiatif pembelajaran yang menyelaraskan pengembangan karyawan dengan tujuan organisasi, membangun tim berkinerja tinggi, serta mendukung pertumbuhan bisnis yang berkelanjutan.",
            "Dengan pengalaman lebih dari satu dekade dalam operasional secara langsung, Martha memiliki pemahaman yang kuat mengenai operasional lini depan, keunggulan layanan pelanggan, dan dinamika tenaga kerja. Wawasan operasional tersebut memungkinkannya untuk menciptakan solusi pembelajaran yang relevan dan berdampak, yang mampu menjawab tantangan bisnis secara nyata sekaligus meningkatkan keterlibatan karyawan, produktivitas, dan kualitas layanan.",
            "Dikenal memiliki kepemimpinan yang kolaboratif, integritas, dan kemampuan interpersonal yang sangat baik, beliau mampu membangun hubungan kerja yang dilandasi kepercayaan dengan para pemimpin dan karyawan di seluruh tingkatan organisasi. Beliau memiliki semangat untuk membangun budaya pembelajaran berkelanjutan, memberdayakan individu agar dapat mencapai potensi terbaiknya, serta mengembangkan kapabilitas kepemimpinan yang memungkinkan organisasi untuk terus berkembang di tengah lingkungan bisnis yang semakin kompetitif dan dinamis.",
            "Sebagai seorang profesional di bidang Learning dan Human Capital, Martha berkomitmen untuk mentransformasikan pembelajaran menjadi penggerak strategis bisnis—membantu organisasi membangun talenta yang siap menghadapi kebutuhan masa depan, memperkuat kaderisasi kepemimpinan, serta menciptakan nilai organisasi yang berkelanjutan melalui pengembangan kapabilitas secara terus-menerus."
          ]
        },
        { 
          name: 'Miftakhul Ikhsan, S.T.', 
          role: 'Senior Trainer & Senior Facilitator', 
          image: '/images/profile_miftakhul.jpg',
          summary: [
            "Miftakhul Ikhsan, S.T. merupakan seorang profesional di bidang Health, Safety, and Environment (HSE) serta lingkungan hidup dengan pengalaman lebih dari satu dekade dalam mengembangkan, mengimplementasikan, dan memperkuat sistem manajemen HSE pada organisasi manufaktur berskala besar. Ia dikenal atas kemampuannya dalam mengintegrasikan kepatuhan terhadap regulasi, keunggulan operasional, dan prinsip keberlanjutan ke dalam solusi bisnis yang praktis guna meningkatkan ketahanan organisasi serta kinerja jangka panjang.",
            "Keahliannya mencakup pengelolaan HSE dan kepatuhan lingkungan secara menyeluruh, termasuk pengurusan perizinan lingkungan (UKL-UPL dan AMDAL), perizinan berusaha melalui sistem Online Single Submission Risk-Based Approach (OSS RBA), perizinan operasional seperti SIPA untuk sistem generator, penerapan Sistem Manajemen Lingkungan, integrasi berbagai standar ISO Management System, serta pendampingan komprehensif dalam pemenuhan program PROPER Biru yang diselenggarakan oleh Kementerian Lingkungan Hidup.",
            "Ikhsan merupakan Ahli Keselamatan dan Kesehatan Kerja Umum (Ahli K3 Umum) bersertifikat yang diakreditasi oleh Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker RI), serta memiliki sertifikasi sebagai Internal Auditor ISO 22000:2018. Sertifikasi profesional tersebut memperkuat kompetensinya dalam mengembangkan, mengevaluasi, dan meningkatkan sistem manajemen terintegrasi, sekaligus memastikan kepatuhan terhadap regulasi nasional dan standar internasional yang diakui secara luas.",
            "Dengan pemahaman yang mendalam terhadap regulasi di Indonesia serta standar manajemen internasional, Ikhsan bermitra dengan berbagai organisasi untuk membangun tata kelola yang kuat, memperkuat manajemen risiko, meningkatkan kepatuhan terhadap regulasi, serta menumbuhkan budaya keselamatan yang proaktif. Pendekatannya menggabungkan keahlian teknis dengan pemikiran strategis, sehingga membantu organisasi menjadikan HSE tidak hanya sebagai kewajiban regulasi, tetapi juga sebagai pendorong efisiensi operasional, keberlanjutan, dan keunggulan kompetitif.",
            "Berkomitmen pada perbaikan berkelanjutan dan praktik bisnis yang berkelanjutan, Ikhsan bekerja sama secara erat dengan jajaran eksekutif maupun tim operasional untuk menciptakan lingkungan kerja yang lebih aman, operasional yang bertanggung jawab terhadap lingkungan, serta organisasi yang tangguh dan siap menghadapi perkembangan regulasi maupun meningkatnya ekspektasi para pemangku kepentingan."
          ]
        },
        { 
          name: 'Wawan Kurniawan', 
          role: 'Senior Trainer & Senior Facilitator', 
          image: '/images/profile_wawan.jpg',
          summary: [
            "Wawan Kurniawan adalah seorang profesional di bidang Experiential learning yang berpengalaman dengan lebih dari 12 tahun dalam merancang dan memfasilitasi program pembelajaran berbasis pengalaman (experiential learning) untuk perusahaan, institusi pendidikan, lembaga pemerintahan, dan komunitas. Dengan spesialisasi pada Experiential Learning Model yang dikembangkan oleh David Kolb, beliau mentransformasikan proses pembelajaran menjadi peningkatan kinerja di tempat kerja yang terukur melalui metodologi pembelajaran yang imersif dan berbasis pengalaman.",
            "Sebagai seorang dosen dalam bidang Experiential Learning for Special Interest Tourism, Wawan memadukan keunggulan akademik dengan praktik industri melalui perancangan pengalaman pembelajaran yang mengembangkan kemampuan kepemimpinan, kerja sama tim, komunikasi, dan pemecahan masalah, sekaligus mendorong perubahan perilaku yang berkelanjutan.",
            "Keahliannya mencakup Experiential Learning Design, Leadership & Team Development, Facilitation Excellence, Outdoor & Indoor Learning Programs, Curriculum Development, serta Reflection & Debriefing Methodology. Dikenal mampu menghadirkan pengalaman pembelajaran dengan tujuan yang jelas, standar keselamatan yang tinggi, dan hasil bisnis yang terukur, beliau membantu organisasi membangun tim berkinerja tinggi dan talenta yang siap menghadapi kebutuhan masa depan melalui pembelajaran yang menginspirasi tindakan serta menciptakan dampak organisasi yang berkelanjutan."
          ]
        },
        { 
          name: 'Laura Milka Valencia',
          role: 'Talent Acquisition', 
          image: '/images/profile_laura.jpg',
          summary: [
            "Laura Milka Valencia adalah lulusan Psikologi dari Universitas Diponegoro dengan pengalaman praktis dalam proses rekrutmen, onboarding, dan pengembangan organisasi secara menyeluruh melalui peran kepemimpinan dan berbagai inisiatif di bidang HR. Sepanjang masa pendidikan sarjananya, beliau telah mengembangkan keahlian praktis dalam merancang sistem rekrutmen, mengelola proses pencarian dan seleksi kandidat, serta menciptakan proses onboarding yang terstruktur untuk mendukung kinerja awal dan keterlibatan karyawan.",
            "Pengalamannya mencakup memimpin berbagai inisiatif rekrutmen, melakukan penyaringan dan seleksi kandidat berdasarkan kompetensi serta kesesuaian dengan organisasi, dan berkolaborasi dengan berbagai pemangku kepentingan lintas fungsi untuk membangun tim berkinerja tinggi. Di luar bidang rekrutmen, Laura telah menerapkan sistem evaluasi kinerja berbasis KPI, mengoordinasikan program regenerasi kepemimpinan, serta mendukung berbagai upaya peningkatan operasional yang berkontribusi terhadap peningkatan kolaborasi tim dan hasil pelaksanaan proyek.",
            "Didukung oleh landasan akademik dan pengalaman On-the-Job Training (OJT) di bidang Recruiting & Training Development, Laura memadukan kemampuan berpikir analitis dengan pendekatan yang berorientasi pada manusia dalam proses akuisisi talenta. Laura berkomitmen terhadap pembelajaran berkelanjutan dan meyakini bahwa pengelolaan sumber daya manusia yang efektif dimulai dari sistem yang dirancang dengan baik, kolaborasi yang bermakna, serta komitmen yang tulus untuk membantu individu dan organisasi berkembang bersama."
          ]
        },
        { 
          name: 'Abelard Sebastian Simanjuntak, S.H.', 
          role: 'Industrial Relation Advisory', 
          image: '/images/profile_abelard.jpg',
          summary: [
            "Abelard Sebastian Simanjuntak, S.H., adalah seorang profesional hukum yang memiliki motivasi tinggi dengan landasan akademik yang kuat di bidang Hukum Perdata serta fokus yang terus berkembang dalam bidang Hukum Korporasi, Hukum Komersial, Hukum Pidana, dan Praktik Litigasi. Dengan kemampuan analitis yang kuat dan komitmen terhadap keunggulan profesional, ia memadukan pengetahuan hukum dengan pengalaman praktis untuk memberikan dukungan hukum yang diteliti secara mendalam, berorientasi pada kebutuhan bisnis, serta berfokus pada solusi.",
            "Melalui pengalaman magang profesional di sejumlah firma hukum terkemuka, Abelard memperoleh pengalaman praktis dalam penelitian hukum, penyusunan dokumen hukum, analisis kontrak dan perkara, uji tuntas (due diligence), serta penyusunan dokumen hukum untuk penyelesaian sengketa dan proses litigasi. Kemampuannya dalam menganalisis permasalahan hukum yang kompleks secara cermat dan teliti memungkinkannya untuk berkontribusi secara efektif dalam memberikan nasihat hukum, mendukung kepatuhan korporasi, serta melakukan pengelolaan risiko hukum.",
            "Di luar praktik hukum, Abelard menunjukkan kemampuan kepemimpinan dan organisasi yang kuat melalui keterlibatannya dalam organisasi profesional dan akademik. Sebagai Director pada Asian Law Students' Association (ALSA) Local Chapter Universitas Jenderal Soedirman, ia berhasil memimpin berbagai inisiatif strategis, mendukung pengembangan organisasi, serta membimbing lebih dari 100 anggota. Pengalaman tersebut semakin memperkuat kemampuan kepemimpinan, komunikasi, pengelolaan pemangku kepentingan, dan kerja sama tim yang dimilikinya.",
            "Dikenal memiliki integritas, kemampuan beradaptasi, dan komitmen terhadap pembelajaran berkelanjutan, Abelard mampu berkembang dalam lingkungan yang dinamis dan kolaboratif yang menuntut kemampuan berpikir analitis, pertimbangan yang matang, serta profesionalisme. Ia memiliki ketertarikan dalam membantu organisasi menghadapi kompleksitas hukum, memperkuat tata kelola perusahaan, memitigasi risiko hukum, serta mendukung pertumbuhan bisnis yang berkelanjutan melalui solusi hukum yang praktis dan beretika.",
            "Dengan komitmen yang kuat terhadap pembelajaran sepanjang hayat dan pengembangan profesional, Abelard beraspirasi membangun karier yang unggul di bidang praktik hukum korporasi, memberikan nasihat hukum yang terpercaya, sekaligus menciptakan nilai jangka panjang bagi dunia usaha dan masyarakat yang dilayani."
          ]
        },
        { 
          name: 'Muhammad Febriansyah', 
          role: 'Web Developer', 
          image: '/images/profile_febri.jpg',
          summary: [
            "Muhammad Febriansyah merupakan mahasiswa Sistem dan Teknologi Informasi di Universitas Negeri Jakarta yang memiliki spesialisasi dalam IT Support dan Web Development. Berbekal semangat kerja yang tinggi serta komitmen profesional yang kuat, ia memadukan pengetahuan akademis dengan kemampuan pemecahan masalah secara praktis untuk memberikan dukungan teknologi yang andal, fungsional, dan berorientasi pada kebutuhan pengguna.",
            "Melalui berbagai eksplorasi teknis dan proyek akademik, ia telah membangun pengalaman praktis dalam pengembangan aplikasi web, troubleshooting sistem, serta optimalisasi infrastruktur teknologi informasi. Kemampuan analitis dan perhatiannya terhadap detail memungkinkannya untuk berkontribusi secara efektif dalam menjaga kelancaran operasional teknologi sekaligus merancang antarmuka digital yang responsif.",
            "Selain kompetensi teknis utamanya, ia juga aktif terlibat dalam berbagai kegiatan organisasi dan inisiatif kolaboratif di lingkungan kampus, yang semakin mengasah kemampuan koordinasi proyek serta keterampilan komunikasinya.",
            "Dikenal atas kemampuan adaptasinya, kerja sama tim yang baik, serta semangat untuk terus belajar, ia berdedikasi membantu organisasi dalam mengoptimalkan alur kerja digital mereka. Ia bercita-cita membangun karier yang berdampak melalui penyediaan solusi teknologi yang inovatif serta memberikan nilai jangka panjang bagi operasional bisnis dan masyarakat secara luas."
          ]
        }
      ]
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "About First HR Indonesia",
      title1: "One Mission,",
      title2: "Endless Innovation",
      description: "Empowering organizations through strategic human capital solutions. We connect world-class strategies with Indonesia's finest professionals to shape a better world of work.",
      downloadBtn: "Download Profile (PPT)",
      expertLeaders: "Expert Leaders",
      readyToAssist: "Ready to assist you"
    },
    visionMission: {
      visionTitle: "Our Vision",
      visionText: "To be the most trusted Strategic Human Capital Partner.",
      missionTitle: "Our Mission",
      missions: [
        "Deliver strategic Human Capital solutions.",
        "Develop people and leadership.",
        "Build high-performing organizations.",
        "Partner with integrity and excellence."
      ]
    },
    coreValues: {
      eyebrow: "Our Core Values",
      title: "Values That Guide Us",
      description: "The four pillars that define how we work, how we treat each other, and how we deliver impact.",
      values: [
        {
          title: 'Ownership',
          desc: 'We act with accountability, take initiative, and turn challenges into opportunities through proactive problem solving.'
        },
        {
          title: 'Excellence',
          desc: 'We pursue the highest standards, continuously improve, and deliver outstanding results with passion and purpose.'
        },
        {
          title: 'Trust',
          desc: 'We build lasting relationships through trust, integrity, and accountability while honoring commitments.'
        },
        {
          title: 'Driven to Grow',
          desc: 'We never stop learning, improving, and growing to become better every day in a dynamic landscape.'
        }
      ]
    },
    executive: {
      eyebrow: "Executive Profiles",
      title: "Meet The Leadership Team",
      subtitle: "Driven by experienced practitioners and thought leaders passionate about transforming the future of human resources.",
      summaryHeader: "Executive Summary"
    },
    journey: {
      eyebrow: "The FHRI Journey",
      title1: "9 Years. One Mission.",
      title2: "Endless Innovation.",
      subtitle: "A brief timeline of our milestone moments in advancing HR practices and continuous learning.",
      timeline: [
        { year: '2017', title: 'Laying the Foundation', desc: 'FHRI began with a blog founded by Robby P. Tambunan, Heru, and Priadi to share insights on data-driven HR and better decision-making.' },
        { year: '2018', title: 'Releasing Our First Course', desc: 'FHRI launched its first online course, HR Analytics Leader, to help HR professionals adopt analytics within their organizations.' },
        { year: '2019-2024', title: 'Empowering HR Teams', desc: 'FHRI expanded its impact by partnering with leading organizations across industries to develop HR talent and accelerate business transformation.' },
        { year: '2025', title: 'T-Shaped HR Model', desc: 'FHRI introduced the T-Shaped HR Competency Model to redefine HR development and empower professionals.' },
        { year: '2026', title: 'Continuous Improvement', desc: 'Expanded impact by partnering with leading organizations across industries to build future-ready teams and accelerate business transformation.' }
      ]
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Behind The Scenes",
      subtitle: "Step into the vibrant world of First HR Indonesia.",
      badge: "FHRI Moment",
      slides: [
        { id: 1, title: 'Collaborative Brainstorming', image: '/images/about-gallery-1.jpg' },
        { id: 2, title: 'Expert Led Workshops', image: '/images/about-gallery-2.jpg' },
        { id: 3, title: 'HR Discussion Sessions', image: '/images/about-gallery-3.jpg' },
        { id: 4, title: 'Digital Analytics Dashboard', image: '/images/about-gallery-4.jpg' },
        { id: 5, title: 'Leadership Mentoring', image: '/images/about-gallery-5.jpg' },
        { id: 6, title: 'Team Building Activities', image: '/images/about-gallery-6.jpg' },
      ]
    },
    leadershipTeam: [
      { 
        name: 'Robby P. Tambunan', 
        role: 'Chief Executive Officer', 
        image: '/images/profile_robby.jpg',
        summary: [
          "Robby Tambunan is an experienced executive in Human Capital and Business Transformation with over 30 years of leadership experience across various functions, including Human Resources, Corporate Services, Business Support, Industrial Relations, Legal, Governance, Internal Audit, HSE, and Information Technology in multiple industry sectors, including hospitality, manufacturing, healthcare, agribusiness, logistics, mining, and outsourcing.",
          "As the Founder & Principal Consultant of First HR Indonesia, he collaborates with business owners, boards of directors, and executive leadership to align human resources strategies with business goals, thereby driving organizational transformation, building leadership excellence, and supporting sustainable business growth.",
          "His expertise encompasses Human Capital Strategy, HR Transformation, Organizational Development, Talent Management, Leadership Development, Executive Coaching, HR Governance, Change Management, Executive Search, Assessment Center, Learning & Development, and Business Process Improvement. Known for combining strategic vision with practical implementation, he helps organizations build high-performing teams, strengthen organizational capabilities, and transform human capital into a sustainable competitive advantage."
        ]
      },
      { 
        name: 'Indriany Rumbi T. Simatupang', 
        role: 'Commissioner', 
        image: '/images/profile_indriany.jpg',
        summary: [
          "Rumbi Simatupang is a highly organized and result-oriented Executive Secretary and Corporate Secretary, with over 30 years of professional experience, including more than 25 years providing trusted executive support to C-level executives in various leading companies in Indonesia. Known for her professionalism, integrity, and excellent organizational skills, she has built a strong reputation for managing complex executive operational activities efficiently, accurately, and with utmost confidentiality.",
          "She possesses excellent communication and interpersonal skills, a high sense of responsibility, and the ability to manage multiple priorities simultaneously while maintaining high-quality standards. Her logical approach to problem-solving, combined with creativity and attention to detail, allows her to provide effective solutions, develop efficient work systems, and consistently deliver results that exceed expectations. Her loyalty, integrity, and commitment to professional excellence have earned her the trust of senior leaders throughout her career journey.",
          "Currently, Rumbi serves as Executive Secretary & Corporate Secretary at one of the leading telecommunications companies in Jakarta, a position she has held for the past seven years. Previously, she spent six years as a Senior Executive Secretary supporting the Deputy President Director at one of Indonesia's prominent telecommunications companies. Throughout her career, she has supported top-tier executives across diverse industry sectors while contributing to improving organizational effectiveness, corporate governance, and operational excellence.",
          "Outside her corporate career, Rumbi also co-founded and manages a Virtual Assistant business with two partners, leveraging her extensive experience in providing executive support to deliver remote professional services for business leaders and entrepreneurs. By blending over three decades of corporate experience with an entrepreneurial mindset, she provides reliable, high-quality executive support to increase productivity, streamline operational processes, and enable clients to focus more on their strategic priorities."
        ]
      },
      { 
        name: 'Julianto Bona Pardamean', 
        role: 'Commissioner', 
        image: '/images/profile_julianto.jpg',
        summary: [
          "Julianto Bona Pardamean is an experienced professional with over three decades of experience in management, business development, operations, consulting, and project management. With an educational background in Management and extensive experience in various strategic leadership roles, he possesses broad expertise in organizational management, business development, building strategic partnerships, and executing projects across various industry sectors.",
          "Throughout his career journey, he has been involved in various large-scale business activities and projects in the energy, electricity, infrastructure, manufacturing, trading, and internet networking sectors. His experience includes leading strategic projects, developing business opportunities, managing the procurement and installation of electrical infrastructure, trading industrial commodities, as well as developing internet infrastructure and services.",
          "Having held various strategic positions, including Operations Director, General Manager, Project Manager, Project Consultant, and President Commissioner, he has built strong competencies in strategic leadership, operational management, project execution, business development, and stakeholder relationship management at both national and international levels.",
          "With extensive professional experience and the ability to integrate strategic, operational, and business development perspectives, he is committed to driving sustainable business growth, creating added value for the company and its partners, and building strategic collaborations that contribute to long-term business development."
        ]
      },
      { 
        name: 'Charles Gatan', 
        role: 'Chief Operating Officer', 
        image: '/images/profile_gatan.jpg',
        summary: [
          "Charles Gatan is a Learning & Organizational Development professional with over 20 years of executive experience in Learning & Development, Quality Assurance, Organizational Development, and Service Excellence across various industries, including luxury hospitality, property, telecommunications, education, and consulting.",
          "Known for his ability to build a high-performance learning culture, Charles has expertise in designing and implementing integrated learning strategies that strengthen organizational capabilities, enhance leadership effectiveness, and improve customer experience. His expertise covers Learning Strategy, Training Needs Analysis, Corporate Academy Development, Competency Frameworks, Leadership Development, Quality Assurance, Service Excellence, Organizational Development, Talent Development, Employee Engagement, and Performance Improvement.",
          "Throughout his career, he has successfully led the Learning & Development and Quality Assurance functions in various internationally recognized organizations, including involvement in numerous luxury hotel pre-opening projects, where he built learning systems, operational standards, service excellence frameworks, and organizational readiness that supported successful business launches and operational performance sustainability. His experience also includes corporate organizational development, workforce capability enhancement, change management, and various organizational effectiveness initiatives aligned with human resources strategies and business goals.",
          "Known for having a strategic mindset, creativity, and strong facilitation skills, Charles combines operational expertise with innovative learning methodologies to create transformative learning experiences. His communicative leadership style, supported by excellent communication and stakeholder management skills, enables him to inspire individuals, build collaborative cultures, and develop leaders ready to face future needs in various business environments.",
          "With a passion for developing human potential optimally, Charles believes that organizational excellence can be achieved through empowering individuals, developing a continuous learning culture, and implementing service excellence as an inherent part of the organizational culture. His mission is to help organizations transform learning into a strategic business capability capable of driving sustainable growth, strengthening competitive advantage, and generating measurable business impact."
        ]
      },
      { 
        name: 'Yopie Bungaran Halomoan S.E., M.M.', 
        role: 'Chief Financial Officer', 
        image: '/images/profile_yopie.jpg',
        summary: [
          "Yopie Bungaran Halomoan, S.E., M.M. is a financial leader with over 20 years of progressive experience in corporate governance, strategic planning, and accounting leadership.",
          "Holding a Master's degree in Financial Management, he successfully blends advanced financial theory understanding with a strong track record of executive-level oversight. Throughout his leadership journey, he has successfully designed and developed robust corporate strategies, budgeting frameworks for multiple operational locations, and various cash flow optimization initiatives that drive sustainable organizational growth.",
          "He is known for his ability to align financial goals with corporate vision, and providing data-driven recommendations to the board of directors that can increase profitability and mitigate systemic risks.",
          "With excellent analytical skills and a collaborative work style, he excels in building high-performing teams and managing strategic relationships with various regulatory bodies.",
          "His unwavering professional integrity and commitment to operational excellence make him a reliable figure for organizations focused on long-term value creation."
        ]
      },
      { 
        name: 'Hana Tiranda', 
        role: 'General Manager - Operation', 
        image: '/images/profile_hana.jpg',
        summary: [
          "Hana Tiranda is a dedicated Human Resources and Business Support professional with over 14 years of progressive experience covering HR Administration, Employee Services, Hospitality Operations, Customer Experience, and Executive Support. Her career journey reflects a strong commitment to operational excellence, people-oriented service, and organizational effectiveness in both hospitality and corporate sectors.",
          "With a solid foundation in hospitality operations and customer service, Hana has a practical understanding of employee and guest experiences, enabling her to provide responsive HR support while maintaining high standards of professionalism, accuracy, and service excellence. Her expertise covers HR administration, employee onboarding processes, recruitment coordination, personnel data and document management, policy administration, industrial relations support, travel coordination, executive administration, and labor law compliance.",
          "Throughout her career, she has played a pivotal role in supporting the end-to-end employee lifecycle, strengthening HR operations, coordinating various executive activities, and ensuring the smooth implementation of administrative and human resources initiatives. She is known for her excellent organizational skills, high attention to detail, ability to maintain confidentiality, and capacity to build trusted relationships at all levels within the organization.",
          "Known for a collaborative mindset, adaptability, and commitment to continuous improvement, Hana consistently provides reliable administrative and operational support to enhance organizational efficiency and employee experience. She believes that effective Human Resources starts with responsive service, strong operational discipline, and meaningful relationships that build an engaged, productive, and high-performing workforce.",
          "As a Human Resources professional, Hana is passionate about creating an organized, people-centric work environment where operational excellence and employee well-being can run harmoniously to support sustainable business success."
        ]
      },
      { 
        name: 'Paulus Sebastian', 
        role: 'Sales & Digital Marketing', 
        image: '/images/profile_paulus.jpg',
        summary: [
          "Paulus Sebastian is a Sales & Digital Marketing professional, an Agency Builder at FPOne Jakarta—one of the leading agencies under Prudential Indonesia—and a Trainer with extensive experience in business development, team building, and result-oriented marketing strategies.",
          "Paulus began his career as a professional photographer and entrepreneur in the wedding photography industry, where over the years he built a strong brand, developed digital marketing strategies, managed sales operations, and delivered superior customer experiences. His entrepreneurial journey equipped him with a deep understanding of consumer behavior, relationship building, and creating sustainable business growth through the integration of sales strategies and digital marketing.",
          "Currently, as an Agency Builder at FPOne Jakarta, Prudential Indonesia, Paulus focuses on the recruitment, coaching, training, and development processes of Financial Consultants into high-performing professionals and future leaders. He is passionate about building sustainable sales systems by leveraging digital marketing and personal branding to increase team productivity, expand market reach, and drive long-term business growth.",
          "In recognition of his leadership and contribution to organizational growth, Paulus has received the National Leaders Conference (NLC) award several times for his achievements in building and developing high-performing teams within Prudential Indonesia.",
          "His professional expertise includes Sales Strategy, Digital Marketing, Personal Branding, Business Development, Leadership Development, Recruitment, Team Building, Public Speaking, Training & Coaching, Customer Relationship Management (CRM), and Social Media Marketing.",
          "Paulus believes that a combination of effective sales strategies, impactful digital marketing, and strong leadership is the foundation for sustainable business growth and the development of future leaders capable of creating meaningful and lasting impact."
        ]
      },
      { 
        name: 'Diza Gondo', 
        role: 'Sales & Digital Marketing', 
        image: '/images/profile_diza.jpg',
        summary: [
          "Diza Yeremia is a professional in Sales, Business Development, and Relationship Management, with experience across various industries, including media, creative, and financial services. With an educational background of a Diploma (D3) in Broadcasting and a Bachelor's Degree (S1) in Communication Studies, she has a strong foundation in communication, marketing strategy, and long-term client relationship management.",
          "Diza started her career as a Personal Assistant and Producer at a national television network, where she developed skills in project management, cross-functional coordination, communication, and production operations. This experience became the foundation for building her leadership, customer service, and problem-solving abilities.",
          "Subsequently, she co-founded and developed a wedding photography business with her husband, acting as the Marketing & Client Relationship Manager. In this role, she managed the entire client journey, from initial consultation, service presentation, proposal preparation, contract negotiation, event coordination, to post-event follow-up. She also led various marketing initiatives, business development, and client relationship management, ensuring every customer received a personalized and excellent experience.",
          "Currently, Diza works as an Agency Builder and Financial Consultant, helping individuals and families strengthen their financial security and planning, while mentoring professionals seeking to build meaningful careers in the financial services industry. With a warm, empathetic, and solution-oriented approach, she believes that relationships built on trust are key to creating sustainable impact and long-term growth."
        ]
      },
      { 
        name: 'Adriel Tambunan', 
        role: 'Sales & Digital Marketing', 
        image: '/images/profile_adriel.jpg',
        summary: [
          "Adriel Tambunan is a Law graduate from Tarumanagara University who has built a strong foundation in Digital Marketing through practical experience in content creation, social media management, and digital communication. By combining analytical thinking, creativity, and strategic planning, he develops various marketing initiatives that align with business goals and market trends.",
          "His expertise includes content planning, copywriting, social media management, short video production, campaign execution, and performance analysis. He approaches every project with a high attention to detail, ensuring quality and consistency at every stage, from planning to evaluation.",
          "Driven by curiosity and a commitment to continuous learning, he keeps up with digital trends, consumer behavior, and new technologies to develop relevant and effective marketing strategies. With adaptability, collaboration, and strong analytical skills, he is committed to delivering innovative digital marketing solutions, providing measurable impact, and supporting long-term business growth."
        ]
      },
      { 
        name: 'I. Kadek Lendra Sanjaya', 
        role: 'General Affair', 
        image: '/images/profile_kadek.jpg',
        summary: [
          "As General Affairs (GA) at a Corporate HR Training service provider, I Kadek Lendra Sanjaya plays a strategic role in building robust operations to support market expansion to corporate clients. In this preparation phase, his main focus is on standardizing logistics for large-scale training, managing trainer mobility, and procuring high-quality equipment that reflects the company's professionalism. Through adaptive facility management and strict budget control, GA ensures that all training programs, whether conducted at the internal training center or client locations, run smoothly without technical hurdles.",
          "Furthermore, he also ensures all company legal documents, training permits, and occupational health and safety (OHS/K3) certifications are complete and fulfilled. This is done to meet the strict compliance standards typically required in vendor tender processes with large corporations."
        ]
      },
      { 
        name: 'Saut Sitompul, Drs., M.Si., CEM', 
        role: 'Master Trainer, Executive Coach & Senior Facilitator', 
        image: '/images/profile_saut.jpg',
        summary: [
          "Saut Sitompul, Drs., M.Si., CEM is a Leadership Development Expert, Corporate Culture Strategist, and a nationally recognized motivational speaker, with extensive experience in transforming organizational performance through character-based leadership development and professional work ethics.",
          "As the creator and initiator of the 8 Professional Work Ethics Framework, he has inspired leaders and organizations to build high-performing cultures by strengthening values of integrity, accountability, discipline, collaboration, and purpose-driven leadership. His philosophy emphasizes that sustainable organizational excellence begins with individual character, shared values, and a strong culture of ownership.",
          "Throughout his career, Saut has collaborated with various companies, government agencies, educational institutions, and community leaders to design and facilitate numerous leadership development programs, cultural transformation initiatives, team effectiveness workshops, and impactful motivational seminars. His engaging facilitation style blends experiential learning, storytelling, practical business insights, and behavioral transformation techniques that drive sustainable change and deliver measurable organizational impact.",
          "His expertise encompasses Leadership Development, Corporate Culture Transformation, Employee Engagement, Team Building, Mindset Transformation, Service Excellence, Internalization of Organizational Values, Motivation, and Performance Improvement. Through these initiatives, he helps organizations build resilient teams, strengthen collaboration, increase employee commitment, and foster a culture of continuous improvement.",
          "Widely known by the nickname 'Mr. Spirit', Saut is recognized for his ability to uplift individual and organizational spirit and transform workplace mindsets into purpose-driven actions. His mission is to help organizations build high-performing teams, where strong character, professional ethics, and inspiring leadership serve as the foundation for sustainable business success and long-term organizational excellence."
        ]
      },
      { 
        name: 'Ronald Ticoalu', 
        role: 'Master Trainer, Executive Coach & Senior Facilitator', 
        image: '/images/profile_ronald.jpg',
        summary: [
          "Ronald Ticoalu is an experienced executive with over 25 years of leadership experience across various industry sectors, including hospitality, healthcare, property, and technology. He has a strong track record of leading business operations, driving organizational growth, and generating sustainable business performance through strategic leadership and operational excellence.",
          "His expertise spans business strategy, corporate operations, hospitality management, service excellence, property management, technological innovation, risk management, and business development. By combining strategic thinking with a results-oriented approach, he consistently transforms operational challenges into growth opportunities while building high-performing teams and long-term relationships with stakeholders.",
          "Known for adaptability, effective leadership, and a commitment to continuous improvement, Ronald provides a balanced perspective between operational execution and long-term business strategy. His extensive experience across diverse industries enables him to navigate complex business environments, lead organizational transformations, and create sustainable value amidst ever-changing market developments."
        ]
      },
      { 
        name: 'Novriadi', 
        role: 'Master Trainer, Executive Coach & Senior Facilitator', 
        image: '/images/profile_novriadi.jpg',
        summary: [
          "Novriadi is a Senior Operations & Business Excellence Professional with over three decades of experience in manufacturing, pharmaceutical distribution, and retail industries. Throughout his career, he has led various strategic functions including operations, supply chain, warehouse & distribution management, quality management system (QMS), compliance, human resources, and continuous improvement. He is experienced in building work systems, improving operational efficiency, strengthening organizational governance, and developing teams to produce sustainable business performance through practical, measurable, and results-oriented approaches."
        ]
      },
      { 
        name: 'Priadi Gunanto, S.T.', 
        role: 'Senior Trainer & Senior Facilitator', 
        image: '/images/profile_priadi.jpg',
        summary: [
          "Priadi Gunanto, S.T. is a Learning and Human Capital Development professional with over 15 years of experience in designing and leading strategic human resources development initiatives across various industry sectors, including manufacturing, food and beverage, hospitality, logistics, shipping, consulting, and tech startups.",
          "With an educational background in Industrial Engineering, he blends analytical thinking skills with a deep understanding of organizational behavior to develop integrated learning solutions that enhance workforce capabilities, strengthen leadership succession, and improve business performance. His expertise covers Learning & Development, competency framework design, leadership development, performance management, corporate academy establishment, talent development, organizational capability building, and cultural transformation.",
          "As a BNSP Certified Trainer, Priadi has successfully designed and implemented competency-based learning systems, leadership development frameworks, corporate culture initiatives, succession development programs, and performance improvement strategies that enable organizations to build high-performing teams and develop leaders ready for future needs. His approach emphasizes aligning learning strategies with business goals to ensure measurable organizational impact and sustainable growth.",
          "Known for a collaborative leadership style and practical approach, he has extensive experience in executive coaching, mentoring, experiential learning, facilitation, and cross-functional project leadership. He works closely with business leaders to build learning organizations, accelerate talent development, and create a culture of continuous improvement that drives innovation, employee engagement, and long-term organizational success.",
          "With a passion for developing individuals and organizations, Priadi believes that sustainable business growth can be achieved through individual empowerment, strengthening leadership capabilities, and building a learning ecosystem that transforms human potential into sustainable competitive advantage."
        ]
      },
      { 
        name: 'Martha Nurlia', 
        role: 'Senior Trainer & Senior Facilitator', 
        image: '/images/profile_martha.jpg',
        summary: [
          "Martha Nurlia is an experienced Learning and Talent Development professional with over 21 years of experience, combining extensive operational leadership experience in the Food & Beverage industry with deep expertise in Learning & Development. This unique blend of operational excellence and human resources development enables her to design practical, business-need-oriented learning strategies to strengthen organizational capabilities and enhance workforce performance.",
          "She specializes in Training Needs Analysis (TNA), learning strategy development, instructional design, competency-based development, talent management, succession planning, leadership development, and capability building. Throughout her career, she has successfully developed and implemented various learning initiatives that align employee development with organizational goals, build high-performing teams, and support sustainable business growth.",
          "With over a decade of direct operational experience, Martha possesses a strong understanding of frontline operations, customer service excellence, and workforce dynamics. This operational insight allows her to create relevant and impactful learning solutions capable of addressing real business challenges while increasing employee engagement, productivity, and service quality.",
          "Known for collaborative leadership, integrity, and excellent interpersonal skills, she can build trust-based working relationships with leaders and employees at all organizational levels. She has a passion for building a continuous learning culture, empowering individuals to reach their full potential, and developing leadership capabilities that enable organizations to thrive in increasingly competitive and dynamic business environments.",
          "As a Learning and Human Capital professional, Martha is committed to transforming learning into a strategic business driver—helping organizations build talent ready for future needs, strengthening leadership succession, and creating sustainable organizational value through continuous capability development."
        ]
      },
      { 
        name: 'Miftakhul Ikhsan, S.T.', 
        role: 'Senior Trainer & Senior Facilitator', 
        image: '/images/profile_miftakhul.jpg',
        summary: [
          "Miftakhul Ikhsan, S.T. is a Health, Safety, and Environment (HSE) professional with over a decade of experience in developing, implementing, and strengthening HSE management systems in large-scale manufacturing organizations. He is known for his ability to integrate regulatory compliance, operational excellence, and sustainability principles into practical business solutions to enhance organizational resilience and long-term performance.",
          "His expertise covers comprehensive HSE management and environmental compliance, including environmental permitting (UKL-UPL and AMDAL), business licensing via the Online Single Submission Risk-Based Approach (OSS RBA) system, operational permits such as SIPA for generator systems, Environmental Management System implementation, integration of various ISO Management System standards, and comprehensive assistance in fulfilling the PROPER Biru program organized by the Ministry of Environment.",
          "Ikhsan is a certified General Occupational Health and Safety Expert (Ahli K3 Umum) accredited by the Indonesian Ministry of Manpower (Kemnaker RI), and holds a certification as an ISO 22000:2018 Internal Auditor. These professional certifications strengthen his competency in developing, evaluating, and improving integrated management systems while ensuring compliance with national regulations and widely recognized international standards.",
          "With a deep understanding of Indonesian regulations and international management standards, Ikhsan partners with various organizations to build strong governance, enhance risk management, increase regulatory compliance, and foster a proactive safety culture. His approach combines technical expertise with strategic thinking, helping organizations make HSE not just a regulatory obligation, but a driver of operational efficiency, sustainability, and competitive advantage.",
          "Committed to continuous improvement and sustainable business practices, Ikhsan works closely with executive and operational teams to create safer work environments, environmentally responsible operations, and resilient organizations ready to face regulatory developments and the rising expectations of stakeholders."
        ]
      },
      { 
        name: 'Wawan Kurniawan', 
        role: 'Senior Trainer & Senior Facilitator', 
        image: '/images/profile_wawan.jpg',
        summary: [
          "Wawan Kurniawan is an experienced Learning Experience professional with over 12 years in designing and facilitating experiential learning programs for corporations, educational institutions, government agencies, and communities. Specializing in the Experiential Learning Model developed by David Kolb, he transforms learning processes into measurable workplace performance improvements through immersive, experience-based methodologies.",
          "As a lecturer in Experiential Learning for Special Interest Tourism, Wawan blends academic excellence with industry practice by designing learning experiences that develop leadership, teamwork, communication, and problem-solving skills, while driving sustainable behavioral change.",
          "His expertise encompasses Experiential Learning Design, Leadership & Team Development, Facilitation Excellence, Outdoor & Indoor Learning Programs, Curriculum Development, and Reflection & Debriefing Methodology. Known for delivering learning experiences with clear objectives, high safety standards, and measurable business outcomes, he helps organizations build high-performing teams and talent prepared for future needs through learning that inspires action and creates sustainable organizational impact."
        ]
      },
      { 
        name: 'Laura Milka Valencia', 
        role: 'Talent Acquisition', 
        image: '/images/profile_laura.jpg',
        summary: [
          "Laura Milka Valencia is a Psychology graduate from Diponegoro University with practical experience in end-to-end recruitment, onboarding, and organizational development processes through leadership roles and various HR initiatives. Throughout her undergraduate studies, she developed practical expertise in designing recruitment systems, managing sourcing and selection processes, and creating structured onboarding processes to support initial performance and employee engagement.",
          "Her experience includes leading recruitment initiatives, conducting candidate screening and selection based on competencies and organizational fit, and collaborating with various cross-functional stakeholders to build high-performing teams. Beyond recruitment, Laura has implemented KPI-based performance evaluation systems, coordinated leadership regeneration programs, and supported operational improvement efforts contributing to enhanced team collaboration and project execution outcomes.",
          "Supported by an academic foundation and On-the-Job Training (OJT) experience in Recruiting & Training Development, Laura combines analytical thinking with a human-centric approach to talent acquisition. Laura is committed to continuous learning and believes that effective human resources management begins with well-designed systems, meaningful collaboration, and a genuine commitment to helping individuals and organizations grow together."
        ]
      },
      { 
        name: 'Abelard Sebastian Simanjuntak, S.H.', 
        role: 'Industrial Relation Advisory', 
        image: '/images/profile_abelard.jpg',
        summary: [
          "Abelard Sebastian Simanjuntak, S.H., is a highly motivated legal professional with a strong academic foundation in Civil Law and an evolving focus on Corporate Law, Commercial Law, Criminal Law, and Litigation Practice. With strong analytical skills and a commitment to professional excellence, he combines legal knowledge with practical experience to provide deeply researched, business-oriented, and solution-focused legal support.",
          "Through professional internship experiences at several prominent law firms, Abelard gained practical experience in legal research, legal document drafting, contract and case analysis, due diligence, and legal document preparation for dispute resolution and litigation processes. His ability to carefully and thoroughly analyze complex legal issues enables him to contribute effectively to providing legal advice, supporting corporate compliance, and managing legal risks.",
          "Outside of legal practice, Abelard demonstrates strong leadership and organizational skills through his involvement in professional and academic organizations. As Director at the Asian Law Students' Association (ALSA) Local Chapter of Jenderal Soedirman University, he successfully led various strategic initiatives, supported organizational development, and mentored over 100 members. This experience further strengthened his leadership, communication, stakeholder management, and teamwork skills.",
          "Known for his integrity, adaptability, and commitment to continuous learning, Abelard thrives in dynamic and collaborative environments that demand analytical thinking, sound judgment, and professionalism. He is passionate about helping organizations navigate legal complexities, strengthen corporate governance, mitigate legal risks, and support sustainable business growth through practical and ethical legal solutions.",
          "With a strong commitment to lifelong learning and professional development, Abelard aspires to build an outstanding career in corporate legal practice, delivering trusted legal advice while creating long-term value for businesses and the communities he serves."
        ]
      },
      { 
        name: 'Muhammad Febriansyah', 
        role: 'Web Developer', 
        image: '/images/profile_febri.jpg',
        summary: [
          "Muhammad Febriansyah is an Information Systems and Technology student at Jakarta State University specializing in IT Support and Web Development. Equipped with high work enthusiasm and strong professional commitment, he combines academic knowledge with practical problem-solving skills to provide reliable, functional, and user-oriented technology support.",
          "Through various technical explorations and academic projects, he has built practical experience in web application development, system troubleshooting, and IT infrastructure optimization. His analytical skills and attention to detail enable him to contribute effectively to maintaining smooth technology operations while designing responsive digital interfaces.",
          "Beyond his core technical competencies, he is actively involved in organizational activities and collaborative initiatives on campus, further honing his project coordination and communication skills.",
          "Known for his adaptability, strong teamwork, and passion for continuous learning, he is dedicated to helping organizations optimize their digital workflows. He aspires to build an impactful career by providing innovative technology solutions and delivering long-term value to business operations and the broader society."
        ]
      }
    ]
  };
};
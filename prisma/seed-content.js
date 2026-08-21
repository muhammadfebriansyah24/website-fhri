const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// ─────────────────────────────────────────────
// 1. NEWS DATA (4 articles)
// ─────────────────────────────────────────────

const newsData = [
  {
    titleId: 'QUIET QUITTING BUKAN SALAH KARYAWAN.',
    titleEn: 'QUIET QUITTING IS NOT THE EMPLOYEE\'S FAULT.',
    slug: 'quiet-quitting-bukan-salah-karyawan',
    image: '/images/fhrinews-pakrobby.jpeg',
    descriptionId: 'Ini Alarm Keras Bagi Kepemimpinan. Setiap kali mendengar istilah quiet quitting, banyak pemimpin langsung mengambil kesimpulan: "Karyawan sekarang kurang loyal." "Mentalnya lemah." "Maunya work-life balance, tapi tidak mau kerja keras." Benarkah demikian?.',
    descriptionEn: 'This is a Loud Alarm for Leadership. Every time they hear the term quiet quitting, many leaders immediately conclude: "Employees today are less loyal." "Their mentality is weak." "They want work-life balance, but do not want to work hard." Is that really true?',
    contentId: `<p style="text-align: justify;">Ini Alarm Keras Bagi Kepemimpinan. Setiap kali mendengar istilah quiet quitting, banyak pemimpin langsung mengambil kesimpulan: "Karyawan sekarang kurang loyal."
          "Mentalnya lemah." "Maunya work-life balance, tapi tidak mau kerja keras." Benarkah demikian?</p>
          <br/>
          <p style="text-align: justify;">Saya justru melihatnya dari sudut yang berbeda.<strong> Quiet quitting bukanlah penyakit, ia adalah gejala.</strong> Gejala bahwa sesuatu di dalam organisasi sedang tidak baik-baik saja. Yang menarik, fenomena ini sebenarnya bukan hal baru. Sudah bertahun-tahun kita menjumpai karyawan yang datang tepat waktu, menyelesaikan pekerjaannya sesuai target, tidak melanggar aturan, tetapi juga tidak pernah lagi memberikan ide, energi, maupun inisiatif.
          Mereka hadir. Tetapi semangatnya sudah tidak ada. Mereka masih menerima gaji. Tetapi hatinya sudah lama "mengundurkan diri." Inilah yang sering disebut sebagai <strong>"quit and stay"</strong> tetap bekerja, tetapi berhenti berkontribusi.</p>
          <br/>
          <p style="text-align: justify;"><strong>Masalahnya bukan pada orangnya.</strong> Menurut Gallup, sekitar <strong>50% karyawan berada dalam kondisi tidak benar-benar terlibat (not engaged).</strong> Artinya, organisasi mungkin tidak sedang kekurangan tenaga kerja.
          Yang mereka kekurangan adalah <strong>orang-orang yang masih peduli.</strong> Sayangnya, banyak perusahaan masih sibuk mengukur produktivitas, KPI, dan efisiensi. Namun lupa mengukur satu hal yang jauh lebih menentukan: <strong>Apakah orang-orangnya masih memiliki alasan untuk peduli?</strong> Karena seseorang tidak tiba-tiba berhenti memberi yang terbaik. Keputusan itu lahir dari akumulasi pengalaman.</p>
          <br/>
          <ul>
            <li style="text-align: justify;">Merasa tidak didengar.</li>
            <li style="text-align: justify;">Merasa tidak dihargai.</li>
            <li style="text-align: justify;">Merasa hanya dianggap sebagai angka.</li>
            <li style="text-align: justify;">Merasa setiap usaha tambahan dianggap sebagai kewajiban, bukan apresiasi.</li>
          </ul>
          <br/>
          <p style="text-align: justify;">Sedikit demi sedikit, semangat itu habis. <strong>EMPLOYEE EXPERIENCE ADALAH STRATEGI, BUKAN FASILITAS</strong>. Perusahaan berlomba membangun <strong>Customer Experience (CX).</strong> Mereka juga berinvestasi besar pada <strong>User Experience (UX).</strong>
          Namun masih banyak yang menganggap <strong>Employee Experience (EX)</strong> hanya sebatas ruang kerja yang nyaman, kopi gratis, atau kegiatan (team building). Padahal pengalaman karyawan dibentuk oleh hal-hal yang jauh lebih sederhana:</p>
          <br/>
          <ul>
            <li style="text-align: justify;">Cara atasan memberikan umpan balik.</li>
            <li style="text-align: justify;">Cara pemimpin menghargai perbedaan pendapat.</li>
            <li style="text-align: justify;">Cara organisasi memperlakukan orang ketika mereka melakukan kesalahan.</li>
            <li style="text-align: justify;">Cara keputusan dijelaskan secara adil dan transparan.</li>
          </ul>
          <br/>
          <p style="text-align: justify;">Budaya organisasi tidak dibangun melalui slogan di dinding kantor. Budaya dibangun dari pengalaman yang dirasakan setiap hari. <strong>KEPEMIMPINAN MENENTUKAN APAKAH ORANG MEMBERI HATI ATAU SEKADAR WAKTU</strong>. 
          Orang bisa dipaksa hadir. Tetapi tidak ada yang bisa dipaksa untuk peduli. Mereka hanya akan memberikan komitmen ketika merasa dihormati. Karena itu, tugas seorang pemimpin bukan sekadar memastikan target tercapai.
          Tugasnya adalah menciptakan lingkungan di mana orang merasa aman untuk berpendapat, dipercaya untuk bertumbuh, dan dihargai atas kontribusinya. Pemimpin yang hanya mengelola pekerjaan akan mendapatkan kepatuhan. 
          Pemimpin yang mampu mengelola manusia akan mendapatkan komitmen. Dan komitmen selalu menghasilkan sesuatu yang tidak pernah bisa dibeli dengan gaji: <strong>inisiatif</strong>.</p>
          <br/>
          <p style="text-align: justify;">Pertanyaan yang Perlu Dijawab Para Pemimpin. Sebelum menyebut karyawan sebagai <em>quiet quitter</em>, mungkin ada baiknya kita bertanya kepada diri sendiri:</p>
          <br/>
          <ul>
            <li style="text-align: justify;">Apakah saya benar-benar mendengarkan mereka?</li>
            <li style="text-align: justify;">Apakah saya hanya menilai hasil kerja, atau juga memahami pengalaman mereka selama bekerja?</li>
            <li style="text-align: justify;">Apakah saya menciptakan lingkungan yang membuat orang ingin berkembang, atau sekadar bertahan?</li>
          </ul>
          <br/>
          <p style="text-align: justify;">Karena pada akhirnya, <strong>quiet quitting bukan sekadar masalah karyawan.</strong> Ia adalah cermin yang memperlihatkan kualitas kepemimpinan dan budaya organisasi. Dan sering kali, orang tidak berhenti bekerja karena pekerjaannya.
          Mereka berhenti peduli karena terlalu lama merasa tidak berarti. <strong>Bagaimana menurut Anda?</strong></p>
          <br/>
          <p style="text-align: justify;">Apakah <em>quiet quitting</em> lebih banyak dipicu oleh karakter individu, atau justru oleh kualitas kepemimpinan dan budaya organisasi? Saya tertarik mendengar perspektif Anda...</p>`,
    contentEn: `<p style="text-align: justify;">This is a Loud Alarm for Leadership. Every time they hear the term quiet quitting, many leaders immediately conclude: "Employees today are less loyal."
        "Their mentality is weak." "They want work-life balance, but do not want to work hard." Is that really true?</p>
        <br/>
        <p style="text-align: justify;">I actually see it from a different angle.<strong> Quiet quitting is not a disease, it is a symptom.</strong> A symptom that something inside the organization is not right. Interestingly, this phenomenon is actually not new. For years, we have seen employees who arrive on time, complete their work according to targets, do not break the rules, but also never again provide ideas, energy, or initiative.
        They are present. But their enthusiasm is gone. They still receive a salary. But their hearts have long "resigned." This is what is often called <strong>"quit and stay"</strong>\u2014still working, but stopped contributing.</p>
        <br/>
        <p style="text-align: justify;"><strong>The problem is not the people.</strong> According to Gallup, about <strong>50% of employees are in a condition of not genuinely engaged.</strong> This means the organization might not be lacking a workforce.
        What they lack are <strong>people who still care.</strong> Unfortunately, many companies are still busy measuring productivity, KPIs, and efficiency. But they forget to measure one thing that is far more decisive: <strong>Do their people still have a reason to care?</strong> Because someone does not suddenly stop giving their best. That decision is born from an accumulation of experiences.</p>
        <br/>
        <ul>
          <li style="text-align: justify;">Feeling unheard.</li>
          <li style="text-align: justify;">Feeling unappreciated.</li>
          <li style="text-align: justify;">Feeling just treated as a number.</li>
          <li style="text-align: justify;">Feeling every extra effort is considered an obligation, not appreciated.</li>
        </ul>
        <br/>
        <p style="text-align: justify;">Little by little, that enthusiasm depletes. <strong>EMPLOYEE EXPERIENCE IS A STRATEGY, NOT A FACILITY</strong>. Companies are racing to build <strong>Customer Experience (CX).</strong> They also invest heavily in <strong>User Experience (UX).</strong>
        But many still consider <strong>Employee Experience (EX)</strong> to be limited to a comfortable workspace, free coffee, or activities (team building). Even though the employee experience is shaped by much simpler things:</p>
        <br/>
        <ul>
          <li style="text-align: justify;">How a boss gives feedback.</li>
          <li style="text-align: justify;">How leaders respect differing opinions.</li>
          <li style="text-align: justify;">How the organization treats people when they make mistakes.</li>
          <li style="text-align: justify;">How decisions are explained fairly and transparently.</li>
        </ul>
        <br/>
        <p style="text-align: justify;">Organizational culture is not built through slogans on office walls. Culture is built from the experiences felt every day. <strong>LEADERSHIP DETERMINES WHETHER PEOPLE GIVE THEIR HEARTS OR JUST THEIR TIME</strong>. 
        People can be forced to attend. But no one can be forced to care. They will only give their commitment when they feel respected. Therefore, the task of a leader is not just to ensure targets are met.
        Their task is to create an environment where people feel safe to express opinions, trusted to grow, and valued for their contributions. A leader who only manages work will get compliance. 
        A leader who is able to manage people will get commitment. And commitment always produces something that can never be bought with a salary: <strong>initiative</strong>.</p>
        <br/>
        <p style="text-align: justify;">Questions Leaders Need to Answer. Before calling employees <em>quiet quitters</em>, perhaps it is a good idea to ask ourselves:</p>
        <br/>
        <ul>
          <li style="text-align: justify;">Do I really listen to them?</li>
          <li style="text-align: justify;">Do I only assess the results of their work, or also understand their experience while working?</li>
          <li style="text-align: justify;">Am I creating an environment that makes people want to grow, or just survive?</li>
        </ul>
        <br/>
        <p style="text-align: justify;">Because in the end, <strong>quiet quitting is not just an employee problem.</strong> It is a mirror that shows the quality of leadership and organizational culture. And often, people do not stop working because of the job.
        They stop caring because they have felt insignificant for too long. <strong>What do you think?</strong></p>
        <br/>
        <p style="text-align: justify;">Is <em>quiet quitting</em> triggered more by individual character, or by the quality of leadership and organizational culture? I am interested in hearing your perspective...</p>`,
    publishedAt: new Date('2026-08-03T15:00:00+07:00'),
    featured: false,
    createdById: 1,
    updatedById: 1,
  },
  {
    titleId: 'Peluncuran Program Sertifikasi',
    titleEn: 'Certification Program Launch',
    slug: 'peluncuran-program-sertifikasi',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop',
    descriptionId: 'Program sertifikasi baru yang tersedia untuk profesional HR tingkat menengah.',
    descriptionEn: 'New certification programs available for mid-level HR professionals.',
    contentId: `<p style="text-align: justify;">First HR Indonesia dengan bangga mengumumkan peluncuran modul sertifikasi terbaru kami yang dirancang khusus untuk profesional HR tingkat menengah. Program ini dibuat untuk menjembatani kesenjangan keterampilan dalam menghadapi tantangan manajemen talenta modern.</p>
          <br/>
          <p style="text-align: justify;">Modul ini mencakup berbagai topik krusial, mulai dari analisis data HR (People Analytics), strategi retensi talenta terbaik, hingga penerapan kebijakan keberagaman dan inklusi. Kami merancang kurikulum ini melalui proses kurasi yang ketat dan studi literatur yang ekstensif.</p>
          <br/>
          <p style="text-align: justify;">Pendaftaran program kini sudah dibuka melalui portal resmi FHRI. Bergabunglah dengan ratusan profesional lainnya untuk mengambil langkah besar dalam eskalasi karier Anda.</p>`,
    contentEn: `<p style="text-align: justify;">First HR Indonesia proudly announces the launch of our newest certification module specifically designed for mid-level HR professionals. This program was created to bridge the skills gap in facing modern talent management challenges.</p>
        <br/>
        <p style="text-align: justify;">This module covers various crucial topics, ranging from HR data analysis (People Analytics), top talent retention strategies, to the implementation of diversity and inclusion policies. We designed this curriculum through a rigorous curation process and extensive literature study.</p>
        <br/>
        <p style="text-align: justify;">Registration for the program is now open through the official FHRI portal. Join hundreds of other professionals to take a huge step in escalating your career.</p>`,
    publishedAt: new Date('2026-08-18T13:30:00+07:00'),
    featured: false,
    createdById: 1,
    updatedById: 1,
  },
  {
    titleId: 'Masa Depan Kerja Hybrid',
    titleEn: 'The Future of Hybrid Work',
    slug: 'masa-depan-kerja-hybrid',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop',
    descriptionId: 'Temuan riset mengenai model kerja hybrid dan keterlibatan karyawan pada tahun 2026.',
    descriptionEn: 'Research findings regarding hybrid work models and employee engagement in 2026.',
    contentId: `<p style="text-align: justify;">Berdasarkan laporan riset terbaru yang dirilis oleh tim riset internal FHRI, model kerja hybrid kini telah bergeser dari sekadar tren sementara menjadi standar operasional jangka panjang bagi sebagian besar perusahaan multinasional.</p>
          <br/>
          <p style="text-align: justify;">Penelitian menunjukkan bahwa organisasi yang berhasil menyeimbangkan fleksibilitas kerja jarak jauh dengan interaksi tatap muka yang bermakna mengalami peningkatan keterlibatan karyawan hingga 45%. Namun, tantangan terbesar saat ini adalah bagaimana menjaga budaya perusahaan di tengah tim yang terdistribusi.</p>
          <br/>
          <p style="text-align: justify;">Temuan lebih lanjut merinci strategi komunikasi yang efektif, penggunaan platform kolaborasi virtual, dan pentingnya merancang ulang metrik penilaian kinerja yang berfokus pada hasil akhir (output) alih-alih semata-mata pada jam kerja.</p>`,
    contentEn: `<p style="text-align: justify;">Based on the latest research report released by the FHRI internal research team, the hybrid work model has now shifted from just a temporary trend to a long-term operational standard for most multinational companies.</p>
        <br/>
        <p style="text-align: justify;">Research shows that organizations successfully balancing remote work flexibility with meaningful face-to-face interactions experience up to a 45% increase in employee engagement. However, the biggest challenge today is how to maintain company culture amidst distributed teams.</p>
        <br/>
        <p style="text-align: justify;">Further findings detail effective communication strategies, the use of virtual collaboration platforms, and the importance of redesigning performance assessment metrics that focus on end results (output) rather than solely on working hours.</p>`,
    publishedAt: new Date('2026-08-24T10:15:00+07:00'),
    featured: false,
    createdById: 1,
    updatedById: 1,
  },
  {
    titleId: 'Pengumuman Kemitraan Universitas',
    titleEn: 'University Partnership Announcement',
    slug: 'pengumuman-kemitraan-universitas',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop',
    descriptionId: 'FHRI berkolaborasi dengan universitas-universitas terkemuka untuk memperluas modul pembelajaran.',
    descriptionEn: 'FHRI collaborates with leading universities to expand learning modules.',
    contentId: `<p style="text-align: justify;">Dalam upaya berkelanjutan untuk menyediakan standar pendidikan sumber daya manusia kelas dunia, First HR Indonesia telah secara resmi menandatangani nota kesepahaman (MoU) strategis dengan tiga universitas terkemuka di tanah air.</p>
          <br/>
          <p style="text-align: justify;">Kolaborasi ini akan menghasilkan pengembangan modul pembelajaran hibrida yang menggabungkan ketajaman teori akademik dan studi kasus praktis dari industri. Mahasiswa yang mengambil spesialisasi Manajemen Sumber Daya Manusia kini dapat mengakumulasikan kredit mereka dengan sertifikasi resmi dari FHRI.</p>
          <br/>
          <p style="text-align: justify;">Inisiatif ini diharapkan dapat menghasilkan lulusan unggul yang lebih siap kerja, memiliki pemahaman mendalam tentang ekosistem HR digital, serta mampu menyelesaikan masalah ketenagakerjaan secara komprehensif sesaat setelah memasuki dunia profesional.</p>`,
    contentEn: `<p style="text-align: justify;">In a continuous effort to provide world-class human resource education standards, First HR Indonesia has officially signed a strategic memorandum of understanding (MoU) with three leading universities in the country.</p>
        <br/>
        <p style="text-align: justify;">This collaboration will result in the development of hybrid learning modules that combine the sharpness of academic theory and practical case studies from the industry. Students taking the Human Resource Management specialization can now accumulate their credits with official certification from FHRI.</p>
        <br/>
        <p style="text-align: justify;">This initiative is expected to produce excellent graduates who are more job-ready, possess a deep understanding of the digital HR ecosystem, and are capable of solving employment problems comprehensively right after entering the professional world.</p>`,
    publishedAt: new Date('2026-08-30T15:45:00+07:00'),
    featured: true,
    createdById: 1,
    updatedById: 1,
  },
];

// ─────────────────────────────────────────────
// 2. WALL OF CONGRATULATIONS (20 entries)
// ─────────────────────────────────────────────

const wallData = [
  {
    name: 'Ricky Theodores',
    company: null,
    roleId: 'Chief Executive Officer of KALLA Land & Property',
    roleEn: 'Chief Executive Officer of KALLA Land & Property',
    quoteId: 'Mewakili KALLA Land & Property, saya menyampaikan ucapan selamat yang tulus kepada First HR Indonesia atas kesuksesan peluncuran situs web resmi Anda. Pencapaian luar biasa ini mencerminkan komitmen teguh Anda dalam memajukan keunggulan Human Capital dan memberdayakan berbagai organisasi untuk membangun tim yang berkinerja tinggi serta siap menghadapi tantangan masa depan. Kami percaya bahwa platform baru ini akan menjadi pusat pengetahuan, inovasi, dan kolaborasi yang sangat bernilai bagi komunitas bisnis di Indonesia. Semoga pencapaian ini menjadi awal dari perjalanan yang lebih besar, menginspirasi banyak organisasi untuk mengoptimalkan potensi penuh dari sumber daya manusia mereka dan menciptakan kesuksesan bisnis yang berkelanjutan. Kami mendoakan agar First HR Indonesia terus bertumbuh, meraih kesuksesan yang langgeng, dan mengukir lebih banyak pencapaian di masa depan. Kami juga berharap dapat terus memperkuat kemitraan kita dan menciptakan nilai yang lebih besar bersama-sama.',
    quoteEn: 'Congratulations on the Launch of First HR Indonesia\'s Official Website. On behalf of KALLA Land & Property, I extend my heartfelt congratulations to First HR Indonesia on the successful launch of your official website. This remarkable milestone reflects your unwavering commitment to advancing Human Capital excellence and empowering organizations to build high-performing, future-ready teams. We believe this new platform will serve as a valuable hub for knowledge, innovation, and meaningful collaboration across Indonesia\'s business community. May this achievement mark the beginning of an even greater journey, inspiring organizations to unlock the full potential of their people and create sustainable business success. We wish First HR Indonesia continued growth, lasting success, and many more milestones ahead. We look forward to strengthening our partnership and creating greater value together.',
    photo: '/images/home-congrats-ricky.png',
    order: 1,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Devi Emerson Ambui',
    company: null,
    roleId: 'General Manager of Ibis Palembang Sanggar',
    roleEn: 'General Manager of Ibis Palembang Sanggar',
    quoteId: 'Selamat atas peluncuran resmi situs web First HR Indonesia. Kami mendoakan agar First HR Indonesia terus sukses dalam memberdayakan organisasi dan membentuk masa depan Human Capital (Sumber Daya Manusia) di Indonesia. Semoga platform baru ini dapat menginspirasi pertumbuhan, kolaborasi, dan dampak yang bertahan lama.',
    quoteEn: 'Congratulations on the official launch of the First HR Indonesia Website. Wishing First HR Indonesia continued success in empowering organizations and shaping the future of Human Capital in Indonesia. May this new platform inspire growth, collaboration, and lasting impact.',
    photo: '/images/home-congrats-devi.png',
    order: 2,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Dina Sandri Fani',
    company: null,
    roleId: 'HR Director of ParagonCorp',
    roleEn: 'HR Director of ParagonCorp',
    quoteId: 'Selamat kepada First HR Indonesia atas peluncuran resmi situs webnya. Pencapaian ini mencerminkan komitmen berkelanjutan dalam memajukan profesi HR, serta memberikan nilai tambah yang lebih besar bagi berbagai organisasi dan praktisi HR di seluruh Indonesia. Semoga First HR Indonesia, di bawah kepemimpinan Bapak Robby P. Tambunan, senantiasa meraih kesuksesan, bertumbuh secara berkelanjutan, dan memberikan dampak yang semakin besar dalam membentuk masa depan SDM dan organisasi. Semoga platform baru ini dapat menjadi sumber pengetahuan, sarana kolaborasi, dan pendorong inovasi yang berharga bagi komunitas HR. Selamat dan sukses atas peluncurannya!',
    quoteEn: 'Congratulations to First HR Indonesia on the official launch of your website. This milestone reflects your continued commitment to advancing the HR profession and creating greater value for organizations and HR practitioners across Indonesia. Wishing First HR Indonesia, under the leadership of Mr. Robby P. Tambunan, continued success, sustainable growth, and an even greater impact in shaping the future of people and organizations. May this new platform become a valuable source of knowledge, collaboration, and innovation for the HR community. Congratulations and best wishes for a successful launch!',
    photo: '/images/home-congrats-dina.png',
    order: 3,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Tommy Sudjarwadi',
    company: null,
    roleId: 'Dunamis Organizational',
    roleEn: 'Dunamis Organizational',
    quoteId: 'Selamat atas peluncuran situs web First HR Indonesia. Sebuah inisiatif yang tepat waktu. Seiring dengan peran Profesional Sumber Daya Manusia yang semakin strategis dalam memandu transformasi perusahaan, First HR Indonesia menawarkan layanan kemitraan yang dapat diandalkan. Pendiri First HR Indonesia adalah Bapak Robby Tambunan, seorang eksekutif dengan pengalaman lebih dari 30 tahun di bidang Human Capital dan Transformasi Bisnis. Beliau adalah seorang profesional yang kreatif, berdedikasi tinggi, memiliki integritas yang kuat, serta mitra bisnis yang terpercaya. Saya percaya inisiatif luar biasa ini akan menjadi jembatan dalam mengembangkan para Profesional Sumber Daya Manusia, khususnya di Indonesia, untuk menjadi profesional kelas dunia.',
    quoteEn: 'Congratulations on the launch of the First HR Indonesia website. A timely initiative. As the role of Human Resource Professionals becomes increasingly strategic in guiding corporate transformation, First HR Indonesia offers reliable partnership services. The founder of First HR Indonesia is Mr. Robby Tambunan, an executive with over 30 years of experience in Human Capital and Business Transformation. A creative, highly dedicated professional with strong integrity and a trusted business partner. I believe this remarkable initiative will serve as a bridge in developing Human Resource Professionals, especially in Indonesia, to become world-class professionals.',
    photo: '/images/home-congrats-dunamis.png',
    order: 4,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Prof. Dr. Kim Soo-il',
    company: null,
    roleId: 'Chairman of PT BIC Jaya Indonesia (Former Ambassador of the Republic of Korea / Honorary Consul General of the Republic of Indonesia in Busan, South Korea)',
    roleEn: 'Chairman of PT BIC Jaya Indonesia (Former Ambassador of the Republic of Korea / Honorary Consul General of the Republic of Indonesia in Busan, South Korea)',
    quoteId: 'Dear Mr. Robby, Selamat atas berdirinya FIRST HR INDONESIA, semoga perusahan ini  terus maju dan berkembang dengan stabil dan lancar, hingga menjadi landasan yang menjamin kesejahteraan dan kebahagiaan sekeluarga perusahan dan aset masyarakat yg memberi dedikasi besar bagi kemakmuran  masyarakat  Indonesia.',
    quoteEn: 'Dear Mr. Robby, Congratulations on the establishment of FIRST HR INDONESIA. May this company continue to advance and grow steadily, ultimately becoming a strong foundation that ensures the well-being and happiness of the entire corporate family. Furthermore, may it become a valuable asset to society, demonstrating great dedication to the prosperity of the Indonesian people.',
    photo: '/images/home-congrats-kimsooil.png',
    order: 5,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Lucia Sitiabudi Hendraka',
    company: null,
    roleId: 'Professional HR',
    roleEn: 'Professional HR',
    quoteId: 'Halo Pak Robby, selamat atas peluncuran First HR Indonesia! Saya mendoakan segala kesuksesan bagi Anda seiring dimulainya perjalanan baru yang luar biasa ini. Semoga First HR Indonesia terus menginspirasi, melayani, dan memberikan dampak positif yang berkelanjutan.',
    quoteEn: 'Hi Pak Robby, Congratulations on the Launching of the First HR Indonesia! Wishing you every success as this exciting new journey begins. May the First HR Indonesia continue to inspire, serve, and make a lasting positive impact.',
    photo: '/images/home-congrats-lucia.png',
    order: 6,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Monang Marbun, SE, CHMA',
    company: null,
    roleId: 'Founder & Principal Consultant of Hotel Consultant Indonesia',
    roleEn: 'Founder & Principal Consultant of Hotel Consultant Indonesia',
    quoteId: 'Ucapan selamat yang tulus atas pencapaian yang menggembirakan ini! Semoga peluncuran situs web Anda menjadi awal bagi dampak yang lebih besar, hubungan yang lebih kuat, dan kesuksesan yang berkelanjutan dalam memberdayakan individu dan organisasi. Kami mendoakan masa depan yang cerah bagi First HR Indonesia!',
    quoteEn: 'Heartfelt congratulations on this exciting milestone! May the launch of your website be the beginning of greater impact, stronger connections, and continued success in empowering people and organizations. Wishing First HR Indonesia a bright future ahead!',
    photo: '/images/home-congrats-monang.png',
    order: 7,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Ibnu Darmawan, SH., MH.',
    company: null,
    roleId: 'General Manager of Atria Hotel Malang',
    roleEn: 'General Manager of Atria Hotel Malang',
    quoteId: 'Selamat atas peluncuran Situs Web First HR Indonesia. Semoga pencapaian ini menjadi awal dari inovasi yang lebih besar, kemitraan yang lebih kuat, dan keunggulan yang berkelanjutan dalam mengembangkan talenta-talenta Indonesia yang siap menghadapi masa depan. Sebagai hotel bintang empat yang baru saja direnovasi di Malang, Atria Hotel Malang dengan bangga mendukung inisiatif yang mendorong pengembangan sumber daya manusia dan keunggulan organisasi. Kami mendoakan agar First HR Indonesia terus sukses dan memiliki perjalanan yang luar biasa kedepannya.',
    quoteEn: 'Congratulations on the Launch of First HR Indonesia Website. May this milestone mark the beginning of greater innovation, stronger partnerships, and continued excellence in developing Indonesia\'s future-ready talents. As a newly renovated four-star hotel in Malang, Atria Hotel Malang proudly supports initiatives that foster people development and organizational excellence. Wishing First HR Indonesia continued success and a remarkable journey ahead.',
    photo: '/images/home-congrats-ibnu.png',
    order: 8,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Muhammad Saringin',
    company: null,
    roleId: 'Chairman of AMSIH-HHRMA DKI Jakarta',
    roleEn: 'Chairman of AMSIH-HHRMA DKI Jakarta',
    quoteId: 'Atas nama AMSIH-HHRMA DKI JAKARTA, saya ingin menyampaikan ucapan selamat yang tulus kepada First HR Indonesia atas pendirian resminya pada 25 September 2017. Langkah perintis Anda sebagai Konsultan Sumber Daya Manusia menandai pencapaian baru dalam memajukan profesionalisme dan keunggulan di industri hospitality (perhotelan). Semoga perjalanan ini menghadirkan inovasi yang berkesinambungan, kontribusi yang berdampak nyata, serta pertumbuhan yang berkelanjutan bagi sektor pariwisata dan perhotelan Indonesia. Sekali lagi, selamat, dan mari kita songsong masa depan yang penuh dengan kesuksesan dan kolaborasi.',
    quoteEn: 'On behalf of AMSIH-HHRMA DKI JAKARTA, I would like to extend our heartfelt congratulations to First HR Indonesia on its official establishment, September 25th, 2017. Your pioneering step as a Human Resources Consultant marks a new milestone in advancing professionalism and excellence within the hospitality industry. May this journey bring continuous innovation, impactful contributions, and sustainable growth for Indonesia\'s tourism and hotel sector. Congratulations once again, and let us look forward to a future filled with success and collaboration.',
    photo: '/images/home-congrats-saringin.png',
    order: 9,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Reza Widyaprastha',
    company: null,
    roleId: 'HR Director of JABABECA & CO.',
    roleEn: 'HR Director of JABABECA & CO.',
    quoteId: 'Mengelola manusia adalah seni tingkat tinggi. Dibutuhkan orang-orang yang tidak saja memiliki kapabilitas dan kompetensi, tetapi juga mempunyai jam terbang dengan daya jelajah di berbagai sektor industri dan dunia bisnis. Melihat orang-orang di balik First HR Indonesia, terlebih dengan Pak Robby Tambunan, sahabat yang saya kenal baik sejak 15 tahun lalu, saya meyakini bahwa First HR Indonesia akan menghadirkan banyak solusi, kontribusi, dan kolaborasi yang bermanfaat bagi dunia korporasi serta insan SDM di Indonesia. Selamat dan sukses atas peluncuran First HR Indonesia. Semoga terus bertumbuh, memberikan dampak positif, serta menjadi mitra terpercaya dalam menghadirkan solusi Human Capital bagi berbagai organisasi di Indonesia.',
    quoteEn: 'Managing people is an art of the highest level. It requires individuals who possess not only capabilities and competencies but also extensive experience and broad exposure across various industry sectors and the business world. Looking at the people behind First HR Indonesia, especially Mr. Robby Tambunan, a good friend I have known for 15 years, I am confident that First HR Indonesia will bring forth valuable solutions, contributions, and collaborations for the corporate world and HR professionals in Indonesia. Congratulations and best wishes on the launch of First HR Indonesia. May it continue to grow, create a positive impact, and become a trusted partner in providing Human Capital solutions for organizations across Indonesia. ',
    photo: '/images/home-congrats-reza.png',
    order: 10,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Rudy Pahala',
    company: null,
    roleId: 'President Director of PT Asta Kanti Insurance Brokers',
    roleEn: 'President Director of PT Asta Kanti Insurance Brokers',
    quoteId: 'Selamat kepada First HR Indonesia atas peluncuran resmi perusahaan. Semoga terus bertumbuh dan sukses dalam memberdayakan organisasi melalui solusi Human Capital yang berdampak nyata. Saya mengenal Bapak Robby P. Tambunan sebagai seorang pemimpin yang memiliki integritas, profesionalisme, dan keahlian yang mendalam. Dedikasi, visi strategis, dan komitmennya yang teguh telah menumbuhkan kepercayaan dan rasa hormat dari para rekan kerja, mitra, maupun klien. Sekali lagi, selamat kepada Bapak Robby dan seluruh tim First HR Indonesia atas pencapaian yang luar biasa ini. Saya mendoakan segala kesuksesan bagi Anda saat memulai perjalanan yang luar biasa ini dan terus menciptakan nilai yang bermakna bagi berbagai organisasi di seluruh Indonesia.',
    quoteEn: 'Congratulations to First HR Indonesia on the official launch of the company. Wishing you continued growth and success in empowering organizations through impactful Human Capital solutions. I have had the pleasure of knowing Mr. Robby P. Tambunan as a leader of integrity, professionalism, and deep expertise. His dedication, strategic vision, and unwavering commitment have earned him the trust and respect of colleagues, partners, and clients alike. Congratulations once again to Mr. Robby and the entire First HR Indonesia team on this remarkable milestone. Wishing you every success as you embark on this exciting journey and continue creating meaningful value for organizations across Indonesia.',
    photo: '/images/home-congrats-rudy.png',
    order: 11,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Linan Kurniahu',
    company: null,
    roleId: 'Chief Executive Officer of Blue Sky Group',
    roleEn: 'Chief Executive Officer of Blue Sky Group',
    quoteId: 'Atas nama Blue Sky Group, kami mengucapkan selamat yang paling hangat atas peluncuran situs web resmi Anda. Melalui kerja sama yang telah terjalin, kami menyaksikan secara langsung dedikasi Anda dalam memajukan keunggulan Human Capital di Indonesia. Pencapaian ini mencerminkan komitmen teguh Anda dalam meningkatkan standar SDM di seluruh Indonesia. Kami sangat menghargai kemitraan kita dan menantikan kesuksesan yang lebih besar bersama-sama di masa depan. Semoga platform baru ini dapat semakin memperkuat jangkauan Anda, memperluas visi Anda, dan menginspirasi kesuksesan yang lebih besar lagi. Kami mendoakan agar Anda senantiasa meraih kesuksesan, pertumbuhan yang berkelanjutan, dan berbagai pencapaian luar biasa dalam babak baru yang menggembirakan ini.',
    quoteEn: 'On behalf of Blue Sky Group, warmest congratulations on your official website launch. Having worked alongside you, we have witnessed firsthand your dedication to advancing human capital excellence in Indonesia. This milestone reflects your unwavering commitment to elevating HR standards across Indonesia. We truly value our partnership and look forward to achieving even greater success together. May this new platform further empower your reach, amplify your vision, and inspire even greater success. Wishing you continued success, sustainable growth, and many remarkable achievements in this exciting new chapter.',
    photo: '/images/home-congrats-linan.png',
    order: 12,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Erik Meijer',
    company: null,
    roleId: 'Co-Founder & Co-Chairman 9Sky Venture Pte. Ltd.',
    roleEn: 'Co-Founder & Co-Chairman 9Sky Venture Pte. Ltd.',
    quoteId: 'Selamat kepada Bapak Robby dan seluruh tim First HR Indonesia atas pencapaian yang menggembirakan ini. Kami mendoakan segala kesuksesan bagi Anda dalam membantu berbagai organisasi menghadapi tantangan pengembangan human capital yang terus berkembang, serta dalam membentuk masa depan SDM di Indonesia melalui adaptasi yang cepat, inovasi, dan keunggulan.',
    quoteEn: 'Congratulations to Pak Robby and the entire First HR Indonesia team on this exciting milestone. Wishing you every success in helping organizations navigate the evolving challenges of human capital development and shaping the future of HR in Indonesia through fast adaptation, innovation and excellence.',
    photo: '/images/home-congrats-erik.png',
    order: 13,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Robby Fachri',
    company: null,
    roleId: 'Director Of Human Resources - Indonesia Marriott International',
    roleEn: 'Director Of Human Resources - Indonesia Marriott International',
    quoteId: 'Selamat kepada Bapak Robby dan seluruh tim First HR Indonesia atas pencapaian yang menggembirakan ini. Kami mendoakan segala kesuksesan bagi Anda dalam membantu berbagai organisasi menghadapi tantangan pengembangan human capital yang terus berkembang, serta dalam membentuk masa depan SDM di Indonesia melalui adaptasi yang cepat, inovasi, dan keunggulan.',
    quoteEn: 'Congratulations for the launch of First HR Indonesia website. Wish First HR Indonesia more success\u{1F64F}',
    photo: '/images/home-congrats-robby.png',
    order: 14,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'I Nyoman Iswara, SE, MM, CHA',
    company: null,
    roleId: 'Chairman of Indonesia Hotel General Manager Association (DPD Jakarta)',
    roleEn: 'Chairman of Indonesia Hotel General Manager Association (DPD Jakarta)',
    quoteId: 'Selamat atas peluncuran situs web First HR Indonesia! IHGMA DPD Jakarta mendukung penuh sinergi untuk mewujudkan SDM perhotelan yang unggul dan siap menghadapi tantangan masa depan (future-ready). Sukses selalu untuk Bapak Robby dan tim!',
    quoteEn: 'Congratulations on the launch of the First HR Indonesia website! IHGMA DPD Jakarta fully supports the synergy in developing exceptional and future-ready human resources for the hospitality industry. Wishing continued success to Mr. Robby and the team.',
    photo: '/images/home-congrats-inyoman.png',
    order: 15,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Wahyono Yoyon, SH. MM. CHA',
    company: null,
    roleId: 'Cluster General Manager of Atria Hotel and Residences Gading Serpong',
    roleEn: 'Cluster General Manager of Atria Hotel and Residences Gading Serpong',
    quoteId: 'Selamat kepada First HR Indonesia atas peluncuran resmi situs webnya. Pencapaian penting ini mencerminkan komitmen berkelanjutan Anda dalam memajukan keunggulan Human Capital dan mendukung transformasi bisnis yang berkelanjutan. Semoga platform digital baru ini dapat memperkuat dampak yang Anda berikan, menghubungkan lebih banyak organisasi dengan keahlian Anda, serta semakin mengukuhkan First HR Indonesia sebagai mitra terpercaya dalam mengembangkan talenta, pemimpin, dan organisasi berkinerja tinggi. Sukses selalu dalam upaya Anda untuk terus menciptakan nilai yang berdampak jangka panjang bagi berbagai perusahaan di seluruh Indonesia.',
    quoteEn: 'Congratulations to First HR Indonesia on the official launch of your website. This important milestone reflects your continued commitment to advancing Human Capital excellence and supporting sustainable business transformation. May your new digital platform strengthen your impact, connect more organizations with your expertise, and further establish First HR Indonesia as a trusted partner in developing people, leaders, and high-performing organizations. Wishing you every success as you continue creating lasting value for businesses across Indonesia.',
    photo: '/images/home-congrats-wahyono.png',
    order: 16,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Asep Setia Permana, S.Ip., S.H., M.H.',
    company: null,
    roleId: 'Corporate Head of Security of MNC Group',
    roleEn: 'Corporate Head of Security of MNC Group',
    quoteId: 'Selamat dan sukses atas peluncuran website First HR Indonesia! Perjalanan panjang persahabatan kita selama lebih dari dua dekade membuat saya merasa bangga melihat setiap langkah dan pencapaian yang telah diraih. Peluncuran website ini bukan hanya menjadi sebuah milestone bagi First HR Indonesia, tetapi juga menjadi bukti komitmen Abang Robby dalam terus menghadirkan kontribusi nyata bagi pengembangan dunia Human Resources di Indonesia. Semoga website ini menjadi jembatan yang menghubungkan lebih banyak insan, organisasi, dan talenta untuk bertumbuh bersama, serta membawa First HR Indonesia semakin maju, dipercaya, dan memberikan manfaat yang lebih luas. Selamat kepada Abang Robby Tambunan dan seluruh tim First HR Indonesia. Teruslah menginspirasi, berkarya, dan menjadi bagian dari kemajuan dunia HR Indonesia.',
    quoteEn: 'Congratulations and best wishes on the launch of the First HR Indonesia website! Our long-standing friendship of over two decades makes me incredibly proud to witness every step and milestone you have achieved. The launch of this website is not just a milestone for First HR Indonesia, but also a true testament to Mr. Robby\'s unwavering commitment to making a tangible contribution to the development of Human Resources in Indonesia. May this website serve as a bridge that connects more individuals, organizations, and talents to grow together, and may it propel First HR Indonesia forward as an increasingly trusted partner delivering an even broader impact. Congratulations to Mr. Robby Tambunan and the entire First HR Indonesia team. Keep inspiring, innovating, and driving the advancement of the HR landscape in Indonesia!',
    photo: '/images/home-congrats-asep.png',
    order: 17,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Siska Situmorang',
    company: null,
    roleId: 'President Director of Kharisma Group',
    roleEn: 'President Director of Kharisma Group',
    quoteId: 'Selamat atas Peresmian First HR Indonesia. Atas nama Kharisma Group, saya ingin menyampaikan ucapan selamat yang paling tulus atas pembukaan resmi First HR Indonesia. Kami yakin bahwa dengan pengalaman yang luar biasa serta kepemimpinan visioner dari tokoh HR legendaris, Bapak Robby Tambunan, First HR Indonesia akan menjadi mitra konsultan manajemen strategis yang terpercaya bagi berbagai perusahaan di seluruh Indonesia. Berbekal keahlian selama puluhan tahun di bidang Human Resources, Pengembangan Organisasi, Kepemimpinan, dan Dukungan Bisnis, Bapak Tambunan membawa pengetahuan dan wawasan praktis yang tak ternilai. Hal ini tentunya akan sangat membantu berbagai organisasi dalam mengembangkan talenta mereka, memperkuat kepemimpinan, serta mencapai pertumbuhan bisnis yang berkelanjutan. Kami mendoakan kesuksesan untuk perjalanan First HR Indonesia ke depannya, dan kami percaya bahwa kehadiran perusahaan ini akan memberikan kontribusi yang signifikan bagi kemajuan bisnis di Indonesia melalui layanan konsultasi profesional, solusi yang inovatif, dan pelayanan yang luar biasa. Sekali lagi kami ucapkan selamat. Semoga First HR Indonesia terus bertumbuh dan senantiasa menginspirasi keunggulan di tahun-tahun yang akan datang.',
    quoteEn: 'Congratulations on the Opening of First HR Indonesia. On behalf of Kharisma Group, I would like to extend my heartfelt congratulations on the official opening of First HR Indonesia. We are confident that, with the remarkable experience and visionary leadership of the legendary HR professional, Mr. Robby Tambunan, First HR Indonesia will become a trusted strategic management consulting partner for companies across Indonesia. With decades of expertise in Human Resources, Organizational Development, Leadership, and Business Support, Mr. Tambunan brings invaluable knowledge and practical insight that will help organizations develop their people, strengthen their leadership, and achieve sustainable business growth. We wish First HR Indonesia every success in its journey and believe it will make a significant contribution to the advancement of Indonesian businesses through professional consulting, innovative solutions, and outstanding service. Congratulations once again, and may First HR Indonesia continue to grow and inspire excellence in the years ahead.',
    photo: '/images/home-congrats-siska.png',
    order: 18,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Dianti Tumiur Lumbanraja, S.H., M.Kn.',
    company: null,
    roleId: 'Notary & PPAT of Tangerang Regency',
    roleEn: 'Notary & PPAT of Tangerang Regency',
    quoteId: 'Selamat atas Peluncuran First HR Indonesia. Selamat kepada Bapak Robby Tambunan atas kesuksesan peluncuran First HR Indonesia. Semoga platform digital baru ini menjadi tonggak pencapaian yang bermakna dalam memajukan keunggulan Sumber Daya Manusia, menciptakan nilai yang lebih besar bagi berbagai organisasi, serta menginspirasi praktik-praktik HR yang lebih baik di Indonesia. Kami mendoakan agar First HR Indonesia beserta seluruh tim senantiasa meraih kesuksesan, pertumbuhan yang berkelanjutan, dan memberikan dampak yang semakin besar di tahun-tahun mendatang.',
    quoteEn: 'Congratulations on the Launch of First HR Indonesia. Congratulations to Pak Robby Tambunan on the successful launch of the First HR Indonesia. May this new digital platform become a meaningful milestone in advancing Human Resources excellence, creating greater value for organizations, and inspiring better HR practices in Indonesia. Wishing First HR Indonesia and the entire team continued success, sustainable growth, and an even greater impact in the years ahead.',
    photo: '/images/home-congrats-dianti.jpg',
    order: 19,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Morizio Runtuwene',
    company: null,
    roleId: 'Managing Partner of TSN Asia Consulting and Founder of Goodtalenta.com',
    roleEn: 'Managing Partner of TSN Asia Consulting and Founder of Goodtalenta.com',
    quoteId: 'Selamat atas berdirinya First HR Indonesia! Di bawah kepemimpinan Bapak Robby Tambunan, saya yakin First HR Indonesia akan menciptakan dampak yang bermakna bagi dunia bisnis melalui keahlian HR dan layanan konsultasinya. Semoga senantiasa sukses, dan saya sangat menantikan kolaborasi di masa mendatang!',
    quoteEn: 'Congratulations on the establishment of First HR Indonesia! Under the leadership of Mr. Robby Tambunan, I\'m confident First HR Indonesia will create meaningful impact for businesses through its HR expertise and consulting services. Wishing you great success, and looking forward to future collaboration!',
    photo: '/images/home-congrats-morizio.png',
    order: 20,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
];

// ─────────────────────────────────────────────
// 3. RECRUITMENT DATA (6 jobs)
// ─────────────────────────────────────────────

const recruitmentData = [
  {
    titleId: 'Senior HR Consultant',
    titleEn: 'Senior HR Consultant',
    department: 'Human Capital Solutions',
    location: 'Jakarta, Indonesia',
    employmentType: 'full_time',
    descId: 'Memimpin proyek transformasi HR strategis, merancang kerangka kerja kompetensi, dan memberikan bimbingan ahli kepada klien enterprise kami.',
    descEn: 'Lead strategic HR transformation projects, design competency frameworks, and provide expert mentoring to our enterprise clients.',
    postedAt: new Date('2026-08-01T09:00:00+07:00'),
    status: 'open',
    createdById: 1,
    updatedById: 1,
  },
  {
    titleId: 'Industrial Relations Specialist',
    titleEn: 'Industrial Relations Specialist',
    department: 'Legal Advisory',
    location: 'Jakarta, Indonesia',
    employmentType: 'full_time',
    descId: 'Memberikan konseling ahli tentang kepatuhan hukum ketenagakerjaan, mengelola resolusi sengketa, dan merancang Peraturan Perusahaan / PKB.',
    descEn: 'Provide expert counsel on labor law compliance, manage dispute resolutions, and draft collective labor agreements (PKB).',
    postedAt: new Date('2026-08-03T09:00:00+07:00'),
    status: 'open',
    createdById: 1,
    updatedById: 1,
  },
  {
    titleId: 'Talent Acquisition Associate',
    titleEn: 'Talent Acquisition Associate',
    department: 'Executive Search',
    location: 'Jakarta, Indonesia',
    employmentType: 'full_time',
    descId: 'Menggerakkan proses rekrutmen end-to-end, melakukan headhunting untuk peran eksekutif, dan memastikan pengalaman kandidat yang mulus.',
    descEn: 'Drive end-to-end recruitment processes, conduct headhunting for executive roles, and ensure a seamless candidate experience.',
    postedAt: new Date('2026-08-05T09:00:00+07:00'),
    status: 'open',
    createdById: 1,
    updatedById: 1,
  },
  {
    titleId: 'HSE Corporate Trainer',
    titleEn: 'HSE Corporate Trainer',
    department: 'Health & Safety',
    location: 'Jakarta, Indonesia',
    employmentType: 'contract',
    descId: 'Merancang dan menyampaikan program pelatihan Kesehatan, Keselamatan, dan Lingkungan (K3L/HSE) yang berdampak bagi klien manufaktur dan korporat.',
    descEn: 'Design and deliver impactful Health, Safety, and Environment (HSE) training programs for manufacturing and corporate clients.',
    postedAt: new Date('2026-08-07T09:00:00+07:00'),
    status: 'open',
    createdById: 1,
    updatedById: 1,
  },
  {
    titleId: 'Digital Marketing Executive',
    titleEn: 'Digital Marketing Executive',
    department: 'Marketing & Sales',
    location: 'Jakarta, Indonesia',
    employmentType: 'full_time',
    descId: 'Mengelola kampanye media sosial, membuat konten yang menarik, dan mendorong pembuatan prospek (lead generation) untuk HR Bootcamp dan Acara Korporat.',
    descEn: 'Manage social media campaigns, create engaging content, and drive lead generation for our HR Bootcamps and Corporate Events.',
    postedAt: new Date('2026-08-09T09:00:00+07:00'),
    status: 'open',
    createdById: 1,
    updatedById: 1,
  },
  {
    titleId: 'Payroll Processing Officer',
    titleEn: 'Payroll Processing Officer',
    department: 'Payroll & Outsourcing',
    location: 'Jakarta, Indonesia',
    employmentType: 'full_time',
    descId: 'Memastikan eksekusi penggajian yang akurat dan tepat waktu, mengelola administrasi BPJS, dan menjaga kepatuhan penuh terhadap regulasi PPh 21.',
    descEn: 'Ensure accurate and timely payroll execution, manage BPJS administration, and maintain full compliance with PPh 21 regulations.',
    postedAt: new Date('2026-08-11T09:00:00+07:00'),
    status: 'open',
    createdById: 1,
    updatedById: 1,
  },
];

// ─────────────────────────────────────────────
// 4. SPONSOR DATA (3 logos)
// ─────────────────────────────────────────────

const sponsorData = [
  {
    name: 'Busan Indonesia Center',
    logo: '/images/home-network-busan.png',
    order: 1,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'NMC Klinik Pratama',
    logo: '/images/home-network-nmc.png',
    order: 2,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
  {
    name: 'Asta Kanti',
    logo: '/images/home-network-asta.png',
    order: 3,
    active: true,
    createdById: 1,
    updatedById: 1,
  },
];

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────

async function main() {
  // 1. News
  const newsCount = await prisma.news.count();
  if (newsCount > 0) {
    console.log(`[skip] News already has ${newsCount} rows`);
  } else {
    await prisma.news.createMany({ data: newsData });
    console.log(`[seed] News: ${newsData.length} articles inserted`);
  }

  // 2. Wall of Congratulations
  const wallCount = await prisma.wallOfCongratulations.count();
  if (wallCount > 0) {
    console.log(`[skip] WallOfCongratulations already has ${wallCount} rows`);
  } else {
    await prisma.wallOfCongratulations.createMany({ data: wallData });
    console.log(`[seed] WallOfCongratulations: ${wallData.length} entries inserted`);
  }

  // 3. Recruitment
  const recruitCount = await prisma.recruitment.count();
  if (recruitCount > 0) {
    console.log(`[skip] Recruitment already has ${recruitCount} rows`);
  } else {
    await prisma.recruitment.createMany({ data: recruitmentData });
    console.log(`[seed] Recruitment: ${recruitmentData.length} jobs inserted`);
  }

  // 4. Sponsors
  const sponsorCount = await prisma.sponsor.count();
  if (sponsorCount > 0) {
    console.log(`[skip] Sponsor already has ${sponsorCount} rows`);
  } else {
    await prisma.sponsor.createMany({ data: sponsorData });
    console.log(`[seed] Sponsor: ${sponsorData.length} logos inserted`);
  }

  console.log('[done] Content seed complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

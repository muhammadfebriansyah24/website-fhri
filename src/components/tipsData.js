export const getTipsData = (locale) => {
  if (locale === 'id') {
    return {
      hero: {
        eyebrow: "Tips & Trick",
        title1: "Wawasan Praktis dari",
        title2: "Konsultan First HR Indonesia",
        description: "Strategi nyata yang diambil dari keterlibatan Executive Search, Etika Kerja Profesional, dan Acara Korporat kami — keahlian yang sama yang kami bawa ke setiap klien."
      },
      categories: [
        {
          key: 'recruitment',
          label: 'Rekrutmen & Perekrutan',
          intro: 'Bagaimana tim terbaik menemukan, mengevaluasi, dan merekrut talenta sebelum orang lain melakukannya.',
          accent: '#DC2626',
          img: '/images/tthr-recruitment.jpg',
          tips: [
            {
              title: 'Tulis Deskripsi Pekerjaan yang Menarik, Bukan Sekadar Daftar',
              teaser: 'Sebagian besar lowongan kerja terbaca seperti dokumen hukum. Punya Anda harus terbaca seperti undangan.',
              body: 'Mulailah dengan apa yang benar-benar akan dilakukan dan dicapai oleh seseorang dalam peran tersebut, bukan deretan persyaratan. Ganti frasa generik seperti "team player" dengan hasil yang konkret — "Anda akan memegang kendali onboarding untuk 50+ karyawan baru per kuartal."',
              takeaway: 'Potong daftar persyaratan Anda sepertiga bagian dan ganti dengan hasil nyata.',
            },
            {
              title: 'Gunakan Wawancara Terstruktur untuk Mengurangi Bias',
              teaser: 'Wawancara dengan "rasa percaya diri" yang tidak terstruktur adalah tempat di mana bias secara diam-diam masuk ke proses Anda.',
              body: 'Tentukan pertanyaan inti dan rubrik penilaian yang sama untuk setiap kandidat pada peran tertentu. Ini tidak menghilangkan nuansa, tetapi menambatkan keputusan akhir pada bukti yang dapat dibandingkan alih-alih siapa yang kebetulan memiliki basa-basi lebih baik.',
              takeaway: 'Buat satu rubrik penilaian per peran dan gunakan untuk setiap kandidat.',
            },
            {
              title: 'Kecepatan Menang: Persingkat Waktu Perekrutan',
              teaser: 'Kandidat terbaik Anda jarang berada di pasar kerja selama lebih dari dua minggu.',
              body: 'Petakan lini masa perekrutan Anda tahap demi tahap dan temukan celah terlama — biasanya penjadwalan atau persetujuan internal, bukan wawancara itu sendiri. Memperbaiki hambatan tersebut sering kali berdampak lebih besar pada tingkat penerimaan tawaran.',
              takeaway: 'Temukan satu penundaan terlama Anda dan perbaiki hal tersebut terlebih dahulu.',
            },
            {
              title: 'Jual Perannya, Bukan Hanya Perusahaannya',
              teaser: 'Kandidat sudah meriset perusahaan Anda. Yang mereka butuhkan dari Anda adalah detail perannya.',
              body: 'Pada tahap wawancara, sebagian besar kandidat telah membaca situs web, Glassdoor, dan LinkedIn Anda. Habiskan waktu wawancara untuk hal yang tidak dapat mereka temukan secara online: seperti apa minggu biasa, dengan siapa mereka bekerja, dan seperti apa kesuksesan di 90 hari pertama.',
              takeaway: 'Cadangkan 10 menit dalam setiap wawancara murni untuk kejelasan peran.',
            },
            {
              title: 'Periksa Referensi Lebih dari Sekadar Daftar Cek',
              teaser: 'Panggilan referensi yang hanya mengonfirmasi tanggal dan jabatan adalah panggilan yang sia-sia.',
              body: 'Ajukan pertanyaan terbuka seperti "apa yang ingin Anda ketahui oleh manajer berikutnya?" Ini memunculkan gaya kerja dan titik buta yang tidak pernah diverifikasi oleh referensi formal HR — dan memakan waktu 15 menit yang sama.',
              takeaway: 'Ajukan satu pertanyaan terbuka di setiap panggilan referensi, tanpa pengecualian.',
            },
          ],
        },
        {
          key: 'culture',
          label: 'Budaya & Kepemimpinan',
          intro: 'Kebiasaan kecil dan konsisten yang membentuk bagaimana perasaan orang di tempat kerja setiap hari.',
          accent: '#DC2626',
          img: '/images/tthr-culture.jpg',
          tips: [
            {
              title: 'Teladani Perilaku yang Ingin Anda Lihat',
              teaser: 'Budaya bukanlah apa yang tertulis di dinding. Ini adalah apa yang dilakukan kepemimpinan saat tidak ada yang melihat.',
              body: 'Jika Anda ingin ketepatan waktu, datanglah lebih awal. Jika Anda ingin keterbukaan, undang perbedaan pendapat di ruangan, bukan hanya di survei. Karyawan mengkalibrasi perilaku mereka terhadap tindakan aktual kepemimpinan dalam hitungan minggu.',
              takeaway: 'Pilih satu nilai dan audit 5 keputusan terakhir Anda terhadap nilai tersebut.',
            },
            {
              title: 'Jadikan Umpan Balik sebagai Kebiasaan Mingguan',
              teaser: 'Ulasan tahunan sudah terlambat untuk memperbaiki apa pun yang benar-benar penting.',
              body: 'Umpan balik yang singkat dan sering — bahkan lima menit seminggu — terakumulasi lebih cepat daripada ulasan formal setahun sekali. Ini juga menghilangkan kecemasan seputar umpan balik karena berhenti menjadi peristiwa langka.',
              takeaway: 'Blokir 15 menit setiap minggu per bawahan langsung untuk umpan balik informal.',
            },
            {
              title: 'Akui Kemenangan Kecil secara Publik',
              teaser: 'Sebagian besar program penghargaan hanya merayakan kemenangan besar yang jarang terjadi.',
              body: 'Pengakuan publik tidak memerlukan upacara penghargaan formal. Sebutan spesifik dan tepat waktu di saluran tim — menyebutkan dengan tepat apa yang seseorang lakukan dan mengapa itu penting — memperkuat perilaku jauh lebih efektif.',
              takeaway: 'Spesifik: sebutkan tindakannya, bukan hanya orangnya.',
            },
            {
              title: 'Lindungi Waktu Fokus Lintas Tim',
              teaser: 'Budaya rapat sering kali menjadi pembunuh diam-diam dari pekerjaan mendalam bernilai tinggi.',
              body: 'Tetapkan blok "tanpa rapat" di seluruh organisasi — bahkan dua jam sehari — dan pertahankan. Peningkatan produktivitas bukan hanya dari jam yang dihemat, tetapi dari karyawan yang tidak lagi memecah hari mereka di sekitar gangguan.',
              takeaway: 'Lindungi satu blok dua jam setiap hari sebagai zona bebas rapat seluruh perusahaan.',
            },
            {
              title: 'Jadikan Onboarding Perjalanan 90 Hari, Bukan Sehari',
              teaser: 'Sebagian besar onboarding berakhir setelah minggu pertama. Sebagian besar disengagement dimulai setelah minggu kedua.',
              body: 'Perpanjang titik pemeriksaan onboarding terstruktur hingga 30, 60, dan 90 hari. Di sinilah karyawan baru benar-benar membentuk opini mereka tentang budaya Anda — bukan pada hari pertama ketika semua orang bersikap terbaik.',
              takeaway: 'Jadwalkan 30/60/90 hari check-in untuk setiap karyawan baru sebelum tanggal mulai mereka.',
            },
          ],
        },
        {
          key: 'events',
          label: 'Acara & Team Building',
          intro: 'Apa yang membedakan acara perusahaan yang berkesan dari acara yang dilupakan semua orang pada hari Senin.',
          accent: '#DC2626',
          img: '/images/tthr-events.jpg',
          tips: [
            {
              title: 'Rencanakan Susunan Acara Hingga ke Detik',
              teaser: 'Acara yang terasa mudah hampir selalu yang paling ketat naskahnya.',
              body: 'Bangun susunan acara menit demi menit dan bagikan kepada setiap vendor, pembicara, dan pemangku kepentingan internal sebelumnya. Ambiguitas — bukan kurangnya anggaran — adalah penyebab paling umum dari kekacauan yang terlihat pada hari acara.',
              takeaway: 'Bagikan susunan acara Anda kepada semua pemangku kepentingan setidaknya 48 jam sebelum acara.',
            },
            {
              title: 'Pilih Tema yang Memperkuat Pesan Anda',
              teaser: 'Sebuah tema harus mengatakan sesuatu, bukan hanya terlihat bagus di spanduk.',
              body: 'Ikat tema acara Anda langsung ke prioritas perusahaan — pergeseran strategi, nilai, tonggak sejarah. Ketika tema memperkuat pesan yang sudah dikomunikasikan kepemimpinan, peserta mengingatnya jauh lebih lama.',
              takeaway: 'Tanyakan: satu pesan apa yang harus diingat orang seminggu kemudian?',
            },
            {
              title: 'Evaluasi Setiap Aktivitas Outbound, Jangan Lewatkan',
              teaser: 'Aktivitas membangun pengalaman. Evaluasi membangun pembelajaran.',
              body: 'Tanpa evaluasi terstruktur yang menghubungkan kembali aktivitas dengan perilaku tempat kerja nyata, pelatihan outbound berisiko menjadi "hanya hari bersenang-senang." Diskusi terfasilitasi 10 menit setelah setiap aktivitas adalah tempat perubahan perilaku aktual berakar.',
              takeaway: 'Jangan pernah mengakhiri aktivitas tanpa evaluasi 10 menit yang difasilitasi.',
            },
            {
              title: 'Anggarkan Ekstra 15% untuk Hal Tak Terduga',
              teaser: 'Cuaca, perubahan vendor, dan pergeseran jumlah staf menit akhir adalah norma, bukan pengecualian.',
              body: 'Penyangga kontingensi bukanlah pesimisme — ini yang memungkinkan Anda membuat keputusan cepat di bawah tekanan tanpa eskalasi keuangan di tengah acara.',
              takeaway: 'Bangun jalur kontingensi 15% ke dalam setiap anggaran acara sejak awal.',
            },
            {
              title: 'Kumpulkan Umpan Balik Saat Energi Masih Tinggi',
              teaser: 'Survei pasca-acara yang dikirim seminggu kemudian menangkap memori, bukan pengalaman.',
              body: 'Formulir umpan balik pendek 3 pertanyaan yang dikirim dalam waktu satu jam setelah acara berakhir menangkap sinyal yang jauh lebih jujur dan berguna daripada survei formal beberapa hari kemudian.',
              takeaway: 'Kirim formulir umpan balik 3 pertanyaan dalam waktu 1 jam setelah acara berakhir.',
            },
          ],
        },
      ]
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    hero: {
      eyebrow: "Tips & Tricks",
      title1: "Practical insights from",
      title2: "First HR Indonesia",
      subtitle: "consultants",
      description: "Real strategies drawn from our Executive Search, Professional Work Ethic, and Corporate Event engagements — the same expertise we bring to every client."
    },
    categories: [
      {
        key: 'recruitment',
        label: 'Recruitment & Hiring',
        intro: 'How the best teams find, evaluate, and close talent before anyone else does.',
        accent: '#DC2626',
        img: '/images/tthr-recruitment.jpg',
        tips: [
          {
            title: 'Write Job Descriptions That Attract, Not Just List',
            teaser: 'Most job posts read like a legal document. Yours should read like an invitation.',
            body: 'Lead with what the person will actually do and achieve in the role, not a wall of requirements. Replace generic phrases like "team player" with concrete outcomes — "you\'ll own onboarding for 50+ new hires per quarter." Candidates skim in seconds; give them a reason to stop.',
            takeaway: 'Cut your requirements list by a third and replace it with outcomes.',
          },
          {
            title: 'Use Structured Interviews to Reduce Bias',
            teaser: 'Unstructured "gut feel" interviews are where most bias quietly enters your process.',
            body: 'Define the same core questions and scoring rubric for every candidate in a given role. This doesn\'t remove nuance — interviewers can still probe — but it anchors the final decision to comparable evidence instead of who happened to have better small talk.',
            takeaway: 'Build one scorecard per role and use it for every candidate, every time.',
          },
          {
            title: 'Speed Wins: Shorten Your Time-to-Hire',
            teaser: 'Your best candidates are rarely on the market for more than two weeks.',
            body: 'Map your current hiring timeline stage by stage and find the longest gap — usually it\'s scheduling or internal sign-off, not the interviews themselves. Fixing that one bottleneck often does more for offer-acceptance rates than any amount of employer branding.',
            takeaway: 'Find your single longest delay and fix that one thing first.',
          },
          {
            title: 'Sell the Role, Not Just the Company',
            teaser: 'Candidates already researched your company. What they need from you is the role.',
            body: 'By the interview stage, most candidates have read your website, Glassdoor, and LinkedIn. Spend interview time on what they can\'t find online: what a typical week looks like, who they\'ll work with, and what success looks like at 90 days.',
            takeaway: 'Reserve 10 minutes in every interview purely for role clarity, not company pitch.',
          },
          {
            title: 'Check References Beyond the Checklist',
            teaser: 'A reference call that only confirms dates and titles is a wasted call.',
            body: 'Ask references open questions like "what would you want their next manager to know?" This surfaces working style and blind spots that formal HR-verified references never will — and it takes the same 15 minutes.',
            takeaway: 'Ask one open-ended question every reference call, no exceptions.',
          },
        ],
      },
      {
        key: 'culture',
        label: 'Culture & Leadership',
        intro: 'Small, consistent habits that shape how people actually feel at work every day.',
        accent: '#DC2626',
        img: '/images/tthr-culture.jpg',
        tips: [
          {
            title: 'Model the Behavior You Want to See',
            teaser: 'Culture isn\'t what\'s on the wall. It\'s what leadership does when no one\'s watching.',
            body: 'If you want punctuality, be early. If you want candor, invite disagreement in the room, not just in surveys. Employees calibrate their behavior against leadership\'s actual actions within weeks — policy documents rarely move the needle on their own.',
            takeaway: 'Pick one value and audit your own last 5 decisions against it.',
          },
          {
            title: 'Turn Feedback Into a Weekly Habit',
            teaser: 'Annual reviews are too late to fix anything that actually matters.',
            body: 'Short, frequent feedback — even five minutes weekly — compounds faster than a once-a-year formal review ever could. It also removes the anxiety around feedback, because it stops being a rare, high-stakes event.',
            takeaway: 'Block 15 minutes weekly per direct report for informal feedback.',
          },
          {
            title: 'Recognize Small Wins Publicly',
            teaser: 'Most recognition programs only celebrate the big, rare wins.',
            body: 'Public recognition doesn\'t need a formal award ceremony. A specific, timely mention in a team channel — naming exactly what someone did and why it mattered — reinforces the behavior far more effectively than a generic "great job."',
            takeaway: 'Be specific: name the action, not just the person.',
          },
          {
            title: 'Protect Focus Time Across Teams',
            teaser: 'Meeting culture is often the quiet killer of deep, high-value work.',
            body: 'Set organization-wide "no meeting" blocks — even two hours a day — and hold the line on them. The productivity gain isn\'t just from the hours saved; it\'s from employees no longer fragmenting their day around interruptions.',
            takeaway: 'Protect one two-hour block daily as a company-wide no-meeting zone.',
          },
          {
            title: 'Make Onboarding a 90-Day Journey, Not a Day',
            teaser: 'Most onboarding ends after week one. Most disengagement starts after week two.',
            body: 'Extend structured onboarding checkpoints to 30, 60, and 90 days, with a short check-in at each. This is when new hires actually form their opinion of your culture — not on day one, when everyone is on their best behavior.',
            takeaway: 'Schedule 30/60/90-day check-ins for every new hire before their start date.',
          },
        ],
      },
      {
        key: 'events',
        label: 'Events & Team Building',
        intro: 'What separates a memorable corporate event from one everyone forgets by Monday.',
        accent: '#DC2626',
        img: '/images/tthr-events.jpg',
        tips: [
          {
            title: 'Plan Your Run-of-Show Down to the Minute',
            teaser: 'The events that feel effortless are almost always the most rigorously scripted.',
            body: 'Build a minute-by-minute run-of-show and share it with every vendor, speaker, and internal stakeholder in advance. Ambiguity — not lack of budget — is the most common cause of visible chaos on event day.',
            takeaway: 'Share your run-of-show with all stakeholders at least 48 hours before the event.',
          },
          {
            title: 'Choose a Theme That Reinforces Your Message',
            teaser: 'A theme should say something, not just look nice on a banner.',
            body: 'Tie your event theme directly to a company priority — a strategy shift, a value, a milestone. When the theme reinforces the message leadership is already communicating, attendees retain it far longer than a generic "celebration" concept.',
            takeaway: 'Ask: what one message should people remember a week later?',
          },
          {
            title: 'Debrief Every Outbound Activity, Don\'t Skip It',
            teaser: 'The activity builds the experience. The debrief builds the learning.',
            body: 'Without a structured debrief connecting the activity back to real workplace behavior, outbound training risks becoming "just a fun day out." A 10-minute facilitated discussion after each activity is where the actual behavior change gets anchored.',
            takeaway: 'Never end an activity without a facilitated 10-minute debrief.',
          },
          {
            title: 'Budget 15% Extra for the Unexpected',
            teaser: 'Weather, vendor changes, and last-minute headcount shifts are the norm, not the exception.',
            body: 'A contingency buffer isn\'t pessimism — it\'s what lets you make fast decisions under pressure without a finance escalation mid-event. Events without a buffer tend to compromise on the wrong things when something inevitably shifts.',
            takeaway: 'Build a 15% contingency line into every event budget from the start.',
          },
          {
            title: 'Collect Feedback While the Energy Is Still High',
            teaser: 'Post-event surveys sent a week later capture memory, not experience.',
            body: 'A short 3-question feedback form sent within an hour of the event ending captures far more honest, useful signal than a formal survey days later — and response rates are typically much higher too.',
            takeaway: 'Send a 3-question feedback form within 1 hour of the event ending.',
          },
        ],
      },
    ]
  };
};
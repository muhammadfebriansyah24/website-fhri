'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ==========================================
// DATA KONTEN ABOUT US
// ==========================================

const valuesData = [
  {
    title: 'Ownership',
    desc: 'We act with accountability, take initiative, and turn challenges into opportunities through proactive problem solving.',
    icon: <svg className="w-6 h-6 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: 'Excellence',
    desc: 'We pursue the highest standards, continuously improve, and deliver outstanding results with passion and purpose.',
    icon: <svg className="w-6 h-6 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
  },
  {
    title: 'Trust',
    desc: 'We build lasting relationships through trust, integrity, and accountability while honoring commitments.',
    icon: <svg className="w-6 h-6 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  },
  {
    title: 'Driven to Grow',
    desc: 'We never stop learning, improving, and growing to become better every day in a dynamic landscape.',
    icon: <svg className="w-6 h-6 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  },
];

const journeyTimeline = [
  { year: '2017', title: 'Laying the Foundation', desc: 'FHRI began with a blog founded by Robby P. Tambunan, Heru, and Priadi to share insights on data-driven HR and better decision-making.' },
  { year: '2018', title: 'Releasing Our First Course', desc: 'FHRI launched its first online course, HR Analytics Leader, to help HR professionals adopt analytics within their organizations.' },
  { year: '2019-2024', title: 'Empowering HR Teams', desc: 'FHRI expanded its impact by partnering with leading organizations across industries to develop HR talent and accelerate business transformation.' },
  { year: '2025', title: 'T-Shaped HR Model', desc: 'FHRI introduced the T-Shaped HR Competency Model to redefine HR development and empower professionals.' },
  { year: '2026', title: 'Continuous Improvement', desc: 'Expanded impact by partnering with leading organizations across industries to build future-ready teams and accelerate business transformation.' },
];

// DATA TIM LENGKAP DENGAN EXECUTIVE SUMMARY
const leadershipTeam = [
  { 
    name: 'Robby P. Tambunan', 
    role: 'Chief Executive Officer', 
    image: '/1.png',
    summary: [
      "Robby Tambunan is a seasoned Human Capital and Business Transformation Executive with over 30 years of leadership experience across Human Resources, Corporate Services, Business Support, Industrial Relations, Legal, Governance, Internal Audit, HSE, and Information Technology in diverse industries, including hospitality, manufacturing, healthcare, agribusiness, logistics, mining, and outsourcing.",
      "As the Founder & Principal Consultant of First HR Indonesia, he partners with business owners, boards of directors, and executive leadership teams to align people strategies with business objectives, enabling organizational transformation, leadership excellence, and sustainable business growth.",
      "His expertise spans Human Capital Strategy, HR Transformation, Organizational Development, Talent Management, Leadership Development, Executive Coaching, HR Governance, Change Management, Executive Search, Assessment Center, Learning & Development, and Business Process Improvement. Known for combining strategic vision with practical execution, he helps organizations build high-performing teams, strengthen organizational capability, and transform human capital into a sustainable competitive advantage."
    ]
  },
  { 
    name: 'Charles Gatan', 
    role: 'Chief Operating Officer', 
    image: '/2.png',
    summary: [
      "Charles Gatan is a distinguished Learning & Organizational Development professional with more than 20 years of executive experience in Learning & Development, Quality Assurance, Organizational Development, and Service Excellence across luxury hospitality, property, telecommunications, education, and consulting industries.",
      "Renowned for building high-performance learning cultures, Charles specializes in designing and implementing integrated learning strategies that strengthen organizational capability, enhance leadership effectiveness, and elevate customer experience. His expertise encompasses Learning Strategy, Training Needs Analysis, Corporate Academy Development, Competency Frameworks, Leadership Development, Quality Assurance, Service Excellence, Organizational Development, Talent Development, Employee Engagement, and Performance Improvement.",
      "Throughout his career, he has successfully led Learning & Development and Quality Assurance functions for internationally recognized organizations, including multiple luxury hotel pre-opening projects, where he established learning systems, operational standards, service excellence frameworks, and organizational readiness that enabled successful business launches and sustainable operational performance. His experience also extends to corporate organization development, driving workforce capability, change management, and organizational effectiveness initiatives that align people strategies with business objectives.",
      "Recognized for his strategic mindset, creativity, and strong facilitation skills, Charles combines operational expertise with innovative learning methodologies to create transformative learning experiences. His engaging leadership style, coupled with exceptional communication and stakeholder management capabilities, enables him to inspire individuals, build collaborative cultures, and develop future-ready leaders across diverse business environments.",
      "Passionate about unlocking human potential, Charles believes that organizational excellence is achieved by empowering people, cultivating continuous learning, and embedding service excellence into the organization's culture. His mission is to help organizations transform learning into a strategic business capability that drives sustainable growth, strengthens competitive advantage, and delivers measurable business impact."
    ]
  },
  { 
    name: 'Yopie Bungaran Halomoan S.E., M.M.', 
    role: 'Chief Financial Officer', 
    image: '/3.png',
    summary: [
      "Yopie Bungaran Halomoan S.E., M.M. is a distinguished financial leader with over twenty years of progressive experience in corporate governance, strategic planning, and accounting leadership.",
      "Holding a Master of Management in Finance, he effectively bridges advanced financial theory with a proven track record of executive oversight. Throughout his leadership career, he successfully engineered robust corporate strategies, multi-site budgeting frameworks, and cash flow optimization initiatives that drove sustainable organizational growth.",
      "He is highly recognized for his ability to align financial objectives with corporate visions, providing boards with data-driven recommendations that enhance profitability and mitigate systemic risks.",
      "Equipped with exceptional analytical acumen and a collaborative style, he excels at building high-performing teams and managing critical regulatory relationships. His unwavering professional integrity and commitment to operational excellence make him a trusted asset for organizations seeking long-term value creation."
    ]
  },
  { 
    name: 'Hana Tiranda', 
    role: 'General Manager - Operation', 
    image: '/4.png',
    summary: [
      "Hana Tiranda is a dedicated Human Resources and Business Support professional with more than 14 years of progressive experience spanning Human Resources Administration, Employee Services, Hospitality Operations, Customer Experience, and Executive Support. Her career reflects a strong commitment to operational excellence, people-centric service, and organizational effectiveness across the hospitality and corporate sectors.",
      "With a solid foundation in hospitality operations and customer service, Hana brings a practical understanding of employee and guest experience, enabling her to deliver responsive HR support while maintaining high standards of professionalism, accuracy, and service excellence. Her expertise includes HR administration, employee onboarding, recruitment coordination, personnel records management, policy administration, employee relations support, travel coordination, executive administration, and compliance with employment regulations.",
      "Throughout her career, she has played a key role in supporting end-to-end employee lifecycle processes, strengthening HR operations, coordinating executive activities, and ensuring the smooth execution of administrative and people-related initiatives. She is recognized for her exceptional organizational skills, attention to detail, discretion in handling confidential information, and ability to build trusted relationships across all levels of the organization.",
      "Known for her collaborative mindset, adaptability, and commitment to continuous improvement, Hana consistently delivers reliable administrative and operational support that enhances organizational efficiency and employee experience. She believes that effective Human Resources begins with responsive service, strong operational discipline, and meaningful relationships that foster an engaged, productive, and high-performing workforce.",
      "As a Human Resources professional, Hana is passionate about creating organized, people-focused workplaces where operational excellence and employee well-being work together to support sustainable business success."
    ]
  },
  { 
    name: 'Paulus Sebastian', 
    role: 'Sales & Digital Marketing', 
    image: '/5.png',
    summary: [
      "Coming Soon"
    ]
  },
  { 
    name: 'Adriel Tambunan', 
    role: 'Sales & Digital Marketing', 
    image: '/6.png',
    summary: [
      "Adriel Tambunan is a Law graduate from Tarumanagara University who has developed a strong foundation in Digital Marketing through hands-on experience in content creation, social media management, and digital communication. By combining analytical thinking, creativity, and strategic planning, he develops marketing initiatives that align with business objectives and evolving market trends.",
      "His expertise includes content planning, copywriting, social media management, short-form video production, campaign execution, and performance analysis. He approaches every project with attention to detail, ensuring quality and consistency from planning through evaluation.",
      "His expertise includes content planning, copywriting, social media management, short-form video production, campaign execution, and performance analysis. He approaches every project with attention to detail, ensuring quality and consistency from planning through evaluation.",
      "Driven by curiosity and a commitment to continuous learning, he stays updated with digital trends, consumer behavior, and emerging technologies to develop relevant and effective marketing strategies. Adaptable, collaborative, and analytical, he is committed to delivering innovative digital marketing solutions that create measurable impact and support long-term business growth."
    ]
  },
  { 
    name: 'Saut Sitompul, Drs., M.Si., CEM', 
    role: 'Master Trainer, Executive Coach & Senior Facilitator', 
    image: '/7.png',
    summary: [
      "Saut Sitompul, Drs., M.Si., CEM is a distinguished Leadership Development Expert, Corporate Culture Strategist, and nationally recognized motivational speaker with extensive experience in transforming organizational performance through character-based leadership and professional work ethic development.",
      "As the creator and advocate of the 8 Professional Work Ethics Framework, he has inspired leaders and organizations to cultivate high-performance cultures by strengthening integrity, accountability, discipline, collaboration, and purpose-driven leadership. His philosophy emphasizes that sustainable organizational excellence begins with individual character, shared values, and a strong culture of ownership.",
      "Throughout his career, Saut has partnered with corporations, government institutions, educational organizations, and community leaders to design and facilitate impactful leadership development programs, culture transformation initiatives, team effectiveness workshops, and motivational seminars. His engaging facilitation style combines experiential learning, storytelling, practical business insights, and behavioral transformation techniques that inspire lasting change and measurable organizational impact.",
      "His expertise encompasses Leadership Development, Corporate Culture Transformation, Employee Engagement, Team Building, Mindset Transformation, Service Excellence, Organizational Values Internalization, Motivation, and Performance Improvement. Through these initiatives, he helps organizations build resilient teams, strengthen collaboration, enhance employee commitment, and foster a culture of continuous improvement.",
      "Widely recognized as \"Mr. Spirit,\" Saut is known for his ability to energize individuals and organizations, transforming workplace mindset into purposeful action. His mission is to help organizations build high-performing teams where strong character, professional ethics, and inspired leadership become the foundation for sustainable business success and long-term organizational excellence."
    ]
  },
  { 
    name: 'Miftakhul Ikhsan, S.T.', 
    role: 'Senior Trainer & Senior Facilitator', 
    image: '/8.png',
    summary: [
      "MiftakhulIkhsan, S.T. is an accomplished HSE and Environmental professional with more than a decade of experience in developing, implementing, and strengthening Health, Safety, and Environmental (HSE) management systems within large-scale manufacturing organizations. He is recognized for his ability to integrate regulatory compliance, operational excellence, and sustainability into practical business solutions that enhance organizational resilience and long-term performance.",
      "His expertise encompasses end-to-end HSE and environmental compliance, including environmental permitting (UKL-UPL and AMDAL), online business licensing through Indonesia's OSS Risk-Based Approach (OSS RBA), operational permits such as SIPA for generator systems, Environmental Management Systems, ISO management system integration, and comprehensive support for PROPER Blue compliance programs administered by the Ministry of Environment.",
      "With a strong understanding of Indonesian regulations and international management standards, Miftakhul partners with organizations to build robust governance frameworks, strengthen risk management, improve regulatory compliance, and foster a proactive safety culture. His approach combines technical expertise with strategic thinking, enabling businesses to transform HSE from a regulatory obligation into a driver of operational efficiency, sustainability, and competitive advantage.",
      "Committed to continuous improvement and sustainable business practices, he works closely with executive leaders and operational teams to create safer workplaces, environmentally responsible operations, and resilient organizations that are well prepared to meet evolving regulatory and stakeholder expectations."
    ]
  },
  { 
    name: 'Priadi Gunanto, S.T.', 
    role: 'Senior Trainer & Senior Facilitator', 
    image: '/9.png',
    summary: [
      "Priadi Gunanto, S.T. is a distinguished Learning and Human Capital Development professional with more than 15 years of experience in designing and leading strategic people development initiatives across diverse industries, including manufacturing, food & beverage, hospitality, logistics, shipping, consulting, and technology startups.",
      "With an academic background in Industrial Engineering, he combines analytical thinking with a deep understanding of organizational behavior to develop integrated learning solutions that enhance workforce capability, strengthen leadership pipelines, and improve business performance. His expertise spans Learning & Development, competency framework design, leadership development, performance management, corporate academy establishment, talent development, organizational capability building, and culture transformation.",
      "As a BNSP Certified Trainer, Priadi has successfully designed and implemented competency-based learning systems, leadership development frameworks, corporate culture initiatives, succession development programs, and performance enhancement strategies that enable organizations to build high-performing teams and develop future-ready leaders. His approach emphasizes aligning learning strategies with business objectives to ensure measurable organizational impact and sustainable growth.",
      "Recognized for his collaborative leadership style and practical approach, he is highly experienced in executive coaching, mentoring, experiential learning, facilitation, and cross-functional project leadership. He partners closely with business leaders to cultivate learning organizations, accelerate talent development, and create a culture of continuous improvement that drives innovation, employee engagement, and long-term organizational success.",
      "Driven by a passion for developing people and organizations, Priadibelieves that sustainable business growth is achieved by empowering individuals, strengthening leadership capability, and building learning ecosystems that transform human potential into lasting competitive advantage."
    ]
  },
  { 
    name: 'Martha Nurlia', 
    role: 'Senior Trainer & Senior Facilitator', 
    image: '/10.png',
    summary: [
      "Martha Nurlia is a seasoned Learning and Talent Development professional with more than 21 years of experience, combining extensive operational leadership in the Food & Beverage industry with deep expertise in Learning & Development. Her unique blend of operational excellence and people development enables her to design practical, business-driven learning strategies that strengthen organizational capability and enhance workforce performance.",
      "She specializes in Training Needs Analysis (TNA), learning strategy development, instructional design, competency-based development, talent management, succession planning, leadership development, and capability building. Throughout her career, she has successfully developed and implemented learning initiatives that align employee development with organizational goals, fostering high-performing teams and supporting sustainable business growth.",
      "Drawing from over a decade of hands-on operational experience, Martha possesses a strong understanding of frontline operations, customer service excellence, and workforce dynamics. This operational insight allows her to create relevant, impactful learning solutions that address real business challenges while improving employee engagement, productivity, and service quality.",
      "Known for her collaborative leadership, integrity, and exceptional interpersonal skills, she builds trusted partnerships with leaders and employees at all organizational levels. She is passionate about cultivating a culture of continuous learning, empowering individuals to reach their full potential, and developing leadership capabilities that enable organizations to thrive in an increasingly competitive and dynamic business environment.",
      "As a Learning and Human Capital professional, Martha is committed to transforming learning into a strategic business enabler—helping organizations build future-ready talent, strengthen leadership pipelines, and create lasting organizational value through continuous capability development."
    ]
  },
  { 
    name: 'Abelard Sebastian Simanjuntak, S.H.', 
    role: 'Industrial Relation Advisory', 
    image: '/11.png',
    summary: [
      "Abelard Sebastian Simanjuntak, S.H. is a highly motivated legal professional with a solid academic foundation in Civil Law and a growing specialization in Corporate, Commercial, Criminal, and Litigation Practice. Equipped with strong analytical capabilities and a commitment to professional excellence, he combines legal knowledge with practical experience to deliver well-researched, business-oriented, and solution-driven legal support.",
      "Through his professional internships at leading law firms, Abelard has developed hands-on experience in legal research, legal drafting, contract and case analysis, due diligence, and the preparation of legal documents for dispute resolution and litigation proceedings. His ability to analyze complex legal issues with precision and attention to detail enables him to contribute effectively to legal advisory and corporate compliance functions.",
      "Beyond his legal practice, Abelard has demonstrated strong leadership and organizational capabilities through his involvement in professional and academic organizations. As a Director of the Asian Law Students' Association (ALSA) Local Chapter at Universitas Jenderal Soedirman, he successfully led strategic initiatives, managed organizational development, and mentored more than 100 members, strengthening his leadership, communication, stakeholder management, and team collaboration skills.",
      "Recognized for his integrity, adaptability, and continuous learning mindset, Abelard thrives in dynamic and collaborative environments where analytical thinking, sound judgment, and professionalism are essential. He is passionate about helping organizations navigate legal complexities, strengthen governance, mitigate risks, and support sustainable business growth through practical and ethical legal solutions.",
      "Driven by a strong commitment to lifelong learning and professional development, Abelard aspires to build a distinguished career in corporate legal practice, delivering trusted legal counsel while creating long-term value for businesses and the communities they serve."
    ]
  },
  { 
    name: 'Laura Milka Valencia', 
    role: 'Talent Acquisition', 
    image: '/12.png',
    summary: [
      "Laura Milka Valencia is a psychology graduate from Universitas Diponegoro with hands-on experience in end-to-end recruitment, onboarding, and organizational development through leadership roles and HR initiatives. Throughout her undergraduate journey, she has developed practical expertise in designing recruitment systems, managing candidate sourcing and selection, and creating structured onboarding experiences that support early-stage performance and employee engagement.",
      "Her experience includes leading recruitment initiatives, screening and selecting candidates based on competency and organizational fit, and collaborating with cross-functional stakeholders to build high-performing teams. Beyond recruitment, Laura has implemented KPI-based performance evaluation systems, coordinated leadership regeneration programs and supported operational improvements that enhanced team collaboration and project outcomes.",
      "Supported by an academic foundation and On-Job-Training in Recruiting & Training Development, Laura combines analytical thinking with a people-centered approach to talent acquisition. Laura is committed to continuous learning and believes that effective people management begins with well-designed systems, meaningful collaboration, and a genuine commitment to helping individuals and organizations grow together."
    ]
  },
  { 
    name: 'Wawan Kurniawan', 
    role: 'Senior Trainer & Senior Facilitator', 
    image: '/13.png',
    summary: [
      "Wawan Kurniawan is an accomplished Learning Experience Practitioner with over 12 years of experience in designing and facilitating experiential learning programs for corporations, educational institutions, government agencies, and communities. Specializing in David Kolb's Experiential Learning Model, he transforms learning into measurable workplace performance through immersive, experience-based methodologies.",
      "As a lecturer in Experiential Learning for Special Interest Tourism, Wawan bridges academic excellence with industry practice, designing learning journeys that develop leadership, teamwork, communication, and problem-solving capabilities while driving lasting behavioral change.",
      "His expertise includes Experiential Learning Design, Leadership & Team Development, Facilitation Excellence, Outdoor & Indoor Learning Programs, Curriculum Development, and Reflection & Debriefing Methodology. Known for delivering learning experiences with clear objectives, high safety standards, and measurable business outcomes, he helps organizations build high-performing teams and future-ready talent through learning that inspires action and creates lasting organizational impact."
    ]
  },
  { 
    name: 'Muhammad Febriansyah', 
    role: 'Web Developer', 
    image: '/14.png',
    summary: [
      "Muhammad Febriansyah is an Information Systems and Technology student at Universitas Negeri Jakarta specializing in IT Support and Web Development. Equipped with high work enthusiasm and a strong professional commitment, he combines academic knowledge with practical problem-solving skills to deliver reliable, functional, and user-centric technology support.",
      "Through various technical explorations and academic projects, he has built practical experience in web application development, system troubleshooting, and IT infrastructure optimization. His analytical skills and attention to detail enable him to contribute effectively to maintaining smooth technological operations while designing responsive digital interfaces.",
      "Beyond his core technical competencies, he is actively engaged in organizational activities and collaborative campus initiatives, which has further honed his project coordination and communication skills. He is also passionate about integrating positive values into his community and professional environment, including actively advocating for keeping the surrounding environment clean and tidy.",
      "Recognized for his adaptability, strong team collaboration, and continuous learning mindset, he is dedicated to helping organizations optimize their digital workflows. He aspires to build an impactful career by providing innovative technology solutions and delivering long-term value to business operations and the broader community."
    ]
  }
];

const gallerySliderData = [
  { id: 1, title: 'Collaborative Brainstorming', image: '/herokonten2.jpg' },
  { id: 2, title: 'Expert Led Workshops', image: '/herokonten3.jpg' },
  { id: 3, title: 'HR Discussion Sessions', image: '/herokonten4.jpg' },
  { id: 4, title: 'Digital Analytics Dashboard', image: '/herokonten5.jpg' },
  { id: 5, title: 'Leadership Mentoring', image: '/herokonten6.jpg' },
  { id: 6, title: 'Team Building Activities', image: '/herokonten8.jpg' },
];

export default function AboutUsPage() {
  const [gallerySlide, setGallerySlide] = useState(0);
  const [galleryViews, setGalleryViews] = useState(3);
  const [mounted, setMounted] = useState(false);

  // State & Ref untuk Leadership Executive Summary
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);
  const thumbnailContainerRef = useRef(null); // Ref untuk mengontrol scroll thumbnail
  const activeLeader = leadershipTeam[activeLeaderIndex];

  useEffect(() => {
    setMounted(true);
    const updateViews = () => {
      const width = window.innerWidth;
      setGalleryViews(width >= 1024 ? 3 : width >= 640 ? 2 : 1);
    };
    updateViews();
    window.addEventListener('resize', updateViews);
    return () => window.removeEventListener('resize', updateViews);
  }, []);

  // Efek untuk otomatis scroll thumbnail ke posisi aktif
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumbnail = thumbnailContainerRef.current.children[activeLeaderIndex];
      if (activeThumbnail) {
        // Menggeser kontainer thumbnail agar foto yang aktif selalu berada di tengah
        activeThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeLeaderIndex]);

  const maxGallerySlide = Math.max(0, gallerySliderData.length - galleryViews);
  const nextGallery = () => setGallerySlide(prev => (prev >= maxGallerySlide ? 0 : prev + 1));
  const prevGallery = () => setGallerySlide(prev => (prev <= 0 ? maxGallerySlide : prev - 1));

  // Fungsi Navigasi Executive Profile
  const nextLeader = () => setActiveLeaderIndex((prev) => (prev === leadershipTeam.length - 1 ? 0 : prev + 1));
  const prevLeader = () => setActiveLeaderIndex((prev) => (prev === 0 ? leadershipTeam.length - 1 : prev - 1));

  if (!mounted) return null; 

  return (
    <main className="bg-[#F8FAFC] text-gray-800 overflow-hidden font-sans">
      
      {/* ============================================================
          CSS ANIMASI & CUSTOM SCROLLBAR
          ============================================================ */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradientShift 10s ease infinite; background-size: 200% 200%; }
        .animate-scale-in { animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-slide-up { animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        /* Custom Scrollbar untuk Executive Summary Text & Thumbnails */
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #DC2626; }
        
        .hide-scroll-mobile::-webkit-scrollbar { display: none; }
        .hide-scroll-mobile { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <section className="relative bg-[#00263C] text-white pt-36 pb-48 md:pt-48 md:pb-56 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#00263C] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="hidden lg:flex absolute top-40 left-[10%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl animate-float items-center gap-4 shadow-2xl z-20">
          <div className="w-12 h-12 bg-blue-500/40 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-blue-200 font-bold uppercase tracking-wider">Trusted Partner</p>
            <p className="text-white font-extrabold text-lg">500+ Companies</p>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-48 right-[10%] bg-gradient-to-br from-[#0B2A4A] to-[#00263C] border border-slate-700 p-4 rounded-2xl animate-float-reverse items-center gap-4 shadow-2xl z-20">
          <div className="flex -space-x-4">
            <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/1.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
            <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/2.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
            <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/3.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] bg-[#DC2626] flex items-center justify-center text-xs font-bold text-white z-10">+11</div>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Expert Leaders</p>
            <p className="text-xs text-slate-400">Ready to assist you</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-30">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#00263C] border border-slate-700 shadow-xl mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse"></span>
            <span className="text-xs font-bold text-slate-300 tracking-[0.25em] uppercase">About First HR Indonesia</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.1] mb-8 drop-shadow-2xl">
            One Mission, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-red-400">Endless Innovation</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Empowering organizations through strategic human capital solutions. We connect world-class strategies with Indonesia's finest professionals to shape a better world of work.
          </p>
        </div>
      </section>

      {/* ============================================================
          2. VISION & MISSION
          ============================================================ */}
      <section className="relative px-6 md:px-12 -mt-32 md:-mt-40 z-40 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.15)] border border-slate-100 transform transition-transform hover:-translate-y-2 duration-500 flex flex-col justify-center">
            <div className="w-14 h-14 bg-[#00263C] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-sm text-[#DC2626] font-bold uppercase tracking-widest mb-4">Our Vision</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#00263C] leading-tight">
              To be the most trusted Strategic Human Capital Partner.
            </h3>
          </div>

          <div className="bg-gradient-to-br from-[#0B2A4A] to-[#00263C] text-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.25)] border border-slate-700 relative overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="w-14 h-14 bg-[#DC2626] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-6">Our Mission</h2>
            <ul className="space-y-5">
              {[
                "Deliver strategic Human Capital solutions.",
                "Develop people and leadership.",
                "Build high-performing organizations.",
                "Partner with integrity and excellence."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#DC2626] mt-1 drop-shadow-md">✦</span>
                  <span className="text-slate-100 text-lg md:text-xl font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ============================================================
          3. OUR VALUES 
          ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#DC2626] font-bold text-xs tracking-[0.2em] uppercase bg-red-50 px-3 py-1.5 rounded-full inline-block">Our Core Values</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#00263C]">Values That Guide Us</h2>
            <p className="mt-4 text-slate-500 text-lg">The four pillars that define how we work, how we treat each other, and how we deliver impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuesData.map((item, idx) => (
              <div key={idx} className={`group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] transition-all duration-500 relative ${idx % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}>
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#00263C] mb-3 group-hover:text-[#DC2626] transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. EXECUTIVE PROFILE / LEADERSHIP TEAM (DYNAMIC & ANIMATED)
          ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-bold text-xs tracking-[0.2em] uppercase bg-red-50 px-3 py-1.5 rounded-full inline-block">Executive Profiles</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#00263C]">Meet The Leadership Team</h2>
            <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">Driven by experienced practitioners and thought leaders passionate about transforming the future of human resources.</p>
          </div>

          {/* Kartu Profil Utama (Master Card) dengan Background Gradien Bergerak */}
          <div className="bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50 animate-gradient-shift border border-slate-200/60 rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,38,60,0.1)] transition-all duration-500 ease-in-out relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start relative z-10">
              
              {/* KIRI: Foto & Nama (Ada Animasi saat diganti) */}
              <div key={`img-${activeLeaderIndex}`} className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left animate-scale-in">
                <div className="relative w-full max-w-[280px] lg:max-w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white mb-6">
                  <Image 
                    src={activeLeader.image} 
                    alt={activeLeader.name} 
                    fill 
                    className="object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                  <div className="absolute inset-0 bg-slate-200 flex items-center justify-center -z-10">
                    <svg className="w-20 h-20 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </div>
                </div>
                <h3 className="text-3xl font-extrabold text-[#00263C] leading-tight">{activeLeader.name}</h3>
                <p className="text-sm font-black text-[#DC2626] uppercase tracking-widest mt-2">{activeLeader.role}</p>
                <div className="w-12 h-1 bg-slate-200 mt-6 rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* KANAN: Executive Summary (Animasi Fade Slide Up bertingkat) */}
              <div key={`txt-${activeLeaderIndex}`} className="lg:col-span-8 animate-fade-slide-up">
                <h4 className="text-xl font-bold text-[#0B2A4A] mb-6 flex items-center gap-2 justify-center lg:justify-start">
                  <svg className="w-5 h-5 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Executive Summary
                </h4>
                
                {/* Text Container dengan custom scrollbar */}
                <div className="h-[340px] md:h-[380px] overflow-y-auto pr-2 md:pr-4 custom-scrollbar text-slate-600 leading-relaxed text-[15px] md:text-base text-justify space-y-5">
                  {activeLeader.summary.map((paragraph, index) => (
                    <p 
                      key={index} 
                      className="animate-fade-slide-up opacity-0" 
                      style={{ animationDelay: `${index * 0.15}s` }} // Efek muncul satu per satu
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigasi Lingkaran Kecil (Thumbnail Track) yang otomatis bergeser */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center">
              <button onClick={prevLeader} className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-[#00263C] hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] transition-all">
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
              </button>

              {/* THUMBNAIL TRACK BISA DI-SCROLL & OTOMATIS BERGESER */}
              <div 
                ref={thumbnailContainerRef}
                className="flex overflow-x-auto gap-3 py-4 px-2 max-w-[260px] sm:max-w-[400px] md:max-w-2xl lg:max-w-3xl custom-scrollbar hide-scroll-mobile scroll-smooth"
              >
                {leadershipTeam.map((leader, index) => (
                  <button 
                    key={index} 
                    onClick={() => setActiveLeaderIndex(index)} 
                    className={`relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden border-4 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${index === activeLeaderIndex ? 'border-[#DC2626] scale-110 shadow-lg' : 'border-white opacity-60 hover:opacity-100 hover:scale-105'}`}
                    aria-label={`View profile of ${leader.name}`}
                  >
                    <Image src={leader.image} alt={leader.name} fill className="object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center -z-10 text-xs">👤</div>
                  </button>
                ))}
              </div>

              <button onClick={nextLeader} className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-[#00263C] hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] transition-all">
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>

            <div className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase">
              {activeLeaderIndex + 1} / {leadershipTeam.length}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          5. THE FHRI JOURNEY (Timeline)
          ============================================================ */}
      <section className="bg-[#F8FAFC] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#00263C] leading-tight">Our Journey</h2>
            <p className="mt-4 text-slate-500 text-lg">9 Years. One Mission. Endless Innovation.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {journeyTimeline.map((item, idx) => (
              <div key={idx} className="group bg-white border border-slate-200 p-6 rounded-[2rem] hover:bg-[#00263C] transition-colors duration-500 flex flex-col shadow-sm">
                <h3 className="text-4xl font-black text-slate-200 group-hover:text-[#DC2626] transition-colors duration-500 mb-4">{item.year}</h3>
                <h4 className="text-lg font-bold text-[#00263C] group-hover:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. BEHIND THE SCENES GALLERY 
          ============================================================ */}
      <section className="bg-[#00263C] py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[#DC2626] font-bold text-xs tracking-[0.2em] uppercase inline-block">Gallery</span>
              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-white tracking-tight">Behind The Scenes</h2>
              <p className="mt-4 text-slate-300 text-lg">Step into the vibrant world of First HR Indonesia.</p>
            </div>
            <div className="flex gap-3 justify-center md:justify-end">
              <button onClick={prevGallery} className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={nextGallery} className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-4 md:gap-6"
                style={{ transform: `translateX(-${gallerySlide * (100 / galleryViews)}%)` }}
              >
                {gallerySliderData.map((slide) => (
                  <div key={slide.id} className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] shrink-0 aspect-[4/3] md:aspect-[16/10] relative rounded-[2rem] overflow-hidden group">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A4A] to-slate-900 flex flex-col items-center justify-center -z-10">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-3">
                         <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                      <span className="text-[#DC2626] text-[10px] font-black uppercase tracking-widest mb-2">FHRI Moment</span>
                      <h4 className="text-white font-bold text-lg md:text-xl leading-snug">{slide.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          7. CTA FOOTER
          ============================================================ */}
      <section className="bg-[#DC2626] text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Partner With The Best</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Discover how First HR Indonesia can elevate your organizational capability and drive sustainable business growth.</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 bg-white text-[#DC2626] font-extrabold px-10 py-4 rounded-full transition-transform hover:scale-105 shadow-xl uppercase tracking-wider text-sm">
            Join Us
          </Link>
        </div>
      </section>

    </main>
  );
}
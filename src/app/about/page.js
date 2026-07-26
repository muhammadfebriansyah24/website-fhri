'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTA from '@/components/CTA'; // <-- Import komponen CTA

// ==========================================
// 1. DATA KONTEN ABOUT US
// ==========================================

const valuesData = [
  {
    title: 'Ownership',
    desc: 'We act with accountability, take initiative, and turn challenges into opportunities through proactive problem solving.',
    icon: <svg className="w-6 h-6 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: 'Excellence',
    desc: 'We pursue the highest standards, continuously improve, and deliver outstanding results with passion and purpose.',
    icon: <svg className="w-6 h-6 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
  },
  {
    title: 'Trust',
    desc: 'We build lasting relationships through trust, integrity, and accountability while honoring commitments.',
    icon: <svg className="w-6 h-6 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  },
  {
    title: 'Driven to Grow',
    desc: 'We never stop learning, improving, and growing to become better every day in a dynamic landscape.',
    icon: <svg className="w-6 h-6 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  },
];

const journeyTimeline = [
  { year: '2017', title: 'Laying the Foundation', desc: 'FHRI began with a blog founded by Robby P. Tambunan, Heru, and Priadi to share insights on data-driven HR and better decision-making.' },
  { year: '2018', title: 'Releasing Our First Course', desc: 'FHRI launched its first online course, HR Analytics Leader, to help HR professionals adopt analytics within their organizations.' },
  { year: '2019-2024', title: 'Empowering HR Teams', desc: 'FHRI expanded its impact by partnering with leading organizations across industries to develop HR talent and accelerate business transformation.' },
  { year: '2025', title: 'T-Shaped HR Model', desc: 'FHRI introduced the T-Shaped HR Competency Model to redefine HR development and empower professionals.' },
  { year: '2026', title: 'Continuous Improvement', desc: 'Expanded impact by partnering with leading organizations across industries to build future-ready teams and accelerate business transformation.' },
];

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
      "Miftakhul Ikhsan, S.T. is an accomplished HSE and Environmental professional with more than a decade of experience in developing, implementing, and strengthening Health, Safety, and Environmental (HSE) management systems within large-scale manufacturing organizations. He is recognized for his ability to integrate regulatory compliance, operational excellence, and sustainability into practical business solutions that enhance organizational resilience and long-term performance.",
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
      "Driven by a passion for developing people and organizations, Priadi believes that sustainable business growth is achieved by empowering individuals, strengthening leadership capability, and building learning ecosystems that transform human potential into lasting competitive advantage."
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

// ==========================================
// 2. BAGIAN KOMPONEN (SECTIONS)
// ==========================================

function CustomStyles() {
  return (
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(1.5deg); }
      }
      @keyframes float-reverse {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(-1.5deg); }
      }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.97); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
      .animate-gradient-shift { animation: gradientShift 12s ease infinite; background-size: 200% 200%; }
      .animate-scale-in { animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      .animate-fade-slide-up { animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      
      /* Custom Scrollbar */
      .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #DC2626; }
      
      .hide-scroll-mobile::-webkit-scrollbar { display: none; }
      .hide-scroll-mobile { -ms-overflow-style: none; scrollbar-width: none; }
    `}} />
  );
}

function HeroSection() {
  return (
    <section className="relative bg-brand-navy text-white pt-32 pb-44 md:pt-44 md:pb-48 px-6 md:px-12 overflow-hidden flex items-center min-h-[90vh]">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-navy/50 to-brand-navy z-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-red/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-30 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        {/* KIRI: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl mb-6 lg:mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse"></span>
            <h5 className="font-bold text-slate-200 tracking-[0.2em] uppercase text-xs">About First HR Indonesia</h5>
          </div>
          
          <h1 className="text-white mb-6 drop-shadow-2xl text-4xl md:text-5xl lg:text-6xl leading-tight">
            One Mission, <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">Endless Innovation</span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-md mb-8">
            Empowering organizations through strategic human capital solutions. We connect world-class strategies with Indonesia&apos;s finest professionals to shape a better world of work.
          </p>

          {/* TOMBOL DOWNLOAD COMPANY PROFILE & EXPERT LEADERS */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6">
            
            {/* Tombol Download PPT */}
            <a 
              href="/company-profile.pptx" 
              download="FHRI-Company-Profile.pptx"
              className="inline-flex items-center gap-3 bg-brand-red hover:bg-red-700 text-white px-7 py-4 rounded-2xl font-bold text-sm transition-all duration-300 shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:-translate-y-1 uppercase tracking-wider"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Profile (PPT)
            </a>

            {/* Kotak Expert Leaders */}
            <div className="bg-gradient-to-br from-[#0B2A4A] to-brand-navy border border-slate-700/50 p-3.5 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/1.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
                <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/2.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
                <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/3.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] bg-brand-red flex items-center justify-center text-[11px] font-bold text-white z-10">+11</div>
              </div>
              <div className="text-left pr-3">
                <p className="text-white font-bold text-sm">Expert Leaders</p>
                <p className="text-xs text-slate-400 mt-0.5">Ready to assist you</p>
              </div>
            </div>

          </div>
        </div>

        {/* KANAN: Video Container */}
        <div className="w-full lg:w-1/2 relative group mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-brand-red/20 blur-3xl rounded-full scale-105 pointer-events-none transition-colors duration-700"></div>
          <div className="relative rounded-[2rem] overflow-hidden border-[6px] border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] aspect-[4/3] lg:aspect-video bg-black z-10">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
              src="/company-profile.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section className="relative px-6 md:px-12 -mt-20 md:-mt-24 z-40 pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.1)] border border-slate-100 transform transition-transform hover:-translate-y-2 duration-500 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10"></div>
          <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-navy/20">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </div>
          <h6 className="text-brand-red mb-4">Our Vision</h6>
          <h2 className="text-brand-navy text-3xl md:text-4xl leading-tight font-medium">
            To be the most trusted Strategic Human Capital Partner.
          </h2>
        </div>

        <div className="bg-gradient-to-br from-[#0B2A4A] to-brand-navy text-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.25)] border border-slate-700 relative overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-red/30 relative z-10">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h6 className="text-slate-400 mb-6 relative z-10">Our Mission</h6>
          <ul className="space-y-5 relative z-10">
            {[
              "Deliver strategic Human Capital solutions.",
              "Develop people and leadership.",
              "Build high-performing organizations.",
              "Partner with integrity and excellence."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-brand-red mt-1 drop-shadow-md text-xl">✦</span>
                <span className="text-slate-100 text-lg md:text-xl font-normal leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

function CoreValuesSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-eyebrow gradient-gold text-white px-5 py-2 rounded-full inline-block shadow-sm">
            Our Core Values
          </span>
          <h2 className="mt-6 mb-4 text-brand-navy font-bold text-3xl md:text-4xl">Values That Guide Us</h2>
          <p className="text-slate-600 text-lg">The four pillars that define how we work, how we treat each other, and how we deliver impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((item, idx) => (
            <div key={idx} className={`group bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] transition-all duration-500 relative ${idx % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-red/5 transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="mb-3 group-hover:text-brand-red transition-colors text-brand-navy font-bold text-xl">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecutiveProfilesSection() {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);
  const thumbnailContainerRef = useRef(null);
  const activeLeader = leadershipTeam[activeLeaderIndex];

  // 👇 GANTI BAGIAN USE EFFECT INI 👇
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const activeThumbnail = container.children[activeLeaderIndex];
      
      if (activeThumbnail) {
        // Menghitung posisi scroll agar thumbnail selalu di tengah 
        // secara horizontal tanpa menarik halaman ke bawah (vertikal)
        const scrollPos = activeThumbnail.offsetLeft - (container.clientWidth / 2) + (activeThumbnail.clientWidth / 2);
        
        container.scrollTo({ 
          left: scrollPos, 
          behavior: 'smooth' 
        });
      }
    }
  }, [activeLeaderIndex]);

  const nextLeader = () => setActiveLeaderIndex((prev) => (prev === leadershipTeam.length - 1 ? 0 : prev + 1));
  const prevLeader = () => setActiveLeaderIndex((prev) => (prev === 0 ? leadershipTeam.length - 1 : prev - 1));

  return (
    <section className="py-28 px-6 md:px-12 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
          <span className="text-eyebrow gradient-gold text-white px-5 py-2 rounded-full inline-block mb-4 shadow-sm">
            Executive Profiles
          </span>
          <h2 className="text-brand-navy font-bold text-3xl md:text-4xl">Meet The Leadership Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">Driven by experienced practitioners and thought leaders passionate about transforming the future of human resources.</p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 animate-gradient-shift border border-slate-200/80 rounded-[3rem] p-8 md:p-12 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,38,60,0.08)] transition-all duration-500 ease-in-out relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10">
            <div key={`img-${activeLeaderIndex}`} className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left animate-scale-in">
              <div className="relative w-full max-w-[260px] lg:max-w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-navy/10 border-[6px] border-white mb-8">
                <Image 
                  src={activeLeader.image} alt={activeLeader.name} fill 
                  className="object-cover transition-opacity duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center -z-10">
                  <svg className="w-16 h-16 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
              </div>
              <h3 className="text-brand-navy text-2xl font-bold font-sans">{activeLeader.name}</h3>
              <p className="text-brand-red font-bold uppercase tracking-widest text-xs mt-3">{activeLeader.role}</p>
              <div className="w-12 h-1 bg-slate-200 mt-6 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div key={`txt-${activeLeaderIndex}`} className="lg:col-span-8 animate-fade-slide-up">
              <h4 className="text-brand-navy mb-6 flex items-center gap-3 justify-center lg:justify-start font-bold text-xl font-sans">
                <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Executive Summary
              </h4>
              <div className="h-[340px] md:h-[400px] overflow-y-auto pr-3 md:pr-6 custom-scrollbar text-justify space-y-5 font-sans">
                {activeLeader.summary.map((paragraph, index) => (
                  <p key={index} className="animate-fade-slide-up opacity-0 text-slate-600 leading-relaxed text-[15px]" style={{ animationDelay: `${index * 0.12}s` }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col lg:flex-row items-center justify-between gap-6 px-4">
          <div className="flex items-center gap-3 md:gap-5 w-full justify-center">
            <button onClick={prevLeader} className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
            </button>

            <div ref={thumbnailContainerRef} className="flex overflow-x-auto gap-4 py-4 px-2 max-w-[250px] sm:max-w-[450px] md:max-w-xl custom-scrollbar hide-scroll-mobile scroll-smooth">
              {leadershipTeam.map((leader, index) => (
                <button 
                  key={index} onClick={() => setActiveLeaderIndex(index)} 
                  className={`relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden border-[3px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${index === activeLeaderIndex ? 'border-brand-red scale-110 shadow-md' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'}`}
                >
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-slate-200 flex items-center justify-center -z-10 text-xs">👤</div>
                </button>
              ))}
            </div>

            <button onClick={nextLeader} className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
          <div className="text-xs font-bold text-slate-400 tracking-widest uppercase lg:shrink-0 hidden lg:block">
            {activeLeaderIndex + 1} / {leadershipTeam.length}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyTimelineSection() {
  return (
    <section className="bg-slate-50 py-24 px-6 md:px-12 relative overflow-hidden pb-32">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-red font-bold text-xs tracking-[0.25em] uppercase border border-brand-red/20 bg-brand-red/5 px-4 py-1.5 rounded-full inline-block mb-6">
            The FHRI Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight font-sans">
            9 Years. One Mission. <br className="hidden sm:block"/> Endless Innovation.
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A brief timeline of our milestone moments in advancing HR practices and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {journeyTimeline.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-[2rem] flex flex-col justify-between hover:border-brand-red/40 hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.08)] transition-all duration-500 group">
              <div>
                <span className="inline-block bg-slate-100 text-brand-navy font-bold text-sm px-4 py-1.5 rounded-lg mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 origin-left">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-brand-navy mb-4 leading-snug font-sans group-hover:text-brand-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [gallerySlide, setGallerySlide] = useState(0);
  const [galleryViews, setGalleryViews] = useState(3);
  
  useEffect(() => {
    const updateViews = () => {
      const width = window.innerWidth;
      setGalleryViews(width >= 1024 ? 3 : width >= 640 ? 2 : 1);
    };
    updateViews();
    window.addEventListener('resize', updateViews);
    return () => window.removeEventListener('resize', updateViews);
  }, []);

  const maxGallerySlide = Math.max(0, gallerySliderData.length - galleryViews);
  const nextGallery = () => setGallerySlide(prev => (prev >= maxGallerySlide ? 0 : prev + 1));
  const prevGallery = () => setGallerySlide(prev => (prev <= 0 ? maxGallerySlide : prev - 1));

  return (
    // Padding bottom dikurangi dari pb-32 menjadi pb-12 agar mulus menyambung ke CTA
    <section className="bg-brand-navy pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] -mt-16 relative z-20 shadow-[0_-20px_50px_rgba(0,38,60,0.15)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-14 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-eyebrow text-brand-red inline-block mb-3">Gallery</span>
            <h2 className="text-white font-bold text-3xl md:text-4xl">Behind The Scenes</h2>
            <p className="mt-4 text-slate-400 text-lg">Step into the vibrant world of First HR Indonesia.</p>
          </div>
          <div className="flex gap-4 justify-center md:justify-end">
            <button onClick={prevGallery} className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all shadow-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={nextGallery} className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all shadow-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* BUNGKUSAN GALERI DIBEBASKAN (TIDAK ADA LAGI SHADOW-2XL & ROUNDED BOX RAKSASA) */}
        <div className="relative">
          {/* overflow-visible pada kontainer luar agar bayangan kartu tidak terpotong */}
          <div className="overflow-hidden"> 
            <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6" style={{ transform: `translateX(-${gallerySlide * (100 / galleryViews)}%)` }}>
              {gallerySliderData.map((slide) => (
                <div key={slide.id} className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] shrink-0 aspect-[4/3] md:aspect-[5/4] relative rounded-[2rem] overflow-hidden group border border-slate-700/50 shadow-xl">
                  <Image src={slide.image} alt={slide.title} fill className="object-cover group-hover:scale-110 transition duration-700" onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A4A] to-slate-900 flex flex-col items-center justify-center -z-10">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-3">
                       <svg className="w-8 h-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-brand-red text-[11px] font-bold uppercase tracking-widest mb-2 font-sans">FHRI Moment</span>
                    <h4 className="text-white font-bold text-lg md:text-xl font-sans">{slide.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. MAIN PAGE EXPORT
// ==========================================

export default function AboutUsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <main className="bg-slate-50 font-sans overflow-hidden selection:bg-brand-red selection:text-white">
      <CustomStyles />
      <HeroSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <ExecutiveProfilesSection />
      <JourneyTimelineSection />
      <GallerySection />
      <CTA />
    </main>
  );
}
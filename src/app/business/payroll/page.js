'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PayrollOutsourcing() {
  // ==========================================
  // STATE & DATA UNTUK TESTIMONIAL SLIDER
  // ==========================================
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      quote: '"FHRI\'s HRIS helped our HR team transform from an operational function to a strategic partner. The impact is felt directly across the business."',
      name: 'Jane Doe',
      role: 'HR Director, Tech Innovators',
    },
    {
      quote: '"Highly recommended! This system provides incredible insights and is highly applicable to today\'s HR data management challenges."',
      name: 'John Smith',
      role: 'Head of People, GrowthCorp',
    },
    {
      quote: '"The features are comprehensive and very user-friendly. Our team immediately experienced increased efficiency in daily administrative processes."',
      name: 'Sarah Williams',
      role: 'VP of Human Resources, Nexus Inc',
    },
    {
      quote: '"The transformation brought by this platform is significant in how we manage talent and employee performance in real-time."',
      name: 'Michael Chen',
      role: 'Talent Acquisition Lead, Synergy',
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // ==========================================
  // DATA UNTUK ZIG-ZAG FEATURES (4 BLOK)
  // ==========================================
  const zigZagFeatures = [
    {
      title: "HR Strategy Facilitation",
      desc: "Align HR strategy with company business goals to ensure sustainable and targeted growth.",
      icon: "1",
      bullets: [
        "Ensure strategy aligns with vision and mission.",
        "Optimize individual and team performance.",
        "Strategic alignment for future readiness."
      ],
      imgPlaceholder: (
        <Image
          src="/herokonten3.jpg"
          alt="HR Strategy Facilitation"
          width={1200}
          height={800}
        />
      )
    },
    {
      title: "Operating Model Design",
      desc: "Efficient operating model design to increase productivity and overall employee work satisfaction.",
      icon: "2",
      bullets: [
        "Assess the effectiveness of organizational structure.",
        "Establish clearer and more directed workflows.",
        "Enhance overall operational efficiency."
      ],
      imgPlaceholder: (
        <Image
          src="/herokonten5.jpg"
          alt="Operating Model Design"
          width={1200}
          height={800}
        />
      )
    },
    {
      title: "HR Strategy Facilitation",
      desc: "Align HR strategy with company business goals to ensure sustainable and targeted growth.",
      icon: "3",
      bullets: [
        "Ensure strategy aligns with vision and mission.",
        "Optimize individual and team performance.",
        "Strategic alignment for future readiness."
      ],
      imgPlaceholder: (
        <Image
          src="/herokonten3.jpg"
          alt="HR Strategy Facilitation"
          width={1200}
          height={800}
        />
      )
    },
    {
      title: "Operating Model Design",
      desc: "Efficient operating model design to increase productivity and overall employee work satisfaction.",
      icon: "4",
      bullets: [
        "Assess the effectiveness of organizational structure.",
        "Establish clearer and more directed workflows.",
        "Enhance overall operational efficiency."
      ],
      imgPlaceholder: (
        <Image
          src="/herokonten5.jpg"
          alt="Operating Model Design"
          width={1200}
          height={800}
        />
      )
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      
      {/* SECTION 1: HERO SECTION (NEW DESIGN) */}
      <section className="bg-[#00263C] pt-24 pb-24 px-6 md:px-12 flex items-center min-h-[85vh]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
          
          {/* Left Side: Text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
              Transform Your <br />
              HR Operations <br />
              with Advanced <br />
              HRIS
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-md font-light mt-4">
              Bridge the gap between vision and reality. Ensure your 
              transformation plans work in the real world not just on paper 
              with a focus on the people who bring it to life.
            </p>
            <div className="pt-4">
              <button className="bg-[#D34141] hover:bg-red-700 transition duration-300 text-white px-6 py-3 rounded-md font-semibold tracking-wide">
                Request an HRIS Demo
              </button>
            </div>
          </div>

          {/* Right Side: Image with Frame & Floating Badge */}
          <div className="md:w-1/2 w-full mt-12 md:mt-0 relative">
            {/* Thick Frame */}
            <div className="bg-[#E6E8EA] p-2.5 md:p-3.5 rounded-2xl w-full shadow-2xl relative ml-auto max-w-[600px]">
              
              {/* Image Container Placeholder */}
              <div className="bg-slate-300 w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden flex items-center justify-center text-slate-500 relative">
                <Image
                  src="/herokonten6.jpg"
                  alt="HRIS Dashboard"
                  width={1200}
                  height={800}
                  className="object-cover"
                />
              </div>

              {/* Floating Badge (Efficiency Increase) */}
              <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white/95 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-xl p-3 md:p-4 flex items-center gap-4">
                <div className="bg-[#00263C] text-white p-2.5 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-[11px] text-gray-500 font-medium">Efficiency Increase</p>
                  <p className="text-lg md:text-xl font-black text-[#00263C]">+45%</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CORE HRIS MODULES */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#00263C] mb-4">Core HRIS Modules</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Reliable solutions for all your HR needs, specifically designed for operational ease and accuracy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ), 
                title: 'Employee Mgmt', 
                desc: 'Centralized database for secure, accessible, and organized personnel records.' 
              },
              { 
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ), 
                title: 'Payroll Integration', 
                desc: 'Seamless, accurate payroll processing synchronized with attendance data.' 
              },
              { 
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), 
                title: 'Time & Attendance', 
                desc: 'Automated tracking, scheduling, and leave management for optimal coverage.' 
              },
              { 
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ), 
                title: 'Analytics', 
                desc: 'Data-driven insights to monitor performance, turnover, and workforce trends.' 
              }
            ].map((module, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-[#00263C] rounded-[1.25rem] flex items-center justify-center mb-6 shadow-md">
                  {module.icon}
                </div>
                <h3 className="font-bold text-xl text-[#00263C] mb-3">{module.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ZIG-ZAG FEATURE SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {zigZagFeatures.map((feature, index) => (
            <div key={index} className={`flex flex-col items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Text Side */}
              <div className="md:w-1/2 space-y-6">
                <div className="w-12 h-12 bg-[#00263C] rounded-lg flex items-center justify-center shadow-md">
                   <span className="text-white font-bold">{feature.icon}</span>
                </div>
                <h2 className="text-3xl font-extrabold text-[#00263C]">{feature.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
                <ul className="space-y-4 pt-2">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-gray-600 font-medium">
                      <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href="#" className="inline-block text-red-600 font-bold hover:text-red-700 mt-4 transition-colors">
                  Learn More →
                </Link>
              </div>
              
              {/* Image Side */}
              <div className="md:w-1/2 w-full">
                <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center text-gray-400">
                  {feature.imgPlaceholder}
                </div>
              </div>

            </div>
          ))}

          <div className="pt-8 text-center flex justify-center">
             <button className="bg-red-600 hover:bg-red-700 transition text-white px-10 py-4 rounded-full font-bold shadow-lg">
               Book a Strategic Consultation
             </button>
          </div>

        </div>
      </section>

      {/* SECTION 4: TESTIMONIAL SLIDER */}
      <section className="bg-white py-24 px-4 md:px-8 flex flex-col items-center justify-center text-center border-t border-gray-100">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 md:gap-8">
          
          <button 
            onClick={prevSlide}
            className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#00263C] hover:bg-gray-50 hover:text-red-600 transition-all cursor-pointer focus:outline-none"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testi, index) => (
                <div key={index} className="w-full shrink-0 flex flex-col items-center justify-center px-2 md:px-6">
                  
                  {/* ICON KUTIPAN BARU */}
                  <div className="mb-8">
                    <svg className="w-12 h-12 text-[#FF6B6B] mx-auto opacity-90" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
                    </svg>
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium text-[#00263C] max-w-3xl mb-8 leading-relaxed mx-auto">
                    {testi.quote}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[#00263C] font-extrabold text-sm mb-1">{testi.name}</h4>
                    <p className="text-gray-500 text-sm">{testi.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#00263C] hover:bg-gray-50 hover:text-red-600 transition-all cursor-pointer focus:outline-none"
            aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ease-in-out cursor-pointer focus:outline-none ${
                activeSlide === index ? 'w-8 bg-red-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA CARD */}
      <section className="bg-gray-50 py-24 px-4 md:px-8 pb-32">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] bg-[#00263C]">
            
            <div className="md:w-5/12 min-h-[300px] md:min-h-[480px] bg-slate-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="HR Professional" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-7/12 p-10 md:p-20 flex flex-col justify-center relative">
              <div className="absolute top-0 bottom-0 left-[60%] w-32 bg-white/5 skew-x-12 hidden md:block"></div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight relative z-10">
                Find the Right Path <br className="hidden md:block"/>
                for Your HR Team
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-10 leading-relaxed relative z-10 max-w-lg">
                Develop your team with the right HRIS system. FHRI offers solutions specifically designed to support your company's growth and operational efficiency.
              </p>
              
              <button className="bg-red-600 hover:bg-red-700 transition text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-lg w-max flex items-center gap-2 relative z-10 shadow-lg">
                BOOK A CALL
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
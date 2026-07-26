'use client';

import React, { useState } from 'react';

function ModernEyebrow({ children, color }) {
  return (
    <span
      className="text-eyebrow block"
      style={color ? { color } : undefined}
    >
      {children}
    </span>
  );
}


// DATA

const CATEGORIES = [
  {
    key: 'recruitment',
    label: 'Recruitment & Hiring',
    intro: 'How the best teams find, evaluate, and close talent before anyone else does.',
    accent: '#DC2626',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop',
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
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
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
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
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
];


function TipRow({ tip, accent, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200/80 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 md:gap-7 text-left py-6 md:py-7 cursor-pointer group"
      >
        <span
          className="text-index mt-1 shrink-0 transition-colors duration-500"
          style={{ color: isOpen ? accent : 'var(--color-slate-400)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1">
          {/* H4 langsung memanggil aturan tipografi dasar */}
          <h4 className="transition-colors duration-500">
            {tip.title}
          </h4>
          <p className={`text-teaser mt-1.5 max-w-xl transition-all duration-500 ${isOpen ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            {tip.teaser}
          </p>
        </div>
        <span
          className="shrink-0 mt-1 text-gold-base transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)' }}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pl-[2.25rem] md:pl-[3.25rem] pb-7 pr-4 max-w-2xl">
            {/* Paragraf otomatis bersih */}
            <p>{tip.body}</p>
            <p className="text-takeaway mt-4" style={{ color: accent }}>
              {tip.takeaway}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


// CATEGORY BLOCK — large image + editorial heading + tip rows

function CategoryBlock({ cat, idx, openKey, toggle }) {
  const reverse = idx % 2 === 1;
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-16 items-start`}>
      {/* Large editorial image with hover scale */}
      <div className="w-full md:w-2/5 md:sticky md:top-24">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cat.img}
            alt={cat.label}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 40%, ${cat.accent}40 100%)` }} />
        </div>
      </div>

      {/* Text + tip rows */}
      <div className="w-full md:w-3/5">
  
        <h3 style={{ color: cat.accent }}>
          {String(idx + 1).padStart(2, '0')}. {cat.label}
        </h3>
        
        <h2 className="mt-5 md:mt-6 max-w-md">
          {cat.intro}
        </h2>

        <div className="mt-8 md:mt-10">
          {cat.tips.map((tip, i) => {
            const key = `${cat.key}-${i}`;
            return (
              <TipRow
                key={key}
                tip={tip}
                accent={cat.accent}
                index={i}
                isOpen={openKey === key}
                onToggle={() => toggle(key)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}


// MAIN PAGE

export default function TipsAndTricks() {
  const [openKey, setOpenKey] = useState('recruitment-0');

  const toggle = (key) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <main className="min-h-screen bg-white text-brand-navy">

      {/* HERO  */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"
            alt="Calm, focused workplace"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/75" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 px-6 md:px-12">
            <span className="text-eyebrow text-brand-red">Tips &amp; Tricks</span>
            {/* Hanya menyisakan text-white dan margin karena H1 sudah diatur terpusat */}
            <h1 className="mt-5 md:mt-6 text-white text-balance">
                Practical insights from{' '} 
                <br className="hidden md:block" />
                First HR Indonesia consultants
            </h1>
            <p className="mt-8 md:mt-10 text-slate-300 max-w-xl mx-auto">
            Real strategies drawn from our Executive Search, Professional Work Ethic, and Corporate Event engagements — the same expertise we bring to every client.
            </p>
        </div>

        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400 z-10">
          Scroll
          <span className="w-px h-10 bg-white/20" />
        </div>
      </section>

      {/*CATEGORY BLOCKS */}
      <section className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col divide-y divide-slate-100">
          {CATEGORIES.map((cat, idx) => (
            <div key={cat.key} className="py-20 md:py-28">
              <CategoryBlock cat={cat} idx={idx} openKey={openKey} toggle={toggle} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA  */}
      <section className="px-6 md:px-12 py-24 md:py-36 bg-brand-offwhite">
        <div className="max-w-2xl mx-auto text-center">
          {/* Memberikan warna khusus jika tidak ingin menggunakan merah bawaan eyebrow */}
          <ModernEyebrow className="text-brand-red">Ready to Put This Into Practice?</ModernEyebrow>
          
          <h2 className="mt-5 md:mt-6 text-balance">
            From hiring the right people to
            <br />
            building the culture around them
          </h2>
          <p className="mt-5 max-w-md mx-auto">
            FHRI&apos;s Executive Search, Professional Work Ethic, and Corporate Event consultants can help you apply the right program for your organization.
          </p>
          <a
            href="#cta"
            className="group inline-flex items-center gap-4 bg-brand-navy text-white pl-7 pr-3 py-3 rounded-full font-bold text-sm mt-9 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-brand-red active:scale-[0.97]"
          >
            Consult Our Experts
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </section>

    </main>
  );
}
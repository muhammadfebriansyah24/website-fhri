'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    quote:
      'FHRI membantu tim HR kami bertransformasi dari fungsi operasional menjadi mitra strategis. Dampaknya terasa langsung pada bisnis.',
    name: '[Full Name]',
    role: '[Job Title], [Company Name]',
  },
  {
    quote:
      'Program dari FHRI sangat aplikatif. Tim kami langsung bisa menerapkan strategi rekrutmen baru dalam hitungan minggu.',
    name: '[Full Name]',
    role: '[Job Title], [Company Name]',
  },
  {
    quote:
      'Materi HR Analytics benar-benar mengubah cara kami mengambil keputusan berbasis data. Sangat direkomendasikan.',
    name: '[Full Name]',
    role: '[Job Title], [Company Name]',
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-red-400 text-4xl font-serif leading-none">&ldquo;</span>
        <p className="text-xl md:text-2xl font-bold italic text-blue-950 leading-relaxed mt-2">
          &ldquo;{current.quote}&rdquo;
        </p>
        <p className="mt-8 font-bold text-blue-950">{current.name}</p>
        <p className="text-gray-500 text-sm">{current.role}</p>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name + i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === active ? 'w-7 bg-red-600' : 'w-2.5 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

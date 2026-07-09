import Hero from '@/components/Hero';
import Quote from '@/components/Quote';
import Programs from '@/components/Programs';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Quote />
      <Programs />
      <Testimonial />
      <CTA />
    </main>
  );
}

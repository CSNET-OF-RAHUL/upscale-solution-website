
'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import WhyBusinessCentral from './components/WhyBusinessCentral';
import Services from './components/Services';
import WhyUpscale from './components/WhyUpscale';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Hero />
      <WhyBusinessCentral />
      <Services />
      <WhyUpscale />
      <section className="py-24 bg-gray-950 text-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    {/* CEO Image - Rectangular with rounded corners */}
    <div className="flex justify-center">
      <div className="relative w-full max-w-sm h-auto overflow-hidden rounded-2xl border-4 border-cyan-500/30 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-500">
        <img
          src="/ceo.jpg" // Replace with your updated CEO image path
          alt="CEO Rahul Verma"
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* CEO Message + Signature */}
    <div>
      <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
        A Word from Our CEO
      </h2>
      <p className="text-gray-300 text-[1.125rem] leading-8 font-light mb-6">
        At Upscale Solution, our journey has always been about empowering businesses to grow smarter — not just faster. With Business Central and modern cloud technology, we help companies digitally evolve with confidence. My mission has always been to bridge the gap between enterprise need and technological possibility.
      </p>
      <p className="text-cyan-400 font-semibold text-lg mb-2">
        — Rahul Chaddha, Founder & CEO
      </p>

      {/* Floating Signature */}
      <div className="mt-2">
        <img
          src="/signature.png" // Transparent PNG of your signature
          alt="Rahul Signature"
          className="h-20 w-auto opacity-90 rotate-[-6deg] ml-1 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]"
        />
      </div>
    </div>
  </div>
</section>
      <Testimonials />
      <CaseStudies />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

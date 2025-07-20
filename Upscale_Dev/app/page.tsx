
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
    {/* CEO Image */}
    <div className="flex justify-center">
      <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-500">
        <img
          src="/CEO.jpg" // ⬅️ Replace with your CEO photo file (put inside /public)
          alt="CEO Rahul Chaddha"
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* CEO Message + Signature */}
    <div>
      <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
        A Word from Our CEO
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        At Upscale Solution, our journey has always been about empowering businesses to grow smarter — not just faster. With Business Central and modern cloud technology, we help companies digitally evolve with confidence. My mission has always been to bridge the gap between enterprise need and technological possibility.
      </p>
      <p className="text-cyan-400 font-semibold mb-4">
        — Rahul Chaddha, Founder & CEO
      </p>

      {/* Floating Signature */}
      <div className="mt-4">
        <img
          src="/sign.png" // ⬅️ Replace with your actual signature image (transparent PNG)
          alt="CEO Signature"
          className="h-16 w-auto opacity-80 hover:opacity-100 transition duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
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

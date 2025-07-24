'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-gray-300 py-24 px-6">
      {/* Back Arrow */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 text-cyan-400 hover:text-white transition-colors duration-300 group"
      >
        <i className="ri-arrow-left-line text-2xl group-hover:translate-x-[-4px] transition-transform"></i>
        <span className="text-base hidden sm:inline">Back</span>
      </button>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Effective Date: July 24, 2025</p>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            At Upscale Solution, we value your privacy and are committed to protecting your personal information.
          </p>
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Information We Collect</h2>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Personal Information: Name, email, phone, company name, etc.</li>
              <li>Usage Data: IP address, browser type, pages visited, time on site.</li>
              <li>Cookies: For analytics and enhanced UX.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Your Rights</h2>
            <p>You may request access, corrections, or deletion of your personal data.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Contact Us</h2>
            <p>Email: <Link href="mailto:rahul@upscalesolution.com" className="text-cyan-400 hover:underline">rahul@upscalesolution.com</Link></p>
          </div>
        </div>
      </div>
    </main>
  );
}

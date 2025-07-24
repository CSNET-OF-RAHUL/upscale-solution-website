'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-gray-300 pt-28 px-6 pb-16">
      {/* Back Arrow */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300"
        >
          <i className="ri-arrow-left-line text-2xl"></i>
          <span className="ml-2 text-base sm:inline hidden">Back</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Effective Date: Jan 01, 2020</p>

        <p>
          At Upscale Solution, we value your privacy. This policy explains how we handle and protect your information.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, company details, and other details related to our services.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">How We Use Information</h2>
        <p>
          Your information is used to deliver services, provide support, and improve our offerings. We do not sell or rent your data.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">Cookies</h2>
        <p>
          We use cookies to enhance user experience and analyze traffic. You can manage cookie preferences in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">Data Protection</h2>
        <p>
          We implement strict security measures to protect your data. Access is restricted to authorized personnel only.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">Contact Us</h2>
        <p>
          For any questions or concerns regarding your data, please contact us at <Link href="mailto:rahul@upscalesolution.com" className="text-cyan-400 hover:underline">rahul@upscalesolution.com</Link>.
        </p>
      </div>
    </main>
  );
}

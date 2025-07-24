'use client';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="bg-[#0d0d0d] text-gray-300 px-4 py-12 min-h-screen relative">
      {/* Back Arrow */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center text-sm text-cyan-400 hover:text-white transition"
      >
        <i className="ri-arrow-left-line text-xl mr-2"></i> Back
      </button>

      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Effective Date: Jan 01, 2020</p>
        <p className="mb-4">
          At Upscale Solution, we value your privacy. This policy explains how we handle and protect your information.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, company details, and other details related to our services.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">How We Use Information</h2>
        <p className="mb-4">
          Your information is used to deliver services, provide support, and improve our offerings. We do not sell or rent your data.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance user experience and analyze traffic. You can manage cookie preferences in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">Data Protection</h2>
        <p className="mb-4">
          We implement strict security measures to protect your data. Access is restricted to authorized personnel only.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          For any questions or concerns regarding your data, please contact us at <span className="text-pink-400">contact@upscalesolution.com</span>.
        </p>
      </div>
    </div>
  );
}

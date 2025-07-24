'use client';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-gray-300 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 mb-6">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-400 mb-10">Effective Date: Jan 01, 2020</p>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            Welcome to Upscale Solution! These Terms and Conditions govern your use of our website and services.
            By accessing our site, you agree to comply with these terms.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Use of Website</h2>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>The content on this website is for general information purposes only.</li>
              <li>You may not use the website for any illegal or unauthorized purpose.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Intellectual Property</h2>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>All content, graphics, and code are the property of Upscale Solution unless stated otherwise.</li>
              <li>Unauthorized use of any material may give rise to a claim for damages.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Limitation of Liability</h2>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>We strive to ensure the accuracy of the information provided but make no warranties.</li>
              <li>Upscale Solution shall not be liable for any damages resulting from the use or inability to use the website.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">External Links</h2>
            <p>
              Our website may contain links to third-party websites. We do not control or endorse their content and are not responsible for any damages arising from their use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use of the site implies acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Contact Us</h2>
            <p>
              For questions, email us at <Link href="mailto:rahul@upscalesolution.com" className="text-cyan-400 hover:underline">rahul@upscalesolution.com</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

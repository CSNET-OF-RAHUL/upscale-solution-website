// app/terms-and-conditions/page.tsx
export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-300">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Terms & Conditions</h1>
      <p className="mb-4 text-sm text-gray-400">Effective Date: July 24, 2025</p>

      <p className="mb-6">
        Welcome to Upscale Solution! These Terms and Conditions govern your use of our website and services.
        By accessing our site, you agree to comply with these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Website</h2>
      <ul className="list-disc list-inside mb-6">
        <li>The content on this website is for general information purposes only.</li>
        <li>You may not use the website for any illegal or unauthorized purpose.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
      <ul className="list-disc list-inside mb-6">
        <li>All content, graphics, and code are the property of Upscale Solution unless stated otherwise.</li>
        <li>Unauthorized use of any material may give rise to a claim for damages.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
      <ul className="list-disc list-inside mb-6">
        <li>We strive to ensure the accuracy of the information provided but make no warranties.</li>
        <li>Upscale Solution shall not be liable for any damages resulting from the use or inability to use the website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">External Links</h2>
      <p className="mb-6">
        Our website may contain links to third-party websites. We do not control or endorse their content and are not responsible for any damages arising from their use.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
      <p className="mb-6">
        We may update these terms at any time. Continued use of the site implies acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p>If you have any questions about these Terms, please email us at: <strong>rahul@upscalesolution.com</strong></p>
    </div>
  );
}


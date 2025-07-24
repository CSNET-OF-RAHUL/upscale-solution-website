// app/privacy-policy/page.tsx
export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-300">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-400">Effective Date: July 24, 2025</p>

      <p className="mb-6">
        At Upscale Solution, we value your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, and protect the information you provide when using our website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Personal Information: Name, email address, phone number, company name, etc., submitted via contact forms.</li>
        <li>Usage Data: Browser type, IP address, pages visited, time spent on site, etc.</li>
        <li>Cookies: For improving user experience and analytics.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6">
        <li>To respond to your inquiries or requests.</li>
        <li>To improve our website and services.</li>
        <li>To send periodic emails regarding our offerings (only if you opt-in).</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Protection</h2>
      <ul className="list-disc list-inside mb-6">
        <li>We implement strong security measures to protect your data.</li>
        <li>Access to personal data is limited to authorized personnel only.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
      <ul className="list-disc list-inside mb-6">
        <li>We do <strong>not</strong> sell or rent your personal information.</li>
        <li>We may share information with service providers only when necessary for delivering our services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
      <ul className="list-disc list-inside mb-6">
        <li>You can request access, update, or deletion of your personal data.</li>
        <li>You may opt out of marketing communications at any time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
      <p className="mb-6">We reserve the right to update this Privacy Policy. All updates will be posted on this page with a revised effective date.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p>If you have any questions regarding this policy, please contact us at: <strong>rahul@upscalesolution.com</strong></p>
    </div>
  );
}


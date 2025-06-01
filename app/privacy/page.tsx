import Header from '../../components/Header';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-coffee-700">
            How we collect, use, and protect your information
          </p>
          <p className="text-sm text-coffee-600 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-cream-200 p-8 md:p-12">
            <div className="prose prose-coffee max-w-none space-y-8">

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Introduction
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  At V60 Recipe ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data.
                  This privacy policy explains how we collect, use, and safeguard your information when you visit our website
                  v60recipe.com (the "Service").
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-2">Information You Provide</h3>
                    <ul className="list-disc list-inside text-coffee-800 space-y-1">
                      <li>Email address (if you subscribe to our newsletter)</li>
                      <li>Any information you provide when contacting us</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-2">Information Automatically Collected</h3>
                    <ul className="list-disc list-inside text-coffee-800 space-y-1">
                      <li>IP address and general location information</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website information</li>
                      <li>Device information (mobile, desktop, etc.)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside text-coffee-800 space-y-2">
                  <li>To provide and maintain our Service</li>
                  <li>To send you newsletters and updates (only if you subscribe)</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze website usage and improve our content</li>
                  <li>To detect and prevent fraud or abuse</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Cookies and Tracking
                </h2>
                <p className="text-coffee-800 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience.
                  These may include:
                </p>
                <ul className="list-disc list-inside text-coffee-800 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="text-coffee-800 leading-relaxed mt-4">
                  You can control cookies through your browser settings, though disabling certain cookies may affect site functionality.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-coffee-800 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in these circumstances:
                </p>
                <ul className="list-disc list-inside text-coffee-800 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who help us operate our website (under strict confidentiality agreements)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Data Security
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                  the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Your Rights
                </h2>
                <p className="text-coffee-800 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-coffee-800 space-y-2">
                  <li>Access: Request a copy of the personal data we hold about you</li>
                  <li>Rectification: Request correction of inaccurate personal data</li>
                  <li>Erasure: Request deletion of your personal data</li>
                  <li>Portability: Request transfer of your data to another service</li>
                  <li>Objection: Object to processing of your personal data</li>
                  <li>Withdrawal: Withdraw consent for data processing</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Third-Party Services
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not responsible for
                  the privacy practices of these external sites. We encourage you to review their privacy policies
                  before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Children's Privacy
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  Our Service is not intended for children under 13 years of age. We do not knowingly collect
                  personal information from children under 13. If you become aware that a child has provided us
                  with personal data, please contact us so we can delete such information.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by
                  posting the new policy on this page and updating the "Last updated" date. We encourage you
                  to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  If you have any questions about this privacy policy or our data practices, please contact us through
                  the contact information provided on our website.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Header from '../../components/Header';

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Imprint
          </h1>
          <p className="text-xl text-coffee-700">
            Legal information and contact details
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
                  Website Operator
                </h2>
                <div className="text-coffee-800 leading-relaxed space-y-2">
                  <p><strong>Name:</strong> 11squared Labs LLC</p>
                  <p><strong>Website:</strong> v60recipe.com</p>
                  <p><strong>Email:</strong> hey@v60recipe.com</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  About This Website
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  V60 Recipe is a personal project dedicated to sharing knowledge about V60 pour over coffee brewing.
                  This website provides recipes, guides, and equipment recommendations for coffee enthusiasts of all levels.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Content Responsibility
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  The content on this website is provided for informational purposes only. While we strive to ensure
                  accuracy and quality, we make no warranties about the completeness, reliability, or suitability of
                  the information provided. Coffee brewing involves personal taste preferences, and results may vary.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  External Links
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  Our website may contain links to external websites. We have no control over the content and
                  availability of these external sites and cannot accept responsibility for their content, privacy
                  policies, or practices. Links to external sites do not constitute an endorsement.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-coffee-800 leading-relaxed mb-4">
                  The content on this website, including text, images, graphics, and design, is protected by copyright
                  and other intellectual property laws. Unless otherwise stated:
                </p>
                <ul className="list-disc list-inside text-coffee-800 space-y-2">
                  <li>Original content is created by the website operator</li>
                  <li>Recipe techniques are attributed to their original creators where known</li>
                  <li>Images and graphics are either original or used with permission</li>
                  <li>Reproduction without permission is prohibited</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Disclaimer
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  The information on this website is provided "as is" without any representations or warranties,
                  express or implied. We do not warrant that the website will be uninterrupted, error-free, or
                  free of viruses or other harmful components. Use of this website is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  To the fullest extent permitted by law, we exclude all liability for any direct, indirect,
                  incidental, or consequential damages arising from the use of this website or the information
                  contained herein. This includes, but is not limited to, damages for loss of profits, data,
                  or other intangible losses.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Dispute Resolution
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  Any disputes arising from the use of this website shall be governed by the laws of [Your jurisdiction].
                  We encourage users to contact us directly to resolve any issues before pursuing formal legal action.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Changes to This Imprint
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  We reserve the right to update this imprint at any time. Changes will be posted on this page
                  and will take effect immediately upon posting.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-coffee-800 leading-relaxed">
                  If you have any questions about this imprint or need to contact us regarding legal matters,
                  please use the contact information provided above. We aim to respond to all inquiries within
                  a reasonable timeframe.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
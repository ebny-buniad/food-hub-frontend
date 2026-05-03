export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-10">
          Last updated: May 2026
        </p>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information such as your name, email address,
              phone number, delivery address, and payment details when you use
              our platform to place orders or create an account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to process orders, improve our services,
              personalize your experience, and communicate with you regarding
              your orders and updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              3. Sharing Your Information
            </h2>
            <p>
              We may share your information with restaurants, delivery partners,
              and payment providers to fulfill your orders. We do not sell your
              personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              4. Cookies & Tracking
            </h2>
            <p>
              We use cookies and similar technologies to enhance your browsing
              experience, remember your preferences, and analyze website traffic.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              5. Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your personal
              data. However, no system is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              6. User Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal data.
              You may also opt out of marketing communications at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              7. Third-Party Services
            </h2>
            <p>
              Our platform may include links to third-party websites or services.
              We are not responsible for their privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <span className="font-medium text-red-500">
                support@foodhub.com
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
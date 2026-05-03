export default function BecomePartnerPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Become a Partner</h1>
          <p className="text-gray-600 mt-3">
            Join Foodhub and grow your restaurant business with us
          </p>
        </div>

        {/* Why Join */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">🚀 Grow Sales</h3>
            <p className="text-gray-600">
              Reach thousands of customers and increase your restaurant sales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">📦 Easy Orders</h3>
            <p className="text-gray-600">
              Manage orders easily through our partner dashboard.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">💰 Fast Payments</h3>
            <p className="text-gray-600">
              Get timely payments directly to your account without hassle.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white p-8 rounded-xl shadow-sm border mb-12">
          <h2 className="text-2xl font-bold mb-6">Requirements to Join</h2>

          <ul className="space-y-4 text-gray-700">
            <li>✔️ Valid restaurant business license</li>
            <li>✔️ Active kitchen with proper hygiene standards</li>
            <li>✔️ Ability to handle online orders regularly</li>
            <li>✔️ Bank account for receiving payments</li>
            <li>✔️ Menu list with pricing and images</li>
            <li>✔️ Contact person available during business hours</li>
          </ul>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">1. Apply Online</h3>
              <p className="text-gray-600">
                Fill up the partner registration form.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">2. Verification</h3>
              <p className="text-gray-600">
                We verify your restaurant details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">3. Start Selling</h3>
              <p className="text-gray-600">
                Start receiving orders instantly.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 text-white p-10 rounded-xl">
          <h2 className="text-3xl font-bold mb-3">
            Ready to grow your business?
          </h2>
          <p className="mb-6 text-white/90">
            Join hundreds of restaurants already earning with Foodhub.
          </p>

          <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Apply Now
          </button>
        </div>

      </div>
    </section>
  );
}
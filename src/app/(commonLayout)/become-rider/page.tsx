export default function BecomeRiderPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Become a Rider</h1>
          <p className="text-gray-600 mt-3">
            Earn money by delivering food with Foodhub anytime, anywhere
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">💰 Earn Daily</h3>
            <p className="text-gray-600">
              Get paid for every successful delivery you complete.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">⏰ Flexible Time</h3>
            <p className="text-gray-600">
              Work whenever you want. Full-time or part-time freedom.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">📍 Local Delivery</h3>
            <p className="text-gray-600">
              Deliver food within your nearby area easily.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white p-8 rounded-xl shadow-sm border mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Requirements to Become a Rider
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>✔️ Valid National ID (NID)</li>
            <li>✔️ Smart phone (Android / iPhone)</li>
            <li>✔️ Bike / Bicycle / Scooter</li>
            <li>✔️ Valid driving license (for motorbike riders)</li>
            <li>✔️ Basic knowledge of local routes</li>
            <li>✔️ Active mobile number for communication</li>
          </ul>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">1. Sign Up</h3>
              <p className="text-gray-600">
                Fill the rider application form online.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">2. Verification</h3>
              <p className="text-gray-600">
                We verify your documents and identity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">3. Start Delivering</h3>
              <p className="text-gray-600">
                Start accepting delivery requests instantly.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white p-10 rounded-xl">
          <h2 className="text-3xl font-bold mb-3">
            Start earning as a Rider today!
          </h2>
          <p className="mb-6 text-white/90">
            Join Foodhub delivery network and start earning daily income.
          </p>

          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Apply as Rider
          </button>
        </div>

      </div>
    </section>
  );
}
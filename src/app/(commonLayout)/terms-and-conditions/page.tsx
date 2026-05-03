export default function TermsPage() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
                <p className="text-gray-600 mb-10">
                    Last updated: May 2026
                </p>

                {/* Section */}
                <div className="space-y-8 text-gray-700 leading-relaxed">

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                        <p>
                            Welcome to Foodhub. By accessing or using our platform, you agree to
                            comply with and be bound by these Terms and Conditions. Please read
                            them carefully before using our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">2. Use of Service</h2>
                        <p>
                            You agree to use our platform only for lawful purposes. You must not
                            misuse the service or attempt to disrupt the platform’s functionality.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">3. Orders & Payments</h2>
                        <p>
                            All orders placed through Foodhub are subject to availability and
                            confirmation. Prices may vary and are subject to change without notice.
                            Payments must be completed before order processing.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">4. Cancellation & Refund</h2>
                        <p>
                            Orders can only be canceled within a limited time after placing them.
                            Refunds will be processed based on our refund policy and may take
                            several business days.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">5. User Accounts</h2>
                        <p>
                            You are responsible for maintaining the confidentiality of your account
                            information. Any activity under your account is your responsibility.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">6. Restaurant Responsibility</h2>
                        <p>
                            Foodhub acts as a platform connecting users and restaurants. We do not
                            control food preparation, quality, or delivery handled by providers.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
                        <p>
                            Foodhub is not liable for any damages arising from the use of our
                            platform, including delays, incorrect orders, or service interruptions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">8. Privacy Policy</h2>
                        <p>
                            Your personal data is handled according to our Privacy Policy. By using
                            our service, you consent to such processing.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
                        <p>
                            We may update these Terms at any time. Continued use of the platform
                            after changes means you accept the new terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at:
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
import React from 'react'

export default function About() {
    return (
        <div >
            <div
                className="w-full h-50 lg:h-100 bg-cover bg-center flex items-center justify-center relative"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <h1 className="relative z-10 text-4xl font-bold text-white">
                    About Foodhub
                </h1>
            </div>
            <section className="py-16">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        From food delivery to your daily convenience companion
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Foodhub is more than just a food delivery platform. We connect you with
                        your favorite restaurants, groceries, and everyday essentials—fast,
                        reliable, and right at your doorstep.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">

                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Values
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 text-center">

                        <div className="p-6 rounded-2xl shadow-sm bg-white">
                            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                            <p className="text-gray-600">
                                We prioritize our customers by delivering quality service and ensuring
                                satisfaction in every order.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl shadow-sm bg-white">
                            <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
                            <p className="text-gray-600">
                                Speed matters. We ensure quick deliveries without compromising on
                                quality and safety.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl shadow-sm bg-white">
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                We continuously improve our platform to make your experience smoother,
                                smarter, and more convenient.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 text-center max-w-2xl">

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Join the Foodhub Team!
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Be part of a fast-growing team that’s changing how people experience food
                        and convenience. Let’s build something amazing together.
                    </p>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition">
                        View Open Positions
                    </button>

                </div>
            </section>
        </div>
    )
}

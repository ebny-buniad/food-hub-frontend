"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full">

            {/* ================= HERO ================= */}
            <section
                className="relative text-white py-24 text-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact Foodhub
                    </h1>
                    <p className="text-lg text-white/90">
                        We’d love to hear from you. Get in touch with us anytime.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT INFO ================= */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid md:grid-cols-4 gap-6">

                    <Card className="text-center">
                        <CardContent className="p-6 space-y-3">
                            <Phone className="mx-auto text-red-500" size={28} />
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-gray-600">+880 1234-567890</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent className="p-6 space-y-3">
                            <Mail className="mx-auto text-red-500" size={28} />
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-gray-600">support@foodhub.com</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent className="p-6 space-y-3">
                            <MapPin className="mx-auto text-red-500" size={28} />
                            <h3 className="font-semibold">Location</h3>
                            <p className="text-gray-600">Dhaka, Bangladesh</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent className="p-6 space-y-3">
                            <Clock className="mx-auto text-red-500" size={28} />
                            <h3 className="font-semibold">Working Hours</h3>
                            <p className="text-gray-600">10AM - 10PM</p>
                        </CardContent>
                    </Card>

                </div>
            </section>

            {/* ================= FORM + IMAGE ================= */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

                    {/* FORM */}
                    <Card>
                        <CardContent className="p-8 space-y-5">
                            <h2 className="text-2xl font-bold">Send us a message</h2>

                            <Input placeholder="Your Name" />
                            <Input type="email" placeholder="Your Email" />
                            <Input placeholder="Subject" />
                            <Textarea placeholder="Your Message" rows={5} />

                            <Button className="w-full bg-red-500 hover:bg-red-600">
                                Send Message
                            </Button>
                        </CardContent>
                    </Card>

                    {/* IMAGE / VISUAL */}
                    <div className="hidden lg:block">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                            alt="Restaurant"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>

                </div>
            </section>

            {/* ================= MAP ================= */}
            <section className="py-16">
                <div className="container mx-auto px-4">

                    <h2 className="text-3xl font-bold text-center mb-8">
                        Find Us on Map
                    </h2>

                    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow">
                        <iframe
                            src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-16 bg-red-500 text-white text-center container mx-auto rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Order Delicious Food?
                </h2>
                <p className="mb-6 text-white/90">
                    Browse our menu and get your favorite meals delivered fast.
                </p>

                <Button className="bg-white text-red-500 hover:bg-gray-100 font-semibold px-6 py-3">
                    Order Now
                </Button>
            </section>

        </div>
    );
}
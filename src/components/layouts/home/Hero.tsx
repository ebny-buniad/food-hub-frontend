import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-180 flex items-center">
      {/* Background Image */}
      <Image
        src="https://food.pathao.com/_ipx/f_webp/assets/images/home_banner.webp"
        alt="Restaurant Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl xl:text-6xl font-bold">
            <span className="text-red-500 block">
              Fast, Fresh & Right
            </span>
            To Your Door
          </h1>

          <p className="text-lg">
            Order dishes from your favorite restaurants near you.
          </p>

          <Button className="bg-red-500 hover:bg-red-600 px-8 py-6 mt-5">
            <Link href="/meals" className="flex items-center gap-3">
              Let&apos;s Order <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <div>
            <div className='grid lg:grid-cols-2 items-center mt-5 p-3'>
                <div className='space-y-3 col-span-1 text-center lg:text-left'>
                    <h1 className='text-4xl xl:text-6xl font-bold'><span className='text-red-500 block'>Fast, Fresh
                        & Right</span> To Your Door</h1>
                    <p>Order dishes from favorite restaurants near you.</p>

                    <Button className='bg-red-500 px-8 py-6 mt-5'>
                        <Link href={"/meals"} className='flex items-center gap-3'>Let&apos;s Order <ArrowRight></ArrowRight></Link>
                    </Button>
                </div>
                <div className="relative w-full h-[500] col-span-1">
                    <Image
                        src="https://i.ibb.co/Wpgv0L25/hero-2.webp"
                        alt="Food Hub Hero Image"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

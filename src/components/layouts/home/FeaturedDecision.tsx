import { Button } from '@/components/ui/button'
import React from 'react'

export default function FeaturedDecision() {
    return (
        <div>
            <div className='grid gap-5 lg:grid-cols-2 mt-15 p-3'>
                <div className='flex items-center justify-end gap-5'>
                    <img className='w-50 hidden md:block rounded-2xl' src="https://foodibd.com/_next/image?url=%2Fbap.png&w=1920&q=75" alt="" />
                    <div className='space-y-2'>
                        <h3 className='text-xl font-semibold'>List Your Restaurant on Food Hub</h3>
                        <p>Would you like millions of new customers to enjoy your amazing food and groceries? Let&apos;s start our partnership today!</p>
                        <Button className='bg-red-500 mt-10'>
                            Become a Partner
                        </Button>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-5'>
                    <img className='w-50 hidden md:block rounded-2xl' src="https://foodibd.com/_next/image?url=%2Fbar.jpg&w=1920&q=75" alt="" />
                    <div className='space-y-2'>
                        <h3 className='text-xl font-semibold'>List Your Restaurant on Food Hub</h3>
                        <p>Would you like millions of new customers to enjoy your amazing food and groceries? Let&apos;s start our partnership today!</p>
                        <Button className='bg-red-500 mt-10'>
                            Become a Hero
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

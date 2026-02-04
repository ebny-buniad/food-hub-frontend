import React from 'react'

export default function FeaturedServices() {
  return (
    <div className='grid md:grid-cols-3 gap-5 mt-20 p-3'>

        <div className='border rounded-2xl p-3 text-center space-y-3'>
            <img className='mx-auto w-40' src="https://foodibd.com/_next/static/media/delivery.be81f682.svg" alt="" />
            <h1 className='font-bold'>Super fast Delivery</h1>
            <p>Faster than your cravings can blink. Experience the super-fast delivery and get fresh food.</p>
        </div>
        <div className='border rounded-2xl p-3 text-center space-y-3'>
            <img className='mx-auto w-21' src="https://foodibd.com/_next/static/media/location.bf59f976.svg" alt="" />
            <h1 className='font-bold'>Super fast Delivery</h1>
            <p>Faster than your cravings can blink. Experience the super-fast delivery and get fresh food.</p>
        </div>
        <div className='border rounded-2xl p-3 text-center space-y-3'>
            <img className='mx-auto w-25' src="https://foodibd.com/_next/static/media/mobile.73da0fee.svg" alt="" />
            <h1 className='font-bold'>Super fast Delivery</h1>
            <p>Faster than your cravings can blink. Experience the super-fast delivery and get fresh food.</p>
        </div>

    </div>
  )
}

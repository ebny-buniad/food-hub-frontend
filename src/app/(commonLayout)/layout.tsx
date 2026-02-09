import { Footer } from '@/components/layouts/Footer'
import { Navbar } from '@/components/layouts/Navbar'
import React from 'react'

export default function commonLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-520px)]'>
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

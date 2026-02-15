import { Footer } from '@/components/layouts/Footer'
import { Navbar } from '@/components/layouts/Navbar'
import { getUser } from '@/services/getUser';
import React from 'react'

export default async function commonLayout({
    children
}: {
    children: React.ReactNode
}) {
    const user = await getUser();
    return (
        <div>
            <Navbar user={user}></Navbar>
            <div className='min-h-[calc(100vh-520px)]'>
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

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
            {children}
        </div>
    )
}

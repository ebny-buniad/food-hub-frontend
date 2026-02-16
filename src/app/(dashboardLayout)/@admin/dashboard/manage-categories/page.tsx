import AddCategory from '@/components/adminDashboard/AddCategory'
import React from 'react'

export default function ManageCategories() {
    return (
        <div className='p-6 border'>

            <h3 className="pb-5 text-3xl font-semibold">Manage Categories</h3>
            <div className='grid md:grid-cols-2'>
                <div>
                    <h5 className=' py-3 font-bold'>Add Category</h5>
                    <AddCategory></AddCategory>
                </div>
                <div>
                    <h5 className=' py-3 font-bold'>Update Category</h5>
                </div>
            </div>
        </div>
    )
}

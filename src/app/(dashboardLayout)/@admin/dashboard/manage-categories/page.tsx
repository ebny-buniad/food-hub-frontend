import AddCategory from '@/components/adminDashboard/AddCategory'
import CategoryList from '@/components/adminDashboard/CategoryList'

export default function ManageCategories() {
    return (
        <div className='p-6'>

            <h3 className="pb-5 text-3xl font-semibold">Manage Categories</h3>
            <div className='grid md:grid-cols-2'>
                <div>
                    <h5 className=' py-3 font-bold'>Add Category</h5>
                    <AddCategory></AddCategory>
                </div>
                <div>
                    <h5 className=' py-3 font-bold'>Categories list</h5>
                    <CategoryList></CategoryList>
                </div>
            </div>
        </div>
    )
}

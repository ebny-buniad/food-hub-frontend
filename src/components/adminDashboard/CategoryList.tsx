import { adminServices } from '@/services/admin.service'
import DeleteCategories from './DeleteCategories';

export default async function CategoryList() {
    const categories = await adminServices.getAllCategories();
    return (
        <div>
            <DeleteCategories categories={categories}></DeleteCategories>
        </div>
    )
}

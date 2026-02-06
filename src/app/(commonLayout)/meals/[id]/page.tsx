import { MealDetails } from '@/components/modules/meals/MealDetails';
import { mealsServices } from '@/services/meals.service';

export default async function Meal({ params }: { params: { id: string } }) {
    const { id } = await params;
    const { data } = await mealsServices.getMeal(id);
    return (
        <div>
            <MealDetails meal={data}></MealDetails>
        </div>
    )
}

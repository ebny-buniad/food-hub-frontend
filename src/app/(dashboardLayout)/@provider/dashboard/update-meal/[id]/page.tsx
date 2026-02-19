
import UpdateMealInfo from '@/components/providerDashboard/UpdateMealInfo';
import { mealsServices } from '@/services/meals.service';
import React from 'react'

export default async function UpdateMeal({ params }: { params: { id: string } }) {
    const { id } = await params;

    // Load meal
    const meal = await mealsServices.getMeal(id);
    const mealInfo = meal?.data;

    // Load categories
    const data: any = await mealsServices.getCategories();
    const categories = data?.data;

    return (
        <div>
            <UpdateMealInfo mealInfo={mealInfo} categories={categories}></UpdateMealInfo>
        </div>
    )
}

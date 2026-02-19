"use client"

import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Badge, Pencil, Trash2 } from 'lucide-react';
import { mealsServices } from '@/services/meals.service';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type Meal = {
    id: string;
    name: string;
    description: string;
    price: string;
    thumbnail: string;
    dietary: string;
    isAvailable: boolean;
    category?: {
        cuisine?: string;
    };
    reviews?: any[];
};

export default function ProviderMeals({ data, cookie }: { data: any, cookie: string }) {

    const router = useRouter();

    const meals = data?.meals;
    if (!meals.length) {
        return (
            <div className='p-5'>
                <div className='p-3 border rounded-md text-center py-4'>
                    <h3 className='text-red-500 py-6'>No meals available, at this moment!</h3>
                    <Link href={`/dashboard/create-meal`}>
                        <Button>Create new meal</Button></Link>
                </div>
            </div>
        )
    }


    const handleUpdate = (id?: string) => {
        if (!id) return;
        router.push(`/dashboard/update-meal/${id}`)
    };

    const handleDelete = async (id?: string) => {
        if (!id) return;
        const result = await mealsServices.deleteMeal(id);
        if (result?.success === true) {
            toast.success("Meal delete!");
            router.refresh();
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-6 p-4">
            {meals?.map((meal: Meal) => (
                <Card key={meal?.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 pt-0 pb-2">
                    {/* Thumbnail */}
                    <div className="relative h-48 w-full">
                        <Image
                            src={meal?.thumbnail ?? "/placeholder.png"}
                            alt={meal?.name ?? "Meal"}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Content */}
                    <CardHeader>
                        <CardTitle className="line-clamp-1">
                            {meal?.name ?? "Unnamed Meal"}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Cuisine: {meal?.category?.cuisine ?? "Unknown"}
                        </p>
                    </CardHeader>

                    <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            {meal?.description ?? "No description"}
                        </p>

                        <div className="mt-3 flex items-center justify-between">
                            <p className="text-lg font-bold text-primary">
                                ৳ {meal?.price ?? 0}
                            </p>

                            <span className="text-xs text-muted-foreground">
                                ⭐ {meal?.reviews?.length ?? 0} reviews
                            </span>
                        </div>
                    </CardContent>

                    {/* Action Buttons */}
                    <CardFooter className="gap-3">
                        <Button
                            variant="outline"
                            className="flex items-center gap-2"
                            onClick={() => handleUpdate(meal?.id)}
                        >
                            <Pencil size={16} />
                            Update
                        </Button>

                        <Button
                            variant="destructive"
                            className=" flex items-center gap-2"
                            onClick={() => handleDelete(meal?.id)}
                        >
                            <Trash2 size={16} />
                            Remove
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

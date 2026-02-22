"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldLabel,
    FieldError,
} from "@/components/ui/field";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { mealsServices } from "@/services/meals.service";
import { toast } from "sonner";
import { updateMeal } from "@/app/actions/mealsActions";

const mealSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().min(1, "Price must be greater than 0"),
    thumbnail: z.string().url("Thumbnail must be a valid URL"),
    categoryId: z.string().min(1, "Category is required"),
    dietary: z.string().min(1, "Dietary is required"),
});

type Props = {
    mealInfo: any;
    categories: any[];
};


export default function UpdateMealInfo({ mealInfo, categories }: Props) {

    const form = useForm({
        defaultValues: {
            name: mealInfo?.name ?? "",
            description: mealInfo?.description ?? "",
            price: Number(mealInfo?.price) ?? 0,
            thumbnail: mealInfo?.thumbnail ?? "",
            categoryId: mealInfo?.categoryId ?? "",
            dietary: mealInfo?.dietary ?? "HALAL",
        },
        validators: {
            onSubmit: mealSchema
        },
        onSubmit: async ({ value }) => {
            const result = await updateMeal(mealInfo?.id, value);
            if(result?.success === true){
                toast.success("Meal details updated!")
            }
        },
    });

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">Edit Meal</h2>
                <p className="text-muted-foreground">
                    Update your meal information
                </p>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                }}
                className="space-y-6"
            >
                {/* Name */}
                <form.Field
                    name="name"
                    children={(field) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>Meal Name</FieldLabel>
                            <Input
                                id={field.name}
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Enter meal name"
                            />
                            <FieldError errors={field.state.meta.errors} />
                        </Field>
                    )}
                />

                {/* Description */}
                <form.Field
                    name="description"
                    children={(field) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                            <Input
                                id={field.name}
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Enter description"
                            />
                            <FieldError errors={field.state.meta.errors} />
                        </Field>
                    )}
                />

                {/* Price */}
                <form.Field
                    name="price"
                    children={(field) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>Price (৳)</FieldLabel>
                            <Input
                                type="text"
                                inputMode="numeric"
                                id={field.name}
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(Number(e.target.value))
                                }
                                placeholder="Enter price"
                            />
                            <FieldError errors={field.state.meta.errors} />
                        </Field>
                    )}
                />

                {/* Thumbnail */}
                <form.Field
                    name="thumbnail"
                    children={(field) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>Thumbnail URL</FieldLabel>
                            <Input
                                id={field.name}
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Image URL"
                            />
                            <FieldError errors={field.state.meta.errors} />
                        </Field>
                    )}
                />

                {/* Category (Shadcn Select) */}
                <form.Field
                    name="categoryId"
                    children={(field) => (
                        <Field>
                            <FieldLabel>Category</FieldLabel>
                            <Select
                                value={field.state.value}
                                onValueChange={(val) => field.handleChange(val)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories?.map((cat) => (
                                        <SelectItem key={cat?.id} value={cat?.id}>
                                            {cat?.cuisine}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FieldError errors={field.state.meta.errors} />
                        </Field>
                    )}
                />

                {/* Dietary */}
                <form.Field
                    name="dietary"
                    children={(field) => (
                        <Field>
                            <FieldLabel>Dietary Type</FieldLabel>
                            <Select
                                value={field.state.value}
                                onValueChange={(val) => field.handleChange(val)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Dietary" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="HALAL">HALAL</SelectItem>
                                    <SelectItem value="VEG">VEG</SelectItem>
                                    <SelectItem value="NON_VEG">NON_VEG</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>
                    )}
                />

                {/* Submit */}
                <Button type="submit" className="w-full">
                    Update Meal
                </Button>
            </form>
        </div>
    );
}

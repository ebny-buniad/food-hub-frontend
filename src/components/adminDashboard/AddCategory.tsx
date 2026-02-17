"use client"

import { useForm } from "@tanstack/react-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { adminServices } from "@/services/admin.service"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const categorySchema = z.object({
    cuisine: z
        .string()
        .min(1, "Cuisine must be at least 2 characters")

})

export default function AddCategory() {

    const router = useRouter();
    const form = useForm({
        defaultValues: {
            cuisine: "",
        },
        // validators: categorySchema,
        onSubmit: async ({ value }) => {
            const result = await adminServices.createCategories(value);
            if (result?.data?.ok === true) {
                toast.success("Ctegory created!");
                form.reset();
                router.refresh();
            }
            else {
                toast.error("Duplicate category!")
            }
        }
    })

    return (
        <div>
            <Card className="w-full max-w-md rounded-md">
                <CardContent>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            form.handleSubmit()
                        }}
                        className="space-y-4"
                    >
                        <form.Field
                            name="cuisine"
                            validators={{
                                onChange: categorySchema.shape.cuisine,
                            }}
                        >
                            {(field) => (
                                <div className="space-y-2">
                                    <Label>Cuisine Name</Label>

                                    <Input
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        placeholder="Enter cuisine name"
                                    />

                                    {field.state.meta.errors.length > 0 && (
                                        <p className="text-sm text-red-500">
                                            {field.state.meta.errors[0]?.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        </form.Field>

                        <Button type="submit" className="w-full">
                            Create Category
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

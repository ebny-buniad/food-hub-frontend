"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Review } from "@/types";
import { useForm } from "@tanstack/react-form";
import { Star } from "lucide-react";
import * as z from "zod";

const reviewSchema = z.object({
    rating: z.number().min(1).max(5),
    comment: z.string().min(3),
})

export function MealDetails({ meal }: { meal: any }) {
    const {
        id,
        dietary,
        category,
        name,
        description,
        price,
        thumbnail,
        isAvailable,
        reviews
    } = meal;

    // Review form
    const form = useForm({
        defaultValues: {
            rating: 0,
            comment: "",
        },
        validators: {
            onSubmit: reviewSchema
        },
        onSubmit: async ({ value }) => {
            const reviewInfo = {
                mealId: id,
                ...value
            }

            console.log(reviewInfo)
        },
    })

    return (
        <div>
            <Card className="my-10 pt-0 md:w-3xl mx-auto rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

                {/* Image Section */}
                <div className="relative">
                    <img
                        src={thumbnail}
                        alt={name}
                        className="w-full h-52 object-cover"
                    />

                    {/* Availability Badge */}
                    <Badge
                        className={`absolute top-3 left-3 text-white
            ${isAvailable ? "bg-green-600" : "bg-red-600"}`}
                    >
                        {isAvailable ? "Available" : "Out of Stock"}
                    </Badge>

                    {/* Dietary Badge */}
                    <Badge className="absolute top-3 right-3 bg-indigo-600 text-white">
                        {dietary}
                    </Badge>
                </div>

                {/* Content */}
                <CardContent className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                        {name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Cuisine: {category?.cuisine}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {description}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                        <p className="text-xl font-bold text-primary">
                            ৳ {price}
                        </p>
                        <div className="text-sm text-muted-foreground">
                            ⭐ {reviews?.length ?? 0} reviews
                        </div>
                    </div>

                </CardContent>
                <CardFooter>
                    <Carousel className=" w-xl mx-auto">
                        <CarouselContent>
                            {reviews.length === 0 ? (
                                <div className="w-full text-center py-10">
                                    <p className="text-gray-500 text-lg font-medium">
                                        No reviews yet
                                    </p>
                                    <p className="text-sm text-gray-400 mt-2">
                                        Be the first one to share your experience!
                                    </p>
                                </div>
                            ) : (
                                reviews.map((review: Review, index: number) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="h-40">
                                                <CardContent className="text-center">
                                                    <p className="font-bold">{review?.customer?.name}</p>

                                                    <p className="text-sm text-gray-600 mt-1">
                                                        {review?.comment}
                                                    </p>

                                                    <div className="flex items-center justify-center mt-5 gap-2">
                                                        {Array.from({ length: review.rating }).map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                            />
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))
                            )}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </CardFooter>
            </Card>

            <div className="md:w-3xl border mx-auto rounded-2xl p-3">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                    className="space-y-3"
                >
                    {/* Rating */}
                    <form.Field
                        name="rating"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                (
                                    <div>
                                        <label className="font-medium">Rating</label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    onClick={() => field.handleChange(star)}
                                                    className={`w-6 h-6 cursor-pointer transition 
                                            ${field.state.value >= star
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </div>
                                )
                            )
                        }}
                    />

                    {/* Comment */}
                    <form.Field
                        name="comment"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <div className="space-y-2">
                                    <label className="font-medium">Comment</label>

                                    <Textarea
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        placeholder="Write your review..."
                                    />

                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </div>
                            )
                        }}
                    />

                    <Button type="submit" className="w-full">
                        Submit Review
                    </Button>
                </form>
            </div>
        </div>
    );
}

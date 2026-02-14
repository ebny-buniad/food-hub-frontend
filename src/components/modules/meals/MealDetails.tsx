import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Review } from "@/types";
import { Star } from "lucide-react";

export function MealDetails({ meal }: { meal: any }) {
    const {
        dietary,
        category,
        name,
        description,
        price,
        thumbnail,
        isAvailable,
        reviews
    } = meal;

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
                            {
                                reviews.map((review: Review, index: number) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="h-40">
                                                <CardContent className="text-center">
                                                    <p className="font-bold">{review?.customer?.name}</p>
                                                    {review?.comment}

                                                    <div className="flex items-center justify-center mt-5 gap-2">
                                                        {Array.from({ length: review.rating }).map((_, index) => (
                                                            <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </CardFooter>
            </Card>

            <div>
                sds
            </div>
        </div>
    );
}

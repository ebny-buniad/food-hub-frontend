import { Review } from '@/types'
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Badge, Star } from 'lucide-react'

export default function UserReviews({ reviews }: { reviews: any }) {

    if (!reviews?.length) {
        return (
            <div className="text-center py-10 text-muted-foreground">
                No reviews yet.
            </div>
        )
    }

    return (
        <div className="px-4 space-y-10">
            {/* Header */}
            <div className="space-y-3">
                <h2 className="text-4xl font-bold">My Reviews</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 my-10">
                {reviews.map((review: Review) => (
                    <Card key={review.id} className="shadow-sm hover:shadow-md transition">

                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <Badge>
                                Meal ID: {review.mealId.slice(0, 8)}...
                            </Badge>

                            <span className="text-xs text-muted-foreground">
                                {new Date(review.createdAt).toLocaleDateString()}
                            </span>
                        </CardHeader>

                        <CardContent className="space-y-3">
                            {/* ⭐ Rating */}
                            <div className="flex gap-1">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* 💬 Comment */}
                            <p className="text-sm text-gray-700">
                                {review.comment}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

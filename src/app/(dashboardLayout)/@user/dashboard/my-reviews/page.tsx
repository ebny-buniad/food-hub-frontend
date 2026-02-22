import UserReviews from '@/components/userDashboard/UserReviews';
import { reviewServices } from '@/services/review.service'
import { userService } from '@/services/user.service';
import React from 'react'

export default async function MyReviews() {
    const data = await reviewServices.getReviews();
    return (
        <div>
            <UserReviews reviews={data}></UserReviews>
        </div>
    )
}

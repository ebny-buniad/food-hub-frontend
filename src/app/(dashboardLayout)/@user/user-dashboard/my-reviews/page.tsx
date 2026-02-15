import UserReviews from '@/components/userDashboard/UserReviews';
import { reviewServices } from '@/services/review.service'
import { userService } from '@/services/user.service';
import React from 'react'

export default async function MyReviews() {
    const cookie = await userService.getUserCookie()
    const data = await reviewServices.getReviews(cookie as string);
    return (
        <div>
            <UserReviews reviews={data}></UserReviews>
        </div>
    )
}

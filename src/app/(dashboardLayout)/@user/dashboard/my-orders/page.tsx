import UserOrdersList from "@/components/userDashboard/UserOrdersList";
import { orderServices } from "@/services/order.service"
import { userService } from "@/services/user.service"

export default async function MyOrders() {
    const cookieHeader = await userService?.getUserCookie();
    const { data } = await orderServices?.getOrders(cookieHeader as string);

    return (
        <div>
            <UserOrdersList orderItems={data}></UserOrdersList>
        </div>
    )
}

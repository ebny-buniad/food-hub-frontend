import { orderServices } from "@/services/order.service"
import { userService } from "@/services/user.service"
import MyOrdersList from "@/components/userDashboard/MyOrdersList"

export default async function MyOrders() {
    const cookieHeader = await userService.getUserCookie();
    const {data}  = await orderServices.getOrders(cookieHeader as string);

    return (
        <div>
            <MyOrdersList orderItems={data}></MyOrdersList>
        </div>
    )
}

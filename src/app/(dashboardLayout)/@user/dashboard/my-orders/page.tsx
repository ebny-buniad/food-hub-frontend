import UserOrdersList from "@/components/userDashboard/UserOrdersList";
import { orderServices } from "@/services/order.service"

export default async function MyOrders() {
    const { data } = await orderServices?.getOrders();
    return (
        <div>
            <UserOrdersList orderItems={data}></UserOrdersList>
        </div>
    )
}

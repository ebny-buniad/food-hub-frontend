import OrdersTable from '@/components/adminDashboard/OrdersTable';
import { adminServices } from '@/services/admin.service';
import { userService } from '@/services/user.service'

export default async function AllOrders() {
    const cookie = await userService.getUserCookie();
    const orders = await adminServices.getAllOrders(cookie as string);

    return (
        <div>
            <OrdersTable orders={orders}></OrdersTable>
        </div>
    )
}

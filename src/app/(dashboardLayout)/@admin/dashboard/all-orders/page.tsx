import { getAllOrders } from '@/app/actions/adminActions';
import OrdersTable from '@/components/adminDashboard/OrdersTable';

export default async function AllOrders() {
    const orders = await getAllOrders();

    return (
        <div>
            <OrdersTable orders={orders}></OrdersTable>
        </div>
    )
}

import OrdersTable from '@/components/providerDashboard/OrdersTable';
import { providerServices } from '@/services/provider.service';

export default async function Orders() {
  const orders = await providerServices.getProviderOrders()
  return (
    <div>
      <OrdersTable orders={orders} />
    </div>
  )
}

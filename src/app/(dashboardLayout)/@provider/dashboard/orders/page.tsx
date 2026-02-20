import OrdersTable from '@/components/providerDashboard/OrdersTable';
import { providerServices } from '@/services/provider.service';
import { userService } from '@/services/user.service'
import React from 'react'

export default async function Orders() {
    const cookie =  await userService.getUserCookie();
    const orders = await providerServices.getProviderOrders(cookie as string)
  return (
    <div>
        <OrdersTable orders={orders} />
    </div>
  )
}

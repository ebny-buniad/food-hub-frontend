"use client"

import { Button } from '../ui/button'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { OrderItem } from '@/types';
import { orderServices } from '@/services/order.service'
import { useRouter } from 'next/navigation'
import { cancelMyOrder } from '@/app/actions/cancleOrder'

export default function UserOrdersList({ orderItems }: any) {
    const router = useRouter();
    const items = orderItems?.data;

    const handelCancleOrder = async (id: string) => {
        const res = await cancelMyOrder(id);
        router.refresh();
    };
    
    return (
        <div className="px-4 space-y-10">
            {/* Header */}
            <div className="space-y-3">
                <h2 className="text-4xl font-bold">My Orders</h2>
                <p className="text-muted-foreground text-lg">
                    Thanks for making a purchase. You can check your order summary below.
                </p>
            </div>

            {/* Main Card */}

            {
                items?.map((item: OrderItem) => {
                    const {
                        id,
                        status,
                        deliveryAddress,
                        paymentMethod,
                        totalAmount,
                        createdAt,
                        provider: { restaurentName },
                        orderItems,
                    } = item;

                    return (
                        <Card key={item.id}>
                            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b">
                                <div>
                                    <CardTitle>Order Summary</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Order ID: <span className="font-medium text-primary">#10234987</span>
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Restaurent name: <span className="font-medium text-primary">{restaurentName}</span>
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Payment Method: <span className="font-medium text-primary">{paymentMethod}</span>
                                    </p>
                                </div>
                                <Button>Track Your Order</Button>
                            </CardHeader>
                            {
                                orderItems.map((order, index) => {
                                    const {
                                        quantity,
                                        price,
                                        meals: {
                                            name,
                                            thumbnail
                                        }
                                    } = order;
                                    return (
                                        <CardContent key={index} className="pt-3">
                                            {/* Product 1 */}
                                            <div className="flex flex-col md:flex-row gap-6 border-b pb-3">
                                                <Image
                                                    src={thumbnail}
                                                    alt="Product"
                                                    width={80}
                                                    height={40}
                                                    className="rounded-lg object-cover"
                                                />
                                                <div className="flex-1 grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h3 className="text-xl font-semibold">
                                                            {name}
                                                        </h3>

                                                        <p className="mt-2 text-sm">
                                                            Quantity:{" "}
                                                            <span className="text-muted-foreground">{quantity}</span>
                                                        </p>
                                                    </div>

                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                        <div>
                                                            <p className="text-muted-foreground">Price</p>
                                                            <p className="text-primary font-medium">৳ {price}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-muted-foreground">Status</p>
                                                            <Badge
                                                                variant="secondary"
                                                                className={
                                                                    status === "CANCELED"
                                                                        ? "text-red-600 bg-red-100"
                                                                        : "text-green-600 bg-green-100"
                                                                }
                                                            >
                                                                {status}
                                                            </Badge>

                                                        </div>
                                                        <div>
                                                            <p className="text-muted-foreground">
                                                                Order Date
                                                            </p>
                                                            <p className="text-emerald-600 font-medium">
                                                                {new Date(createdAt).toDateString()}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-muted-foreground">
                                                                Expected Delivery
                                                            </p>
                                                            <p className="text-emerald-600 font-medium">
                                                                30-50 min
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    )
                                })
                            }

                            {/* Footer */}
                            <div className="border-t px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    <Button onClick={() => handelCancleOrder(id)} variant="ghost" className="text-destructive border">
                                        Cancel Order
                                    </Button>
                                    <p className="text-sm text-muted-foreground">
                                        Address: {deliveryAddress}
                                    </p>
                                </div>
                                <p className="text-lg font-semibold">
                                    Total Price:{" "}
                                    <span className="text-primary">৳ {totalAmount}</span>
                                </p>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}


import { Button } from '../ui/button'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { OrderItem } from '@/types';

export default function MyOrdersList({ orderItems }: any) {
    const items = orderItems?.data;
    console.log(items)

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
                items.map((item: OrderItem) => {
                    const {
                        id,
                        status,
                        deliveryAddress,
                        paymentMethod,
                        totalAmount,
                        createdAt,
                        provider: { id: providerId, restaurentName },
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
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Payment Date: 18 March 2021
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
                                        <CardContent key={index} className="space-y-8 pt-6">
                                            {/* Product 1 */}
                                            <div className="flex flex-col md:flex-row gap-6 border-b pb-6">
                                                <Image
                                                    src={thumbnail}
                                                    alt="Product"
                                                    width={140}
                                                    height={140}
                                                    className="rounded-lg object-cover"
                                                />
                                                <div className="flex-1 grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h3 className="text-xl font-semibold">
                                                            Premium Quality Dust Watch
                                                        </h3>
                                                        <p className="text-muted-foreground mt-1">
                                                            By: Dust Studios
                                                        </p>
                                                        <p className="mt-2 text-sm">
                                                            Size: <span className="text-muted-foreground">100 ml</span> | Qty:{" "}
                                                            <span className="text-muted-foreground">2</span>
                                                        </p>
                                                    </div>

                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                                        <div>
                                                            <p className="text-muted-foreground">Price</p>
                                                            <p className="text-primary font-medium">৳ 100</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-muted-foreground">Status</p>
                                                            <Badge variant="secondary">Ready for Delivery</Badge>
                                                        </div>
                                                        <div>
                                                            <p className="text-muted-foreground">
                                                                Expected Delivery
                                                            </p>
                                                            <p className="text-emerald-600 font-medium">
                                                                23 March 2021
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
                                    <Button variant="ghost" className="text-destructive border">
                                        Cancel Order
                                    </Button>
                                    <p className="text-sm text-muted-foreground">
                                        Paid using Credit Card ending with 8822
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


"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Status } from "@/constants/status";

type Order = {
    id: string;
    deliveryAddress: string;
    user: {
        name: string;
        email: string;
    };
    orderItems: {
        category: { cuisine: string };
        meals: { name: string; price: string };
        quantity: number;
    }[];
    paymentMethod: string;
    totalAmount: string;
    createdAt: string;
    status: string;
};

export default function OrdersTable({ orders }: { orders: Order[] }) {
    const handleStatusChange = (orderId: string, status: string) => {
        console.log("Update Order Status:", { orderId, status });

        // TODO: API call later
        // await updateOrderStatus(orderId, status)
    };

    const getStatusVariant = (status: string) => {
        if (status === Status.delivered) return "default";
        if (status === Status.canceled) return "destructive";
        if (status === Status.placed) return "secondary";
        return "outline";
    };

    return (
        <div className="w-full rounded-xl border bg-white p-4 shadow-sm">
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Provider Orders</h2>
                <p className="text-sm text-muted-foreground">
                    Manage your incoming orders
                </p>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Meals</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Total (৳)</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Order Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {orders?.map((order) => (
                        <TableRow key={order.id}>
                            {/* Customer */}
                            <TableCell>
                                <div className="font-medium">{order.user?.name}</div>
                                <div className="text-xs text-muted-foreground">
                                    {order.user?.email}
                                </div>
                            </TableCell>

                            {/* Meals List */}
                            <TableCell>
                                <div className="space-y-1">
                                    {order.orderItems?.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="text-sm border rounded-md px-2 py-1"
                                        >
                                            <span className="font-medium">
                                                {item.meals?.name}
                                            </span>{" "}
                                            × {item.quantity}
                                            <div className="text-xs text-muted-foreground">
                                                {item.category?.cuisine} • ৳
                                                {item.meals?.price}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TableCell>

                            {/* Address */}
                            <TableCell>{order.deliveryAddress}</TableCell>

                            {/* Payment */}
                            <TableCell>
                                <Badge variant="outline">
                                    {order.paymentMethod}
                                </Badge>
                            </TableCell>

                            {/* Total */}
                            <TableCell className="font-semibold">
                                ৳{order.totalAmount}
                            </TableCell>

                            {/* Status */}
                            <TableCell>
                                <Badge variant={getStatusVariant(order.status)}>
                                    {order.status}
                                </Badge>
                            </TableCell>

                            {/* Date */}
                            <TableCell>
                                {new Date(order.createdAt).toLocaleDateString()}
                            </TableCell>

                            {/* Actions */}
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem
                                            onClick={() =>
                                                handleStatusChange(order.id, Status.delivered)
                                            }
                                        >
                                            Mark as Delivered
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            className="text-red-500"
                                            onClick={() =>
                                                handleStatusChange(order.id, Status.canceled)
                                            }
                                        >
                                            Cancel Order
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"

export default function OrdersTable({ orders }: { orders: any }) {

  return (
    <div className="p-6">
      <h3 className="pb-5 text-3xl font-semibold">All Orders</h3>
      <div className="rounded border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders?.map((order: any) => (
              <TableRow key={order?.id}>

                {/* Order ID */}
                <TableCell className="font-medium">
                  {order?.id?.slice(0, 8) ?? "N/A"}...
                </TableCell>

                {/* User ID */}
                <TableCell>
                  {order?.userId?.slice(0, 8) ?? "N/A"}...
                </TableCell>

                {/* Items Count */}
                <TableCell>
                  {order?.orderItems?.length ?? 0} items
                </TableCell>

                {/* Total Amount */}
                <TableCell>
                  ৳ {order?.totalAmount ?? "0"}
                </TableCell>

                {/* Payment Method */}
                <TableCell>
                  {order?.paymentMethod ?? "N/A"}
                </TableCell>

                {/* Status Badge */}
                <TableCell>
                  <Badge
                    className={
                      order?.status === "PLACED"
                        ? "bg-blue-100 text-blue-600"
                        : order?.status === "DELIVERED"
                          ? "bg-green-100 text-green-600"
                          : order?.status === "CANCELLED"
                            ? "bg-red-100 text-red-600"
                            : "bg-gray-100 text-gray-600"
                    }
                  >
                    {order?.status ?? "UNKNOWN"}
                  </Badge>
                </TableCell>

                {/* Created Date */}
                <TableCell>
                  {order?.createdAt
                    ? new Date(order?.createdAt).toLocaleDateString()
                    : "N/A"}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

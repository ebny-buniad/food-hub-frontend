"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ShoppingCart, Layers, Store, DollarSign } from "lucide-react"

type AdminStatsType = {
  totalUsers?: number
  totalOrders?: number
  totalCategories?: number
  totalProviders?: number
  totalRevenue?: string | number
}

export default function DashboardHome({ stats }: { stats: AdminStatsType }) {
  return (
    <div className="p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

        {/* Total Users */}
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats?.totalUsers ?? 0}
            </div>
          </CardContent>
        </Card>

        {/* Total Orders */}
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Orders
            </CardTitle>
            <ShoppingCart className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats?.totalOrders ?? 0}
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Categories
            </CardTitle>
            <Layers className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats?.totalCategories ?? 0}
            </div>
          </CardContent>
        </Card>

        {/* Providers */}
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Providers
            </CardTitle>
            <Store className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats?.totalProviders ?? 0}
            </div>
          </CardContent>
        </Card>

        {/* Revenue */}
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              ৳ {stats?.totalRevenue ?? 0}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

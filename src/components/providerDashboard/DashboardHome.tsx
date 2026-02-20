import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, ShoppingCart, DollarSign } from "lucide-react";

type ProviderStats = {
  totalMeals: number;
  totalOrders: number;
  totalRevenue: string;
};

export default function DashboardHome({
  stats,
}: {
  stats: ProviderStats;
}) {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Provider Dashboard
        </h2>
        <p className="text-muted-foreground">
          Overview of your meals, orders and revenue
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Total Meals */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Meals
            </CardTitle>
            <Utensils className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats?.totalMeals ?? 0}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Total meals you have created
            </p>
          </CardContent>
        </Card>

        {/* Total Orders */}
        <Card className="shadow-sm hover:shadow-md transition">
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
            <p className="text-xs text-muted-foreground mt-1">
              Orders received from customers
            </p>
          </CardContent>
        </Card>

        {/* Total Revenue */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              ৳ {stats?.totalRevenue ?? "0"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Revenue from delivered orders
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
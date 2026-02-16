import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-10 space-y-8">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2">
            Here's what's happening with your account today.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid gap-6 md:grid-cols-3">

        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">120</p>
            <p className="text-sm text-muted-foreground mt-1">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm text-muted-foreground mt-1">
              3 need immediate action
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$2,430</p>
            <p className="text-sm text-muted-foreground mt-1">
              This month earnings
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">New Order Created</p>
              <p className="text-sm text-muted-foreground">
                Feb 14, 2026
              </p>
            </div>
            <Badge>Completed</Badge>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Profile Updated</p>
              <p className="text-sm text-muted-foreground">
                Feb 12, 2026
              </p>
            </div>
            <Badge variant="secondary">Success</Badge>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Password Changed</p>
              <p className="text-sm text-muted-foreground">
                Feb 10, 2026
              </p>
            </div>
            <Badge variant="destructive">Warning</Badge>
          </div>

        </CardContent>
      </Card>

    </div>
  )
}

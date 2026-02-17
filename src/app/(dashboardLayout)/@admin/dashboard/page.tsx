import DashboardHome from '@/components/adminDashboard/DashboardHome';
import { adminServices } from '@/services/admin.service';
import { userService } from '@/services/user.service'
import React from 'react'

export default async function AdminDashboard() {
  const cookie = await userService.getUserCookie();
  // Get all users
  const stats = await adminServices.getAdminStats(cookie as string);

  return (
    <div className='p-6'>
        <div>
          <h2 className='text-2xl font-semibold'>Dashboard Overview</h2>
          <p>Welcome back, here's what's happening with your store today.</p>

          <DashboardHome stats={stats}></DashboardHome>
        </div>
    </div>
  )
}

import { getAdminStats } from '@/app/actions/adminActions';
import DashboardHome from '@/components/adminDashboard/DashboardHome';

export default async function AdminDashboard() {
  const stats = await getAdminStats();
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

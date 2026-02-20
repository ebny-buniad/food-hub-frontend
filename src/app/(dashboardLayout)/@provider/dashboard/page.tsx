import DashboardHome from "@/components/providerDashboard/DashboardHome";
import { providerServices } from "@/services/provider.service";
import { userService } from "@/services/user.service";

export default async function ProviderDashboard() {
  const cookie = await userService.getUserCookie();
  const stats = await providerServices.getProviderStats(cookie as string);

  return (
    <div className="p-6">
      <DashboardHome stats={stats} />
    </div>
  );
}
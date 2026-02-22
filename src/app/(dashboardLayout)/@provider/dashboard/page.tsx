import DashboardHome from "@/components/providerDashboard/DashboardHome";
import { providerServices } from "@/services/provider.service";

export default async function ProviderDashboard() {
  const stats = await providerServices.getProviderStats();

  return (
    <div className="p-6">
      <DashboardHome stats={stats} />
    </div>
  );
}
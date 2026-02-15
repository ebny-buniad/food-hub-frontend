import AllRestaurents from "@/components/modules/restaurents/AllRestaurents";
import { providerServices } from "@/services/provider.service"

export default async function page() {
  const providers = await providerServices.getAllProviders();
  return (
    <div><AllRestaurents providers={providers}></AllRestaurents></div>
  )
}

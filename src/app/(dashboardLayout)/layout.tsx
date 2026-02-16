import { AppSidebar } from "@/components/AppSidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { getUser } from "@/services/getUser";

export default async function DashboardLayout({
  user,
  provider,
  admin
}: {
  user: React.ReactNode;
  provider: React.ReactNode;
  admin: React.ReactNode
}) {

  const currentUser = await getUser();
  const userInfo = {
    role: currentUser?.role
  }

  return (
    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <div>
          {
            userInfo.role === "ADMIN" ? admin : user
          }
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

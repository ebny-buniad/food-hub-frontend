import Link from 'next/link'
import { providerServices } from '@/services/provider.service'
import { userService } from '@/services/user.service'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default async function CreateMealPage() {
  const cookie = await userService.getUserCookie()

  let providerProfile: any = null

  try {
    providerProfile = await providerServices.getProviderProfile(cookie as string)
  } catch (error) {
    providerProfile = null
  }

  const isProviderMissing =
    !providerProfile ||
    providerProfile?.status === 404 ||
    providerProfile?.success === false

  if (isProviderMissing) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <Card className="w-full max-w-md text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              No Provider Profile Found
            </CardTitle>
            <CardDescription>
              You don&apos;t have a provider or restaurant profile yet.
              Please create one to add meals.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <Link href="/dashboard/create-provider-profile">
              <Button className="w-full">
                Create Provider Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* Replace this with your actual meal form component */}
      <Card>
        <CardHeader>
          <CardTitle>Create New Meal</CardTitle>
          <CardDescription>
            Add a new meal to your restaurant menu
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Your CreateMealForm Component */}
          {/* <CreateMealForm /> */}
          <p className="text-sm text-muted-foreground">
            Meal form will be rendered here.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

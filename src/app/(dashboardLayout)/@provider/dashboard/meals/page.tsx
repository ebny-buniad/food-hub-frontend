import ProviderMeals from '@/components/providerDashboard/ProviderMeals';
import { providerServices } from '@/services/provider.service'
import { userService } from '@/services/user.service'

export default async function Maels() {
    const cookie = await userService.getUserCookie();
    const data = await providerServices.getProviderMeals(cookie as string);

    return (
        <div>
            <ProviderMeals data={data} cookie={cookie as string}></ProviderMeals>
        </div>
    )
}

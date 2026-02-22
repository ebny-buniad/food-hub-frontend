import { getProviderMeals } from '@/app/actions/providerActions';
import ProviderMeals from '@/components/providerDashboard/ProviderMeals';

export default async function Maels() {
    const data = await getProviderMeals();

    return (
        <div>
            <ProviderMeals data={data}></ProviderMeals>
        </div>
    )
}

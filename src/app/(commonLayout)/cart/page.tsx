import { getCart } from '@/app/actions/getCart';
import CartItems from '@/components/modules/cartItems/CartItems';

export default async function Cart() {
    const cartItems = await getCart();
    const data = cartItems?.data;
    return (
        <div>
            <CartItems items={data}></CartItems>
        </div>
    )
}

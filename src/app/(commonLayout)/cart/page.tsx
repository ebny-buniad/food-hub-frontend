import CartItems from '@/components/modules/cartItems/CartItems';
import { cartServices } from '@/services/cart.service'
import { userService } from '@/services/user.service';


export default async function Cart() {
    const cookieHeader = await userService?.getUserCookie();
    const cartItems = await cartServices?.getCart(cookieHeader);
    const data = cartItems?.data;

    return (
        <div>
            <CartItems items={data}></CartItems>
        </div>
    )
}

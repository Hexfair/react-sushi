import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
	const data = localStorage.getItem('cart');
	const items = JSON.parse(data) || [];
	const totalPrice = calcTotalPrice(items);

	return {
		items,
		totalPrice,
	}
}
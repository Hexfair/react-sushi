import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartItems, CartSliceInt, PayloadItem } from './types';
//=========================================================================================================================

const { items, totalPrice } = getCartFromLS();

const initialState: CartSliceInt = {
	items,
	totalPrice,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem(state, action: PayloadAction<CartItems>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id && obj.activeType === action.payload.activeType);
			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1, })
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		plusCartItem(state, action: PayloadAction<PayloadItem>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id && obj.activeType === action.payload.activeType);
			if (findItem) {
				findItem.count++;
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		minusCartItem(state, action: PayloadAction<PayloadItem>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id && obj.activeType === action.payload.activeType);
			if (findItem) {
				findItem.count--;
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		removeCartItem(state, action: PayloadAction<PayloadItem>) {
			state.items = state.items.filter(obj => !(obj.id === action.payload.id && obj.activeType === action.payload.activeType));
			state.totalPrice = calcTotalPrice(state.items);
		},
		clearCart(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
})

export const { addCartItem, plusCartItem, minusCartItem, removeCartItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
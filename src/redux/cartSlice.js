import { createSlice } from '@reduxjs/toolkit';
//=========================================================================================================================

const initialState = {
	items: [],
	totalPrice: 0,
}

const calcTotalPrice = (items) => {
	return items.reduce((sum, obj) => {
		return (obj.sushiPrice * obj.count) + sum;
	}, 0);
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id && obj.activeType === action.payload.activeType);
			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1, })
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		plusCartItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id && obj.activeType === action.payload.activeType);
			if (findItem) {
				findItem.count++;
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		minusCartItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id && obj.activeType === action.payload.activeType);
			if (findItem) {
				findItem.count--;
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		removeCartItem(state, action) {
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
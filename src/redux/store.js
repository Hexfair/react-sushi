import { configureStore } from '@reduxjs/toolkit';
import sushi from "./sushiSlice";
import filter from './filterSlice';
import cart from './cartSlice';
//=========================================================================================================================

export const store = configureStore({
	reducer: {
		sushi,
		filter,
		cart
	},
})
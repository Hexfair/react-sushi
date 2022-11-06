import { configureStore } from '@reduxjs/toolkit';
import sushi from "./sushiSlice";
import filter from './filterSlice';
import cart from './cartSlice';
import fullSushi from './FullSushiSlice';
//=========================================================================================================================

export const store = configureStore({
	reducer: {
		sushi,
		filter,
		cart,
		fullSushi
	},
})
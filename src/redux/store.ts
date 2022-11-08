import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import sushi from "./sushi/sushiSlice";
import filter from './filter/filterSlice';
import cart from './cart/cartSlice';
import fullSushi from './fullSushi/FullSushiSlice';
//=========================================================================================================================

const store = configureStore({
	reducer: {
		sushi,
		filter,
		cart,
		fullSushi,
	},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Продвинутый диспатч для диспатча функций

export default store
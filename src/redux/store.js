import { configureStore } from '@reduxjs/toolkit';
import sushi from "./sushi/slice";
import filter from './filter/slice';

export const store = configureStore({
	reducer: {
		sushi,
		filter,
	},
})
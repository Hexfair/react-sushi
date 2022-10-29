import { configureStore } from '@reduxjs/toolkit';
import sushi from "./sushi/slice"

export const store = configureStore({
	reducer: {
		sushi,
	},
})
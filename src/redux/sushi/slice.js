import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
}

export const sushiSlice = createSlice({
	name: 'sushi',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload
		},

	},
})

// Action creators are generated for each case reducer function
export const { setItems } = sushiSlice.actions

export default sushiSlice.reducer
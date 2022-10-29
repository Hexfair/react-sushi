import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload
		},

	},
})

// Action creators are generated for each case reducer function
export const { setItems } = filterSlice.actions

export default filterSlice.reducer
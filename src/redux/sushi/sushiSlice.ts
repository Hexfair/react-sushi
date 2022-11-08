import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSushies } from './asyncActions';
import { SushiItemType, SushiSliceInt } from './types';
//=========================================================================================================================

const initialState: SushiSliceInt = {
	items: [],
	status: 'loading',
}

export const sushiSlice = createSlice({
	name: 'sushi',
	initialState,
	reducers: {
		setItems: (state, action: PayloadAction<SushiItemType[]>) => {
			state.items = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSushies.pending, (state) => {
			state.status = 'loading';
			state.items = [];
		});
		builder.addCase(fetchSushies.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchSushies.rejected, (state) => {
			state.status = 'error';
			state.items = [];
		});
	},
})

// Action creators are generated for each case reducer function
export const { setItems } = sushiSlice.actions

export default sushiSlice.reducer
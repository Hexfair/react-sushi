import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SushiItemType } from '../sushi/types';
import { fetchFullSushi } from './asyncActions';
import { FullSushiSliceInt } from './types';
//=========================================================================================================================

const initialState: FullSushiSliceInt = {
	item: {
		id: '',
		imageUrl: '',
		title: '',
		price: 0,
		category: 0,
		popularity: 0,
		hot: false,
		description: '',
	},
	status: 'loading',
}

export const FullSushiSlice = createSlice({
	name: 'fullSushi',
	initialState,
	reducers: {
		setItem: (state, action: PayloadAction<SushiItemType>) => {
			state.item = action.payload;
			state.status = 'success';
		},
		setStatus: (state) => {
			state.status = 'loading'
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFullSushi.pending, (state) => {
			state.status = 'loading';
			state.item = initialState.item;
		});
		builder.addCase(fetchFullSushi.fulfilled, (state, action) => {
			state.item = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchFullSushi.rejected, (state) => {
			state.status = 'error';
			state.item = initialState.item;
		});
	},
})

// Action creators are generated for each case reducer function
export const { setItem, setStatus } = FullSushiSlice.actions

export default FullSushiSlice.reducer
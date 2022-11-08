import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceInt, SortDataType } from './types';
//=========================================================================================================================

const initialState: FilterSliceInt = {
	categoryFilter: 0,
	sortFilter: {
		name: 'популярности',
		sortValue: 'popularity'
	},
	searchFilter: '',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryFilter(state, action: PayloadAction<number>) {
			state.categoryFilter = action.payload;
		},
		setSortFilter(state, action: PayloadAction<SortDataType>) {
			state.sortFilter = action.payload
		},
		setSearchFilter(state, action: PayloadAction<string>) {
			state.searchFilter = action.payload
		},
		setAllFilter(state, action: PayloadAction<FilterSliceInt>) {
			state.categoryFilter = Number(action.payload.categoryFilter);
			state.sortFilter = action.payload.sortFilter;
		},
	},
})

export const { setCategoryFilter, setSortFilter, setSearchFilter, setAllFilter } = filterSlice.actions

export default filterSlice.reducer
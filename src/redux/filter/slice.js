import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
		setCategoryFilter(state, action) {
			state.categoryFilter = action.payload;
		},
		setSortFilter(state, action) {
			state.sortFilter = action.payload
		},
		setSearchFilter(state, action) {
			state.searchFilter = action.payload
		},
		setAllFilter(state, action) {
			state.categoryFilter = Number(action.payload.categoryProperty);
			state.sortFilter = action.payload.sort;
		},
	},
})

export const { setCategoryFilter, setSortFilter, setSearchFilter, setAllFilter } = filterSlice.actions

export default filterSlice.reducer
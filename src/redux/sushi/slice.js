import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchSushies = createAsyncThunk(
	'sushi/fetchSushiesStatus',
	async (params) => {
		const { categoryQuery, sortQuery, searchQuery } = params;
		const response = await axios.get(`https://6359b1f538725a1746b65927.mockapi.io/sushi?${categoryQuery}${sortQuery}${searchQuery}`);
		return response.data
	}
)

const initialState = {
	items: [],
	status: 'loading',
}

export const sushiSlice = createSlice({
	name: 'sushi',
	initialState,
	reducers: {
		setItems: (state, action) => {
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
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//=========================================================================================================================

export const fetchFullSushi = createAsyncThunk(
	'fullSushi/fetchFullSushiStatus',
	async (params) => {
		const response = await axios.get(`https://6359b1f538725a1746b65927.mockapi.io/sushi/` + params);
		return response.data
	}
)

const initialState = {
	item: [],
	status: 'loading',
}

export const FullSushiSlice = createSlice({
	name: 'fullSushi',
	initialState,
	reducers: {
		setItem: (state, action) => {
			state.item = action.payload;
			state.status = 'success';
		},
		setStatus: (state, action) => {
			state.status = 'loading'
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFullSushi.pending, (state) => {
			state.status = 'loading';
			state.item = [];
		});
		builder.addCase(fetchFullSushi.fulfilled, (state, action) => {
			state.item = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchFullSushi.rejected, (state) => {
			state.status = 'error';
			state.item = [];
		});
	},
})

// Action creators are generated for each case reducer function
export const { setItem, setStatus } = FullSushiSlice.actions

export default FullSushiSlice.reducer
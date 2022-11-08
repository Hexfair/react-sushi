import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SushiItemType } from "./types";
//=========================================================================================================================

export const fetchSushies = createAsyncThunk(
	'sushi/fetchSushiesStatus',
	async (params: Record<string, string>) => {
		const { categoryQuery, sortQuery, searchQuery } = params;
		const { data } = await axios.get<SushiItemType[]>(`https://6359b1f538725a1746b65927.mockapi.io/sushi?${categoryQuery}${sortQuery}${searchQuery}`);
		return data;
	}
)
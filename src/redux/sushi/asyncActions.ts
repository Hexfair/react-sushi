import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SushiItemType } from "./types";
//=========================================================================================================================

export const fetchSushies = createAsyncThunk(
	'sushi/fetchSushiesStatus',
	async (params: Record<string, string>) => {
		const { categoryQuery, sortQuery, searchQuery } = params;
		const { data } = await axios.get<SushiItemType[]>(`https://633b5933c1910b5de0c41000.mockapi.io/sushi?${categoryQuery}${sortQuery}${searchQuery}`);
		return data;
	}
)
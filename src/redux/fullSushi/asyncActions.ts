import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SushiItemType } from "../sushi/types";
//=========================================================================================================================

export const fetchFullSushi = createAsyncThunk(
	'fullSushi/fetchFullSushiStatus',
	async (params: string) => {
		const { data } = await axios.get<SushiItemType>(`https://633b5933c1910b5de0c41000.mockapi.io/sushi/${params}`);
		return data;
	}
)
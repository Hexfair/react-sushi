import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SushiItemType } from "../sushi/types";
//=========================================================================================================================

export const fetchFullSushi = createAsyncThunk(
	'fullSushi/fetchFullSushiStatus',
	async (params: string) => {
		const { data } = await axios.get<SushiItemType>(`https://6359b1f538725a1746b65927.mockapi.io/sushi/${params}`);
		return data;
	}
)
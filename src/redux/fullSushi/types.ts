import { SushiItemType } from "../sushi/types";
//=========================================================================================================================

export interface FullSushiSliceInt {
	item: SushiItemType;
	status: 'loading' | 'success' | 'error';
}
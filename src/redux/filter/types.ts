export interface FilterSliceInt {
	categoryFilter: number;
	sortFilter: SortDataType;
	searchFilter: string;
}

export type SearchSushiParams = {
	categoryProperty: number;
	sortProperty: string;
	searchProperty: string;
}

export type SortDataType = {
	name: string;
	sortValue: 'title' | 'popularity' | 'price';
}
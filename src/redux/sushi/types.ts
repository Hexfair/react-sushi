export type SushiItemType = {
	id: string;
	imageUrl: string;
	title: string;
	price: number;
	category: number;
	popularity: number;
	hot: boolean;
	description: string;
}

export interface SushiSliceInt {
	items: SushiItemType[];
	status: 'loading' | 'success' | 'error';
}

export type SushiItemProps = {
	id: string;
	imageUrl: string;
	title: string;
	price: number;
	hot: boolean;
}
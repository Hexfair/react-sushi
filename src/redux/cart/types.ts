export type CartItems = {
	id: string;
	imageUrl: string;
	title: string;
	sushiPrice: number;
	activeType: number;
	count: number;
};

export interface CartSliceInt {
	items: CartItems[];
	totalPrice: number;
}

export type SushiItemCartProps = {
	id: string;
	imageUrl: string;
	title: string;
	sushiPrice: number;
	activeType: number;
	count: number;
}

export type PayloadItem = {
	id: string;
	activeType: number;
}
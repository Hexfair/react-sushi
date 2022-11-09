import { RootState } from "../store";

export const selectorCartState = (state: RootState) => state.cart;
export const selectorCartItemById = (id: string) => (state: RootState) => state.cart.items.filter(obj => obj.id === id)

import { RootState } from "../store";

export const selectorSushiState = (state: RootState) => state.sushi;
export const selectorSushiItemById = (paramsId: string) => (state: RootState) => state.sushi.items.filter(obj => obj.id === paramsId)

export const calcTotalPrice = (items) => {
	return items.reduce((sum, obj) => (obj.sushiPrice * obj.count + sum), 0);
}
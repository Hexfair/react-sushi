import React from "react";
import "./SushiItem.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../redux/cart/cartSlice";
import cn from 'classnames';
import { SushiItemProps } from "../../redux/sushi/types";
import { selectorCartItemById } from "../../redux/cart/selectors";
//=========================================================================================================================

export const typeNames = ['6 шт.', '8 шт.'];

//=========================================================================================================================
const SushiItem: React.FC<SushiItemProps> = ({ id, imageUrl, title, price, hot }) => {
	const dispatch = useDispatch();
	const [activeType, setActiveType] = React.useState(0);

	const onClickAddItem = () => {
		const payload = {
			id,
			imageUrl,
			title,
			sushiPrice,
			activeType,
			count: 0,
		};
		dispatch(addCartItem(payload))
	}

	const incPrice = Math.round(price * 1.3);
	const sushiPrice = activeType === 0 ? price : incPrice;

	const itemsForCount = useSelector(selectorCartItemById(id));
	const sushiesCount = itemsForCount.reduce((sum: number, obj) => (obj.count + sum), 0);

	return (
		<div className='content__item item-content'>
			<div className='item-content'>
				{hot &&
					<div className='item-content__hot'>
						<svg width="22px" height="22px" viewBox="0 0 512 512" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M330.67 263.12V173.4l-52.75-24.22C219.44 218.76 197.58 400 56 400a56 56 0 0 0 0 112c212.64 0 370.65-122.87 419.18-210.34l-37.05-38.54zm131.09-128.37C493.92 74.91 477.18 26.48 458.62 3a8 8 0 0 0-11.93-.59l-22.9 23a8.06 8.06 0 0 0-.89 10.23c6.86 10.36 17.05 35.1-1.4 72.32A142.85 142.85 0 0 0 364.34 96c-28 0-54 8.54-76.34 22.59l74.67 34.29v78.24h89.09L506.44 288c3.26-12.62 5.56-25.63 5.56-39.31a154 154 0 0 0-50.24-113.94z" /></svg>
					</div>
				}
				<Link to={`/sushi/${id}`}>
					<div className='item-content__image'>
						<img src={imageUrl} alt='суши' />
					</div>
					<div className='item-content__lable'>{title}</div>
				</Link>
				<div className='item-content__options options-item'>
					{typeNames.map((obj, index) => (
						<button
							key={index}
							onClick={() => setActiveType(index)}
							className={cn('options-item__count', { 'active': index === activeType })}>
							{obj}
						</button>
					))}
					<div className='options-item__price'>{sushiPrice} руб.</div>
				</div>
				<button onClick={onClickAddItem} className='item-content__button button-item'>
					<span className='button-item__add'>Добавить в корзину</span>
					{sushiesCount > 0 && <span className='button-item__quantity'>{sushiesCount}</span>}
				</button>
			</div>
		</div>
	)
}

export default SushiItem;
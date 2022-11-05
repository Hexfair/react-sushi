import React from "react";
import { typeNames } from "../SushiItem/SushiItem";
import { plusCartItem, minusCartItem, removeCartItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
//=========================================================================================================================

const SushiItemCart = ({ id, imageUrl, title, sushiPrice, activeType, count }) => {
	const dispatch = useDispatch();

	const onClickPlusItem = (id, activeType) => {		// Добавить суши +
		const payload = { id, activeType }
		dispatch(plusCartItem(payload))
	}

	const onClickMinusItem = (id, activeType) => {	// Убрать суши -
		const payload = { id, activeType }
		dispatch(minusCartItem(payload))
	}

	const onClickRemoveItem = (id, activeType) => {		// Удалить суши Х
		const payload = { id, activeType }
		dispatch(removeCartItem(payload))
	}

	return (
		<div className="cart__item item-cart">
			<div className="item-cart__info info-cart">
				<div className="info-cart__image">
					<img src={imageUrl} alt="Суши" />
				</div>
				<div className="info-cart__description">
					<p className="info-cart__lable">{title}</p>
					<p className="info-cart__amount">{typeNames[activeType]}</p>
				</div>
			</div>
			<div className="item-cart__body">
				<div className="item-cart__button">
					<button onClick={() => onClickMinusItem(id, activeType)} className="item-cart__button--minus" disabled={count === 1}>
						<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
							<line x1="8" y1="12" x2="16" y2="12"></line>
						</svg>
					</button>
					<span className="item-cart__quantity">{count}</span>
					<button onClick={() => onClickPlusItem(id, activeType)} className="item-cart__button--plus">
						<svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
							<line x1="12" y1="8" x2="12" y2="16"></line>
							<line x1="8" y1="12" x2="16" y2="12"></line>
						</svg>
					</button>
				</div>
				<div className="item-cart__price">{sushiPrice * count} руб.</div>
				<button onClick={() => onClickRemoveItem(id, activeType)} className="item-cart__clear">
					<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
						<path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339" />
						<path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z" />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default SushiItemCart;
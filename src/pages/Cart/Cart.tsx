import React from "react";
import SushiItemCart from "../../components/SushiItemCart/SushiItemCart";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cartSlice";
import Error from "../Error/Error";
import { Link } from "react-router-dom";
import "./Cart.scss";
import image from "../../assets/cart-empty.png"
import { selectorCartState } from "../../redux/cart/selectors";
//=========================================================================================================================

const Cart: React.FC = () => {
	const dispatch = useDispatch();
	const { items, totalPrice } = useSelector(selectorCartState);

	const onClickClearCart = () => {			// Очистка корзины
		dispatch(clearCart());
	}

	if (!totalPrice) {			// Возвращаем компонент Пустая корзина, если там ничего нет
		const title = 'Ваша корзина пуста... :('
		return <Error title={title} image={image} />
	}

	return (
		<div className="cart">
			<div className="container">
				<div className="cart__top top-cart">
					<div className="top-cart__title">
						<svg className='top-cart__title--icon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<circle cx="9" cy="21" r="1"></circle>
							<circle cx="20" cy="21" r="1"></circle>
							<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
						<span className='top-cart__title--text'>Корзина</span>
					</div>
					<button onClick={onClickClearCart} className="top-cart__clear">
						<svg className="top-cart__clear--icon" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg">
							<path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" />
						</svg>
						<span className='top-cart__clear--text'>Очистить корзину</span>
					</button>
				</div>
				<div className="cart__content">
					{items && items.map((obj, index) => (
						<SushiItemCart key={index} {...obj} />
					))}
				</div>
				<div className="cart__total-price">Сумма заказа: <span>{totalPrice} руб.</span></div>
				<div className="cart__bottom bottom-cart">
					<Link to="/">
						<button className="bottom-cart__back">
							<svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill="#030D45" fillRule="evenodd" clipRule="evenodd" d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z" />
							</svg>
							<span>Вернуться назад</span>
						</button>
					</Link>
					<button className="bottom-cart__pay">
						<span>Оплатить</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart;
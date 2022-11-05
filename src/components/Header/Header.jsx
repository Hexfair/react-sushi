import React from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//=========================================================================================================================

const Header = () => {

	const { totalPrice } = useSelector(state => state.cart);

	return (
		<div className='header'>
			<div className='header__body'>
				<Link to="/" className='header__logo'>
					<img src={logo} alt='Логотип' />
				</Link>
				<div className='header__title'>SUSHI PARTY</div>
				<Link to="/cart">
					<button className='header__button'>
						<svg className='header__button--cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#756868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<circle cx="9" cy="21" r="1"></circle>
							<circle cx="20" cy="21" r="1"></circle>
							<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
						<span className='header__button--price'>{totalPrice} р.</span>
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Header;
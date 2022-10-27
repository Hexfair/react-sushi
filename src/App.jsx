import React from "react";
import logo from "./assets/logo.png";
import cartLogo from "./assets/cart-logo.png";
//=========================================================================================================================

function App() {
	return (
		<div className='wrapper'>
			<div className='container'>

				<div className='header'>
					<div className='header__body'>
						<div className='header__logo'>
							<img src={logo} alt='Логотип' />
						</div>
						<div className='header__title'>SUSHI PARTY</div>
						<div className='header__button'>
							<button>
								<img src={cartLogo} alt='Корзина' />
								<span>1200 руб.</span>
							</button>
						</div>
					</div>
				</div>

				<div className='filter'>
					<div className='filter__row'>
						<div className='filter__column'>
							<div className='filter__lable'>Фильтр:</div>
						</div>
						<div className='filter__column'>
							<ul className='filter__list'>
								<li className='filter__item'>Все</li>
								<li className='filter__item'>Все</li>
								<li className='filter__item'>Все</li>
								<li className='filter__item'>Все</li>
								<li className='filter__item'>Все</li>
								<li className='filter__item'>Все</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='sort'>
					<div className='sort__label'>Сортировать по: <span className='sort__text'></span></div>
					<div className='sort__popup'>
						<ul className='sort__list'>
							<li className='sort__item'>Все</li>
							<li className='sort__item'>Все</li>
							<li className='sort__item'>Все</li>
						</ul>
					</div>
				</div>

				<div className='content'>
					<div className='content__body'>
						<div className='content__item item-content'>
							<div className='item-content'>
								<div className='item-content__hot'></div>
								<div className='item-content__image'></div>
								<div className='item-content__lable'></div>
								<div className='item-content__options options-item'>
									<div className='options-item__count'>
										<span className='options-item__count--six'>6 шт.</span>
										<span className='options-item__count--eight'>8 шт.</span>
									</div>
									<div className='options-item__price'></div>
								</div>
								<button className='item-content__button button-item'>
									<span className='button-item__add'>Добавить в корзину</span>
									<span className='button-item__quantity'>2</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default App;

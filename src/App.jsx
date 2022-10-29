import React from "react";
import logo from "./assets/logo.png";
import "./scss/App.scss";
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
						<button className='header__button'>
							<svg className='header__button--cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#756868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="9" cy="21" r="1"></circle>
								<circle cx="20" cy="21" r="1"></circle>
								<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
							<span className='header__button--price'>1200 р.</span>
						</button>
					</div>
				</div>

				<div className='filter'>
					<div className='filter__row'>
						<div className='filter__type type-filter'>
							<div className='type-filter__lable'>Фильтр:</div>
							<ul className='type-filter__list'>
								<li className='type-filter__item active'>Все</li>
								<li className='type-filter__item'>Классические</li>
								<li className='type-filter__item'>Острые</li>
								<li className='type-filter__item'>Запеченные</li>
								<li className='type-filter__item'>Эконом</li>
							</ul>
						</div>
						<div className='filter__search search-filter'>
							<input className='search-filter__input' placeholder='Поиск...' />
							<svg className="search-filter__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" enableBackground="new 0 0 129 129" >
								<path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z" />
							</svg>
						</div >
					</div>
				</div>

				<div className='sort'>
					<div className='sort__label'>Сортировать по: <span className='sort__text active'>названию</span></div>
					<div className='sort__popup active'>
						<ul className='sort__list'>
							<li className='sort__item active'>названию</li>
							<li className='sort__item'>популярности</li>
							<li className='sort__item'>цене</li>
						</ul>
					</div>
				</div>

				<div className='content'>
					<div className='content__body'>
						<div className='content__item item-content'>
							<div className='item-content'>
								<div className='item-content__hot'>
								</div>
								<div className='item-content__image'>
									<img src='https://static.pizzasushiwok.ru/images/menu_new/159-300.jpg' alt='суши' />
								</div>
								<div className='item-content__lable'>Унаги маки</div>
								<div className='item-content__options options-item'>
									<div className='options-item__count'>
										<button className='options-item__count--six active'>6 шт.</button>
										<button className='options-item__count--eight'>8 шт.</button>
									</div>
									<div className='options-item__price'>240 руб.</div>
								</div>
								<button className='item-content__button button-item'>
									<span className='button-item__add'>Добавить в корзину</span>
									<span className='button-item__quantity'>2</span>
								</button>
							</div>

						</div>

						<div className='content__item item-content'>
							<div className='item-content'>
								<div className='item-content__hot'>
									<svg width="22px" height="22px" viewBox="0 0 512 512" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M330.67 263.12V173.4l-52.75-24.22C219.44 218.76 197.58 400 56 400a56 56 0 0 0 0 112c212.64 0 370.65-122.87 419.18-210.34l-37.05-38.54zm131.09-128.37C493.92 74.91 477.18 26.48 458.62 3a8 8 0 0 0-11.93-.59l-22.9 23a8.06 8.06 0 0 0-.89 10.23c6.86 10.36 17.05 35.1-1.4 72.32A142.85 142.85 0 0 0 364.34 96c-28 0-54 8.54-76.34 22.59l74.67 34.29v78.24h89.09L506.44 288c3.26-12.62 5.56-25.63 5.56-39.31a154 154 0 0 0-50.24-113.94z" /></svg>
								</div>
								<div className='item-content__image'>
									<img src='https://static.pizzasushiwok.ru/images/menu_new/159-300.jpg' alt='суши' />
								</div>
								<div className='item-content__lable'>Унаги маки</div>
								<div className='item-content__options options-item'>
									<div className='options-item__count'>
										<button className='options-item__count--six active'>6 шт.</button>
										<button className='options-item__count--eight'>8 шт.</button>
									</div>
									<div className='options-item__price'>240 руб.</div>
								</div>
								<button className='item-content__button button-item'>
									<span className='button-item__add'>Добавить в корзину</span>
									<span className='button-item__quantity'>2</span>
								</button>
							</div>

						</div>

						<div className='content__item item-content'>
							<div className='item-content'>
								<div className='item-content__hot'></div>
								<div className='item-content__image'>
									<img src='https://static.pizzasushiwok.ru/images/menu_new/159-300.jpg' alt='суши' />
								</div>
								<div className='item-content__lable'>Унаги маки</div>
								<div className='item-content__options options-item'>
									<div className='options-item__count'>
										<button className='options-item__count--six active'>6 шт.</button>
										<button className='options-item__count--eight'>8 шт.</button>
									</div>
									<div className='options-item__price'>240 руб.</div>
								</div>
								<button className='item-content__button button-item'>
									<span className='button-item__add'>Добавить в корзину</span>
									<span className='button-item__quantity'>2</span>
								</button>
							</div>

						</div>

						<div className='content__item item-content'>
							<div className='item-content'>
								<div className='item-content__hot'></div>
								<div className='item-content__image'>
									<img src='https://static.pizzasushiwok.ru/images/menu_new/159-300.jpg' alt='суши' />
								</div>
								<div className='item-content__lable'>Унаги маки</div>
								<div className='item-content__options options-item'>
									<div className='options-item__count'>
										<button className='options-item__count--six active'>6 шт.</button>
										<button className='options-item__count--eight'>8 шт.</button>
									</div>
									<div className='options-item__price'>240 руб.</div>
								</div>
								<button className='item-content__button button-item'>
									<span className='button-item__add'>Добавить в корзину</span>
									<span className='button-item__quantity'>2</span>
								</button>
							</div>

						</div>

						<div className='content__item item-content'>
							<div className='item-content'>
								<div className='item-content__hot'></div>
								<div className='item-content__image'>
									<img src='https://static.pizzasushiwok.ru/images/menu_new/159-300.jpg' alt='суши' />
								</div>
								<div className='item-content__lable'>Унаги маки</div>
								<div className='item-content__options options-item'>
									<div className='options-item__count'>
										<button className='options-item__count--six active'>6 шт.</button>
										<button className='options-item__count--eight'>8 шт.</button>
									</div>
									<div className='options-item__price'>240 руб.</div>
								</div>
								<button className='item-content__button button-item'>
									<span className='button-item__add'>Добавить в корзину</span>
									<span className='button-item__quantity'>2</span>
								</button>
							</div>

						</div>

						<div className='content__item item-content'>
							<div className='item-content'>
								<div className='item-content__hot'></div>
								<div className='item-content__image'>
									<img src='https://static.pizzasushiwok.ru/images/menu_new/159-300.jpg' alt='суши' />
								</div>
								<div className='item-content__lable'>Унаги маки</div>
								<div className='item-content__options options-item'>
									<div className='options-item__count'>
										<button className='options-item__count--six active'>6 шт.</button>
										<button className='options-item__count--eight'>8 шт.</button>
									</div>
									<div className='options-item__price'>240 руб.</div>
								</div>
								<button className='item-content__button button-item'>
									<span className='button-item__add'>Добавить в корзину</span>
									<span className='button-item__quantity'>2</span>
								</button>
							</div>

						</div>

						<div className='content__item item-content'>
							<div className='item-content'>
								<div className='item-content__hot'></div>
								<div className='item-content__image'>
									<img src='https://static.pizzasushiwok.ru/images/menu_new/159-300.jpg' alt='суши' />
								</div>
								<div className='item-content__lable'>Унаги маки</div>
								<div className='item-content__options options-item'>
									<div className='options-item__count'>
										<button className='options-item__count--six active'>6 шт.</button>
										<button className='options-item__count--eight'>8 шт.</button>
									</div>
									<div className='options-item__price'>240 руб.</div>
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

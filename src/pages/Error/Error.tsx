import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";
//=========================================================================================================================

type ErrorProps = {
	title: string;
	image: string;
}

const Error: React.FC<ErrorProps> = ({ title, image }) => {
	return (
		<div className="error">
			<div className='error__title'>{title}</div>
			<div className='error__text'>
				<p>Возможно, такой страницы не существует</p>
				<p>Попробуйте перейти на главную страницу!</p>
			</div>
			<div className='error__image'>
				<img src={image} alt="Пустая корзина" />
			</div>
			<Link to="/">
				<button className="error__back">
					<svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill="#030D45" fillRule="evenodd" clipRule="evenodd" d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z" />
					</svg>
					<span>Вернуться на главную</span>
				</button>
			</Link>
		</div>
	)
}

export default Error;
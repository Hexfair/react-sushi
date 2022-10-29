import React from "react";
import "./Sort.scss";
import cn from 'classnames';

const sortNames = ['названию', 'популярности', 'цене'];

const Sort = () => {

	const [openPopup, setOpenPopup] = React.useState(false);
	const onCliclOpenPopup = () => {
		setOpenPopup(!openPopup);
	}

	const [sortActive, setSortActive] = React.useState('названию');
	const onClickChangeSort = (index) => {
		setSortActive(sortNames[index]);
		setOpenPopup(false);
	}

	return (
		<div className='sort'>
			<div className='sort__label'>Сортировать по: <span className='sort__text' onClick={onCliclOpenPopup}>{sortActive}</span></div>
			<div className={cn('sort__popup', { 'active': openPopup })}>
				<ul className='sort__list'>
					{sortNames.map((obj, index) => (
						<li key={index} className={obj === sortActive ? 'active' : ''} onClick={() => { onClickChangeSort(index) }}>{obj}</li>
					))}
				</ul>
			</div>
		</div >
	)
}

export default Sort;
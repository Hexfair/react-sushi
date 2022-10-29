import React from "react";
import "./Sort.scss";
import cn from 'classnames';

const sortData = [
	{ name: 'названию', sortValue: 'title' },
	{ name: 'популярности', sortValue: 'popularity' },
	{ name: 'цене', sortValue: 'price' },
];

const Sort = ({ value, setSortType }) => {

	const [openPopup, setOpenPopup] = React.useState(false);
	const onClickOpenPopup = () => {
		setOpenPopup(!openPopup);
	}

	const onClickChangeSort = (obj) => {
		setSortType(obj);
		setOpenPopup(false);
	}

	return (
		<div className='sort'>
			<div className='sort__label'>Сортировать по: <span className='sort__text' onClick={onClickOpenPopup}>{value.name}</span></div>
			<div className={cn('sort__popup', { 'active': openPopup })}>
				<ul className='sort__list'>
					{sortData.map((obj, index) => (
						<li key={index} className={obj.sortValue === value.sortValue ? 'active' : ''} onClick={() => { onClickChangeSort(obj) }}>{obj.name}</li>
					))}
				</ul>
			</div>
		</div >
	)
}

export default Sort;
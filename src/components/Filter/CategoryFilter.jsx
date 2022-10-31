import React from "react";
//=========================================================================================================================

const filterData = ['Все', 'Классические', 'Острые', 'Запеченные', 'Эконом'];

const CategoryFilter = ({ categoryFilter, onClickChangeFilter }) => {
	return (
		<div className='filter__category category-filter'>
			<div className='category-filter__lable'>Фильтр:</div>
			<ul className='category-filter__list'>
				{filterData.map((obj, index) => (
					<li
						key={index}
						className={categoryFilter === index ? 'active' : ''}
						onClick={() => { onClickChangeFilter(index) }}
					>
						{obj}
					</li>
				))}
			</ul>
		</div>
	)
}

export default CategoryFilter;
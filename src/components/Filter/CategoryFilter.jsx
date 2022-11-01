import React from "react";
import { setCategoryFilter } from "../../redux/filter/slice";
import { useDispatch, useSelector } from "react-redux";
//=========================================================================================================================

const filterData = ['Все', 'Классические', 'Острые', 'Запеченные', 'Эконом'];

const CategoryFilter = () => {
	const dispatch = useDispatch();
	const { categoryFilter } = useSelector(state => state.filter);

	const onClickChangeFilter = (index) => {
		dispatch(setCategoryFilter(index));
	}

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
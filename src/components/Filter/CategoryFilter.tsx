import React from "react";
import { setCategoryFilter } from "../../redux/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectorFilterState } from "../../redux/filter/selectors";
//=========================================================================================================================

const filterData = ['Все', 'Классические', 'Острые', 'Запеченные', 'Эконом'];

const CategoryFilter: React.FC = () => {
	const dispatch = useDispatch();
	const { categoryFilter } = useSelector(selectorFilterState);

	const onClickChangeFilter = (index: number) => {
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
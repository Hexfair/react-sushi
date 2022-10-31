import React from "react";
import CategoryFilter from "./CategoryFilter";
import SearchFilter from "./SearchFilter";
import "./Filter.scss";


const Filter = ({ categoryFilter, onClickChangeFilter }) => {

	return (
		<div className='filter'>
			<div className='filter__row'>
				<CategoryFilter
					categoryFilter={categoryFilter}
					onClickChangeFilter={(index) => { onClickChangeFilter(index) }}
				/>
				<SearchFilter />
			</div>
		</div>
	)
}

export default Filter;
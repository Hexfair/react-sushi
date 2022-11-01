import React from "react";
import CategoryFilter from "./CategoryFilter";
import SearchFilter from "./SearchFilter";
import "./Filter.scss";


const Filter = () => {

	return (
		<div className='filter'>
			<div className='filter__row'>
				<CategoryFilter />
				<SearchFilter />
			</div>
		</div>
	)
}

export default Filter;
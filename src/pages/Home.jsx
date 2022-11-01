import React from "react";
import Filter from "../components/Filter/Filter";
import Sort from "../components/Sort/Sort";
import SushiItem from "../components/SushiItem/SushiItem";
import SushiSkeleton from "../components/SushiItem/SushiSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchSushies } from "../redux/sushi/slice";
//=========================================================================================================================

const Home = () => {

	const dispatch = useDispatch();
	const { items, status } = useSelector(state => state.sushi);
	const { sortFilter, searchFilter, categoryFilter } = useSelector(state => state.filter);




	React.useEffect(() => {
		const categoryQuery = categoryFilter > 0 ? `category=${categoryFilter}` : '';
		const sortQuery = `&sortBy=${sortFilter.sortValue}`;
		const searchQuery = searchFilter ? `&search=${searchFilter}` : '';
		dispatch(fetchSushies({ categoryQuery, sortQuery, searchQuery }));
	}, [categoryFilter, sortFilter, searchFilter])

	// React.useEffect(() => {
	// 	setIsLoading(true);
	// 	async function getSushi() {
	// 		try {
	// 			//const categoryQuery = categoryType > 0 ? `category=${categoryType}` : '';
	// 			//const sortQuery = `&sortBy=${sortType.sortValue}`;
	// 			//const searchQuery = searchType ? `&search=${searchType}` : '';

	// 			const response = await axios.get(`https://6359b1f538725a1746b65927.mockapi.io/sushi?${categoryQuery}${sortQuery}${searchQuery}`);
	// 			dispatch(setItems(response.data));
	// 			setIsLoading(false);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// 	getSushi();
	// }, [categoryType, sortType, searchType]);

	const sushies = items.map((obj, index) => (<SushiItem key={obj.id} {...obj} />))
	const skeletons = [...new Array(6)].map((_, index) => <SushiSkeleton key={index} />);

	return (
		<>
			<Filter />
			<Sort
			//value={sortType}
			//setSortType={(obj) => { onChangeSort(obj) }}
			/>
			<div className='content'>
				<div className='content__body'>
					{status === 'loading' ? skeletons : sushies}
				</div>
			</div>
		</>
	)
}

export default Home;
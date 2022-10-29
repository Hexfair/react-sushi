import React from "react";
import SushiItem from "./components/SushiItem/SushiItem";
import "./scss/App.scss";
import axios from "axios";

import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Sort from "./components/Sort/Sort";
import SushiSkeleton from "./components/SushiItem/SushiSkeleton";
//=========================================================================================================================

function App() {

	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const [categoryType, setCategoryType] = React.useState(0);
	const onChangeCategory = (id) => {
		setCategoryType(id);
	}

	const [sortType, setSortType] = React.useState({ name: 'названию', sortValue: 'title' });
	const onChangeSort = (obj) => {
		setSortType(obj);
	}


	React.useEffect(() => {
		async function getSushi() {
			try {
				const categoryQuery = categoryType;
				const sortQuery = sortType.sortValue;
				const response = await axios.get(`https://6359b1f538725a1746b65927.mockapi.io/sushi?category=${categoryQuery > 0 ? categoryQuery : ''}&sortBy=${sortQuery}`);
				setItems(response.data);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		}
		getSushi();
	}, [categoryType, sortType]);



	const sushies = items.map((obj, index) => (<SushiItem key={obj.id} {...obj} />))
	const skeletons = [...new Array(6)].map((_, index) => <SushiSkeleton key={index} />);
	return (
		<div className='wrapper'>
			<div className='container'>
				<Header />
				<Filter value={categoryType} setCategoryType={(id) => { onChangeCategory(id) }} />
				<Sort value={sortType} setSortType={(obj) => { onChangeSort(obj) }} />
				<div className='content'>
					<div className='content__body'>
						{isLoading ? skeletons : sushies}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

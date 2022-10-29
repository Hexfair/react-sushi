import React from "react";
import SushiItem from "./components/SushiItem/SushiItem";
import "./scss/App.scss";
import axios from "axios";

import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Sort from "./components/Sort/Sort";
//=========================================================================================================================

function App() {

	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		async function getSushi() {
			try {
				const response = await axios.get('https://6359b1f538725a1746b65927.mockapi.io/sushi');
				const items = response.data;
				setItems(items);
			} catch (error) {
				console.error(error);
			}
		}
		getSushi();
	}, []);


	return (
		<div className='wrapper'>
			<div className='container'>
				<Header />
				<Filter />
				<Sort />
				<div className='content'>
					<div className='content__body'>
						{items.map((obj, index) => (
							<SushiItem key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

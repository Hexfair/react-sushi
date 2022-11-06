import React from "react";
import qs from "qs";
import { useNavigate } from "react-router";
import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Sort/Sort";
import SushiItem from "../../components/SushiItem/SushiItem";
import SushiSkeleton from "../../components/SushiItem/SushiSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchSushies } from "../../redux/sushiSlice";
import { setAllFilter } from "../../redux/filterSlice";
import { sortData } from "../../components/Sort/Sort";
import image from "../../assets/home-error.png";
import Error from "../Error/Error";
//=========================================================================================================================

const Home = () => {

	const dispatch = useDispatch();
	const { items, status } = useSelector(state => state.sushi);
	const { sortFilter, searchFilter, categoryFilter } = useSelector(state => state.filter);

	const isSearch = React.useRef(false);
	const isMounted = React.useRef(false);

	/* Получаем параметры из редакса (сортировка, фильтрация), делаем из них строчку и вшиваем в адресную строку браузера */
	const navigate = useNavigate();
	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sortFilter.sortValue,
				categoryProperty: categoryFilter,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryFilter, sortFilter])

	/* Получаем параметры из строки браузера (сортировка, фильтрация) и диспатчим их в редакс */
	React.useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = sortData.find(obj => obj.sortValue === params.sortProperty)
			dispatch(setAllFilter({
				...params,
				sort
			}))
			isSearch.current = true;
		}
	}, [])

	/* Основной запрос суши с бэкенда */
	React.useEffect(() => {
		if (!isSearch.current) {
			const categoryQuery = categoryFilter > 0 ? `category=${categoryFilter}` : '';
			const sortQuery = `&sortBy=${sortFilter.sortValue}`;
			const searchQuery = searchFilter ? `&search=${searchFilter}` : '';
			dispatch(fetchSushies({ categoryQuery, sortQuery, searchQuery }));
		}
		isSearch.current = false;
	}, [categoryFilter, sortFilter, searchFilter])

	const sushies = items.map((obj, index) => (<SushiItem key={obj.id} {...obj} />))
	const skeletons = [...new Array(6)].map((_, index) => <SushiSkeleton key={index} />);

	if (status === 'error') {
		const title = 'Ошибка загрузки данных с сервера...:('
		return <Error title={title} image={image} />
	}

	return (
		<>
			<Filter />
			<Sort />
			<div className='content'>
				<div className='content__body'>
					{status === 'loading' ? skeletons : sushies}
				</div>
			</div>
		</>
	)
}

export default Home;
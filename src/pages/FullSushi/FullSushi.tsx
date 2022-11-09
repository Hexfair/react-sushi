import React from "react";
import "./FullSushi.scss";
import { useSelector } from "react-redux";
import { typeNames } from "../../components/SushiItem/SushiItem";
import cn from "classnames";
import { setItem, setStatus } from "../../redux/fullSushi/FullSushiSlice";
import { addCartItem } from "../../redux/cart/cartSlice";
import { useParams, Link } from "react-router-dom";
import image from "../../assets/full-sushi-empty.png";
import SushiSkeleton from "../../components/SushiItem/SushiSkeleton";
import Error from "../Error/Error";
import { useAppDispatch } from "../../redux/store";
import { fetchFullSushi } from "../../redux/fullSushi/asyncActions";
import { CartItems } from "../../redux/cart/types";
import { selectorFullSushiState } from "../../redux/fullSushi/selectors";
import { selectorCartItemById } from "../../redux/cart/selectors";
import { selectorSushiItemById } from "../../redux/sushi/selectors";
//=========================================================================================================================

const FullSushi: React.FC = () => {

	const params = useParams<string>();
	const paramsId = params.id ? params.id : "";

	const dispatch = useAppDispatch();

	const { item, status } = useSelector(selectorFullSushiState);
	const { id, imageUrl, title, price } = item;
	const itemsForCount = useSelector(selectorCartItemById(id));

	/* Ищем, есть ли в редаксе суши с таким id */
	const itemsFromSushies = useSelector(selectorSushiItemById(paramsId));
	const sushiesCount = itemsForCount.reduce((sum: number, obj) => (obj.count + sum), 0);

	const [activeType, setActiveType] = React.useState<number>(0);

	/* Если суши есть в редаксе, то берем данные из редакса, иначе делаем запрос данных на бэкенд */
	React.useEffect(() => {
		dispatch(setStatus());
		itemsFromSushies.length ? dispatch(setItem(itemsFromSushies[0])) : dispatch(fetchFullSushi(paramsId));
	}, [])

	const onClickAddItem = () => {
		const payload: CartItems = {
			id,
			imageUrl,
			title,
			sushiPrice,
			activeType,
			count: 0,
		};
		dispatch(addCartItem(payload))
	}

	const incPrice = Math.round(price * 1.3);
	const sushiPrice = activeType === 0 ? price : incPrice;

	if (status === 'loading') {
		return <div className='full-sushi-loading'>	<SushiSkeleton />	</div>
	}

	if (status === 'error') {
		const title = 'Ошибка загрузки данных... :('
		return <Error title={title} image={image} />
	}

	return (
		<div className="full-sushi">
			<div className="container">
				<div className='full-sushi__body'>
					<div className='full-sushi__image'>
						<img src={item.imageUrl} alt="Суши" />
					</div>

					<div className='full-sushi__info info-sushi'>
						<div className='info-sushi__title'>
							{item.hot &&
								<svg width="32px" height="32px" viewBox="0 0 512 512" fill="red" xmlns="http://www.w3.org/2000/svg">
									<path d="M330.67 263.12V173.4l-52.75-24.22C219.44 218.76 197.58 400 56 400a56 56 0 0 0 0 112c212.64 0 370.65-122.87 419.18-210.34l-37.05-38.54zm131.09-128.37C493.92 74.91 477.18 26.48 458.62 3a8 8 0 0 0-11.93-.59l-22.9 23a8.06 8.06 0 0 0-.89 10.23c6.86 10.36 17.05 35.1-1.4 72.32A142.85 142.85 0 0 0 364.34 96c-28 0-54 8.54-76.34 22.59l74.67 34.29v78.24h89.09L506.44 288c3.26-12.62 5.56-25.63 5.56-39.31a154 154 0 0 0-50.24-113.94z" />
								</svg>
							}
							<span>{item.title}</span>
						</div>
						<div className='info-sushi__description'>{item.description}</div>
						<div className='info-sushi__options options-info-sushi'>
							<div className='options-info-sushi__button'>
								{typeNames.map((obj, index) => (
									<button
										key={index}
										onClick={() => setActiveType(index)}
										className={cn('options-info-sushi__count', { 'active': index === activeType })}>
										{obj}
									</button>
								))}
							</div>
							<div className='options-info-sushi__price'>{sushiPrice} руб.</div>
						</div>
						{<button onClick={onClickAddItem} className='info-sushi__button button-info-sushi'>
							<span className='button-info-sushi__add'>Добавить в корзину</span>
							{sushiesCount > 0 && <span className='button-info-sushi__quantity'>{sushiesCount}</span>}
						</button>
						}
					</div>
				</div>
				<Link to="/">
					<button className="full-sushi__back">
						<svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill="#030D45" fillRule="evenodd" clipRule="evenodd" d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z" />
						</svg>
						<span>Вернуться на главную</span>
					</button>
				</Link>
			</div>
		</div>
	)
}

export default FullSushi;
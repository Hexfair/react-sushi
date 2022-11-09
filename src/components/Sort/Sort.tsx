import React from "react";
import "./Sort.scss";
import cn from 'classnames';
import { setSortFilter } from "../../redux/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { SortDataType } from "../../redux/filter/types";
import { selectorFilterState } from "../../redux/filter/selectors";
//=========================================================================================================================

export const sortData: SortDataType[] = [
	{ name: 'названию', sortValue: 'title' },
	{ name: 'популярности', sortValue: 'popularity' },
	{ name: 'цене', sortValue: 'price' },
];

//=========================================================================================================================
const Sort: React.FC = () => {
	const dispatch = useDispatch();
	const { sortFilter } = useSelector(selectorFilterState);

	const [openPopup, setOpenPopup] = React.useState(false);	// Отктрытие попапа
	const onClickOpenPopup = () => { setOpenPopup(!openPopup) };

	const onClickChangeSort = (obj: SortDataType) => {											// Диспатч выбранной сортировки в редакс и закрытие попапа
		dispatch(setSortFilter(obj));
		setOpenPopup(false);
	}

	const sortRef = React.useRef<HTMLDivElement>(null);		// Закрытие попапа при нажатии вне попапа
	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as MouseEvent & { path: Node[] }			// Лайфхак для того, чтобы не подчеркивал path
			if (sortRef.current && !_event.path.includes(sortRef.current)) {
				setOpenPopup(false);
			}
		}
		document.body.addEventListener('click', handleClickOutside);
		return () => document.body.removeEventListener('click', handleClickOutside);
	}, [])

	return (
		<div ref={sortRef} className='sort'>
			<div className='sort__label'>Сортировать по: <span className='sort__text' onClick={onClickOpenPopup}>{sortFilter.name}</span></div>
			<div className={cn('sort__popup', { 'active': openPopup })}>
				<ul className='sort__list'>
					{sortData.map((obj, index) => (
						<li key={index} className={obj.name === sortFilter.name ? 'active' : ''} onClick={() => { onClickChangeSort(obj) }}>{obj.name}</li>
					))}
				</ul>
			</div>
		</div >
	)
}

export default Sort;
import React from "react";
import { useDispatch } from "react-redux";
import { setSearchFilter } from "../../redux/filterSlice";
import debounce from "lodash.debounce";
//=========================================================================================================================

const SearchFilter = () => {
	const dispatch = useDispatch();

	const [value, setValue] = React.useState('');	// Локальный стейт инпута

	const onChangeInput = (event) => {						// Отправка строки поиска в редакс и локальный стейт
		updateSearchValue(event.target.value);
		setValue(event.target.value);
	}

	const updateSearchValue = React.useCallback(	// Диспатч строки поиска в редакс, использование debounce 
		debounce((str) => {
			dispatch(setSearchFilter(str))
		}, 750),
		[],
	);

	const inputRef = React.useRef(null);					// Логика для очистки инпута после нажатия на крестик и делаем сразу фокус на инпут
	const onClickCloseIcon = () => {
		dispatch(setSearchFilter(''));
		setValue('');
		inputRef.current?.focus();
	}

	return (
		<div className='filter__search search-filter'>
			<input
				ref={inputRef}
				onChange={onChangeInput}
				value={value}
				className='search-filter__input'
				placeholder='Поиск...' />
			{!value &&
				<svg className="search-filter__icon search-filter__icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" enableBackground="new 0 0 129 129" >
					<path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z" />
				</svg>
			}
			{value &&
				<svg onClick={onClickCloseIcon} className="search-filter__icon search-filter__icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" >
					<path d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z" fill="#121313" id="Close" />
				</svg>
			}
		</div >
	)
}

export default SearchFilter;
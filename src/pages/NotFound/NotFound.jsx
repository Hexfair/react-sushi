import React from "react";
import Error from "../Error/Error";
import image from "../../assets/not-found.png";
//=========================================================================================================================

const NotFound = () => {
	const title = 'Страница не существует...:('
	return <Error title={title} image={image} />
}

export default NotFound;
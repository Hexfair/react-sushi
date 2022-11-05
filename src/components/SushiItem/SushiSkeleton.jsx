import React from "react";
import ContentLoader from "react-content-loader";
//=========================================================================================================================

const SushiSkeleton = (props) => (
	<ContentLoader
		speed={2}
		width={300}
		height={432}
		viewBox="0 0 300 432"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="268" rx="10" ry="10" width="303" height="39" />
		<rect x="0" y="3" rx="13" ry="13" width="301" height="245" />
		<rect x="0" y="330" rx="8" ry="8" width="131" height="26" />
		<rect x="175" y="330" rx="8" ry="8" width="129" height="26" />
		<rect x="0" y="372" rx="10" ry="10" width="305" height="41" />
	</ContentLoader>
)

export default SushiSkeleton
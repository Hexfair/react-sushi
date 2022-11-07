import { Outlet } from "react-router";
import Header from "../components/Header/Header";
//=========================================================================================================================

const MainLayout: React.FC = () => {
	return (
		<div className='wrapper'>
			<div className='container'>
				<Header />
				<Outlet />
			</div>
		</div>

	);
}

export default MainLayout;
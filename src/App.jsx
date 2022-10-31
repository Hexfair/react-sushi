import React from "react";
import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import FullSushi from "./pages/FullSushi";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
//=========================================================================================================================

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} />
				<Route path="cart" element={<Cart />} />
				<Route path="sushi/:id" element={<FullSushi />} />
				<Route path="*" element={<NotFound />} />
			</Route >
		</Routes>
	);
}

export default App;

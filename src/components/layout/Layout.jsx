import { Routes } from "react-router-dom";
// import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Route } from "react-router-dom";
import Bmw from "../pages/Bmw";
import Mercedes from "../pages/Mercedes";
import Porsche from "../pages/Porsche";
import HomePage from "../pages/HomePage";

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/home" element={<HomePage />} />
					<Route path="/bmw" element={<Bmw />} />
          <Route path="/porsche" element={<Porsche/>} />
					<Route path="/mercedes" element={<Mercedes />} />
				</Routes>
			</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;

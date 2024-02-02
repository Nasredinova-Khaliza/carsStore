import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import scss from "./Header.module.scss";

const links = [
	{
		name: "Home",
		href: "/home",
	},
	{
		name: "BMW",
		href: "/bmw",
	},
	{
		name: "Porsche",
		href: "/porsche",
	},
	{
		name: "Mercedes",
		href: "/mercedes",
	},
];

const Header = () => {
	const location = useLocation();
	console.log(location.pathname);
  
	return (
		<>
			<header className={scss.Header}>
				<div className={scss.content}>

					<div></div>
				</div>
				<nav>
					<ul className={scss.navLinks}>
						{links.map((item, index) => (
							<li className={scss.links} key={index}>
								<NavLink
									to={item.href}
									className={
										location.pathname === item.href
											? `${scss.link} ${scss.active}`
											: `${scss.link}`
									}>
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;

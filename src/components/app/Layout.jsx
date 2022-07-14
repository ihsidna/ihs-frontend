import React, {useState} from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import {links} from "../../data/links";
const Avatar  = "https://res.cloudinary.com/ihsidnadev/image/upload/v1654264295/ihs-cdn/images/default_avatar_fvtcew.png"

const Layout = () => {
	const [sidebar, setSidebar] = useState(true);

	const [mobile, setMobile] = useState(false);

	const toggleSidebar = () => {
		setSidebar((prevSidebar) => !prevSidebar);
	}
	const handleMobile = () => {
		if (window.innerWidth < 768){
			setMobile(true);
			toggleSidebar();
		}
	};

	const activeLink = "flex items-center md:gap-5 gap-2 md:text-lg text-sm text-ihs-green bg-ihs-green-shade-200 border border-0 border-r-2 border-r-ihs-green md:pl-7 pl-3 py-2"
	const normalLink = "flex items-center md:gap-5 gap-2 md:text-lg text-sm hover:bg-ihs-green-shade-100 border border-0 hover:border-r-2 hover:border-r-ihs-green md:pl-7 pl-3 py-2"
	const sidebarStyle = "drop-shadow-2xl md:w-80 w-40 sticky left-0 top-0 border border-0 border-r border-slate-200 bg-cyan-50 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 z-10"

	return (
		<div>
			<div className="flex">
				<div>
					{/*Sidebar*/}
					<div className={`${sidebarStyle} ${!sidebar ? "hidden" : !mobile ? handleMobile() : sidebarStyle}` }>
						<div className="flex justify-center items-center px-4">
							<Link to="/dashboard" onClick={() => {
							}} className="items-center my-4 flex">
								<img src={Logo} alt="logo" className="w-40" />
							</Link>
						</div>
						<div className="mt-5">
							{links.map((item) => (
								<NavLink to={`/${item.path}`} key={item.path} onClick={() => {}} className={({isActive}) => isActive ? activeLink : normalLink}>
									{item.icon}
									<span className="capitalize">{item.title}</span>
								</NavLink>
							))}
						</div>
					</div>
				{/*	End Sidebar*/}
				</div>
				<div className="grow">
					{/*Navbar*/}
					<nav className="flex justify-between h-20 border border-0 border-b border-slate-200 sticky top-0 bg-white">
						<button onClick={() => {toggleSidebar()}} className="md:invisible bg-transparent text-slate-500 text-xl border border-slate-300 hover:border-ihs-green-shade-100 m-4 p-2 block">
							{ !sidebar ? <MenuIcon className="w-6"/> : <XIcon className="w-6"/> }
						</button>

						<Link to="/dashboard" onClick={() => {
						}} className="md:hidden items-center my-4 flex">
							<img src={Logo} alt="logo" className="w-40" />
						</Link>

						<div className="flex flex-row items-center">
							<div className="">
								<p className="text-xl text-gray-700 hidden md:block">John Doe</p>
							</div>
							<div className="px-5">
								<img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
							</div>
						</div>

					</nav>
					{/*End Navbar*/}
					<Outlet />
				</div>

			</div>
		</div>
	);
};

export default Layout;
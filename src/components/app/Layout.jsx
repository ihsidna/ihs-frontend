import React, {useState} from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import {footerLinks, links} from "../../data/data";
const Avatar  = "https://res.cloudinary.com/ihsidnadev/image/upload/v1654264295/ihs-cdn/images/default_avatar_fvtcew.png"

const Layout = () => {
	// sidebar is active on init
	const [sidebar, setSidebar] = useState(true);

	// mobile screen is inactive on init
	const [mobile, setMobile] = useState(false);

	const toggleSidebar = () => {
		setSidebar((prevSidebar) => !prevSidebar);
	}
	const toggleSidebarOnMobile = () => {
		if (window.innerWidth < 768){
			toggleSidebar();
		}
	}
	const handleMobile = () => {
		if (window.innerWidth < 768){
			setMobile(true);
			toggleSidebar();
		}
	};

	const activeLink = "flex w-80 items-center gap-5 text-lg text-ihs-green bg-ihs-green-shade-200 border border-0 border-r-2 border-r-ihs-green pl-7 py-2"
	const normalLink = "flex w-80 items-center gap-5 text-lg hover:bg-ihs-green-shade-100 border border-0 hover:border-r-2 hover:border-r-ihs-green pl-7 py-2"
	const sidebarStyle = "drop-shadow-2xl md:w-80 w-full sticky left-0 top-0 border border-0 border-r border-slate-200 bg-cyan-50 h-screen md:overflow-hidden overflow-auto md:hover:overflow-hidden pb-10 z-10"

	return (
		<div>
			<div className="flex">
				<div>
					{/*Sidebar*/}
					{/*Show the sidebar by default.*/}
					{/*If the sidebar value is false, hide the sidebar.*/}
					{/*If mobile state is true, hide the sidebar using the handleMobile function*/}
					{/*if it is not a mobile device, show the sidebar.*/}
					<div className={`${sidebarStyle} ${!sidebar ? "hidden" : !mobile ? handleMobile() : sidebarStyle}` }>
						<div className="flex justify-center items-center px-4">
							<Link to="/dashboard" onClick={() => {
							}} className="items-center my-4 flex">
								<img src={Logo} alt="logo" className="w-40" />
							</Link>
						</div>
						<div className="mt-5">
							{links.map((item) => (
								<NavLink to={`/${item.path}`} key={item.path} onClick={() => toggleSidebarOnMobile()} className={({isActive}) => isActive ? activeLink : normalLink}>
									{item.icon}
									<span className="capitalize">{item.title}</span>
								</NavLink>
							))}
						</div>
						<div className="border border-0 border-t border-slate-200 fixed bottom-2 py-4">
							{footerLinks.map((item) => (
								<NavLink to={`/${item.path}`} key={item.path} onClick={() => toggleSidebarOnMobile()} className={({isActive}) => isActive ? activeLink : normalLink}>
									{item.icon}
									<span className="capitalize">{item.title}</span>
								</NavLink>
							))}

							<p className="pl-7 py-4 text-sm">© 2022 Copyright. v1.0.0</p>
						</div>
					</div>
				{/*	End Sidebar*/}
				</div>
				<div className=" overflow-x-hidden grow w-screen">
					{/*Navbar*/}
					<nav className="flex justify-between h-20 border border-0 border-b border-slate-200 sticky top-0 bg-white">
						<button onClick={() => {toggleSidebar()}} className="md:invisible bg-transparent text-slate-500 text-xl border border-slate-300 hover:border-ihs-green-shade-100 m-4 p-2 block">
							{ !sidebar ? <MenuIcon className="w-6"/> : <XIcon className="w-6"/> }
						</button>

						<Link to="/dashboard" onClick={() => {
						}} className={`"md:hidden" ${sidebar ? "hidden" : "items-center my-4 flex"}`}>
							<img src={Logo} alt="logo" className="w-40" />
						</Link>

						<div className="flex flex-row items-center">
							<div className="">
								<p className="text-xl text-gray-700 hidden md:block">John Doe</p>
							</div>
							<div className={` ${sidebar ? "hidden md:block px-5" : "px-5"}`}>
								<img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
							</div>
						</div>

					</nav>
					{/*End Navbar*/}
					{/*when sidebar is active, dashboard content is hidden*/}
					<div className={`"block" ${!mobile ? "block" : sidebar ? "hidden" : "block"}`}>
						<Outlet />
					</div>

				</div>

			</div>
		</div>
	);
};

export default Layout;
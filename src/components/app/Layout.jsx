import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
	return (
		<div>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
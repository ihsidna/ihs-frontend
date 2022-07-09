import React from 'react';
import {Outlet} from 'react-router-dom';
import Layout from "./Layout";

const Dashboard = () => {
	return (
		<div className="pt-52">
			<Layout />
			<Outlet/>
		</div>
	);
};

export default Dashboard;
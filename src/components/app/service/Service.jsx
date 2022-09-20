import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import AddService from "./AddService";
import ViewService from "./ViewService";
import ServiceTable from "./ServiceTable";
import {Helmet, HelmetProvider} from "react-helmet-async";

const Service = () => {
	return (
		<Routes>
			<Route index element={<ParentContent />} />
			<Route path="/addservice" element={<AddService />} />
			<Route path="/viewservice/:serviceId" element={<ViewService />} />
		</Routes>
	);
}

const ParentContent = () => {
	const navigate = useNavigate();

	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>Services | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<div className="lg:p-20 md:p-10 p-3">
				<div className="flex justify-between items-center mt-10">
					<h2 className="md:text-2xl text-xl">All Services</h2>
					<button className="py-3 md:px-4 px-2" onClick={() => navigate('/servicess/addservice')}>Add Service</button>
				</div>

				<hr className="my-10"/>

				{/*Services Table*/}
				<ServiceTable />
			</div>
			</>
		</HelmetProvider>

	);
};

export default Service;
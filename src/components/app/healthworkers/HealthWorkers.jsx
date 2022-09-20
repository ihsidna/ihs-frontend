import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import ViewHealthWorker from "./ViewHealthWorker";
import AddHealthWorker from "./AddHealthWorker";
import UpdateHealthWorker from "./UpdateHealthWorker";
import HealthWorkerTable from "./HealthWorkerTable";
import {Helmet, HelmetProvider} from "react-helmet-async";


const HealthWorkers = () => {
	return (
		<Routes>
			<Route index element={<ParentContent />} />
			<Route path="/viewhealthworker/:healthWorkerId" element={<ViewHealthWorker />} />
			<Route path="/addhealthworker" element={<AddHealthWorker />} />
			<Route path="/updatehealthworker/:healthWorkerId" element={<UpdateHealthWorker />} />
		</Routes>
	);
};

const ParentContent = () => {
	const navigate = useNavigate();
	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>View Health Workers | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<div className="lg:p-20 md:p-10 p-3">
			{/*Users Section*/}
			<div className="flex justify-between items-center mt-10">
				<h2 className="md:text-2xl text-xl">All Health Workers</h2>
				<button className="py-3 md:px-4 px-2" onClick={() => navigate('/healthworkers/addhealthworker')}>Add Health Worker</button>
			</div>

			<hr className="my-10"/>

			{/*Health Workers Table*/}
			<HealthWorkerTable />
		</div>
				</>
		</HelmetProvider>
	);
}

export default HealthWorkers;
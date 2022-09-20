import React from 'react';
import {Route, Routes} from "react-router-dom";
import AllAppointmentTable from "./AllAppointmentTable";
import ViewAppointment from "./ViewAppointment";
import useAuth from "../../../hooks/useAuth";
import UpdateAppointment from "./UpdateAppointment";
import AssignHealthWorker from "./AssignHealthWorker";
import {Helmet, HelmetProvider} from "react-helmet-async";

const Appointment = () => {
	return (
		<Routes>
			<Route index element={<ParentContent />} />
			<Route path="/viewappointment/:appointmentId" element={<ViewAppointment />} />
			<Route path="/allappointments" element={<AllAppointmentTable />}/>
			<Route path="/updateappointment/:appointmentId" element={<UpdateAppointment />}/>
			<Route path="/assignworker/:appointmentId" element={<AssignHealthWorker />}/>
		</Routes>
	);
}

const ParentContent = () => {
	const {allAppointments} = useAuth();

	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>View All Appointments | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<div className="lg:p-20 md:p-10 p-3">
				<div className="flex justify-between items-center mt-10">
					<h2 className="md:text-2xl text-xl">All Appointments</h2>
				</div>

				<hr className="my-10"/>

				{/*Appointments Table*/}
				<AllAppointmentTable data={allAppointments} rowsPerPage={10} />
			</div>
				</>
		</HelmetProvider>
	);
};

export default Appointment;
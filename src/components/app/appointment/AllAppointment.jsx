import React from 'react';
import {Route, Routes} from "react-router-dom";
import AllAppointmentTable from "./AllAppointmentTable";
import ViewAppointment from "./ViewAppointment";
import useAuth from "../../../hooks/useAuth";

const Appointment = () => {
	return (
		<Routes>
			<Route index element={<ParentContent />} />
			<Route path="/viewappointment/:appointmentId" element={<ViewAppointment />} />
			<Route path="/allappointments" element={<AllAppointmentTable />}/>
		</Routes>
	);
}

const ParentContent = () => {
	const {allAppointments} = useAuth();

	return (
		<>
			<div className="lg:p-20 md:p-10 p-3">
				<div className="flex justify-between items-center mt-10">
					<h2 className="md:text-2xl text-xl">All Appointments</h2>
				</div>

				<hr className="my-10"/>

				{/*Appointments Table*/}
				<AllAppointmentTable data={allAppointments} rowsPerPage={10} />
			</div>
		</>
	);
};

export default Appointment;
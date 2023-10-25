import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ViewAppointment from "./ViewAppointment";
import useAuth from "../../../hooks/useAuth";
import UpdateAppointment from "./UpdateAppointment";
import AssignHealthWorker from "./AssignHealthWorker";
import { Helmet, HelmetProvider } from "react-helmet-async";
import UploadReport from "./UploadReport";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import TopBarProgress from "react-topbar-progress-indicator";
import AllAppointmentsTable from "./AllAppointmentsTable";

const Appointment = () => {
  return (
    <Routes>
      <Route index element={<ParentContent />} />
      <Route
        path="/viewappointment/:appointmentId"
        element={<ViewAppointment />}
      />
      <Route path="/allappointments" element={<AllAppointmentsTable />} />
      <Route
        path="/updateappointment/:appointmentId"
        element={<UpdateAppointment />}
      />
      <Route
        path="/assignworker/:appointmentId"
        element={<AssignHealthWorker />}
      />
      <Route
        path="/updateappointment/:appointmentId/uploadreport"
        element={<UploadReport />}
      />
    </Routes>
  );
};

const ParentContent = () => {
  const axiosPrivate = useAxiosPrivate();
  const { setAllAppointments } = useAuth();
  const [loading, setLoading] = useState(false);

  const getAllAppointments = useCallback(async () => {
    const response = await axiosPrivate.get("/admin/appointments");

    const appointmentList = response.data.data;
    setAllAppointments(appointmentList);
  }, [axiosPrivate, setAllAppointments]);

  useEffect(() => {
    setLoading(true);
    getAllAppointments();
    setLoading(false);
  }, [getAllAppointments]);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>View All Appointments | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>
        <div className="lg:px-20 lg:py-4 md:px-10 p-3">
          {loading && <TopBarProgress />}
          <div className="flex justify-between items-center my-5 lg:mt-10">
            <h2 className="md:text-2xl text-xl">All Appointments</h2>
          </div>

          <hr className="my-10" />

          {/*	Mobile Appointment Table*/}
          <AllAppointmentsTable />
        </div>
      </>
    </HelmetProvider>
  );
};

export default Appointment;

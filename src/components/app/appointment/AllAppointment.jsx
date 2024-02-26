import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ViewAppointment from "./ViewAppointment";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useFetch from "../../../hooks/useFetch";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import Spinner from "../../shared/Spinner";
import AllAppointmentsTable from "./tables/AllAppointmentsTable";

const Appointment = () => {
  return (
    <Routes>
      <Route index element={<ParentContent />} />
      <Route
        path="/viewappointment/:appointmentId"
        element={<ViewAppointment />}
      />
      <Route path="/allappointments" element={<AllAppointmentsTable />} />
    </Routes>
  );
};

const ParentContent = () => {
  const [errMsg, setErrMsg] = useState(false);
  const { isSuccess, data, isError, error } = useFetch(
    "/admin/appointments",
    "allAppointments",
    1000 * 60 * 60 * 24,
    true
  );

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>View All Appointments | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>
        <div className="lg:px-20 lg:py-4 md:px-10 p-4">
          {isError && setErrMsg(error.message)}
          <p
            className={
              errMsg
                ? "rounded-md p-4 my-4 shadow-md border-0 border-l-4 border-ihs-green-shade-500 text-slate-500 font-thin md:text-lg text-sm"
                : "absolute -left-[99999px]"
            }
            aria-live="assertive"
          >
            <span className="flex items-center">
              <ExclamationCircleIcon className="text-ihs-green w-6 mr-2 inline" />
              {errMsg}
            </span>
          </p>
          <div className="flex justify-between items-center my-4">
            <h2 className="md:text-2xl text-xl">All Appointments</h2>
          </div>
          <hr className="my-8" />

          {/*	Mobile Appointment Table*/}
          {isSuccess ? (
            <AllAppointmentsTable appointments={data} />
          ) : (
            <div className="w-full min-h-40 p-12 grid items-center">
              <Spinner
                className=""
                style={{ width: "10%", margin: "2rem auto 0" }}
              />
            </div>
          )}
        </div>
      </>
    </HelmetProvider>
  );
};

export default Appointment;

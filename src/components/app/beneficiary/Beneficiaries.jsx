import React from "react";
import { Route, Routes } from "react-router-dom";
import ViewBeneficiary from "./ViewBeneficiary";
import BeneficiariesTable from "./table/BeneficiariesTable";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Checkout from "./Checkout";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import FormModal from "../../shared/FormModal";
import BookAppointmentForm from "../appointment/forms/BookAppointmentForm";
import AddBeneficiaryForm from "./forms/AddBeneficiaryForm";
import Spinner from "../../shared/Spinner";

const Beneficiaries = () => {
  return (
    <Routes>
      <Route index element={<ParentContent />} />
      <Route
        path="/viewbeneficiary/:beneficiaryId"
        element={<ViewBeneficiary />}
      />
      <Route
        path="/updatebeneficiary/:beneficiaryId/addhealthcoverage"
        element={<Checkout />}
      />
    </Routes>
  );
};

const ParentContent = () => {
  const [errMsg, setErrMsg] = useState("");
  const [showBookAppointmentModal, setShowBookAppointmentModal] =
    useState(false);
  const [showAddBeneficiaryModal, setShowAddBeneficiaryModal] = useState(false);

  const { isSuccess, data, isError } = useFetch(
    "/user/beneficiaries",
    "beneficiaries"
  );

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>My Beneficiaries | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>
        {isError && setErrMsg("Failed to get beneficiaries")}
        {/* Error Handling */}
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
        <div className="lg:px-20 lg:py-4 md:px-10 p-3">
          {/*Beneficiaries Section*/}
          <div className="xs:flex-col justify-center md:flex items-center md:justify-between my-4">
            <h2 className="md:text-2xl text-xl py-2 md:py-2">
              Your Beneficiaries
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <button
                className="text-xs sm:text-sm"
                onClick={() => setShowBookAppointmentModal(true)}
              >
                Book Appointment
              </button>
              <button
                className="text-xs sm:text-sm"
                onClick={() => setShowAddBeneficiaryModal(true)}
              >
                Add Beneficiary
              </button>
            </div>
          </div>

          <hr className="my-8" />

          {showBookAppointmentModal && (
            <FormModal
              showModal={showBookAppointmentModal}
              setShowModal={setShowBookAppointmentModal}
              targetForm={BookAppointmentForm}
              successMessage={"Appointment Booked Successfully!"}
            />
          )}
          {showAddBeneficiaryModal && (
            <FormModal
              showModal={showAddBeneficiaryModal}
              setShowModal={setShowAddBeneficiaryModal}
              targetForm={AddBeneficiaryForm}
              successMessage={"Beneficiary Added Successfully!"}
            />
          )}

          {/*Beneficiaries Table*/}
          {isSuccess ? (
            <BeneficiariesTable beneficiaries={data} />
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

export default Beneficiaries;

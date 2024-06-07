import React, { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BeneficiaryDropdown from "./BeneficiaryDropdown";
import { timePeriod } from "../../../data/enums";
import { getDate } from "../../../hooks/useFormatDate";
import { capitalizeString } from "../../../utils/capitalizeString";
import useFetch from "../../../hooks/useFetch";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import FormModal from "../../shared/FormModal";
import UpdateBeneficiaryForm from "./forms/UpdateBeneficiaryForm";
import PageHeading from "../../shared/PageHeading";
import Spinner from "../../shared/Spinner";
import BookAppointmentForm from "../appointment/forms/BookAppointmentForm";

const ViewBeneficiaryAppointments = lazy(() =>
  import("./ViewBeneficiaryAppointments")
);

const ViewBeneficiary = () => {
  const params = useParams();
  const beneficiaryId = params.beneficiaryId;
  const [showBookAppointmentModal, setShowBookAppointmentModal] =
    useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [showUpdateBeneficiary, setShowUpdateBeneficiary] = useState(false);
  const { isSuccess, isLoading, data, isError } = useFetch(
    `/user/beneficiary/${beneficiaryId}`,
    `beneficiary, ${beneficiaryId}`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coverageEndDate = (timestamp) => {
    let date;
    date = new Date(timestamp * 1000);
    date = date.toDateString();

    return getDate(date);
  };

  const duration = (amount) => {
    switch (amount) {
      case 50:
        return "2 Weeks";
      case 100:
        return "1 Month";
      case 1200:
        return "1 Year";
      default:
        break;
    }
  };

  return (
    <>
      {showUpdateBeneficiary && (
        <FormModal
          showModal={showUpdateBeneficiary}
          setShowModal={setShowUpdateBeneficiary}
          targetForm={UpdateBeneficiaryForm}
          successMessage={"Beneficiary updated Successfully"}
        />
      )}
      <HelmetProvider>
        <Helmet>
          <title>View Beneficiary | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>

        <div className="p-3 lg:px-20 lg:py-4 md:px-10">
          {isError && setErrMsg("Failed to get beneficiary")}
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
              <ExclamationCircleIcon className="inline w-6 mr-2 text-ihs-green" />
              {errMsg}
            </span>
          </p>

          <PageHeading
            pageName={"Beneficiary Details"}
            previousPageName={"Beneficiaries"}
            previousUrl={"/beneficiaries"}
          >
            {isSuccess ? (
              <BeneficiaryDropdown
                beneficiary={data}
                setShowUpdateBeneficiary={setShowUpdateBeneficiary}
              />
            ) : (
              <Spinner className="mr-8" style={{ width: "2rem" }} />
            )}
          </PageHeading>
          {isLoading ? (
            <div className="grid items-center w-full p-6 min-h-40">
              <Spinner
                className=""
                style={{ width: "10%", margin: "2rem auto 0" }}
              />
            </div>
          ) : (
            <div className="grid my-10 text-gray-600 md:grid-cols-2 gap-y-4 ">
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Full Name:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">
                  {capitalizeString(data?.firstName)}{" "}
                  {capitalizeString(data?.lastName)}
                </p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Date of Birth:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">
                  {data?.dob ? getDate(data?.dob) : ""}
                </p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Relationship:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">
                  {data ? data?.relationship : ""}
                </p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Phone Number:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{data ? data?.phone : ""}</p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Address:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{data ? data?.address : ""}</p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  City:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{data ? data?.city : ""}</p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  State:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{data ? data?.state : ""}</p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Coverage Status:{" "}
                </p>
                <p className="col-span-2 capitalize break-words lg:col-span-4">
                  {data?.subscription
                    ? data.subscription.status !== "canceled"
                      ? data.subscription.status
                      : "No Health Coverage"
                    : "No Health Coverage"}
                </p>
              </div>
              {data?.subscription &&
                data.subscription.status !== "canceled" && (
                  <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                    <p className="col-span-1 font-semibold text-black lg:col-span-1">
                      Payment Frequency:{" "}
                    </p>
                    <p className="col-span-2 break-words lg:col-span-4">
                      {data?.subscription
                        ? duration(data.subscription.amount)
                        : ""}{" "}
                    </p>
                  </div>
                )}
              {data?.subscription &&
                data.subscription.status !== "canceled" && (
                  <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                    <p className="col-span-1 font-semibold text-black lg:col-span-1">
                      Coverage End Date:{" "}
                    </p>
                    {/*31536000 is 1 */}
                    <p className="col-span-2 break-words lg:col-span-4">
                      {data?.subscription
                        ? coverageEndDate(
                            data.subscription.startDate + timePeriod.year
                          )
                        : ""}{" "}
                    </p>
                  </div>
                )}
              {data?.subscription &&
                data?.subscription?.cancelAt !== null &&
                data?.subscription?.cancelAt !== "" &&
                data?.subscription?.status !== "canceled" && (
                  <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                    <p className="col-span-1 font-semibold text-black lg:col-span-1">
                      Cancel Coverage On:{" "}
                    </p>
                    <p className="col-span-2 break-words lg:col-span-4">
                      {data?.subscription?.cancelAt
                        ? coverageEndDate(data.subscription.cancelAt)
                        : ""}{" "}
                    </p>
                  </div>
                )}
            </div>
          )}
          <hr className="my-10" />
          {/* </div> */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg md:text-2xl">Appointments</h2>
            <button
              className="px-4 py-2 md:px-4"
              onClick={() => setShowBookAppointmentModal(true)}
            >
              Book Appointment
            </button>
          </div>
          <Suspense
            fallback={
              <div className="grid items-center w-full p-6 min-h-40">
                <Spinner
                  className=""
                  style={{ width: "10%", margin: "0 auto" }}
                />
              </div>
            }
          >
            <ViewBeneficiaryAppointments />
          </Suspense>

          {showBookAppointmentModal && (
            <FormModal
              showModal={showBookAppointmentModal}
              setShowModal={setShowBookAppointmentModal}
              targetForm={BookAppointmentForm}
              successMessage={"Appointment Booked Successfully!"}
            />
          )}
        </div>
      </HelmetProvider>
    </>
  );
};

export default ViewBeneficiary;

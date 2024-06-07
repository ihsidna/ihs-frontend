import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { appointmentStatus, userRoles } from "../../../data/enums";
import { StarRating } from "react-star-rating-element";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AppointmentDropdown from "./AppointmentDropdown";
import { getDate } from "../../../hooks/useFormatDate";
import { useSelector } from "react-redux";
import { getKey } from "../../../utils/mobilePreferences";
import useFetch from "../../../hooks/useFetch";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import FormModal from "../../shared/FormModal";
import UpdateAppointmentForm from "./forms/UpdateAppointmentForm";
import BookFollowupAppointmentForm from "./forms/BookFollowupAppointmentForm";
import AssignHealthWorkerForm from "./forms/AssignHealthWorkerForm";
import ReviewAppointmentForm from "./forms/ReviewAppoinementForm";
import UploadReportForm from "./forms/UploadReportForm";
import PageHeading from "../../shared/PageHeading";
import Spinner from "../../shared/Spinner";
import usePatch from "../../../hooks/usePatch";
import { useQueryClient } from "@tanstack/react-query";

const ViewAppointment = () => {
  const userType = useSelector((state) => state.auth.userAccess.userType);

  const params = useParams();
  const appointmentId = params.appointmentId;
  const [mobileAuth, setMobileAuth] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [showUpdateAppointmentForm, setShowUpdateAppointmentForm] =
    useState(false);
  const [showBookFollowupAppointmentForm, setShowBookFollowupAppointmentForm] =
    useState(false);
  const [showAssignHealthWorkerForm, setShowAssignHealthWorkerForm] =
    useState(false);
  const [showReviewAppointmentForm, setShowReviewAppointmentForm] =
    useState(false);
  const [showUploadReportForm, setShowUploadReportForm] = useState(false);

  const download = () => {
    window.open(data[0]?.reportUrl, "_blank");
  };

  const { isLoading, isSuccess, data, isError, error } = useFetch(
    `${
      (mobileAuth?.userType || userType) === userRoles.User
        ? `/user/appointments/${appointmentId}`
        : `/admin/appointment/${appointmentId}`
    }`,
    `appointment, ${appointmentId}`
  );

  const completeAppointmentMutation = usePatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const completeAppointment = () => {
    completeAppointmentMutation.mutate(
      {
        url: `/admin/appointment/${appointmentId}/complete`,
        body: { status: appointmentStatus.Completed },
      },
      {
        onError: () => setErrMsg("Something went wrong"),
        onSuccess: () => {
          queryClient.invalidateQueries(["allAppointments"]);
          queryClient.invalidateQueries(["appointment"]);
          queryClient.invalidateQueries([`appointment, ${appointmentId}`]);
          navigate("/allappointments");
        },
      }
    );
  };

  // get auth mobile preferences
  useEffect(() => {
    getKey("auth")
      .then((result) => {
        setMobileAuth(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {showUpdateAppointmentForm && (
        <FormModal
          showModal={showUpdateAppointmentForm}
          setShowModal={setShowUpdateAppointmentForm}
          targetForm={UpdateAppointmentForm}
          successMessage={"Appointment Updated Successfully!"}
        />
      )}

      {showBookFollowupAppointmentForm && (
        <FormModal
          showModal={showBookFollowupAppointmentForm}
          setShowModal={setShowBookFollowupAppointmentForm}
          targetForm={BookFollowupAppointmentForm}
          successMessage={"Appointment Booked Successfully!"}
        />
      )}

      {showAssignHealthWorkerForm && (
        <FormModal
          showModal={showAssignHealthWorkerForm}
          setShowModal={setShowAssignHealthWorkerForm}
          targetForm={AssignHealthWorkerForm}
          successMessage={"Health worker assigned successfully!"}
        />
      )}

      {showReviewAppointmentForm && (
        <FormModal
          showModal={showReviewAppointmentForm}
          setShowModal={setShowReviewAppointmentForm}
          targetForm={ReviewAppointmentForm}
          successMessage={"Review added successfully!"}
        />
      )}

      {showUploadReportForm && (
        <FormModal
          showModal={showUploadReportForm}
          setShowModal={setShowUploadReportForm}
          targetForm={UploadReportForm}
          successMessage={"Report uploaded successfully!"}
        />
      )}

      <HelmetProvider>
        <Helmet>
          <title>View Appointment | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>
        <div className="p-3 lg:px-20 lg:py-4 md:px-10">
          {isError && setErrMsg(error)}
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
            pageName={"Appointment Details"}
            previousPageName={"Appointments"}
            previousUrl={
              userType === userRoles.Admin 
                ? "/allappointments"
                : "/appointments"
            }
          >
            {isSuccess ? (
              <AppointmentDropdown
                appointmentDetails={data[0]}
                setShowUpdateAppointmentForm={setShowUpdateAppointmentForm}
                setShowBookFollowupAppointmentForm={
                  setShowBookFollowupAppointmentForm
                }
                setShowAssignHealthWorkerForm={setShowAssignHealthWorkerForm}
                setShowReviewAppointmentForm={setShowReviewAppointmentForm}
                setShowUploadReportForm={setShowUploadReportForm}
                completeAppointment={completeAppointment}
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
            <div className="grid my-10 text-gray-600 md:grid-cols-2 gap-y-4">
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Beneficiary:
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{data[0]?.beneficiaryName}</p>
              </div>

              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Contact:
                </p>
                <p className="col-span-2 break-words lg:col-span-4">
                  {data[0]?.beneficiaryPhone === "" ||
                  data[0]?.beneficiaryPhone === undefined
                    ? "No Contact Information"
                    : data[0]?.beneficiaryPhone}
                </p>
              </div>

              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Service:
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{`${data[0]?.serviceName}`}</p>
              </div>

              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Health Worker:
                </p>
                <p className="col-span-2 break-words lg:col-span-4">
                  {data[0]?.healthWorkerName
                    ? data[0]?.healthWorkerName
                    : "Unassigned"}
                </p>
              </div>

              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Date:
                </p>
                <p className="col-span-2 break-words lg:col-span-4">
                  {data[0]?.date ? getDate(data[0]?.date) : ""}
                </p>
              </div>

              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Time:
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{data[0]?.time}</p>
              </div>

              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Status:
                </p>
                <p className="col-span-2 capitalize break-words lg:col-span-4">{data[0]?.status}</p>
              </div>

              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Notes:
                </p>
                <p className="col-span-2 normal-case break-words lg:col-span-4">
                  {data[0]?.notes === "" || data[0]?.notes === undefined
                    ? "No Notes Available"
                    : data[0].notes}
                </p>
              </div>

              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Review:
                </p>
                <p className="col-span-2 break-words lg:col-span-4">
                  {data[0]?.review ? data[0]?.review : "Unreviewed Appointment"}
                </p>
              </div>

              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Rating:
                </p>
                <div className="col-span-2 break-words lg:col-span-4">
                  {
                    <StarRating
                      ratingValue={data[0]?.rating}
                      starEmptyColor="#999999"
                      starSpacing={5}
                      starDimension={25}
                      starRatedColor="#1eb7b8"
                    />
                  }
                </div>
              </div>

              {data && data[0]?.reportUrl && (
                <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                  <p className="col-span-1 font-semibold text-black lg:col-span-1">
                    Report:{" "}
                  </p>

                  <button className="col-span-2 px-4 break-words lg:col-span-4" onClick={download}>
                    {" "}
                    Download
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </HelmetProvider>
    </>
  );
};

export default ViewAppointment;

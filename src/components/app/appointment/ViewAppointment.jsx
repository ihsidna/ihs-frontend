import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ClipboardCheckIcon } from "@heroicons/react/outline";
import { useNavigate, useParams } from "react-router-dom";
import { userRoles } from "../../../data/enums";
import { StarRating } from "react-star-rating-element";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AppointmentDropdown from "./AppointmentDropdown";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import TopBarProgress from "react-topbar-progress-indicator";
import { getDate } from "../../../hooks/useFormatDate";
import Shimmer from "../Shimmer";
import { useSelector } from "react-redux";
import { getKey } from "../../../utils/mobilePreferences";

TopBarProgress.config({
  barColors: {
    0: "#05afb0",
  },
  shadowBlur: 5,
});

const ViewAppointment = () => {
  const userType = useSelector((state) => state.auth.userAccess.userType);

  const axiosPrivate = useAxiosPrivate();
  const appointment = useParams();
  const appointmentId = appointment.appointmentId;
  const navigate = useNavigate();
  const [appointmentDetails, setAppointmentDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [mobileAuth, setMobileAuth] = useState("");

  const download = () => {
    window.open(appointmentDetails.reportUrl, "_blank");
  };

  const getAppointment = useCallback(async () => {
    if ((mobileAuth?.userType || userType) === userRoles.User) {
      const response = await axiosPrivate.get(
        `/user/appointments/${appointmentId}`
      );
      setAppointmentDetails(response.data.data[0]);
    } else {
      const response = await axiosPrivate.get(
        `/admin/appointment/${appointmentId}`
      );
      setAppointmentDetails(response.data.data[0]);
    }
  }, [appointmentId, axiosPrivate, userType, mobileAuth?.userType]);

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

  useEffect(() => {
    setLoading(true);
    getAppointment().then(() => {
      setLoading(false);
    });
  }, [getAppointment]);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>View Appointment | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>
        <div className="lg:px-20 lg:py-4 md:px-10 p-3">
          {loading && <TopBarProgress />}
          <button
            className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 lg:mt-10 my-5"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon className="w-6" />{" "}
            <p className="text-lg px-5">Back to Appointments</p>
          </button>
          <div className="flex">
            <div className="flex-1">
              <div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
                <div className="flex">
                  <ClipboardCheckIcon className="md:w-14 w-8 md:ml-10 ml-3" />
                  <h3 className="md:text-2xl text-lg py-8 md:px-8 px-2">
                    Appointments Details
                  </h3>
                </div>

                <AppointmentDropdown appointmentDetails={appointmentDetails} />
              </div>

              <div className="mt-10 text-gray-600 md:text-xl text-md">
                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Beneficiary:{" "}
                  </p>
                  <p className="py-5 md:ml-5 md:col-start-2 col-span-2">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      `${appointmentDetails?.beneficiaryName}`
                    )}{" "}
                  </p>
                </div>

                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Contact:{" "}
                  </p>
                  <p className="py-5 md:ml-5 md:col-start-2 col-span-2">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      `${
                        appointmentDetails?.beneficiaryPhone === "" ||
                        appointmentDetails?.beneficiaryPhone === undefined
                          ? "No Contact Information"
                          : appointmentDetails.beneficiaryPhone
                      }`
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Service:{" "}
                  </p>
                  <p className="py-5 md:ml-5 md:col-start-2 col-span-2">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      `${appointmentDetails?.serviceName}`
                    )}{" "}
                  </p>
                </div>

                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Health Worker:{" "}
                  </p>
                  <p className="py-5 md:ml-5 md:col-start-2 col-span-2">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      `${
                        appointmentDetails?.healthWorkerName
                          ? appointmentDetails?.healthWorkerName
                          : "Unassigned"
                      }`
                    )}{" "}
                  </p>
                </div>

                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Date:{" "}
                  </p>
                  <p className="py-5 md:ml-5 md:col-start-2 col-span-2">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      `${
                        appointmentDetails?.date
                          ? getDate(appointmentDetails?.date)
                          : ""
                      }`
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Time:{" "}
                  </p>
                  <p className="py-5 md:ml-5 md:col-start-2 col-span-2">
                    {loading ? <Shimmer /> : `${appointmentDetails?.time}`}
                  </p>
                </div>

                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Status:{" "}
                  </p>
                  <p className="py-5 md:ml-5 md:col-start-2 col-span-2 capitalize">
                    {loading ? <Shimmer /> : `${appointmentDetails?.status}`}
                  </p>
                </div>

                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Notes:{" "}
                  </p>
                  <p className="py-5 md:ml-5 md:col-start-2 col-span-2 capitalize">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      `${
                        appointmentDetails?.notes === "" ||
                        appointmentDetails?.notes === undefined
                          ? "No Notes Available"
                          : appointmentDetails.notes
                      }`
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Review:{" "}
                  </p>
                  <p className="py-5 md:ml-5 md:col-start-2 col-span-2">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      `${
                        appointmentDetails?.review
                          ? appointmentDetails?.review
                          : "Unreviewed Appointment"
                      }`
                    )}{" "}
                  </p>
                </div>

                <div className="grid grid-cols-4 items-center">
                  <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                    Rating:{" "}
                  </p>

                  <div className="py-5 md:ml-3 md:col-start-2 col-span-2">
                    {loading ? (
                      <Shimmer />
                    ) : (
                      <StarRating
                        ratingValue={appointmentDetails?.rating}
                        starEmptyColor="#999999"
                        starSpacing={5}
                        starDimension={25}
                        starRatedColor="#1eb7b8"
                      />
                    )}
                  </div>
                </div>

                {/*Report*/}
                {appointmentDetails?.reportUrl && (
                  <div className="grid grid-cols-4 items-center">
                    <p className="py-5 font-semibold px-5 col-start-1 md:col-span-1 col-span-2">
                      Report:{" "}
                    </p>

                    <button className="px-3 my-2" onClick={download}>
                      {" "}
                      Download
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </HelmetProvider>
  );
};

export default ViewAppointment;

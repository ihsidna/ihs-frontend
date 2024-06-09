import { ErrorMessage, Field, Form, Formik } from "formik";
import usePost from "../../../../hooks/usePost";
import { useQueryClient } from "@tanstack/react-query";
import { appointmentStatus } from "../../../../data/enums";
import { useState } from "react";
import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import useFetch from "../../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { WATDateString } from "../../../../hooks/useFormatDate";
import { ClipboardCheckIcon } from "@heroicons/react/outline";
import { capitalizeString } from "../../../../utils/capitalizeString";
import ActionModal from "../../../shared/ActionModal";
import { Clipboard } from '@capacitor/clipboard';
    
const BookAppointmentForm = ({ handleCancelClick, setFormSuccess }) => {
  const initialValues = {
    beneficiaryId: "",
    serviceId: "",
    date: "",
    time: "",
    notes: "",
  };
  const navigate = useNavigate();

  // const [errMsg, setErrMsg] = useState(false);
  const [platform, setPlatform] = useState("");
  const [displayRedirectModal, setDisplayRedirectModal] = useState(false);
  const [beneficiary, setBeneficiary] = useState({});

  const fetchBeneficiaries = useFetch("/user/beneficiaries", "beneficiaries");
  const fetchServices = useFetch("/admin/service/all", "allServices");
  const bookAppointmentMutation = usePost();
  const queryClient = useQueryClient();

  useEffect(() => {
    setPlatform(Capacitor.getPlatform());
  }, []);

  const redirectToWebApp = () => {
    Clipboard.write({
      string: 'https://app.ihsmia.com'
    });
    
    window.alert('Visit the web app at https://app.ihsmia.com.\n\nThe link has been copied to your clipboard!\n\nYou can now paste it into your browser to visit our web app.');
  };

  const handleSubmit = async (values) => {
    const appointmentData = {
      beneficiaryId: values.beneficiaryId,
      serviceId: values.serviceId,
      date: values.date,
      time: values.time,
      notes: values.notes,
    };

    // Find beneficiary of appointment by id
    const beneficiaryData = fetchBeneficiaries?.data?.filter(
      (ben) => ben.id === appointmentData.beneficiaryId
    );

    setBeneficiary(beneficiaryData[0]);

    // verify beneficiary coverage subscription
    if (beneficiaryData[0]?.subscription?.status === "active") {
      const appointmentDate = WATDateString(appointmentData.date);
      const body = {
        ...appointmentData,
        date: appointmentDate,
        status: appointmentStatus.Booked,
      };

      // Mutate
      bookAppointmentMutation.mutate(
        {
          url: "/appointment/create",
          body,
        },
        {
          onSuccess: () => {
            queryClient.refetchQueries([`appointments, ${values.beneficiaryId}`]);
            queryClient.refetchQueries(["allAppointments"]);
            queryClient.refetchQueries(["appointments"]);
            setFormSuccess(true);
          },
        }
      );
    } else {
      platform === "web" ? setDisplayRedirectModal(true) : redirectToWebApp();
    }
  };

  const redirectToPricingPage = (beneficiaryId) => {
    navigate(
      `/beneficiaries/updatebeneficiary/${beneficiaryId}/addhealthcoverage`
    );
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <ClipboardCheckIcon className="w-8 text-ihs-green" />
            <h2 className="font-semibold text-gray-800 md:text-xl">
              Book Appointment
            </h2>
          </div>
          <span
            className="mr-4 font-bold cursor-pointer text-xl text-[red] hover:text-ihs-green transition-all"
            onClick={() => handleCancelClick()}
          >
            ⨉
          </span>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ errors }) => (
            <Form className="grid gap-y-6">
              <div className="grid items-center grid-cols-1 mt-8 lg:grid-cols-2 gap-x-6 gap-y-3">
                <div className="grid w-full transition">
                  <label htmlFor="beneficiaryId"  className="mb-1 text-xs font-light text-gray-600">
                    Beneficiary
                    <span className="text-red-600 transition ">*</span>
                  </label>
                  <Field
                    as="select"
                    name="beneficiaryId"
                    id="beneficiaryId"
                    required={true}
                    className="appearance-none h-10 bg-transparent w-full lg:min-w-[300px] transition border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1"
                  >
                    <option disabled={true} value="">
                      Select Beneficiary
                    </option>
                    {fetchBeneficiaries?.data?.length ? (
                      fetchBeneficiaries?.data?.map((beneficiary, index) => (
                        <option key={index} value={beneficiary?.id}>
                          {capitalizeString(beneficiary?.firstName)}{" "}
                          {capitalizeString(beneficiary?.lastName)}
                        </option>
                      ))
                    ) : (
                      <option value="">You have no beneficiaries</option>
                    )}
                  </Field>
                  <ErrorMessage
                    name="beneficiaryId"
                    component="p"
                    className={`${
                      errors.beneficiaryId
                        ? "animate-fly-in-y"
                        : "animate-fly-out-y"
                    } text-red-500 text-xs mt-1 transition-all duration-500`}
                  />
                </div>
                <div className="grid transition">
                  <label htmlFor="serviceId"  className="mb-1 text-xs font-light text-gray-600">
                    Service
                    <span className="text-red-600 transition ">*</span>
                  </label>
                  <Field
                    as="select"
                    name="serviceId"
                    id="serviceId"
                    required={true}
                    className="appearance-none h-10 bg-transparent w-full lg:min-w-[300px] transition border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1"
                  >
                    <option disabled={true} value="">
                      Select a Service
                    </option>
                    {fetchServices?.data?.length ? (
                      fetchServices?.data?.map((service, index) => (
                        <option key={index} value={service?.id}>
                          {service?.name}
                        </option>
                      ))
                    ) : (
                      <option value="">No services at this time</option>
                    )}
                  </Field>
                  <ErrorMessage
                    name="serviceId"
                    component="p"
                    className={`${
                      errors.serviceId
                        ? "animate-fly-in-y"
                        : "animate-fly-out-y"
                    } text-red-500 text-xs mt-1 transition-all duration-500`}
                  />
                </div>
                <div className="grid transition">
                  <label htmlFor="date"  className="mb-1 text-xs font-light text-gray-600">
                    Date
                    <span className="text-red-600 transition ">*</span>
                  </label>

                  <Field
                    type="date"
                    name="date"
                    id="date"
                    autoComplete="true"
                    className="appearance-none h-10 bg-transparent w-full lg:min-w-[300px] transition border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1"
                    required
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className={`${
                      errors.date ? "animate-fly-in-y" : "animate-fly-out-y"
                    } text-red-500 text-xs mt-1 transition-all duration-500`}
                  />
                </div>

                <div className="grid transition">
                  <label htmlFor="time"  className="mb-1 text-xs font-light text-gray-600">
                    Time
                    <span className="text-red-600 transition ">*</span>
                  </label>

                  <Field
                    type="time"
                    name="time"
                    id="time"
                    autoComplete="true"
                    className="appearance-none h-10 bg-transparent w-full lg:min-w-[300px] transition border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1"
                    required
                  />
                  <ErrorMessage
                    name="time"
                    component="div"
                    className={`${
                      errors.time ? "animate-fly-in-y" : "animate-fly-out-y"
                    } text-red-500 text-xs mt-1 transition-all duration-500`}
                  />
                </div>
                <div className="grid transition lg:col-span-2">
                  <label htmlFor="notes"  className="mb-1 text-xs font-light text-gray-600">
                    Notes
                  </label>

                  <Field
                    as="textarea"
                    name="notes"
                    id="notes"
                    autoComplete="true"
                    className="p-2 transition border border-gray-300 rounded-md focus:outline-none focus:ring-1"
                  />
                  <ErrorMessage
                    name="notes"
                    component="div"
                    className={`${
                      errors.notes ? "animate-fly-in-y" : "animate-fly-out-y"
                    } text-red-500 text-xs mt-1 transition-all duration-500`}
                  />
                </div>
              </div>
              <div className="flex mt-2 gap-x-4">
                <button
                  className="flex-1 px-4 py-2 text-sm font-medium transition bg-gray-100 rounded-md hover:bg-gray-200 text-ihs-green md:text-base"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 ml-2 text-sm font-medium text-white transition rounded-md disabled:bg-ihs-green-shade-200 disabled:text-slate-600 disabled:border-slate-200 disabled:shadow-none md:text-base bg-ihs-green"
                  disabled={
                    bookAppointmentMutation.isLoading ||
                    Object.keys(errors).length > 0
                  }
                >
                  {bookAppointmentMutation.isLoading
                    ? "Please wait..."
                    : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {displayRedirectModal && (
        <ActionModal
          display={displayRedirectModal}
          setDisplay={setDisplayRedirectModal}
          actionMessage={`Do you want to add a health coverage for ${capitalizeString(
            beneficiary?.firstName
          )} ${capitalizeString(beneficiary?.lastName)}`}
          actionHeader={`${capitalizeString(
            beneficiary?.firstName
          )} ${capitalizeString(beneficiary?.lastName)} has no health coverage`}
          actionFunction={() => redirectToPricingPage(beneficiary?.id)}
        />
      )}
    </>
  );
};

export default BookAppointmentForm;

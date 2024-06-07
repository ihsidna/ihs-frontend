import { IdentificationIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HealthWorkerDropdown from "./HealthWorkerDropdown";
import { capitalizeString } from "../../../utils/capitalizeString";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import FormModal from "../../shared/FormModal";
import UpdateHealthWorkerForm from "./form/UpdateHealthWorkerForm";
import PageHeading from "../../shared/PageHeading";
import Spinner from "../../shared/Spinner";

const ViewHealthWorker = () => {
  const params = useParams();
  const healthWorkerId = params.healthWorkerId;
  const [showUpdateHealthWorkerForm, setShowUpdateHealthWorkerForm] =
    useState(false);

  const { isLoading, isSuccess, data } = useFetch(
    `/worker/${healthWorkerId}`,
    `healthWorker, ${healthWorkerId}`
  );

  return (
    <HelmetProvider>
      <>
        {showUpdateHealthWorkerForm && (
          <FormModal
            showModal={showUpdateHealthWorkerForm}
            setShowModal={setShowUpdateHealthWorkerForm}
            targetForm={UpdateHealthWorkerForm}
            successMessage={"Health worker updated successfully!"}
          />
        )}
        <Helmet>
          <title>View Health Worker | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>
        <div className="p-3 lg:px-20 lg:py-4 md:px-10">
          <PageHeading
            pageName={"Health Worker Details"}
            previousPageName={"Health Workers"}
            previousUrl={"/healthworkers"}
            icon={IdentificationIcon}
          >
            {isSuccess ? (
              <HealthWorkerDropdown
                healthWorkerDetails={data}
                setShowUpdateHealthWorkerForm={setShowUpdateHealthWorkerForm}
              />
            ) : (
              <Spinner className="mr-8" style={{ width: "2rem" }} />
            )}
          </PageHeading>

          {isLoading ? (
            <div className="grid items-center w-full p-12 min-h-40">
              <Spinner
                className=""
                style={{ width: "10%", margin: "2rem auto 0" }}
              />
            </div>
          ) : (
            <div className="my-10 text-gray-600 grid md:grid-cols-2 gap-y-4 lg:max-w-[70%]">
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Full Name:
                </p>

                <p className="col-span-2 break-words lg:col-span-4">
                  {capitalizeString(data.firstName)}{" "}
                  {capitalizeString(data.lastName)}{" "}
                </p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Email:
                </p>

                <p className="col-span-2 break-words lg:col-span-4">{data.email}</p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Phone Number:{" "}
                </p>

                <p className="col-span-2 break-words lg:col-span-4">{data.phone} </p>
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Qualification:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{data.qualification} </p>
              </div>
            </div>
          )}
        </div>
      </>
    </HelmetProvider>
  );
};

export default ViewHealthWorker;

import React, { useState } from "react";
import { ClipboardCheckIcon } from "@heroicons/react/outline";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useFetch from "../../../hooks/useFetch";
import { useQueryClient } from "@tanstack/react-query";
import useDelete from "../../../hooks/useDelete";
import ActionModal from "../../shared/ActionModal";
import PageHeading from "../../shared/PageHeading";
import Spinner from "../../shared/Spinner";
import { capitalizeString } from "../../../utils/capitalizeString";

const ViewService = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [displayModal, setDisplayModal] = useState(false);
  const queryClient = useQueryClient();
  let serviceId = params.serviceId;

  const staleTime = 1000 * 60 * 5;
  const { isLoading, isSuccess, data } = useFetch(
    `/service/${serviceId}`,
    `service, ${serviceId}`,
    staleTime
  );

  const deleteServiceMutation = useDelete();

  const handleDeleteService = () => {
    deleteServiceMutation.mutate(`/admin/service/delete/${serviceId}`, {
      onSuccess: async () => {
        // refetch all services
        await queryClient.refetchQueries({ queryKey: ["allServices"] });
        queryClient.removeQueries({ queryKey: ["service", serviceId] });
        navigate("/servicess");
      },
    });
  };

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>View Service | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>
        <div className="p-3 lg:px-20 lg:py-4 md:px-10">
          <PageHeading
            pageName={"Service Details"}
            previousPageName={"Services"}
            previousUrl={"/servicess"}
            icon={ClipboardCheckIcon}
          >
            {isSuccess ? (
              <div className="mr-4">
                <button
                  className="px-4"
                  onClick={() => {
                    setDisplayModal(true);
                  }}
                >
                  Delete
                </button>
              </div>
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
            <div className="grid my-10 text-gray-600 md:grid-cols-2 gap-y-4">
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Name:{" "}
                </p>
                {
                  <p className="col-span-2 break-words lg:col-span-4">
                    {data && capitalizeString(data.name)}
                  </p>
                }
              </div>
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Category:
                </p>
                {
                  <p className="col-span-2 break-words lg:col-span-4">
                    {data && capitalizeString(data.category)}
                  </p>
                }
              </div>
            </div>
          )}

          {displayModal && (
            <ActionModal
              display={displayModal}
              setDisplay={setDisplayModal}
              actionHeader={"Are you sure you want to delete this service?"}
              actionMessage={"This action cannot be undone."}
              actionFunction={handleDeleteService}
            />
          )}
        </div>
      </>
    </HelmetProvider>
  );
};

export default ViewService;

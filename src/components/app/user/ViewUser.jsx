import { UserIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";
import ViewUserBeneficiaries from "./ViewUserBeneficiaries";
import { Helmet, HelmetProvider } from "react-helmet-async";
import UserDropdown from "./UserDropdown";
import { capitalizeString } from "../../../utils/capitalizeString";
import useFetch from "../../../hooks/useFetch";
import { Suspense, useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import PageHeading from "../../shared/PageHeading";
import Spinner from "../../shared/Spinner";

const ViewUser = () => {
  const params = useParams();
  const userId = params.userId;
  const [errMsg, setErrMsg] = useState("");

  const { isLoading, isSuccess, data, isError } = useFetch(
    `/user/${userId}`,
    `user, ${userId}`
  );

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>View User | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>
        {isError && setErrMsg("Failed to get user")}
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
        <div className="p-3 lg:px-20 lg:py-4 md:px-10">
          <PageHeading
            pageName={"User Details"}
            previousPageName={"Users"}
            previousUrl={"/users"}
            icon={UserIcon}
          >
            {isSuccess ? (
              data?.accountActive === true &&
              <UserDropdown userDetails={data} />
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
                  Full Name:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">
                  {capitalizeString(data?.firstName)}{" "}
                  {capitalizeString(data?.lastName)}
                </p>
              </div>
                
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1 ">
                  Email:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{data?.email}</p>
              </div>
                
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Phone:{" "}
                </p>
                <p className="col-span-2 break-words lg:col-span-4">{data?.phone}</p>
              </div>
                
              <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                <p className="col-span-1 font-semibold text-black lg:col-span-1">
                  Role:{" "}
                </p>
                <p className="col-span-2 capitalize break-words lg:col-span-4">
                  {data?.userType}
                </p>
              </div>
                
              {
                data?.accountActive === false &&
                <div className="grid items-center grid-cols-3 space-x-4 lg:grid-cols-5">
                  <p className="col-span-1 font-semibold text-black lg:col-span-1">
                    Account Status:{" "}
                  </p>
                  <p className="col-span-2 px-2 py-1 text-xs capitalize break-normal bg-gray-300 rounded h-fit w-fit lg:col-span-4">Deactivated
                  </p>
                </div>
              }
            </div>
          )}
          <hr className="my-10" />

          <div className="flex items-center justify-between mt-10">
            <h2 className="text-xl md:text-2xl">Beneficiaries</h2>
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
            <ViewUserBeneficiaries />
          </Suspense>
        </div>
      </>
    </HelmetProvider>
  );
};

export default ViewUser;

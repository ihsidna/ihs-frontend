import { Route, Routes } from "react-router-dom";
import ViewUser from "./ViewUser";
import { userRoles } from "../../../data/enums";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getKey } from "../../../utils/mobilePreferences";
import SearchInput from "../../reusable/search/searchInput";
import { axiosPrivate } from "../../../api/axios";
import useFetch from "../../../hooks/useFetch";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import UsersTable from "./tables/UserTable";
import FormModal from "../../shared/FormModal";
import AddUserForm from "./forms/AddUserForm";
import Spinner from "../../shared/Spinner";

const Users = () => {
  return (
    <Routes>
      <Route index element={<ParentContent />} />
      <Route path="/viewuser/:userId" element={<ViewUser />} />
    </Routes>
  );
};

const ParentContent = () => {
  const userType = useSelector((state) => state.auth.userAccess.userType);

  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [mobileAuth, setMobileAuth] = useState("");

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

  const handleShowAddUserModal = () => {
    setShowAddUserModal(true);
  };

  const { isSuccess, data, isError } = useFetch("/users/all", "users");

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axiosPrivate.get(
        `/users/search?search=${searchTerm}`
      );
      return response.data.data;
    } catch (error) {
      console.error("No results found", error);
      return [];
    }
  };

  return (
    <HelmetProvider>
      {/*	show modal if modal is toggled*/}
      {showAddUserModal && (
        <FormModal
          setShowModal={setShowAddUserModal}
          showModal={showAddUserModal}
          targetForm={AddUserForm}
          successMessage={"User Added Successfully"}
        />
      )}

      <>
        <Helmet>
          <title>Users | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmdinc.com/" />
        </Helmet>
        {isError && setErrMsg("Failed to get users")}
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
          {/*Users Section*/}

          {/*Search Bar*/}
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            <SearchInput onSearch={handleSearch} placeholder="Search users" />
          </div>

          <div className="flex justify-between items-center my-6">
            <h2 className="md:text-2xl text-xl">All Users</h2>
            {(mobileAuth?.userType || userType) === userRoles.Admin && (
              <button
                className="py-2 md:px-4 px-2"
                onClick={handleShowAddUserModal}
              >
                Add Admin User
              </button>
            )}
          </div>

          <hr className="my-8" />

          {/*Users Table*/}
          {isSuccess ? (
            <UsersTable users={data} />
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
export default Users;

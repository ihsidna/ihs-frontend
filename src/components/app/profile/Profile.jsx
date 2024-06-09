import React, { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useFormik } from "formik";
import { changePasswordSchema } from "../../../utils/formSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  revertAll,
  storeLoggedInUser,
} from "../../../redux/features/authSlice";
import { setKey } from "../../../utils/mobilePreferences";
import { Capacitor } from "@capacitor/core";
import useFetch from "../../../hooks/useFetch";
import PageHeading from "../../shared/PageHeading";
import UpdatePhoneNumberForm from "./UpdatePhoneNumberForm.jsx";
import FormModal from "../../shared/FormModal";
import Spinner from "../../shared/Spinner";
import { Clipboard } from '@capacitor/clipboard';

const UPDATE_PASSWORD = "/user/updatePassword";

const Profile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const [loading, setLoading] = useState(false);
  const [revealPwd, setRevealPwd] = useState(false);
  const [revealConfirmPwd, setRevealConfirmPwd] = useState(false);
  const [showUpdatePhoneNumForm, setShowUpdatePhoneNumForm] = useState(false);
  const [platform, setPlatform] = useState("");

  const fetchUserProfile = useFetch("/user/profile", "userProfile");

  const fetchUserData = async () => {
    const info = fetchUserProfile.data;
    const profileInfo = {
      id: info.id,
      firstName: info.firstName,
      lastName: info.lastName,
      phone: info.phone,
      email: info.email,
      customerId: info.stripeCustomerId,
    };
    dispatch(storeLoggedInUser(profileInfo));
    // mobile storage
    await setKey("loggedInUser", profileInfo);
  };

  useEffect(() => {
    if (fetchUserProfile.isSuccess) {
      fetchUserData();
    }
  }, [fetchUserProfile.isSuccess]);

  useEffect(() => {
    setPlatform(Capacitor.getPlatform());
  }, []);

  const redirectToWebApp = () => {
    Clipboard.write({
      string: 'https://app.ihsmia.com'
    });
    
    window.alert('Visit the web app at https://app.ihsmia.com.\n\nThe link has been copied to your clipboard!\n\nYou can now paste it into your browser to visit our web app.');
  };

  const handlePortal = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (platform !== "web") {
        redirectToWebApp();
        setLoading(false);
        return;
      }

      const res = await axiosPrivate.post(
        "/portal",

        JSON.stringify({
          customer: loggedInUser.customerId,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setLoading(false);

      const body = await res.data;
      window.location.href = body.url;
    } catch (e) {
      console.log(`Uncaught Exception ${e}`);
    }
  };

  const onSubmit = async (values, actions) => {
    const password = values.password;

    setLoading(true);

    await axiosPrivate.post(
      UPDATE_PASSWORD,
      JSON.stringify({ password: password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    setLoading(false);
    actions.resetForm();

    dispatch(revertAll());

    localStorage.clear();
    navigate("/");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit,
  });

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>My Profile | IHS Dashboard</title>
          <link rel="canonical" href="https://www.ihsmia.com/" />
        </Helmet>
        <>
          {showUpdatePhoneNumForm && (
            <FormModal
              showModal={showUpdatePhoneNumForm}
              setShowModal={setShowUpdatePhoneNumForm}
              successMessage={"Phone number updated successfully!"}
              targetForm={UpdatePhoneNumberForm}
              formProps={{ phone: fetchUserProfile.data?.phone }}
            />
          )}

          <div className="p-3 lg:px-20 lg:py-4 md:px-10">
            <PageHeading
              pageName={"My Profile"}
              previousPageName={"Dashboard"}
              previousUrl={"/dashboard"}
            />

            {fetchUserProfile.isLoading ? (
              <div className="grid items-center w-full p-6">
                <Spinner
                  className=""
                  style={{ width: "6%", margin: "0 auto" }}
                />
              </div>
            ) : (
              <div className="grid my-10 text-gray-600 md:grid-cols-2 gap-y-4 ">
                <div className="flex space-x-4">
                  <p className="col-span-2 font-semibold lg:col-span-1">
                    First Name:{" "}
                  </p>
                  <p className="capitalize lg:col-start-2">
                    {fetchUserProfile.data?.firstName}
                  </p>
                </div>
                <div className="flex space-x-4 ">
                  <p className="col-span-2 font-semibold lg:col-span-1">
                    Last Name:{" "}
                  </p>
                  <p className="capitalize lg:col-start-2">
                    {fetchUserProfile.data?.lastName}
                  </p>
                </div>
                <div className="flex space-x-4 md:order-3">
                  <p className="col-span-2 font-semibold lg:col-span-1">
                    Phone Number:{" "}
                  </p>
                  <p className="lg:col-start-2">
                    {fetchUserProfile.data?.phone}
                  </p>
                </div>

                <div className="flex space-x-4 md:order-4">
                  <p className="col-span-2 font-semibold lg:col-span-1">
                    Email:{" "}
                  </p>
                  <p className="lg:col-start-2">
                    {fetchUserProfile.data?.email}
                  </p>
                </div>
              </div>
            )}
            <div className="flex ">
              <button
                className="w-64 py-2"
                onClick={() => setShowUpdatePhoneNumForm(true)}
                disabled={fetchUserProfile.isLoading}
              >
                Update Phone Number
              </button>
            </div>
            <hr className="my-10" />

            <form onSubmit={handlePortal}>
              <input
                type="hidden"
                name="priceId"
                id="priceId"
                value="price_1LrhbqIGWAGjsS3FN6qfb8fW"
              />
              <button
                type="submit"
                className="w-64 py-2 text-base outline-none bg-ihs-green focus: focus:ring-2 focus:ring-ihs-green-shade-500"
                disabled={fetchUserProfile.isLoading}
              >
                Visit Customer Portal
              </button>
            </form>

            <hr className="my-10" />

            <p className="text-lg tracking-wide text-ihs-green">
              Change Password
            </p>

            {fetchUserProfile.isLoading ? (
              <div className="grid items-center w-full p-6">
                <Spinner className="" style={{ width: "6%" }} />
              </div>
            ) : (
              <form className="grid w-64 my-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    New Password <span className="text-red-600">*</span>
                  </label>
                  <span className="flex items-center">
                    <input
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={revealPwd ? "text" : "password"}
                      id="password"
                      placeholder="New Password"
                      className={` ${
                        errors.password && touched.password
                          ? "focus:ring-red-600"
                          : "focus:ring-ihs-green-shade-600"
                      } w-full border border-gray-300 px-3 py-3 text-gray-500 rounded-md focus:outline-none focus:ring-1`}
                      autoComplete="password"
                    />
                    {revealPwd ? (
                      <EyeOffIcon
                        className="w-4 -ml-6 text-gray-500"
                        onClick={() => setRevealPwd((prevState) => !prevState)}
                      />
                    ) : (
                      <EyeIcon
                        className="w-4 -ml-6 text-gray-500"
                        onClick={() => setRevealPwd((prevState) => !prevState)}
                      />
                    )}
                  </span>
                  {errors.password && touched.password && (
                    <p className="mt-2 text-xs text-red-500 normal-case animate-fly-in-y">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div className="">
                  <label
                    htmlFor="confirmPassword"
                    className="block py-2 text-sm font-medium text-gray-500"
                  >
                    Confirm Password <span className="text-red-600">*</span>
                  </label>
                  <span className="flex items-center">
                    <input
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={revealConfirmPwd ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      className={` ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "focus:ring-red-600"
                          : "focus:ring-ihs-green-shade-600"
                        } w-full border border-gray-300 px-3 py-3 text-gray-500 rounded-md focus:outline-none focus:ring-1`}
                        autoComplete="password"
                    />
                    {revealConfirmPwd ? (
                      <EyeOffIcon
                        className="w-4 -ml-6 text-gray-500"
                        onClick={() =>
                          setRevealConfirmPwd((prevState) => !prevState)
                        }
                      />
                    ) : (
                      <EyeIcon
                        className="w-4 -ml-6 text-gray-500"
                        onClick={() =>
                          setRevealConfirmPwd((prevState) => !prevState)
                        }
                      />
                    )}
                  </span>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="mt-2 text-xs text-red-500 normal-case animate-fly-in-y">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <div className="flex justify-start">
                  <button
                    type="submit"
                    disabled={Object.keys(errors).length > 0 || isSubmitting}
                    className="w-64 py-2 mt-4 mb-10 bg-ihs-green"
                  >
                    {isSubmitting ? "Updating Password" : "Update Password"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </>
      </>
    </HelmetProvider>
  );
};

export default Profile;

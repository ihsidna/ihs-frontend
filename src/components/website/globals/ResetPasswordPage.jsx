import React from "react";
import ResetPasswordForm from "../../app/ResetPasswordForm";
import Logo from "../../../assets/images/logo.svg";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center py-4">
        <a href="https://ihsmia.com">
          <img src={Logo} className="w-44 lg:w-56" alt="ihs-logo" />
        </a>
        <h1 className="md:text-4xl text-2xl text-ihs-green pt-20">
          Reset your password
        </h1>
      </div>
      <div className="flex justify-around">
        <div className="bg-white lg:w-1/3 md:w-2/3 w-full md:px-16 md:py-16 px-10 md:rounded-3xl md:shadow-lg">
          <ResetPasswordForm />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <button
          className=" flex items-center bg-transparent text-gray-600 hover:bg-transparent"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="w-4 mr-2 my-4" />{" "}
          Back
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

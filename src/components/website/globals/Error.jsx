import React, { useEffect } from "react";
import Error404 from "../../../assets/images/error404.jpg";
import Logo from "../../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col justify-center pt-24 items-center w-full h-full object-cover">
        <a href="https://ihsmia.com">
          <img src={Logo} className="w-44 lg:w-56" alt="ihs-logo" />
        </a>
        <img src={Error404} alt="error404" className="w-1/2" />
        <button className="p-2 mt-10" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default Error;

import React from "react";
import "@stripe/stripe-js";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ErrorPage from "./pages/ErrorPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/app/Dashboard";
import Beneficiaries from "./components/app/beneficiary/Beneficiaries";
import Appointments from "./components/app/appointment/Appointment";
import Layout from "./components/app/Layout";
import Profile from "./components/app/profile/Profile";
import Users from "./components/app/user/Users";
import HealthWorkers from "./components/app/healthworkers/HealthWorkers";
import EmailConfirmation from "./pages/EmailConfirmation";
import RequireAuth from "./components/app/RequireAuth";
import PersistLogin from "./components/app/PersistLogin";
import Service from "./components/app/service/Service";
import AllAppointment from "./components/app/appointment/AllAppointment";
import ResetPassword from "./pages/ResetPassword";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";
import Emails from "./components/app/email/Emails";

function App() {
  React.useEffect(() => {
    const setStatusBarStyleDark = async () => {
      if (Capacitor.isPluginAvailable("StatusBar")) {
        await StatusBar.setStyle({ style: Style.Light });
      } else {
        console.log("StatusBar plugin is not available on the web platform.");
      }
    };

    setStatusBarStyleDark();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route
          path="confirm/:confirmationCode"
          element={<EmailConfirmation />}
        />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route element={<PersistLogin />}>
          <Route element={<Layout />}>
            <Route
              element={
                <RequireAuth allowedUserTypes={["user", "employee", "admin"]} />
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="beneficiaries/*" element={<Beneficiaries />} />
              <Route path="appointments/*" element={<Appointments />} />
              <Route path="profile/*" element={<Profile />} />
            </Route>

            <Route
              element={<RequireAuth allowedUserTypes={["employee", "admin"]} />}
            >
              <Route path="users/*" element={<Users />} />
              <Route path="servicess/*" element={<Service />} />
              <Route path="healthworkers/*" element={<HealthWorkers />} />
              <Route path="allappointments/*" element={<AllAppointment />} />
              <Route path="emails/*" element={<Emails />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

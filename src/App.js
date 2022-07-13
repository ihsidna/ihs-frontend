import React from 'react';
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ErrorPage from "./pages/ErrorPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsConditions from "./pages/Terms&Conditions";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Dashboard from "./components/app/Dashboard";
import Beneficiaries from "./components/app/Beneficiaries";
import Layout from "./components/app/Layout";

function App() {
  return (
    <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="beneficiaries" element={<Beneficiaries />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
  );
}

export default App;

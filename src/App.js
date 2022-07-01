import React from 'react';
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/website/globals/Navbar";
import Footer from "./components/website/globals/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsConditions from "./pages/Terms&Conditions";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/signin"} element={<SignIn />} />
          <Route path={"/terms-conditions"} element={<TermsConditions />} />
          <Route path={"/faqs"} element={<FAQs />} />
          <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;

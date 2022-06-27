import React from 'react';
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

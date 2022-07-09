import React from 'react';
import SignInForm from "../components/website/globals/SignInForm";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";

const SignIn = () => {
	return (
		<>
			<Navbar />
			<SignInForm />
			<Footer />
		</>
	);
};

export default SignIn;
import React from 'react';
import SignUpPage from "../components/website/globals/SignUpPage";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";
import {Helmet, HelmetProvider} from "react-helmet-async";

const SignUp = () => {
	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>Sign Up | IHS</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<>
					<Navbar />
					<SignUpPage />
					<Footer />
				</>
			</>
		</HelmetProvider>
	);
};

export default SignUp;
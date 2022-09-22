import React from 'react';
import SignInPage from "../components/website/globals/SignInPage";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";
import {Helmet, HelmetProvider} from "react-helmet-async";

const SignIn = () => {
	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>Sign In | IHS</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<>
					<Navbar />
					<SignInPage />
					<Footer />
				</>
			</>
		</HelmetProvider>
	);
};

export default SignIn;
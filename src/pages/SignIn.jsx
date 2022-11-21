import React from 'react';
import SignInPage from "../components/website/globals/SignInPage";
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
					<SignInPage />
				</>
			</>
		</HelmetProvider>
	);
};

export default SignIn;
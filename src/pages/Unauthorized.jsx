import React from 'react';
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";
import Unauthorized from "../components/website/globals/Unauthorized";
import {Helmet, HelmetProvider} from "react-helmet-async";

const UnauthorizedPage
= () => {
	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>Unauthorized Access | IHS</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<>
					<Navbar />
					<Unauthorized />
					<Footer />
				</>
			</>
		</HelmetProvider>

	);
};

export default UnauthorizedPage;
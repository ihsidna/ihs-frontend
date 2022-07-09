import React from 'react';
import Error from "../components/website/globals/Error";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";

const ErrorPage
= () => {
	return (
		<>
			<Navbar />
			<Error />
			<Footer />
		</>

	);
};

export default ErrorPage;
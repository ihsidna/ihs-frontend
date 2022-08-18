import React from 'react';
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";
import Unauthorized from "../components/website/globals/Unauthorized";

const UnauthorizedPage
= () => {
	return (
		<>
			<Navbar />
			<Unauthorized />
			<Footer />
		</>

	);
};

export default UnauthorizedPage;
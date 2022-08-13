import React from 'react';
import Navbar from "../components/website/globals/Navbar";
import EmailConfirmed from "../components/app/EmailConfirmed";
import Footer from "../components/website/globals/Footer";

const EmailConfirmation = () => {
	return (
		<>
			<Navbar />
			<EmailConfirmed />
			<Footer />
		</>
	);
};

export default EmailConfirmation;
import React from 'react';
import PrivacyHero from "../components/website/privacy/PrivacyHero";
import Privacy from "../components/website/privacy/Privacy";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";

const PrivacyPolicy = () => {
	return (
		<>
			<Navbar />
			<PrivacyHero />
			<Privacy />
			<Footer />
		</>
	);
};

export default PrivacyPolicy;
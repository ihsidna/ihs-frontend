import React from 'react';
import TermsHero from "../components/website/terms/TermsHero";
import Terms from "../components/website/terms/Terms";
import Footer from "../components/website/globals/Footer";
import Navbar from "../components/website/globals/Navbar";

const TermsConditions = () => {
	return (
		<>
			<Navbar />
			<TermsHero />
			<Terms />
			<Footer />
		</>
	);
};

export default TermsConditions;
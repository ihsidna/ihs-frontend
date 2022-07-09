import React from 'react';
import ServiceHero from "../components/website/services/ServiceHero";
import PrimaryCare from "../components/website/services/PrimaryCare";
import SecondaryCare from "../components/website/services/SecondaryCare";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";

const Services = () => {
	return (
		<>
			<Navbar />
			<ServiceHero />
			<PrimaryCare />
			<SecondaryCare />
			<Footer />
		</>
	);
};

export default Services;
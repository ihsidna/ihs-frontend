import React from 'react';
import ServiceHero from "../components/website/services/ServiceHero";
import PrimaryCare from "../components/website/services/PrimaryCare";
import SecondaryCare from "../components/website/services/SecondaryCare";

const Services = () => {
	return (
		<>
			<ServiceHero />
			<PrimaryCare />
			<SecondaryCare />
		</>
	);
};

export default Services;
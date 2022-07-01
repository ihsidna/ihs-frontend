import React from 'react';
import Hero from "../components/website/landing/Hero";
import HowItWorks from "../components/website/landing/HowItWorks";
import Services from "../components/website/landing/Services";
import WhyUs from "../components/website/landing/WhyUs";

const Home = () => {
	return (
		<>
			<Hero />
			<HowItWorks />
			<Services />
			<WhyUs />
		</>
	);
};

export default Home;
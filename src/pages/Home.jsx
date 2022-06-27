import React from 'react';
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";

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
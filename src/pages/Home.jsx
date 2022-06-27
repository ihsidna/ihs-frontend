import React from 'react';
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Hero />
			<HowItWorks />
			<Services />
			<WhyUs />
			<Footer />
		</>
	);
};

export default Home;
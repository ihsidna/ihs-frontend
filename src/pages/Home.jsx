import React from 'react';
import Hero from "../components/website/landing/Hero";
import HowItWorks from "../components/website/landing/HowItWorks";
import Services from "../components/website/landing/Services";
import WhyUs from "../components/website/landing/WhyUs";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<HowItWorks />
			<Services />
			<WhyUs />
			<Footer />
		</>
	);
};

export default Home;
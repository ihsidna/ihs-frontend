import React from 'react';
import Hero from "../components/website/landing/Hero";
import HowItWorks from "../components/website/landing/HowItWorks";
import Services from "../components/website/landing/Services";
import WhyUs from "../components/website/landing/WhyUs";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Affiliations from "../components/website/landing/Affiliations";
import Cookie from "../components/website/globals/Cookie";

const Home = () => {
	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>Primary Home Care | Secondary & Tertiary Healthcare</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<>
					<Navbar />
					<Hero />
					<HowItWorks />
					<Services />
					<WhyUs />
					<Affiliations />
					<Footer />
					<Cookie />
				</>
			</>
		</HelmetProvider>
	);
};

export default Home;
import React from 'react';
import AboutHero from "../components/website/about/AboutHero";
import Objectives from "../components/website/about/Objectives";
import People from "../components/website/about/People";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";

const About = () => {
	return (
		<>
			<Navbar />
			<AboutHero />
			<Objectives />
			<People />
			<Footer />
		</>
	);
};

export default About;
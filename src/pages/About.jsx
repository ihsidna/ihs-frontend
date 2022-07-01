import React from 'react';
import AboutHero from "../components/website/about/AboutHero";
import Mission from "../components/website/about/Mission";
import People from "../components/website/about/People";
import ChooseUs from "../components/website/about/ChooseUs";

const About = () => {
	return (
		<>
			<AboutHero />
			<Mission />
			<People />
			<ChooseUs />
		</>
	);
};

export default About;
import React from 'react';
import Faq from "../components/website/faq/Faq";
import FaqHero from "../components/website/faq/FaqHero";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";

const FAQs = () => {
	return (
		<>
			<Navbar />
			<FaqHero />
			<Faq />
			<Footer />
		</>
	);
};

export default FAQs;
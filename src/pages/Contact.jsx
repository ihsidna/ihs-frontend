import React from 'react';
import ContactHero from "../components/website/contact/ContactHero";
import ContactForm from "../components/website/contact/ContactForm";
import ContactDetails from "../components/website/contact/ContactDetails";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";

const Contact = () => {
	return (
		<>
			<Navbar />
			<ContactHero />
			<ContactForm />
			<ContactDetails />
			<Footer />
		</>
	);
};

export default Contact;
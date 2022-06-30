import React from 'react';
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
	return (
		<>
			<ContactHero />
			<ContactForm />
			<ContactDetails />
		</>
	);
};

export default Contact;
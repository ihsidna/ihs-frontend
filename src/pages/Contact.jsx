import React from 'react';
import ContactHero from "../components/website/contact/ContactHero";
import ContactForm from "../components/website/contact/ContactForm";
import ContactDetails from "../components/website/contact/ContactDetails";

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
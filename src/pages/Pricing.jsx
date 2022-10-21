import React from 'react';
import {Helmet, HelmetProvider} from "react-helmet-async";
import Navbar from "../components/website/globals/Navbar";
import Footer from "../components/website/globals/Footer";
import PricingHero from "../components/website/pricing/PricingHero";
import PricingInfo from "../components/website/pricing/PricingInfo";

const Pricing = () => {
		return (
				<HelmetProvider>
						<>
								<Helmet>
										<title>Pricing | IHS</title>
										<link rel="canonical" href="https://www.ihsmdinc.com/" />
								</Helmet>
								<>
										<Navbar />
										<PricingHero />
										<PricingInfo />
										<Footer />
								</>
						</>
				</HelmetProvider>
		);
};

export default Pricing;
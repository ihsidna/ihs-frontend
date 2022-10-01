import React from 'react';

import Logo from "../../../assets/images/logo.svg";
import {Link, useNavigate} from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full border-t-2 border-gray-200">
			<div className="bg-gray-100 lg:px-32 md:px-8 lg:py-8 md:py-8 py-16">
				<div className="grid md:grid-cols-4 md:py-1">
					<div className="lg:py-0 md:py-28 px-8">
						<img src={Logo} alt="ihs logo" className="w-[70%] sm:w-2/3 lg:w-full"/>
					</div>
					<div className="px-8 mt-4">
						<ul className="flex flex-col items-start">
							<li className="uppercase text-xl font-medium text-neutral-600">Next Steps</li>
							<li>
								<button className="py-2 px-6 w-full text-lg shadow-2xl" onClick={() =>{
									navigate("/signup")
								}}>Get Started</button>
							</li>
							<li>
								<button className="bg-ihs-blue py-2 px-6 w-full text-lg shadow-2xl hover:text-ihs-blue hover:border-ihs-blue" onClick={() =>{navigate("/signin")}}>Sign In</button>
							</li>
						</ul>
					</div>
					<div className="px-8 mt-4">
						<ul className="flex flex-col items-start">
							<li className="uppercase text-xl font-medium text-neutral-600">Help & Support</li>
							<li className="text-lg py-1">
								<Link to="/contact" className="text-slate-400">Contact Us</Link>
							</li>
							<li className="text-lg py-1">
								<Link to="/faqs" className="text-slate-400">FAQs</Link>
							</li>
							<li className="text-lg py-1 text-slate-400">(+1) 613 491 2197</li>
							<li className="text-lg py-1 text-slate-400">support@ihsmdinc.com</li>
						</ul>
					</div>
					<div className="px-8 mt-4">
						<ul className="flex flex-col items-start">
							<li className="uppercase text-xl font-medium text-neutral-600">Legal</li>
							<li className="text-lg py-1">
								<Link to="/terms" className="text-slate-400">Terms of Use</Link>
							</li>
							<li className="text-lg py-1">
								<Link to="/privacy-policy" className="text-slate-400">Privacy Policy</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Footer;
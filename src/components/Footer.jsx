import React from 'react';

import Logo from "../assets/images/logo.svg";

const Footer = () => {
	return (
		<div className="w-full">
			<div className="bg-gray-100 lg:px-32 md:px-8 lg:py-8 md:py-8 py-16">
				<div className="grid md:grid-cols-4 md:py-10 ">
					<div className="md:py-28">
						<img src={Logo} alt="ihs logo" className="sm:w-2/3 lg:w-full"/>
					</div>
					<div className="px-8 mt-4">
						<ul className="flex flex-col items-start">
							<li className="lg:text-3xl md:text-2xl text-2xl font-bold text-gray-800 underline underline-offset-4 decoration-wavy decoration-ihs-green decoration-1">Next Steps</li>
							<li>
								<button className="lg:text-2xl md:text-xl py-2 px-6 md:w-[150px] w-[200px] text-xl shadow-2xl">Get Started</button>
							</li>
							<li>
								<button className="bg-ihs-blue lg:text-2xl md:text-xl py-2 px-6 md:w-[150px] w-[200px] text-xl shadow-2xl">Login</button>
							</li>
						</ul>
					</div>
					<div className="px-8 mt-4">
						<ul className="flex flex-col items-start">
							<li className="lg:text-3xl md:text-2xl text-2xl font-bold text-gray-800 underline underline-offset-4 decoration-wavy decoration-ihs-green decoration-1">Help & Support</li>
							<li className="md:text-2xl text-xl py-1 text-slate-800">Contact Us</li>
							<li className="md:text-2xl text-xl py-1 text-slate-800">FAQs</li>
							<li className="md:text-2xl text-xl py-1 text-slate-800">(+1) 98098765</li>
							<li className="md:text-2xl text-xl py-1 text-slate-800">contact@ihs.com</li>
						</ul>
					</div>
					<div className="px-8 mt-4">
						<ul className="flex flex-col items-start">
							<li className="lg:text-3xl md:text-2xl text-2xl font-bold text-gray-800 underline underline-offset-4 decoration-wavy decoration-ihs-green decoration-1">Legal</li>
							<li className="md:text-2xl text-xl py-1 text-slate-800">Terms & Conditions</li>
							<li className="md:text-2xl text-xl py-1 text-slate-800">Privacy & Policy</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Footer;
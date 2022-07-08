import React from 'react';
import{useNavigate} from "react-router-dom";
import WhyUsImage from "../../../assets/images/whyus.jpg";
import {CheckIcon} from "@heroicons/react/outline";

const WhyUs = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full lg:mt-20 lg:pt-20 py-32">

				<div className="grid md:grid-cols-2 content-evenly md:mx-20">

					<div className="flex flex-col justify-center items-start lg:px-10 md:px-10 px-8">
						<h2 className="md:text-6xl text-3xl font-semibold pb-2 mb-10 text-gray-800  border-b-2 border-b-ihs-green rounded-lg">Why IHS?</h2>

						<ul className="text-gray-600 text-lg md:text-2xl md:py-4 py-4">
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>
									Compliance & Regulations
								</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>Commitment To Care</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>Dignity & Respect</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>Discretion & Trust</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>Ease & Simplicity</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>Transparency</div>
							</li>
						</ul>

						<div className="grid md:grid-cols-2 my-8 lg:w-full md:w-full w-full">
							<button className="bg-ihs-green md:py-4 py-4 my-4 md:px-4 px-4 md:mr-4 md:text-xl text-xl md:hover:bg-transparent md:hover:text-ihs-green md:hover:border-ihs-green md:hover:font-bold hover:bg-transparent hover:text-ihs-green hover:border-ihs-green hover:font-bold shadow-md" onClick={() => {
								navigate('/signup')
							}}>Create an account</button>

							<button className="bg-ihs-blue md:py-4 py-4 my-4 md:px-4 px-4 md:mr-4 md:text-xl text-xl md:hover:bg-transparent md:hover:text-ihs-blue md:hover:border-ihs-blue md:hover:font-bold hover:bg-transparent hover:text-ihs-blue hover:border-ihs-blue hover:font-bold shadow-md" onClick={() => {navigate("about")}}>Learn More</button>
						</div>
					</div>

					<div className="w-full px-8 py-8 md:order-first md:mt-40 lg:mt-0">
						<img src={WhyUsImage} alt="hero" className="rounded-lg shadow-xl "/>
					</div>

				</div>

		</div>
	);
};

export default WhyUs;
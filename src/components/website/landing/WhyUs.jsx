import React from 'react';
import{useNavigate} from "react-router-dom";
import WhyUsImage from "../../../assets/images/whyus.jpg";
import {CheckIcon} from "@heroicons/react/outline";

const WhyUs = () => {
	const navigate = useNavigate();

	return (
		<div className="lg:mt-20 py-32 mx-6">

			<div className="flex justify-center items-center">
				<h2 className="md:text-4xl text-2xl font-semibold pb-2 mb-10 text-gray-800 border-b-2 border-b-ihs-green rounded-lg">Why IHS?</h2>
			</div>

			<div className="grid md:grid-cols-2">

					<div className="flex flex-col justify-center items-start w-[100%]">

						<ul className="text-gray-600 text-lg lg:text-xl">
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div className="xl:text-3xl">Commitment To Care</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div className="xl:text-3xl">Dignity & Respect</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div className="xl:text-3xl">Discretion & Trust</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div className="xl:text-3xl">Ease & Visibility</div>
							</li>
						</ul>

						<div className="grid md:grid-cols-2 mt-2 hidden sm:inline">
							<button className="bg-ihs-green py-4 px-4 md:mr-4  text-xl hover:bg-transparent hover:text-ihs-green hover:border-ihs-green hover:font-bold shadow-md"
											onClick={() => {navigate('/signup')}}>Create An Account</button>

							<button className="bg-ihs-blue py-4 px-4 my-4 text-xl hover:bg-transparent hover:text-ihs-blue hover:border-ihs-blue hover:font-bold shadow-md"
											onClick={() => {navigate("about")}}>Learn More</button>
						</div>
					</div>

					{/*This is the same button group above*/}
					{/*This is used for the mobile view to make it more responsive*/}
					<div className="grid md:grid-cols-2 mt-6 sm:hidden">
						<button className="bg-ihs-green py-4 px-4 text-xl hover:bg-transparent hover:text-ihs-green hover:border-ihs-green hover:font-bold shadow-md"
										onClick={() => {navigate('/signup')}}>Create An Account</button>

						<button className="bg-ihs-blue py-4 px-4 mt-4 text-xl hover:bg-transparent hover:text-ihs-blue hover:border-ihs-blue hover:font-bold shadow-md"
										onClick={() => {navigate("about")}}>Learn More</button>
					</div>
					<div className="w-full px-8 py-8 md:order-first hidden sm:inline">
						<img src={WhyUsImage} alt="hero" className="rounded-lg shadow-xl "/>
					</div>

				</div>

		</div>
	);
};

export default WhyUs;
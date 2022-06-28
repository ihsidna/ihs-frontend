import React from 'react';
import {useNavigate} from 'react-router-dom';

import {HeartIcon, ShieldExclamationIcon, ArrowRightIcon, CheckIcon} from "@heroicons/react/outline";

import ServiceImage from './../assets/images/services.png';
const Services = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full">
			<div className="w-full h-[700px] bg-gray-900/80 absolute">
				<img src={ServiceImage} alt="" className="w-full h-full object-cover mix-blend-overlay"/>
			</div>

			<div className="relative text-white max-w-[1240px] mx-auto">
				<div className="px-4 py-12">
					<h2 className="md:text-3xl text-2xl pt-8 text-slate-300 uppercase text-center">Services</h2>
					<h3 className="md:text-6xl text-4xl font-semibold py-6 text-center">Finding the right team</h3>
					<p className="flex justify-center md:text-3xl text-2xl py-3 lg:px-32 md:px-16 text-slate-300">We offer adults of all ages the expert care and support they need to live independently at home.</p>
				</div>

				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative md:gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-gray-800 md:mx-10 lg:mx-12">
					<div className="bg-white rounded-xl shadow-md lg:h-[500px] md:relative md:mx-16 md:mx-0 lg:mx-4">
						<div className="p-8">
							<HeartIcon className="w-16 p-4 bg-ihs-green text-white rounded-lg mt-[-4rem]"/>
							<h3 className="font-semibold text-2xl md:text-4xl my-6">Primary Care</h3>
							<p className='text-xl md:text-2xl text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<ul className="text-gray-600 text-xl md:text-2xl md:py-4 py-4">
								<li className="flex items-center">
									<div><CheckIcon className="mr-4 text-ihs-green-shade-600 w-5"/></div>
									<div>Home Visits</div>
								</li>
								<li className="flex items-center">
									<div><CheckIcon className="mr-4 text-ihs-green-shade-600 w-5"/></div>
									<div>Health Assessment & Monitoring</div>
								</li>
								<li className="flex items-center">
									<div><CheckIcon className="mr-4 text-ihs-green-shade-600 w-5"/></div>
									<div>Drug Administration</div>
								</li>
								<li className="flex items-center">
									<div><CheckIcon className="mr-4 text-ihs-green-shade-600 w-5"/></div>
									<div>Post-op Care</div>
								</li>
							</ul>
						</div>

						<div className="bg-slate-100 pl-8 py-4 md:absolute md:inset-x-0 md:bottom-0 cursor-pointer" onClick={() => { navigate("services")}}>
							<p className="flex items-center md:text-xl text-ihs-green-shade-600">Learn More <ArrowRightIcon className='w-5 ml-2'/></p>
						</div>

					</div>

					<div className="bg-white rounded-xl shadow-md lg:h-[500px] lg:relative md:mx-16 md:mx-0 lg:mx-4">
						<div className="p-8">
							<ShieldExclamationIcon className="w-16 p-4 bg-ihs-green text-white rounded-lg mt-[-4rem]"/>
							<h3 className="font-semibold text-2xl md:text-4xl my-6">Secondary Care</h3>
							<p className="text-xl md:text-2xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<ul className="text-gray-600 text-xl md:text-2xl md:py-4 py-4">
								<li className="flex items-center">
									<div><CheckIcon className="mr-4 text-ihs-green-shade-600 w-5"/></div>
									<div>Case & Resource Management for A&Es</div>
								</li>
								<li className="flex items-center">
									<div><CheckIcon className="mr-4 text-ihs-green-shade-600 w-5"/></div>
									<div>Ambulance Services</div>
								</li>
								<li className="flex items-center">
									<div><CheckIcon className="mr-4 text-ihs-green-shade-600 w-5"/></div>
									<div>ICU Access</div>
								</li>
								<li className="flex items-center">
									<div><CheckIcon className="mr-4 text-ihs-green-shade-600 w-5"/></div>
									<div>A&C Investigations (CT scans, MRIs, etc.)</div>
								</li>
								<li className="flex items-center">
									<div><CheckIcon className="mr-4 text-ihs-green-shade-600 w-5"/></div>
									<div>Intermediate and Major Surgeries (neurosurgery, orthopedic, oncology, renal dialysis, etc.)</div>
								</li>
							</ul>
						</div>
						<div className="bg-slate-100 pl-8 py-4 mt-5 lg:absolute lg:inset-x-0 lg:bottom-0 cursor-pointer" onClick={() => {
							navigate("/services")
						}}>
							<p className="flex items-center md:text-xl text-ihs-green-shade-600">Learn More <ArrowRightIcon className='w-5 ml-2'/></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
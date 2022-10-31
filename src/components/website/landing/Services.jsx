import React from 'react';
import {useNavigate} from 'react-router-dom';

import {HeartIcon, ShieldExclamationIcon, ArrowRightIcon} from "@heroicons/react/outline";

import ServiceImage from '../../../assets/images/services.jpg';
import PrimaryCareImage from "../../../assets/images/primary.jpg";
import SecondaryCareImage from "../../../assets/images/secondary.jpg";

const Services = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full">
			<div className="w-full h-[500px] bg-gray-900/80 absolute">
				<img src={ServiceImage} alt="" className="w-full h-full object-cover mix-blend-overlay"/>
			</div>

			<div className="relative text-white max-w-[1240px] mx-auto">
				<div className="px-4 py-12">
					<h2 className="md:text-3xl text-2xl pt-8 text-slate-300 uppercase text-center">Services</h2>
					{/*<h3 className="md:text-6xl text-4xl font-semibold py-6 text-center">Finding the right team</h3>*/}
					{/*<p className="flex justify-center md:text-3xl text-2xl py-3 lg:px-32 md:px-16 text-slate-300">We offer adults of all ages the expert care and support they need to live independently at home.</p>*/}
				</div>

				<div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-gray-800 md:mx-10 lg:mx-12">

					<div className="shadow-md">
						<div>
							<img src={PrimaryCareImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
						</div>
						<div className="bg-white md:py-14 py-10 -mt-1">
							<div className="grid grid-cols-6 lg:flex mx-2">
								<HeartIcon className="w-12 p-2.5 bg-ihs-green text-white rounded-md col-span-1"/>
								<p className="font-semibold text-2xl md:text-3xl m-2 col-span-5">Primary Care</p>
							</div>
						</div>
						<div className="bg-slate-100 pl-8 py-4 md:inset-x-0 md:bottom-0 cursor-pointer -mt-1" onClick={() => { navigate("services")}}>
							<p className="flex items-center md:text-xl text-ihs-green-shade-600">Learn More <ArrowRightIcon className='w-5 ml-2'/></p>
						</div>
					</div>
					<div className="shadow-md">
						<div>
							<img src={SecondaryCareImage} alt="Secondary Care" className="rounded-t-lg shadow-md" />
						</div>
						<div className="bg-white md:py-14 py-10 -mt-1">
							<div className="grid grid-cols-6 lg:flex mx-2">
								<ShieldExclamationIcon className="w-12 p-2.5 bg-ihs-green text-white rounded-md col-span-1"/>
								<p className="font-semibold text-2xl md:text-3xl my-2 ml-2 col-span-5">Secondary Care</p>
							</div>
						</div>
						<div className="bg-slate-100 pl-8 py-4 md:inset-x-0 md:bottom-0 cursor-pointer -mt-1" onClick={() => { navigate("services")}}>
							<p className="flex items-center md:text-xl text-ihs-green-shade-600">Learn More <ArrowRightIcon className='w-5 ml-2'/></p>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Services;
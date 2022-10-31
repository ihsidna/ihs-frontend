import React from 'react';
import {useNavigate} from "react-router-dom";

import {SupportIcon, BeakerIcon, ClipboardIcon, CubeIcon, HeartIcon, StopIcon} from "@heroicons/react/outline";
import CheckupImage from "../../../assets/images/checkup.jpg";
import AdministrationImage from "../../../assets/images/administration.jpg";
import AmbulatoryImage from "../../../assets/images/ambulatory.jpg";
import DrugsImage from "../../../assets/images/drugs.jpg";
import SupportImage from "../../../assets/images/support.jpg";
import CustomCare from "../../../assets/images/custom-care.jpeg";

const PrimaryCare = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="pb-20 pt-14 ">
				<div className="max-w-[1240] mx-auto md:pb-20">
					<div className="flex justify-center items-start">
						<h2 className="md:text-4xl text-xl font-semibold pb-2 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
							Primary Care
						</h2>
					</div>
					<div className="flex justify-center md:mx-10 mx-5 my-10">
						<div className="grid lg:grid-cols-3 md:grid-cols-2">
							<div className="shadow-md mx-2 my-6">
								<div>
									<img src={CheckupImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<CubeIcon className="col-span-2 bg-ihs-blue text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Routine Health Checks & Monitoring</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-2 my-6">
								<div>
									<img src={DrugsImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<BeakerIcon className="col-span-2 bg-ihs-blue text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Medication Administration</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-2 my-6">
								<div>
									<img src={AmbulatoryImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<HeartIcon className="col-span-2 bg-ihs-blue text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Post-Op & Ambulatory Care</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-2 my-6">
								<div>
									<img src={AdministrationImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<ClipboardIcon className="col-span-2 bg-ihs-blue text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Healthcare Coordination & Administration</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-2 my-6">
								<div>
									<img src={SupportImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<SupportIcon className="col-span-2 bg-ihs-blue text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Coaching & Literacy Support</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-2 my-6">
								<div>
									<img src={CustomCare} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<StopIcon className="col-span-2 bg-ihs-blue text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Custom Care</p>
									</div>
								</div>
							</div>

						</div>


					</div>

				</div>
				<div className="flex justify-center py-5">
					<button className="px-6 py-4 text-xl hover:font-semibold bg-ihs-blue hover:text-ihs-blue hover:border-ihs-blue"  onClick={() => { navigate("/signup")}}>Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default PrimaryCare;
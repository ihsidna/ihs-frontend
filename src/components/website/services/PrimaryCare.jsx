import React from 'react';
import {useNavigate} from "react-router-dom";

import {SupportIcon, BeakerIcon, ClipboardIcon, CubeIcon, HeartIcon} from "@heroicons/react/outline";
import CheckupImage from "../../../assets/images/checkup.jpg";
import AdministrationImage from "../../../assets/images/administration.jpg";
import AmbulatoryImage from "../../../assets/images/ambulatory.jpg";
import DrugsImage from "../../../assets/images/drugs.jpg";
import SupportImage from "../../../assets/images/support.jpg";

const PrimaryCare = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="md:pt-40 md:pb-20 pb-20 pt-14 ">
				<div className="max-w-[1240] mx-auto md:pb-20">
					<div className="flex justify-center items-start">
						<h2 className="md:text-5xl text-3xl font-semibold pb-2 mb-10 mt-10 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
							Primary Care
						</h2>
					</div>
					<div className="flex justify-center md:mx-20 mx-5 mt-10">
						<div className="grid lg:grid-cols-3 md:grid-cols-2">
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={CheckupImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<CubeIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-blue text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">Routine Health Checks & Monitoring</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={DrugsImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<BeakerIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-blue text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">Medication Administration</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={AmbulatoryImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<HeartIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-blue text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">Post-Op & Ambulatory Care</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={AdministrationImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<ClipboardIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-blue text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">Healthcare Coordination & Administration</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={SupportImage} alt="Primary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<SupportIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-blue text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">Coaching & Literacy Support</p>
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
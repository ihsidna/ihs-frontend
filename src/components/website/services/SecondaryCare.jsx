import React from 'react';
import {useNavigate} from "react-router-dom";

import ICUImage from "../../../assets/images/icu.jpg";
import OncologyImage from "../../../assets/images/oncology.jpg";
import SurgeryImage from "../../../assets/images/surgery.jpg";
import AmbulanceImage from "../../../assets/images/ambulance.jpg";
import ConsultationImage from "../../../assets/images/consultation.jpg";
import CustomCare from '../../../assets/images/custom-care.jpeg';
import {
	FolderOpenIcon,
	LightningBoltIcon,
	OfficeBuildingIcon,
	ScissorsIcon,
	StopIcon,
	TruckIcon
} from "@heroicons/react/outline";

const SecondaryCare = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="md:py-40 py-20 bg-gray-100">
				<div className="max-w-[1240] mx-auto md:pb-20">
					<div className="flex justify-center items-start">
						<h2 className="md:text-4xl text-xl font-semibold pb-2 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
							Secondary & Tertiary Care
						</h2>
					</div>
					<div className="flex justify-center md:mx-20 mx-5 my-10">
						<div className="grid lg:grid-cols-3 md:grid-cols-2">
							<div className="shadow-md mx-2 my-6 bg-white">
								<div>
									<img src={AmbulanceImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2 px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<TruckIcon className="col-span-2 bg-ihs-green text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Ambulance & Evacuation Services</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6 bg-white">
								<div>
									<img src={ICUImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<OfficeBuildingIcon className="col-span-2 bg-ihs-green text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">A&E, Resuscitative Treatments & ICU Access</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6 bg-white">
								<div>
									<img src={OncologyImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<LightningBoltIcon className="col-span-2 bg-ihs-green text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Oncology & Dialysis Care</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6 bg-white">
								<div>
									<img src={ConsultationImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<FolderOpenIcon className="col-span-2 bg-ihs-green text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Specialists Consultations</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6 bg-white">
								<div>
									<img src={SurgeryImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<ScissorsIcon className="col-span-2 bg-ihs-green text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Intermediate & Major Surgeries</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6 bg-white">
								<div>
									<img src={CustomCare} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg px-2">
									<div className="grid grid-cols-12 items-center md:space-x-4">
										<StopIcon className="col-span-2 bg-ihs-green text-white rounded-md w-8 md:w-12 xl:w-16 p-1"/>
										<p className="col-span-10 font-normal text-lg md:text-2xl">Custom Care</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className="flex justify-center py-5">
					<button className="px-6 py-4 text-xl hover:font-semibold"  onClick={() => { navigate("/signup")}}>Get Started</button>
				</div>
			</div>
		</div>

	);
};

export default SecondaryCare;
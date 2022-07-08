import React from 'react';
import {useNavigate} from "react-router-dom";

import ICUImage from "../../../assets/images/icu.jpg";
import OncologyImage from "../../../assets/images/oncology.jpg";
import SurgeryImage from "../../../assets/images/surgery.jpg";
import AmbulanceImage from "../../../assets/images/ambulance.jpg";
import ConsultationImage from "../../../assets/images/consultation.jpg";
import {FolderOpenIcon, LightningBoltIcon, OfficeBuildingIcon, ScissorsIcon, TruckIcon} from "@heroicons/react/outline";

const SecondaryCare = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="md:py-40 py-20 bg-gray-100">
				<div className="max-w-[1240] mx-auto md:pb-20">
					<div className="flex justify-center items-start">
						<h2 className="md:text-5xl text-3xl font-semibold pb-2 mb-10 text-gray-800 border-b-2 border-b-ihs-green rounded-lg">
							Secondary & Tertiary Care
						</h2>
					</div>
					<div className="flex justify-center md:mx-20 mx-5">
						<div className="grid lg:grid-cols-3 md:grid-cols-2">
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={AmbulanceImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<TruckIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-green text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">Ambulance & Evacuation Services</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={ICUImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<OfficeBuildingIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-green text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">A&E, Resuscitative Treatments & ICU Access</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={OncologyImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<LightningBoltIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-green text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">Oncology & Dialysis Care</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={ConsultationImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<FolderOpenIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-green text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">Specialists Consultations</p>
									</div>
								</div>
							</div>
							<div className="shadow-md mx-4 my-6">
								<div>
									<img src={SurgeryImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
								</div>
								<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
									<div className="flex space-x-4 mx-4">
										<div>
											<ScissorsIcon className="md:w-12 w-12 md:p-2 p-2.5 bg-ihs-green text-white rounded-md"/>
										</div>
										<p className="font-normal text-2xl md:text-3xl">Intermediate & Major Surgeries</p>
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
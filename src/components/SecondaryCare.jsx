import React from 'react';
import {FolderOpenIcon, LightningBoltIcon, OfficeBuildingIcon, ScissorsIcon, TruckIcon} from "@heroicons/react/outline";

const SecondaryCare = () => {
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
							<div className="border px-6 py-12 mx-4 my-6 rounded-xl shadow-md bg-white">
								<FolderOpenIcon className="w-16 p-4 bg-ihs-green text-white rounded-lg mt-[-4rem]"/>
								<h3 className="font-semibold text-2xl md:text-3xl my-4">Case & Resource Management for A&Es</h3>
								<p className="text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id efficitur tellus, ut consectetur nibh. Vivamus justo nunc, tempor ac vestibulum sed, efficitur auctor nisl. Vivamus iaculis risus eu nulla euismod, ut ultricies dolor tincidunt. Mauris malesuada dui maximus imperdiet pharetra. Proin lacus urna, posuere ac gravida ac, pretium vitae sapien. Quisque molestie mattis nisl nec maximus. Ut accumsan tortor in elit imperdiet, sit amet lacinia libero fermentum. Nam vitae ornare justo.</p>
							</div>
							<div className="border px-6 py-12 mx-4 my-6 rounded-xl shadow-md bg-white">
								<TruckIcon className="w-16 p-4 bg-ihs-green text-white rounded-lg mt-[-4rem]"/>
								<h3 className="font-semibold text-2xl md:text-3xl my-4">Ambulance Services</h3>
								<p className="text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id efficitur tellus, ut consectetur nibh. Vivamus justo nunc, tempor ac vestibulum sed, efficitur auctor nisl. Vivamus iaculis risus eu nulla euismod, ut ultricies dolor tincidunt. Mauris malesuada dui maximus imperdiet pharetra. Proin lacus urna, posuere ac gravida ac, pretium vitae sapien. Quisque molestie mattis nisl nec maximus. Ut accumsan tortor in elit imperdiet, sit amet lacinia libero fermentum. Nam vitae ornare justo.</p>
							</div>
							<div className="border px-6 py-12 mx-4 my-6 rounded-xl shadow-md bg-white">
								<OfficeBuildingIcon className="w-16 p-4 bg-ihs-green text-white rounded-lg mt-[-4rem]"/>

								<h3 className="font-semibold text-2xl md:text-3xl my-4">ICU Access</h3>
								<p className="text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id efficitur tellus, ut consectetur nibh. Vivamus justo nunc, tempor ac vestibulum sed, efficitur auctor nisl. Vivamus iaculis risus eu nulla euismod, ut ultricies dolor tincidunt. Mauris malesuada dui maximus imperdiet pharetra. Proin lacus urna, posuere ac gravida ac, pretium vitae sapien. Quisque molestie mattis nisl nec maximus. Ut accumsan tortor in elit imperdiet, sit amet lacinia libero fermentum. Nam vitae ornare justo.</p>
							</div>
							<div className="border px-6 py-12 mx-4 my-6 rounded-xl shadow-md bg-white">
								<LightningBoltIcon className="w-16 p-4 bg-ihs-green text-white rounded-lg mt-[-4rem]"/>
								<h3 className="font-semibold text-2xl md:text-3xl my-4">A&C Investigations</h3>
								<p className="text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id efficitur tellus, ut consectetur nibh. Vivamus justo nunc, tempor ac vestibulum sed, efficitur auctor nisl. Vivamus iaculis risus eu nulla euismod, ut ultricies dolor tincidunt. Mauris malesuada dui maximus imperdiet pharetra. Proin lacus urna, posuere ac gravida ac, pretium vitae sapien. Quisque molestie mattis nisl nec maximus. Ut accumsan tortor in elit imperdiet, sit amet lacinia libero fermentum. Nam vitae ornare justo.</p>
							</div>
							<div className="border px-6 py-12 mx-4 my-6 rounded-xl shadow-md bg-white">
								<ScissorsIcon className="w-16 p-4 bg-ihs-green text-white rounded-lg mt-[-4rem]"/>
								<h3 className="font-semibold text-2xl md:text-3xl my-4">Intermediate & Major Surgeries</h3>
								<p className="text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id efficitur tellus, ut consectetur nibh. Vivamus justo nunc, tempor ac vestibulum sed, efficitur auctor nisl. Vivamus iaculis risus eu nulla euismod, ut ultricies dolor tincidunt. Mauris malesuada dui maximus imperdiet pharetra. Proin lacus urna, posuere ac gravida ac, pretium vitae sapien. Quisque molestie mattis nisl nec maximus. Ut accumsan tortor in elit imperdiet, sit amet lacinia libero fermentum. Nam vitae ornare justo.</p>
							</div>
						</div>


					</div>

				</div>
				<div className="flex justify-center py-5">
					<button className="px-6 py-4 text-xl hover:font-semibold">Get Started</button>
				</div>
			</div>
		</div>

	);
};

export default SecondaryCare;
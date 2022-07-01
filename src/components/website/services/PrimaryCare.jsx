import React from 'react';
import {SupportIcon, BeakerIcon, ClipboardIcon, CubeIcon} from "@heroicons/react/outline";

const PrimaryCare = () => {
	return (
		<div>
			<div className="md:pt-40 md:pb-20 pb-20 pt-8">
				<div className="max-w-[1240] mx-auto md:pb-20">
					<div className="flex justify-center items-start">
						<h2 className="md:text-5xl text-3xl font-semibold pb-2 mb-10 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
							Primary Care
						</h2>
					</div>
					<div className="flex justify-center md:mx-20 mx-5 mt-10">
						<div className="grid lg:grid-cols-3 md:grid-cols-2">
							<div className="border px-6 py-12 mx-4 my-6 rounded-xl shadow-md bg-white">
								<SupportIcon className="md:w-16 w-12 md:p-4 p-2.5 bg-ihs-blue text-white rounded-lg mt-[-4rem]"/>
								<h3 className="font-semibold text-2xl md:text-3xl my-4">Home Visits</h3>
								<p className="text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id efficitur tellus, ut consectetur nibh. Vivamus justo nunc, tempor ac vestibulum sed, efficitur auctor nisl. Vivamus iaculis risus eu nulla euismod, ut ultricies dolor tincidunt. Mauris malesuada dui maximus imperdiet pharetra. Proin lacus urna, posuere ac gravida ac, pretium vitae sapien. Quisque molestie mattis nisl nec maximus. Ut accumsan tortor in elit imperdiet, sit amet lacinia libero fermentum. Nam vitae ornare justo.</p>

							</div>
							<div className="border px-6 py-12 mx-4 my-6 rounded-xl shadow-md bg-white">
								<ClipboardIcon className="md:w-16 w-12 md:p-4 p-2.5 bg-ihs-blue text-white rounded-lg mt-[-4rem]"/>
								<h3 className="font-semibold text-2xl md:text-3xl my-4">Health Assessment & Monitoring</h3>
								<p className="text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id efficitur tellus, ut consectetur nibh. Vivamus justo nunc, tempor ac vestibulum sed, efficitur auctor nisl. Vivamus iaculis risus eu nulla euismod, ut ultricies dolor tincidunt. Mauris malesuada dui maximus imperdiet pharetra. Proin lacus urna, posuere ac gravida ac, pretium vitae sapien. Quisque molestie mattis nisl nec maximus. Ut accumsan tortor in elit imperdiet, sit amet lacinia libero fermentum. Nam vitae ornare justo.</p>

							</div>
							<div className="border px-6 py-12 mx-4 my-6 rounded-xl shadow-md bg-white">
								<BeakerIcon className="md:w-16 w-12 md:p-4 p-2.5 bg-ihs-blue text-white rounded-lg mt-[-4rem]"/>
								<h3 className="font-semibold text-2xl md:text-3xl my-4">Drug Administration</h3>
								<p className="text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id efficitur tellus, ut consectetur nibh. Vivamus justo nunc, tempor ac vestibulum sed, efficitur auctor nisl. Vivamus iaculis risus eu nulla euismod, ut ultricies dolor tincidunt. Mauris malesuada dui maximus imperdiet pharetra. Proin lacus urna, posuere ac gravida ac, pretium vitae sapien. Quisque molestie mattis nisl nec maximus. Ut accumsan tortor in elit imperdiet, sit amet lacinia libero fermentum. Nam vitae ornare justo.</p>

							</div>
							<div className="border px-6 py-12 mx-4 my-6 rounded-xl shadow-md bg-white">
								<CubeIcon className="md:w-16 w-12 md:p-4 p-2.5 bg-ihs-blue text-white rounded-lg mt-[-4rem]"/>
								<h3 className="font-semibold text-2xl md:text-3xl my-4">Post-Op Care</h3>
								<p className="text-lg py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id efficitur tellus, ut consectetur nibh. Vivamus justo nunc, tempor ac vestibulum sed, efficitur auctor nisl. Vivamus iaculis risus eu nulla euismod, ut ultricies dolor tincidunt. Mauris malesuada dui maximus imperdiet pharetra. Proin lacus urna, posuere ac gravida ac, pretium vitae sapien. Quisque molestie mattis nisl nec maximus. Ut accumsan tortor in elit imperdiet, sit amet lacinia libero fermentum. Nam vitae ornare justo.</p>

							</div>
						</div>


					</div>

				</div>
				<div className="flex justify-center py-5">
					<button className="px-6 py-4 text-xl hover:font-semibold bg-ihs-blue hover:text-ihs-blue hover:border-ihs-blue">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default PrimaryCare;
import React from 'react';

const Affiliations = () => {
	return (
		<div className="bg-gray-50 w-full md:py-32 py-20">
			<div className="max-w-[1240] mx-auto">
				<div className="flex justify-center items-center">
					<h2 className="md:text-4xl text-2xl font-semibold pb-2 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
						Our Network
					</h2>
				</div>
				<div className="grid md:grid-cols-3 gap-4 text-center my-10 md:mx-20 mx-10">

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700 text-base">Blue Ivy Medical Centre</p>
						<p className="text-gray-400 font-thin text-sm">Abuja, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700">Cedar Crest Hospitals</p>
						<p className="text-gray-400 font-thin text-sm">Abuja, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700">Eko Hospitals</p>
						<p className="text-gray-400 font-thin text-sm">Lagos, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700">First Rivers Hospital</p>
						<p className="text-gray-400 font-thin text-sm">Rivers, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700">George's Memorial Medical Centre</p>
						<p className="text-gray-400 font-thin text-sm">Lagos, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center content-center">
						<p className="text-gray-700">Lagoon Hospitals</p>
						<p className="text-gray-400 font-thin text-sm">Lagos, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center content-center">
						<p className="text-gray-700">MeCure Healthcare</p>
						<p className="text-gray-400 font-thin text-sm">Lagos, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center content-center">
						<p className="text-gray-700">Medicaid Radiology</p>
						<p className="text-gray-400 font-thin text-sm">Abuja, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700">Mercy Hospitals</p>
						<p className="text-gray-400 font-thin text-sm">Missouri, USA</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700">St. Catherine's Specialist Hospital</p>
						<p className="text-gray-400 font-thin text-sm">Rivers, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700">St. Joseph Medical Centre</p>
						<p className="text-gray-400 font-thin text-sm">Lagos, NG</p>
					</div>

					<div className="bg-white shadow py-5 flex flex-col justify-center items-center">
						<p className="text-gray-700">St. Luke's Healthcare System</p>
						<p className="text-gray-400 font-thin text-sm">Kansas City, USA</p>
					</div>

				</div>

			</div>
		</div>
	);
};

export default Affiliations;
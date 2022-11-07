import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";

const WhyUs = () => {

	return (
		<div className="lg:mt-20 py-32 mx-6">

			<div className="flex justify-center items-center">
				<h2 className="md:text-4xl text-2xl font-semibold pb-2 mb-10 text-gray-800 border-b-2 border-b-ihs-green rounded-lg">Why IHS?</h2>
			</div>

			<div className="flex justify-center items-center">
				<YoutubeEmbed />
			</div>

		</div>
	);
};

export default WhyUs;
import React from 'react';

import HeroImage from './../assets/images/hero-image.png';

const Hero = () => {
	return (
		<div className="w-full bg-white flex flex-col justify-between sm:pt-32 pt-32 md:pb-20 pb-20 md:px-10">
			<div className="grid md:grid-cols-2 max-w-[1240] mx-auto">
				<div className="flex flex-col justify-center md:items-start items-center w-full px-8 py-5">
					<h1 className="lg:text-6xl md:text-4xl text-4xl md:py-2 sm:py-2 py-1 font-bold">Home health care</h1>
					<h1 className="lg:text-6xl md:text-4xl text-4xl md:py-2 sm:py-2 py-1 font-bold "> for your Loved Ones</h1>
					<h1 className="lg:text-6xl md:text-4xl text-4xl md:py-2 sm:py-2 py-1 font-bold">At Home</h1>
					<button className="lg:text-2xl md:text-xl py-3 px-6 w-[60%] sm:w-[60%] my-4 text-xl shadow-2xl">Get Started</button>
				</div>
				<div className="w-full px-8 py-8 md:align-middle">
					<img src={HeroImage} alt="hero" className="rounded-lg shadow-xl "/>
				</div>

			</div>

		</div>
	);
};

export default Hero;
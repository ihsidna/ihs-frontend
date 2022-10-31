import React from 'react';

const PricingHero = () => {
		return (
				<div className="w-full flex sm:py-10 align-center">
						<div className="w-full md:h-[400px] h-[200px] bg-neutral-900/50 absolute">
								<div className="w-full h-full object-cover mix-blend-overlay" style={{
										"backgroundColor": "#cdefef",
										"opacity": "0.8",
										"background": "radial-gradient(circle, transparent 20%, #cdefef 20%, #cdefef 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #cdefef 20%, #cdefef 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#7b7b7b 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #7b7b7b 2px, #cdefef 2px) -1px 0",
										"backgroundSize": "50px 50px, 50px 50px, 25px 25px, 25px 25px"
								}}>

								</div>
						</div>

						<div className="flex flex-col justify-center items-center relative text-white max-w-[1240px] mx-auto md:py-48 py-20">
								<div className="px-4">
										<h2 className="md:text-3xl text-lg text-slate-300 uppercase text-center">Pricing</h2>
										<h3 className="md:text-4xl text-lg font-semibold py-6 text-center">Subscription Plans To Ensure The Best Healthcare</h3>
								</div>
						</div>
				</div>
		);
};

export default PricingHero;
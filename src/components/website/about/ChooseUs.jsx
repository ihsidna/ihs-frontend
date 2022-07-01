import React from 'react';
import {CheckIcon} from "@heroicons/react/outline";

const ChooseUs = () => {
	return (
		<div>
			<div className="md:py-40 py-20 ">
				<div className="max-w-[1240] mx-auto">
					<div className="flex justify-center items-start">
						<h2 className="md:text-5xl text-3xl font-semibold pb-2 mb-10 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
							Why Choose Us?
						</h2>
					</div>
					<div className="lg:px-80 md:px-40 px-10">
						<p className="md:text-2xl text-lg py-4 text-slate-800">
							Choosing a care provider is a big decision. We’ve made it simple for you to find the right one.
							To help you with this we’ve outlined some of the reasons we think IHS is great choice.
						</p>
						<ul className="text-gray-600 text-lg md:text-2xl md:py-4 py-4 lg:px-20 md:px-10">
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>Our person-centred approach that focuses on your individual needs, goals and preferences.</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>Our enabling style that respects and extends your capabilities.</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>Our emphasis on partnership – you’ll be involved in designing your care every step of the way.</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>We offer you true choice and control – your care is directed by you.</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>Exceptionally responsive services driven by the latest home care technology.</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>Highly skilled, well trained care professionals who you can have complete confidence in.</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>Our unwavering focus on quality and client satisfaction.</div>
							</li>
						</ul>
					</div>

				</div>
			</div>
		</div>

	);
};

export default ChooseUs;
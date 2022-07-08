import React from 'react';
import {CheckIcon} from "@heroicons/react/outline";

const Objectives = () => {
	return (
		<div>
			<div className="md:py-40 pb-20 pt-8">
				<div className="max-w-[1240] mx-auto">
					<div className="flex justify-center items-start">
						<h2 className="md:text-5xl text-3xl font-semibold pb-2 mb-10 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
							Our Objectives
						</h2>
					</div>
					<div className="lg:px-80 md:px-40 px-10">
						<ul className="text-gray-600 text-lg md:text-2xl md:py-4 py-4 lg:px-20 md:px-10">
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>
									Provide simple, reliable & structured healthcare access to a specific group
									of people
									</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>Curate a platform that connects recipients of health services to their
									respective providers
									</div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>Play our role in the demand and delivery of Universal Healthcare Access
									as a Global Sustainability Initiative </div>
							</li>
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-blue w-6"/></div>
								<div>Attain all goals through the simplicity of Technology for ease &
									affordability
									</div>
							</li>
						</ul>

					</div>

				</div>
			</div>
		</div>
	);
};

export default Objectives;
import React from 'react';
import {CheckIcon} from "@heroicons/react/outline";

const Objectives = () => {
	return (
		<div>
			<div className="md:py-20 pb-20 pt-8">
				<div className="max-w-[1240] mx-auto">
					<div className="flex justify-center items-start">
						<h2 className="md:text-4xl text-2xl font-semibold pb-2 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
							Our Objectives
						</h2>
					</div>
					<div className="my-10">
						<ul className="text-gray-600 text-lg md:text-2xl md:py-4 py-4 lg:px-20 md:px-10">
							<li className="grid grid-cols-12 items-center">
								<div><CheckIcon className="col-span-1 text-ihs-blue w-6"/></div>
								<div className="col-span-11">
									Provide simple, reliable & structured healthcare access to a specific group
									of people
									</div>
							</li>
							<li className="grid grid-cols-12 items-center">
								<div><CheckIcon className="col-span-1 text-ihs-blue w-6"/></div>
								<div className="col-span-11">Curate a platform that connects recipients of health services to their
									respective providers
									</div>
							</li>
							<li className="grid grid-cols-12 items-center">
								<div><CheckIcon className="col-span-1 text-ihs-blue w-6"/></div>
								<div className="col-span-11">Play our role in the demand and delivery of Universal Healthcare Access
									as a Global Sustainability Initiative </div>
							</li>
							<li className="grid grid-cols-12 items-center">
								<div><CheckIcon className="col-span-1 text-ihs-blue w-6"/></div>
								<div className="col-span-11">Attain all goals through the simplicity of Technology for ease &
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
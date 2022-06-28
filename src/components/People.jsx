import React from 'react';
import {CheckIcon} from "@heroicons/react/outline";

const People = () => {
	return (
		<div>
			<div className="md:py-40 py-20 bg-gray-100">
				<div className="max-w-[1240] mx-auto">
					<div className="flex justify-center items-start">
						<h2 className="md:text-5xl text-3xl font-semibold pb-2 mb-10 text-gray-800 border-b-2 border-b-ihs-green rounded-lg">
							Our People
						</h2>
					</div>
					<div className="lg:px-80 md:px-40 px-10">
						<p className="md:text-2xl text-lg py-4 text-slate-800">
							It's our people that really set IHS apart.
							We’re committed to developing talented care professionals with a passion for making a difference. Our care workers are exceptional people who will help you get the most from life. Our people are:
						</p>
						<ul className="text-gray-600 text-lg md:text-2xl md:py-4 py-4 lg:px-20 md:px-10 ">
							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>
									<p className="font-medium py-2">COMPASSIONATE</p>
									<p>We only select care workers who are warm, kind, patient and will show you the level of care would give their own family.</p>
								</div>
							</li>

							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>
									<p className="font-medium py-2">RESPECTFUL</p>
									<p>Our staff are trained to respect you, your home, lifestyle and choices. You will never feel compromised or judged.</p>
								</div>
							</li>

							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>
									<p className="font-medium py-2">DIVERSE</p>
									<p>Our workforce is as richly diverse as our customer base so we can match you with care workers who instinctively understand your culture and lifestyle.</p>
								</div>
							</li>

							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>
									<p className="font-medium py-2">HIGHLY TRAINED</p>
									<p>Nationally recognised Care Certificate and extensive specialist training means our team are highly skilled to support you with varied health conditions.</p>
								</div>
							</li>

							<li className="flex items-center">
								<div><CheckIcon className="mr-4 text-ihs-green w-6"/></div>
								<div>
									<p className="font-medium py-2">THOROUGHLY VETTED</p>
									<p>Enhanced DBS and full reference checks offer you ensure our staff meet our high standards, protecting you and offering peace of mind.</p>
								</div>
							</li>
						</ul>

					</div>

				</div>
			</div>
		</div>
	);
};

export default People;
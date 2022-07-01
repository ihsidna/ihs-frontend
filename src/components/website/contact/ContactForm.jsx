import React from 'react';

const ContactForm = () => {
	return (
		<div>
			<div className="md:pt-40 md:pb-20 pb-20 pt-8">
				<div className="max-w-[1240] mx-auto md:pb-20">
					<div className="flex justify-center items-start">
						<h2 className="md:text-5xl text-3xl font-semibold pb-2 mb-10 text-gray-800 border-b-2 border-b-ihs-green rounded-lg">
							How can we help?
						</h2>
					</div>

					<div className="py-10">
						<div className="flex justify-around">
							<div className="bg-white lg:w-1/2 md:w-2/3 w-full md:px-16 md:py-8 px-10 md:rounded-3xl md:shadow-lg">
								<form className="mb-0 space-y-0" action="src/components/website/contact/ContactForm#" method="POST">
									<div>
										<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Full Name <span
											className="text-red-600">*</span></label>
										<div className="mt-1">
											<input type="text" id="fullName" name="fullName" required autoComplete="current-fullName"
														 className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
										</div>
									</div>

									<div className="">
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-5">Email Address <span className="text-red-600">*</span></label>
										<div className="mt-1">
											<input type="email" id="email" name="email" autoComplete="email" required
														 className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
										</div>
									</div>

									<div>
										<label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mt-5">Subject <span
											className="text-red-600">*</span></label>
										<div className="mt-1">
											<input type="text" id="subject" name="subject" required autoComplete="current-subject"
														 className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600" />
										</div>
									</div>

									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-5">Message <span
											className="text-red-600">*</span></label>
										<div className="mt-1">
											<textarea name="message" id="message" required autoComplete="current-message" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600">
											</textarea>
										</div>
									</div>

									<div>
										<button type="submit" className="px-4 py-2 w-full mt-8 bg-ihs-green hover:font-bold focus: outline-none focus:ring-2 focus:ring-ihs-green-shade-500">
											Submit
										</button>
									</div>


								</form>
							</div>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
};

export default ContactForm;
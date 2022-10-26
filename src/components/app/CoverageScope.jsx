import React from 'react';

const CoverageScope = () => {
	return (
		<>
			<div className="sm:flex sm:items-center sm:justify-between mx-4">
				<h2 className="md:text-3xl text-xl font-bold text-gray-800 lg:mb-10">Coverage Scope</h2>
			</div>
			<div className="grid gap-6 mt-16 sm:gap-8 sm:grid-cols-1 xl:grid-cols-2 mx-4 mb-20">
				<div
					className="px-6 py-4 transition-colors duration-200 transform rounded-lg border shadow">
					<p className="text-lg font-extrabold text-gray-800">0 - 69 Years</p>
					<small className="text-gray-500">For individuals between the ages of 0 and 69</small>
					<h4 className="mt-8 md:text-xl text-lg font-extrabold text-gray-800">
						Primary Services
					</h4>
					<div className="mt-4 space-y-4">
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Routine Health Checks & Monitoring</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Medication Administration</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Post-Op & Ambulatory Care</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className=" min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Secondary Care Resource, Coordination & Administration</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Health Coaching & Literacy Support</span>
						</div>

					</div>

					<h4 className="mt-8 md:text-xl text-lg font-extrabold text-gray-800">Secondary Services & Up-To-Limits (ULs)</h4>

					<div className="mt-4 space-y-4">
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-600">
								Inpatient – N2.5M UL
							</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Outpatient – N1.5M UL</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Surgeries – N1M UL</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Oncology Care – N1M UL</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Dialysis Care – 3 Sessions Annually</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Maternity & Neo-Natal – N300K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Congenital Abnormalities (Pediatrics) – N250K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Dental Care – N50K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Optical Care – N75K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Medication Coverage (Chronic Diseases & Prescriptions)</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Physiotherapy – N50K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Wellness (Gym/Spa) – N10K UL Monthly</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Travel Coverage (Global, 30days)</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Critical Illness & Death Coverage – N500K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Mortuary Services (Storage, Autopsy & Embalmment) – N100K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Death & Funeral Expenses – N100K UL</span>
						</div>

					</div>
					<br/>
					<br/>

					<a href="https://firebasestorage.googleapis.com/v0/b/ihs-project.appspot.com/o/documents%2FIHSMD%20-%20Coverage%20Scope%20A.pdf?alt=media&token=e97db995-be6b-43f4-a2bd-94d6ebda5dec"
						 download="Coverage-Scope (70-85 years)" target="_blank"  rel="noreferrer" className="text-ihs-green underline">
						Download Coverage Scope
					</a>
				</div>

				<div
					className="px-6 py-4 transition-colors duration-200 transform rounded-lg border shadow">
					<p className="text-lg font-extrabold text-gray-800">70 - 85 Years</p>
					<small className="text-gray-500">For individuals between the ages of 70 and 85</small>

					<h4 className="mt-8 md:text-xl text-lg font-extrabold text-gray-800">Primary Services</h4>

					<div className="mt-4 space-y-4">
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Routine Health Checks & Monitoring</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Medication Administration</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Post-Op & Ambulatory Care</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Secondary Care Resource, Coordination & Administration</span>
						</div>
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Health Coaching & Literacy Support</span>
						</div>

					</div>

					<h4 className="mt-8 md:text-xl text-lg font-extrabold text-gray-800">Secondary Services & Up-To-Limits (ULs)</h4>

					<div className="mt-4 space-y-4">
						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-600">
								Inpatient – N1.5M UL
							</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Outpatient – N750K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Surgeries – N500K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Oncology Care – N1.5M UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Dental Care – N50K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Optical Care – N75K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Medication Coverage (Chronic Diseases & Prescriptions)</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Physiotherapy – N50K UL</span>
						</div>

						<div className="flex items-center">

							<svg xmlns="http://www.w3.org/2000/svg" className="min-w-fit h-5 text-ihs-green" viewBox="0 0 20 20"
									 fill="currentColor">
								<path fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"/>
							</svg>

							<span className="mx-4 text-gray-500">Death & Funeral Expenses – N100K UL (61 – 85)</span>
						</div>

					</div>
					<br/>
					<br/>

					<div>

						<p className="lg:mx-4 text-gray-600">NB</p>

						<p className="lg:mx-4 text-gray-600 text-sm">
							- Chronic Disease Medications: Coverage Commences Month 2
						</p>
						<p className="lg:mx-4 text-gray-600 text-sm">
							- Dental & Optical Care: Coverage Commences Month 3
						</p>
						<p className="lg:mx-4 text-gray-600 text-sm">
							- Death & Funeral Expenses: Coverage Commences Month 6
						</p>
						<p className="lg:mx-4 text-gray-600 text-sm">
							- Surgeries, Oncology & ICU Care: Coverage Commences Month 12
						</p>
					</div>
					<br/>

					<a href="https://firebasestorage.googleapis.com/v0/b/ihs-project.appspot.com/o/documents%2FIHSMD%20-%20Coverage%20Scope%20B.pdf?alt=media&token=e38ac0d0-91fc-4a51-bc86-1c0f20e80873"
						 download="Coverage-Scope (70-85 years)" target="_blank"  rel="noreferrer" className="text-ihs-green underline">
						Download Coverage Scope
					</a>
				</div>

			</div>
		</>
);

}

export default CoverageScope;
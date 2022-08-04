import React from 'react';
import AvatarImage from "../../../assets/images/avatar.jpg";

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
					<div className="lg:px-20 md:px-10 px-4">
						<div className="flex justify-center md:mx-20 mx-5">
							<div className="grid lg:grid-cols-3 md:grid-cols-2">
								<div className="shadow-md md:mx-4 my-6">
									<div>
										<img src={AvatarImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-3xl md:text-3xl pb-2">Dr. Ola Awe</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Focus: </span>General Medicine & Health Infrastructure</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Sector: </span> Healthcare</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Location: </span> TX, USA</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6">
									<div>
										<img src={AvatarImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-3xl md:text-3xl pb-2">Esther Opaluwa</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Focus: </span>Healthcare Infrastructure & Regulations</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Sector: </span> Pharmaceuticals</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6">
									<div>
										<img src={AvatarImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-3xl md:text-3xl pb-2">Tobi Akintokun</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Focus: </span>Health Infrastructure & Analytics</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Sector: </span> Healthcare</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6">
									<div>
										<img src={AvatarImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-3xl md:text-3xl pb-2">Dapo Akinyade</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Focus: </span>IT Infrastructure & Security</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Sector: </span> Info-Tech</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Location: </span> TX, USA</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6">
									<div>
										<img src={AvatarImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-3xl md:text-3xl pb-2">Michael Femi-Tunbi</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Focus: </span>Project & Commercial Infrastructure</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Sector: </span> Fin-Tech</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6">
									<div>
										<img src={AvatarImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-3xl md:text-3xl pb-2">Boye Olaoye</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Focus: </span>Project & Commercial Infrastructure</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Sector: </span> Energy</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6">
									<div>
										<img src={AvatarImage} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-3xl md:text-3xl pb-2">Zainab Adewusi</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Focus: </span>Legal & Corporate Compliance</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Sector: </span> Legal</p>
											<p className="font-light text-xl md:text-xl"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default People;
import React from 'react';
import Boye from "../../../assets/images/Boye.jpg";
import Caleb from "../../../assets/images/Caleb.jpg";
import Michael from "../../../assets/images/Michael.jpg";
import Esther from "../../../assets/images/Esther.jpg";
import Olakanmi from "../../../assets/images/Olakanmi.jpg";
import Dapo from "../../../assets/images/Dapo.jpg";
import Zainab from "../../../assets/images/Zainab.jpg";
import Moyo from "../../../assets/images/Moyo.jpeg";
import Tobi from "../../../assets/images/Tobi.jpg";

const People = () => {
	return (
		<div>
			<div className="md:py-20 py-20">
				<div className="max-w-[1240] mx-auto">
					<div className="flex justify-center items-start">
						<h2 className="md:text-4xl text-2xl font-semibold pb-2 text-gray-800 border-b-2 border-b-ihs-blue rounded-lg">
							Our People
						</h2>
					</div>
					<div className="my-10">
						<div className="flex justify-center md:mx-20 mx-5">
							<div className="grid lg:grid-cols-3 md:grid-cols-2">
								<div className="shadow-md md:mx-4 my-6 bg-white">
									<div>
										<img src={Olakanmi} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md w-full" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-xl md:text-3xl pb-2">Olakanmi Dele-Awe, MD</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Focus: </span>Internal Medicine & Health Infrastructure</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Sector: </span> Healthcare</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Location: </span> TX, USA</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6 bg-white">
									<div>
										<img src={Esther} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md w-full" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-xl md:text-3xl pb-2">Esther Opaluwa</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Focus: </span>Health Infrastructure & Regulations</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Sector: </span> Pharmaceuticals</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6 bg-white">
									<div>
										<img src={Dapo} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md w-full" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-xl md:text-3xl pb-2">Dapo Akinyade</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Focus: </span>IT Infrastructure & Security</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Sector: </span> Info-Tech</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Location: </span> TX, USA</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6 bg-white">
									<div>
										<img src={Caleb} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md w-full" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-xl md:text-3xl pb-2">Caleb Tony-Enwin</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Focus: </span>Product & IT Infrastructure</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Sector: </span> Info-Tech</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6 bg-white">
									<div>
										<img src={Michael} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md w-full" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-xl md:text-3xl pb-2">Michael Femi-Tunbi</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Focus: </span>Project & Commercial Infrastructure</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Sector: </span> Fin-Tech</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6 bg-white">
									<div>
										<img src={Boye} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md w-full" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-xl md:text-3xl pb-2">Boye Olaoye</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Focus: </span>Project & Commercial Infrastructure</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Sector: </span> Energy</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6 bg-white">
									<div>
										<img src={Zainab} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md w-full" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-xl md:text-3xl pb-2">Zainab Adewusi</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Focus: </span>Legal & Corporate Compliance</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Sector: </span> Legal</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6 bg-white">
									<div>
										<img src={Tobi} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md w-full" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-xl md:text-3xl pb-2">Tobi Akintokun</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Focus: </span>Human Capital Infrastructure</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Sector: </span> Human Resources</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Location: </span> ON, Canada</p>
										</div>
									</div>
								</div>
								<div className="shadow-md md:mx-4 my-6 bg-white">
									<div>
										<img src={Moyo} alt="Secondary & tertiary Care" className="rounded-t-lg shadow-md w-full" />
									</div>
									<div className="bg-white md:py-10 py-8 -mt-1 rounded-b-lg">
										<div className="flex flex-col mx-4">
											<p className="font-normal text-xl md:text-3xl pb-2">Moyo Abiola</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Focus: </span>Human Capital Infrastructure</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Sector: </span> Human Resources</p>
											<p className="font-light text-base md:text-xl text-gray-500"><span className="font-normal">Location: </span> ON, Canada</p>
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
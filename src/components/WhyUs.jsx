import React from 'react';
import{useNavigate} from "react-router-dom";
import WhyUsImage from "../assets/images/whyus.png";

const WhyUs = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full lg:mt-20 lg:pt-20 py-32">

				<div className="grid md:grid-cols-2 content-evenly md:mx-20">

					<div className="flex flex-col justify-center items-start lg:px-10 md:px-10 px-8">
						<h2 className="md:text-6xl text-3xl font-semibold pb-2 mb-10 text-gray-800  border-b-2 border-b-ihs-green rounded-lg">Why IHS?</h2>
						<p className="md:text-2xl text-lg py-4 text-slate-800">
							Choosing a health care worker for yourself or your family members can be daunting, which is why we offer advice, specialist supportive living and friendly companionship to everyone.</p>

						<p className="md:text-2xl text-lg py-4 text-slate-800">Our expert health care team has accumulated decades of experience, giving us the capacity to support the most vulnerable and offer regular help for elderly living at home. We will identify the most appropriate worker to supply live in home care that meets with your specific needs alone. They will share your interests and match your personality.</p>

						<div className="grid md:grid-cols-2 my-8 lg:w-full md:w-full">
							<button className="bg-ihs-green md:py-4 py-4 my-4 md:px-4 px-4 md:mr-4 md:text-xl text-xl md:hover:bg-transparent md:hover:text-ihs-green md:hover:border-ihs-green md:hover:font-bold hover:bg-transparent hover:text-ihs-green hover:border-ihs-green hover:font-bold shadow-2xl" onClick={() => {
								navigate('/signup')
							}}>Create an account</button>

							<button className="bg-ihs-blue md:py-4 py-4 my-4 md:px-4 px-4 md:mr-4 md:text-xl text-xl md:hover:bg-transparent md:hover:text-ihs-blue md:hover:border-ihs-blue md:hover:font-bold hover:bg-transparent hover:text-ihs-blue hover:border-ihs-blue hover:font-bold shadow-2xl" onClick={() => {navigate("about")}}>Learn More</button>
						</div>
					</div>

					<div className="w-full px-8 py-8 md:order-first md:mt-40 lg:mt-0">
						<img src={WhyUsImage} alt="hero" className="rounded-lg shadow-xl "/>
					</div>

				</div>

		</div>
	);
};

export default WhyUs;
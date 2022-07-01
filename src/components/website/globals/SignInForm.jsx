import React from 'react';
import {Link} from "react-router-dom";

const SignInForm = () => {
	return (
		<div className="py-40">
			<div className="flex flex-col justify-center items-center py-4">
				<h1 className="md:text-4xl text-2xl text-ihs-green py-2">Sign in to your account</h1>
				<p className="text-sm py-2">Don't have an account? <span className="text-ihs-blue hover:underline"><Link to="/signup">Sign Up</Link></span></p>
			</div>
			<div className="flex justify-around">
				<div className="bg-white lg:w-1/3 md:w-2/3 w-full md:px-16 md:py-16 px-10 md:rounded-3xl md:shadow-lg">
					<form className="mb-0 space-y-0" action="src/components/website/globals/SignInForm#" method="POST">

						<div className="">
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-5">Email Address <span className="text-red-600">*</span></label>
							<div className="mt-1">
								<input type="email" id="email" name="email" autoComplete="email" required
											 className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
							</div>
						</div>

						<div className="">
							<label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-5">Password  <span className="text-red-600">*</span></label>
							<div className="mt-1">
								<input type="password" id="password" name="password" autoComplete="current-password" required
											 className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
							</div>
						</div>

						<div>
							<button type="submit" className="px-4 py-2 w-full mt-8 bg-ihs-green hover:font-bold focus: outline-none focus:ring-2 focus:ring-ihs-green-shade-500">
								Sign In
							</button>
						</div>


					</form>
				</div>
			</div>
		</div>	);
};

export default SignInForm;
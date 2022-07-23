import React from 'react';
import {Link} from "react-router-dom";

const SignUpForm = () => {
	return (
		<div className="py-40">
			<div className="flex flex-col justify-center items-center py-4">
				<h1 className="md:text-4xl text-2xl text-ihs-green py-2">Create an account. It's free</h1>
				<p className="text-lg py-2">Already have an account? <span className="text-ihs-green hover:underline"><Link to="/signin">Sign In</Link></span></p>
			</div>
			<div className="flex justify-around">
				<div className="bg-white lg:w-1/2 md:w-2/3 w-full md:px-16 md:py-8 px-10 md:rounded-3xl md:shadow-lg">
					<form className="mb-0 space-y-0" action="src/components/website/globals/SignUpForm#" method="POST">
						<div>
							<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name <span
								className="text-red-600">*</span></label>
							<div className="mt-1">
								<input type="text" id="firstName" name="firstName" required placeholder="John" autoComplete="current-firstName"
											 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
							</div>
						</div>

						<div>
							<label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mt-5">Last Name <span
								className="text-red-600">*</span></label>
							<div className="mt-1">
								<input type="text" id="lastName" name="lastName" required placeholder="Doe" autoComplete="current-lastName"
											 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600" />
							</div>
						</div>

						<div>
							<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mt-5">Phone <span
								className="text-red-600">*</span></label>
							<div className="mt-1">
								<input type="tel" id="phone" name="phone" required placeholder="Phone Number" autoComplete="current-phone"
											 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
							</div>
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-5">Email Address <span className="text-red-600">*</span></label>
							<div className="mt-1">
								<input type="email" id="email" name="email" autoComplete="email" placeholder="johndoe@email.com" required
											 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
							</div>
						</div>

						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-5">Password  <span className="text-red-600">*</span></label>
							<div className="mt-1">
								<input type="password" id="password" name="password" autoComplete="current-password" required placeholder="Password"
											 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
							</div>
						</div>

						<div className="flex justify-center">
							<p className="text-lg pt-5 text-slate-500">By clicking sign up agree to IHS's <Link to="/terms" className="text-ihs-green">Terms of Use</Link> and <Link to="/privacy-policy" className="text-ihs-green">Privacy Policy</Link></p>
						</div>
						<div>
							<button type="submit" className="px-4 py-2 w-full mt-8 bg-ihs-green hover:font-bold focus: outline-none focus:ring-2 focus:ring-ihs-green-shade-500">
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
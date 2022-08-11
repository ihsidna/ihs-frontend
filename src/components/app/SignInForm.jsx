import React from 'react';

const SignInForm = () => {
	return (
		<form className="mb-0 space-y-0" action="src/components/website/globals/SignInForm#SignInPage.jsx" method="POST">

			<div className="">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-5">Email Address <span className="text-red-600">*</span></label>
				<div className="mt-1">
					<input type="email" id="email" name="email" autoComplete="email" required placeholder="johndoe@email.com"
								 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
				</div>
			</div>

			<div className="">
				<label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-5">Password  <span className="text-red-600">*</span></label>
				<div className="mt-1">
					<input type="password" id="password" name="password" autoComplete="current-password" required placeholder="Password"
								 className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
				</div>
			</div>

			<div>
				<button type="submit" className="px-4 py-2 w-full mt-8 bg-ihs-green hover:font-bold focus: outline-none focus:ring-2 focus:ring-ihs-green-shade-500">
					Sign In
				</button>
			</div>


		</form>
	);
};

export default SignInForm;
import React from 'react';
import useAuth from "../../../hooks/useAuth";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {ChevronLeftIcon, ShoppingBagIcon} from "@heroicons/react/outline";
import {useNavigate} from "react-router-dom";

const Checkout = () => {
	const {loggedInUser} = useAuth();
	const navigate = useNavigate();

	return (
		<HelmetProvider>
			<>
				<Helmet>
					<title>My Beneficiaries | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
					<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
				</Helmet>

				<div className="lg:p-20 md:p-10 p-3">
					<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-8" onClick={() => navigate(-1)}>
						<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back</p>
					</button>
					<div className="flex md:justify-start justify-center md:items-start items-center">
						<div className="md:flex-1">

							<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
								<div className="flex">
									<ShoppingBagIcon className="md:w-14 w-8 md:ml-10 ml-3" />
									<h3 className="md:text-3xl text-2xl py-8 md:px-8 px-2">Add Health Coverage</h3>
								</div>
							</div>

							<div className="my-16 space-y-0" >
								<stripe-pricing-table pricing-table-id="prctbl_1LsWSIIGWAGjsS3Fu70MSfma"
																			publishable-key={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
																			client-reference-id={loggedInUser.id}
																			customer-email={loggedInUser.email}>
								</stripe-pricing-table>
							</div>
						</div>
					</div>
				</div>
			</>
		</HelmetProvider>

	);
};

export default Checkout;
import React, {useState} from 'react';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import {CheckIcon} from "@heroicons/react/outline";
import Spinner from "../../app/Spinner";

const CONTACT_URL = '/contact';

const ContactForm = () => {
	const axiosPrivate = useAxiosPrivate();
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true)
		try {
			await axiosPrivate.post(CONTACT_URL,
				JSON.stringify({
					name: fullName, email, subject, message}),
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true
				}
			)

			setFullName('');
			setEmail('');
			setSubject('');
			setMessage('')
			setEmail('');

			setSuccess(true);
			setLoading(false)
		} catch (err) {
			if (!err.response) {
				console.error('No Server Response')
				setSuccess(false);
				setLoading(false)
			} else {
				console.error(err)
			}
		}

	}
	return (
		<div className="md:pt-40 md:pb-20 pb-20 pt-8">
				<div className="max-w-[1240] mx-auto md:pb-20">
					<div className="flex justify-center items-start">
						<h2 className="md:text-5xl text-3xl font-semibold pb-2 mb-10 text-gray-800 border-b-2 border-b-ihs-green rounded-lg">
							How Can We Help?
						</h2>
					</div>

					<div className="py-10">
						<div className="flex justify-around">
							<div className="bg-white lg:w-1/2 md:w-2/3 w-full md:px-16 md:py-8 px-10 md:rounded-3xl md:shadow-lg">
								{loading && <Spinner />}
								<form className="mb-0 space-y-0" onSubmit={handleSubmit}>
									<div>
										<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Full Name <span
											className="text-red-600">*</span></label>
										<div className="mt-1">
											<input
												type="text"
												id="fullName"
												required
												autoComplete="current-fullName"
												value={fullName}
												onChange={(e) => setFullName(e.target.value)}
												className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
										</div>
									</div>

									<div className="">
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-5">Email Address <span className="text-red-600">*</span></label>
										<div className="mt-1">
											<input
												type="email"
												id="email"
												autoComplete="email"
												required
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
										</div>
									</div>

									<div>
										<label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mt-5">Subject <span
											className="text-red-600">*</span></label>
										<div className="mt-1">
											<input
												type="text"
												id="subject"
												required
												autoComplete="current-subject"
												value={subject}
												onChange={(e) => setSubject(e.target.value)}
												className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600" />
										</div>
									</div>

									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-5">Message <span
											className="text-red-600">*</span></label>
										<div className="mt-1">
											<textarea
												id="message"
												required
												autoComplete="current-message"
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600">
											</textarea>
										</div>
									</div>

									<div>
										<button type="submit" disabled={loading} className="px-4 py-2 w-full mt-8 bg-ihs-green hover:font-bold focus: outline-none focus:ring-2 focus:ring-ihs-green-shade-500">
											{loading ? "Submitting" : "Submit"}
										</button>
									</div>

									{/*Display success or error message depending on the state of the handle submit operation*/}
									{success &&
										<div className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-8">
											<CheckIcon className="w-6" /> <p className="text-lg px-5">Your message has been sent successfully</p>
										</div>
									}
								</form>
							</div>
						</div>
					</div>

				</div>

			</div>
	);
};

export default ContactForm;
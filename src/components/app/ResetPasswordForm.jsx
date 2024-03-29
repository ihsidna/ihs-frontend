import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
	barColors: {
		"0": "#05afb0"
	},
	shadowBlur: 5
});

const RESET_URL = "/user/resetPassword";

const ResetPasswordForm = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	const handleReset = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await axios.post(RESET_URL,
				JSON.stringify({email}),
				{
					headers: {'Content-Type': 'application/json'},
					withCredentials: true
				}
			);

			setLoading(false);
			setSuccess(true);
			setEmail('');
			setErrMsg('');

			// navigate(from, {replace: true});

		} catch (err) {
			if (!err.response) {
				setErrMsg('No Server Response');
				setLoading(false);
			} else if (err.response) {
				setErrMsg(err.response.data.message.replace("Error: ", ""));
				setLoading(false);
			} else {
				setErrMsg('Something Went Wrong');
				setLoading(false);
			}
		}

	}

	return (
		<>
			{success ? (
				<section className='flex flex-col items-center space-y-2'>
					<h1>You have initiated a password reset</h1>
					<p>Please check your email inbox (including junk/spam folder) to reset your password.</p>
					<button className="px-8 py-3" onClick={() => {
						navigate('/')
					}}>Sign In
					</button>
				</section>
			) : (
				<section>
					{loading && <TopBarProgress/>}

					<p
						className={errMsg ? "rounded-md p-4 mb-4 bg-ihs-green-shade-200 text-red-500 font-normal text-lg" : "absolute -left-[99999px]"}
						aria-live="assertive">{errMsg}</p>
					<form className="mb-0 space-y-0" onSubmit={handleReset}>

						<div className="">
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-5">Email Address <span
								className="text-red-600">*</span></label>
							<div className="mt-1">
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									id="email"
									autoComplete="email"
									required
									placeholder="johndoe@email.com"
									className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600"/>
							</div>
						</div>

						<div>
							<button
								className="px-4 py-2 w-full mt-8 bg-ihs-green hover:font-bold focus: outline-none focus:ring-2 focus:ring-ihs-green-shade-500">
								Reset Password
							</button>
						</div>


					</form>

				</section>
			)}

		</>
	);
};

export default ResetPasswordForm;
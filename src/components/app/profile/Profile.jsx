import React, {useState} from 'react';
import {ChevronLeftIcon, UserCircleIcon} from "@heroicons/react/outline";
import {useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const UPDATE_PASSWORD = '/user/updatePassword';

const Profile = () => {
	const navigate = useNavigate();
	const axiosPrivate = useAxiosPrivate();
	const {loggedInUser, setAuth} = useAuth();

	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const response = await axiosPrivate.post(UPDATE_PASSWORD,
			JSON.stringify({ password: newPassword }),
			{ headers: { 'Content-Type': 'application/json' },
				withCredentials: true
			}
		);

		setLoading(false);
		setNewPassword('');
		setCurrentPassword('');

		setAuth({});
		localStorage.clear();
		navigate('/signin');
	}

	return (
		<>
			<div className="lg:p-20 md:p-10 p-3">
				<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-10" onClick={() => navigate("/dashboard")}>
					<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Dashboard</p>
				</button>
				<div className="flex">
					<div className="flex-1">
						<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
							<div className="flex">
								<UserCircleIcon className="md:w-14 w-8 md:ml-10 ml-3" />
								<h3 className="md:text-3xl sm:text-2xl text-xl py-8 md:px-8 px-2">My Profile</h3>
							</div>

							{/*<Link to="/beneficiaries/updatebeneficiary" className="text-gray-600 hover:text-gray-700">*/}
							{/*	<h3 className="md:text-xl text-lg md:px-8 px-3 hover:underline">Update</h3>*/}
							{/*</Link>*/}

						</div>

						<div className="my-10 ml-5 text-gray-600 md:text-xl" >
							<div className="grid grid-cols-4">
								<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">First Name: </p>
								<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{loggedInUser ? loggedInUser?.firstName : ""} </p>
							</div>
							<div className="grid grid-cols-4">
								<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Last Name: </p>
								<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{loggedInUser ? loggedInUser?.lastName : ""} </p>
							</div>
							<div className="grid grid-cols-4">
								<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Email: </p>
								<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{loggedInUser ? loggedInUser?.email : ""} </p>
							</div>
							<div className="grid grid-cols-4">
								<p className="py-5 font-semibold col-start-1 md:col-span-1 col-span-2">Phone Number: </p>
								<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{loggedInUser ? loggedInUser?.phone : ""} </p>
							</div>
						</div>

					</div>
				</div>

				<p className="text-xl text-ihs-green my-10 ">Change Password</p>

				<form className="my-5 space-y-0" onSubmit={handleSubmit}>

					{/*Password*/}
					<div className="flex flex-col">

						{/*<div>*/}
						{/*	<label*/}
						{/*		htmlFor="password"*/}
						{/*		className="block text-md font-medium text-gray-500"*/}
						{/*	>*/}
						{/*		Current Password*/}
						{/*		<span	className="text-red-600">*</span>*/}
						{/*	</label>*/}
						{/*	<div className="mt-1">*/}
						{/*		<input*/}
						{/*			type="password"*/}
						{/*			id="password"*/}
						{/*			required*/}
						{/*			placeholder="Current Password"*/}
						{/*			value={currentPassword}*/}
						{/*			onChange={(e) => setCurrentPassword(e.target.value)}*/}
						{/*			className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 w-96"/>*/}
						{/*	</div>*/}
						{/*</div>*/}

						<div className="my-5">
							<label
								htmlFor="newPassword"
								className="block text-md font-medium text-gray-500"
							>
								New Password
								<span className="text-red-600">*</span>
							</label>
							<div className="mt-1">
								<input
									type="password"
									id="newPassword"
									required
									placeholder="New Password"
									value={newPassword}
									onChange={(e) => setNewPassword(e.target.value)}
									className="w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border:bg-ihs-green-shade-500 focus:ring-1 focus:ring-ihs-green-shade-600 w-96"/>
							</div>
						</div>
					</div>

					<div className="flex justify-start">
						<button type="submit" className="px-4 py-3 mt-5 mb-10 bg-ihs-green hover:font-bold focus: outline-none focus:ring-2 focus:ring-ihs-green-shade-500 w-96 text-lg">
							Update Password
						</button>
					</div>
				</form>

			</div>
		</>
	);
};

export default Profile;
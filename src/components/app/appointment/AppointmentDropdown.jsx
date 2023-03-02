/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import {Link} from "react-router-dom";
import {userRoles} from "../../../data/enums";
import {useSelector} from "react-redux";
import {getKey} from "../../../utils/mobilePreferences";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function AppointmentDropdown({appointmentDetails}) {
	const [mobileAuth, setMobileAuth] = useState('');

	const loggedInUser = useSelector((state) => state.auth.loggedInUser);
	const userType = useSelector((state) => state.auth.userAccess.userType);

	useEffect(() => {
		getKey('auth')
		.then((result) => {
			setMobileAuth(result);
		})
		.catch((err) => {
			console.error(err);
		});
	}, [])

	return (
		<Menu as="div" className="relative inline-block text-left pr-4">
			<div>
				<Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ihs-green focus:ring-offset-2 focus:ring-offset-gray-100">
					Options
					<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{loggedInUser?.id === appointmentDetails?.userId && (
							<>
								<Menu.Item>
									{({ active }) => (
										<Link to={`/appointments/review/${appointmentDetails?.id}`}
													className={classNames(
														active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
										>
											Review Appointment
										</Link>
									)}
								</Menu.Item>
								<hr />
							</>
						)}
					{(mobileAuth?.userType || userType) === userRoles.Admin && (
							<>
								<Menu.Item>
									{({active}) => (
										<Link to={`/allappointments/assignworker/${appointmentDetails?.id}`}
																className={classNames(
																		active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
																		'block px-4 py-2 text-sm'
																)}>
												Assign Health Worker
										</Link>
									)}
								</Menu.Item>

								<Menu.Item>
									{({active}) => (
										<Link to={`/appointments/bookfollowup/${appointmentDetails?.beneficiaryId}`}
													className={classNames(
														active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}>
											Follow Up Appointment
										</Link>
									)}
								</Menu.Item>
								<hr />
							</>
						)}

					{(mobileAuth?.userType || userType) !== userRoles.User && (
							<>
								<Menu.Item>
									{({ active }) => (
										<Link to={`/allappointments/updateappointment/${appointmentDetails?.id}`}
											className={classNames(
												active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												'block px-4 py-2 text-sm'
											)}
										>
											Update Appointment
										</Link>
									)}
								</Menu.Item>

								<Menu.Item>
									{({ active }) => (
										<Link to={`/allappointments/updateappointment/${appointmentDetails?.id}/uploadreport`}
													className={classNames(
														active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
										>
											Upload Report
										</Link>
									)}
								</Menu.Item>
								<hr />
							</>
						)}

					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

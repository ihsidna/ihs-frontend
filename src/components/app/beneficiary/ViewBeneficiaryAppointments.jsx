import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import TopBarProgress from "react-topbar-progress-indicator";
import {Tab} from "@headlessui/react";
import UpcomingAppointmentsTable from "../appointment/UpcomingAppointmentsTable";
import CompletedAppointmentsTable from "../appointment/CompletedAppointmentsTable";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

TopBarProgress.config({
	barColors: {
		"0": "#05afb0"
	},
	shadowBlur: 5
});

const ViewBeneficiaryAppointments = () => {
	const axiosPrivate = useAxiosPrivate();
	const beneficiary = useParams();
	const [appointments, setAppointments] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const beneficiaryId = beneficiary.beneficiaryId;

		let isMounted = true;
		const controller = new AbortController();

		const getBeneficiaryAppointments = async () => {
			try {
				const response = await axiosPrivate.get(
					`/user/appointments/beneficiary/${beneficiaryId}`,
					{
						signal: controller?.signal
					});

				isMounted && setAppointments(response.data.data);
				setLoading(false)
			} catch (err){
				console.error(err)
			}
		}

		getBeneficiaryAppointments();

		return () => {
			isMounted = false;
			controller.abort();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (

		<div className="w-full px-2 pb-16 sm:px-0">
			{loading && <TopBarProgress />}
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-white p-1">

					<Tab key="upcoming" className={({selected}) => classNames(
						'w-full md:w-1/4 rounded-lg py-2.5 text-sm font-medium leading-5 text-ihs-green',
						'ring-white ring-opacity-60 ring-offset-2 ring-offset-ihs-green-shade-400 focus:outline-none focus:ring-2',
						selected
							? 'bg-ihs-green text-white shadow'
							: 'text-ihs-green hover:bg-white/[0.12] hover:text-white'
					)}>
						Upcoming
					</Tab>
					<Tab key="completed" className={({selected}) => classNames(
						'w-full md:w-1/4 rounded-lg py-2.5 text-sm font-medium leading-5 text-ihs-green',
						'ring-white ring-opacity-60 ring-offset-2 ring-offset-ihs-green-shade-400 focus:outline-none focus:ring-2',
						selected
							? 'bg-ihs-green text-white shadow'
							: 'text-ihs-green hover:bg-white/[0.12] hover:text-white ring-0'
					)}>
						Completed
					</Tab>
				</Tab.List>
				<Tab.Panels>

					<Tab.Panel>
						<UpcomingAppointmentsTable appointmentList={appointments} urlPath='appointments' />
					</Tab.Panel>

					<Tab.Panel>
						<CompletedAppointmentsTable appointmentList={appointments} urlPath='appointments' />
					</Tab.Panel>

				</Tab.Panels>
			</Tab.Group>

		</div>

	);
};

export default ViewBeneficiaryAppointments;
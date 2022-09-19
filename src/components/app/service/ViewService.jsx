import React, {useEffect, useState} from 'react';
import {ChevronLeftIcon, ClipboardCheckIcon} from "@heroicons/react/outline";
import {useNavigate, useParams} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Spinner from "../Spinner";

const ViewService = () => {
	const axiosPrivate = useAxiosPrivate();
	const service = useParams();
	const navigate = useNavigate();
	const {services} = useAuth();
	const [serviceDetails, setServiceDetails] = useState({})
	const [loading, setLoading] = useState(false);
	const [toggleModal, setToggleModal] = useState(false);

	const clicked = () => {
		setToggleModal(true)
	}

	useEffect(() => {
		const serviceId = service.serviceId;
		const filteredService = services.filter(service => service.id === serviceId);
		filteredService.length === 0 ? navigate(-1) : setServiceDetails(filteredService[0]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const deleteService = async () => {
		setLoading(true);
		const serviceId = service.serviceId;
		try {
			await axiosPrivate.delete(
				`/admin/service/delete/${serviceId}`,
			);

			const updatedServices = services.filter(service => service.id !== serviceId);
			localStorage.setItem("services", JSON.stringify(updatedServices));
			navigate("/servicess");

		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}

	}

	return (
		<div className="lg:p-20 md:p-10 p-3">
			{loading && <Spinner />}
			<button className="flex flex-row items-center justify-start h-10 border-0 bg-transparent text-slate-500 md:mb-20 md:mt-0 my-10" onClick={() => navigate("/servicess")}>
				<ChevronLeftIcon className="w-6" /> <p className="text-lg px-5">Back to Services</p>
			</button>
			<div className="flex">
				<div className="flex-1">

					<div className="flex justify-between items-center h-24 bg-ihs-green-shade-50 rounded-md shadow-sm text-gray-600">
						<div className="flex">
							<ClipboardCheckIcon className="md:w-14 w-8 md:ml-10 ml-3" />
							<h3 className="md:text-3xl text-2xl py-8 md:px-8 px-2">Service Details</h3>
						</div>

						<div className="pr-3">
							<button className="text-xl md:px-8 px-3" onClick={clicked}>Delete</button>
						</div>
					</div>

					<div className="mt-10 text-gray-600 md:text-xl" >
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Name: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2">{serviceDetails?.name} </p>
						</div>
						<div className="grid grid-cols-4">
							<p className="py-5 font-semibold px-10 col-start-1 md:col-span-1 col-span-2">Category: </p>
							<p className="py-5 md:ml-5 md:col-start-2 col-span-2 capitalize">{serviceDetails?.category} </p>
						</div>

					</div>
				</div>
			</div>
			{toggleModal && <DeleteModal setToggleModal={setToggleModal} deleteFunction={deleteService}/>}
		</div>
	);
};

const DeleteModal = ({ setToggleModal, deleteFunction}) => {
const navigate = useNavigate();
const message = "Are you sure you want to delete this service? This action cannot be undone."

	const handleDelete = () => {
		deleteFunction().then(
			navigate(-1)
		);
	}
	const handleCancelClick = () => {
		setToggleModal(false)
	}

	return (
		<div className="bg-zinc-200 opacity-90 fixed inset-0 z-50   ">

			<div className="flex h-screen justify-center items-center">
				<div className="w-full md:w-1/3 mx-auto">
					<div className=" flex flex-col p-5 rounded-lg shadow bg-white">
						<div className="flex flex-col items-center text-center">
							<div className="inline-block p-4 bg-ihs-green-shade-50 rounded-full">
								<svg className="w-12 h-12 fill-current text-ihs-green" xmlns="http://www.w3.org/2000/svg"
										 viewBox="0 0 24 24">
									<path d="M0 0h24v24H0V0z" fill="none"/>
									<path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
								</svg>
							</div>
							<h2 className="mt-2 md:text-2xl font-semibold text-gray-800">Are You Sure?</h2>
							<p className="mt-2 md:text-xl text-gray-600 leading-relaxed">{message}</p>
						</div>

						<div className="flex items-center mt-3">
							<button
								className="flex-1 px-4 py-2 bg-gray-100 text-ihs-green md:text-lg text-sm font-medium rounded-md"
								onClick={handleCancelClick}>
								Cancel
							</button>

							<button
								className="flex-1 px-4 py-2 ml-2 text-white md:text-lg text-sm font-medium rounded-md"
								onClick={handleDelete}>
								Yes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}
export default ViewService;
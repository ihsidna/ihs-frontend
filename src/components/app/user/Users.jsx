import {Route, Routes} from "react-router-dom";
import ViewUser from "./ViewUser";
import UserTable from "./UserTable";
import AddUser from "./AddUser";
import {userRoles} from "../../../data/enums";
import ViewUserBeneficiary from "./ViewUserBeneficiary";
import {Helmet, HelmetProvider} from "react-helmet-async";
import TopBarProgress from "react-topbar-progress-indicator";
import AddUserModal from "./AddUserModal";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getKey} from "../../../utils/mobilePreferences";

TopBarProgress.config({
	barColors: {
		"0": "#05afb0"
	},
	shadowBlur: 5
});

const Users = () => {
	return (
		<Routes>
			<Route index element={<ParentContent />} />
			<Route path="/viewuser/:userId" element={<ViewUser />} />
			<Route path="/adduser" element={<AddUser />} />
			<Route path="/viewuser/:userId/beneficiary/:beneficiaryId" element={<ViewUserBeneficiary />} />
		</Routes>
	);
};

const ParentContent = () => {
	const userType = useSelector((state) => state.auth.userAccess.userType);

	const [showAddUserModal, setShowAddUserModal] = useState(false);
	const [addUserModalSuccess, setAddUserModalSuccess] = useState(false);
	const [mobileAuth, setMobileAuth] = useState('');

	// get auth mobile preferences
	useEffect(() => {
		getKey('auth')
		.then((result) => {
			setMobileAuth(result);
		})
		.catch((err) => {
			console.error(err);
		});
	}, [])

	const handleShowAddUserModal = () => {
		setShowAddUserModal(true);
	}

	return (
		<HelmetProvider>

			{/*	show modal if modal is toggled*/}
			{showAddUserModal && <AddUserModal
				setShowAddUserModal={setShowAddUserModal}
				addUserModalSuccess={addUserModalSuccess}
				setAddUserModalSuccess={setAddUserModalSuccess}
			/>}

			<>
				<Helmet>
					<title>Users | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<div className="lg:p-20 md:p-10 p-3">

					{/*Users Section*/}
					<div className="flex justify-between items-center md:mt-16 mt-20">
				<h2 className="md:text-2xl text-xl">All Users</h2>
				{(mobileAuth?.userType || userType) === userRoles.Admin &&
					<button className="py-3 md:px-4 px-2" onClick={handleShowAddUserModal}>Add Admin User</button>
				}
			</div>

					<hr className="my-10"/>

					{/*Users Table*/}
					<UserTable />
				</div>
			</>
		</HelmetProvider>
	);
}
export default Users;
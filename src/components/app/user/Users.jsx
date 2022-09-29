import {Route, Routes, useNavigate} from "react-router-dom";
import ViewUser from "./ViewUser";
import UserTable from "./UserTable";
import AddUser from "./AddUser";
import {userRoles} from "../../../data/enums";
import useAuth from "../../../hooks/useAuth";
import ViewUserBeneficiary from "./ViewUserBeneficiary";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {useState, useEffect, useCallback} from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Spinner from "../Spinner";

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
	const axiosPrivate = useAxiosPrivate();
	const navigate = useNavigate();
	const {auth, loggedInUser, users, setUsers} = useAuth();
	const [loading, setLoading] = useState(false);

	const getUsers = useCallback(async () => {
		const response = await axiosPrivate.get("/users/all");

		const userList = response.data.data.filter(user => loggedInUser.id !== user.id)
		setUsers(userList);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (users.length === 0){
			setLoading(true)
			getUsers().then(() => {
				setLoading(false);
			});
		}
	}, [users.length, getUsers]);

	return (
		<HelmetProvider>
			{loading && <Spinner />}
			<>
				<Helmet>
					<title>Users | IHS Dashboard</title>
					<link rel="canonical" href="https://www.ihsmdinc.com/" />
				</Helmet>
				<div className="lg:p-20 md:p-10 p-3">
			{/*Users Section*/}
			<div className="flex justify-between items-center mt-10">
				<h2 className="md:text-2xl text-xl">All Users</h2>
				{auth?.userType === userRoles.Admin &&
					<button className="py-3 md:px-4 px-2" onClick={() => navigate('/users/adduser')}>Add Admin User</button>
				}
			</div>

			<hr className="my-10"/>

			{/*Users Table*/}
			<UserTable users={users}/>
		</div>
			</>
		</HelmetProvider>
	);
}
export default Users;
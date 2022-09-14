import {Route, Routes, useNavigate} from "react-router-dom";
import ViewUser from "./ViewUser";
import UserTable from "./UserTable";
import AddUser from "./AddUser";
import {userRoles} from "../../../data/enums";
import useAuth from "../../../hooks/useAuth";

const Users = () => {
	return (
		<Routes>
			<Route index element={<ParentContent />} />
			<Route path="/viewuser/:userId" element={<ViewUser />} />
			<Route path="/adduser" element={<AddUser />} />
		</Routes>
	);
};

const ParentContent = () => {
	const navigate = useNavigate();
	const {auth} = useAuth();

	return (
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
			<UserTable />
		</div>
	);
}
export default Users;
import {Route, Routes} from "react-router-dom";
import ViewUser from "./ViewUser";
import UserTable from "./UserTable";


const Users = () => {
	return (
		<Routes>
			<Route index element={<ParentContent />} />
			<Route path="/viewuser" element={<ViewUser />} />
		</Routes>
	);
};

const ParentContent = () => {

	return (
		<div className="lg:p-20 md:p-10 p-3">
			{/*Users Section*/}
			<div className="flex justify-between items-center mt-10">
				<h2 className="md:text-2xl text-xl">Users</h2>
				{/*<button className="py-3 md:px-4 px-2" onClick={() => navigate('/users/adduser')}>Add Beneficiary</button>*/}
			</div>

			<hr className="my-10"/>

			{/*Users Table*/}
			<UserTable />
		</div>
	);
}
export default Users;
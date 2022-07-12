import React from 'react';
import {ClipboardListIcon, CogIcon, LogoutIcon, TemplateIcon, UsersIcon} from "@heroicons/react/outline";

const Sidebar = () => {
	return (
		<div className="hidden md:flex h-screen border border-0 border-r border-slate-200 bg-cyan-50 w-80 overflow-y-hidden">
			<div className="flex flex-col justify-between">
				{/*	Menu */}
				<div className=" py-5 border border-0 border-b border-b-slate-200 w-80">
					<div className="flex hover:bg-ihs-green-shade-200 border border-0 hover:border-r-2 hover:border-r-ihs-green pl-7 py-2">
						<TemplateIcon className="text-gray-700 w-6" />
						<span className="ml-4 text-xl text-gray-700 ">Dashboard</span>
					</div>
					<div className="flex hover:bg-ihs-green-shade-200 border border-0 hover:border-r-2 hover:border-r-ihs-green pl-7 py-2">
						<UsersIcon className="text-gray-700 w-6" />
						<span className="ml-4 text-xl text-gray-700 ">Beneficiaries</span>
					</div>
					<div className="flex hover:bg-ihs-green-shade-200 border border-0 hover:border-r-2 hover:border-r-ihs-green pl-7 py-2">
						<ClipboardListIcon className="text-gray-700 w-6" />
						<span className="ml-4 text-xl text-gray-700 ">Appointments</span>
					</div>
				</div>
				{/*	Menu End*/}

				{/*Footer*/}
				<div className="py-5 border border-0 border-t border-t-slate-200 fixed bottom-0 w-80">
					<div className="flex hover:bg-ihs-green-shade-200 border border-0 hover:border-r-2 hover:border-r-ihs-green pl-7 py-2">
						<CogIcon className="text-gray-700 w-6" />
						<span className="ml-4 text-xl text-gray-700 ">Profile</span>
					</div>
					<div className="flex hover:bg-ihs-green-shade-200 border border-0 hover:border-r-2 hover:border-r-ihs-green pl-7 py-2">
						<LogoutIcon className="text-gray-700 w-6" />
						<span className="ml-4 text-xl text-gray-700 ">Logout</span>
					</div>
					<div className=" pl-7 py-2">
						<p className="text-sm text-gray-700">© 2022 All Rights Reserved v1.0.0</p>
					</div>
				</div>
				{/*	End Footer*/}
			</div>
		</div>
	);
};

export default Sidebar;
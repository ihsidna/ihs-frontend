import React, {useState} from 'react';
import Logo from "../../assets/images/logo.svg";
import {
	ClipboardListIcon,
	CogIcon,
	LogoutIcon,
	MenuIcon,
	TemplateIcon,
	UsersIcon,
	XIcon
} from "@heroicons/react/outline";
import {useNavigate} from "react-router-dom";
const Avatar  = "https://res.cloudinary.com/ihsidnadev/image/upload/v1654264295/ihs-cdn/images/default_avatar_fvtcew.png"

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav) ;

	return (
		<div className="border border-0 border-b border-b-slate-200">
			<div className="md:visible hidden md:flex justify-between">
				{/*Logo*/}
				<div className=" flex border border-0 border-r h-20 p-2 w-80 bg-cyan-50">
					<img src={Logo} alt="logo" className="h-full w-full" />
				</div>
				<div className="flex items-center">
					<div className="">
						<p className="text-xl text-gray-700 ">John Doe</p>
					</div>
					<div className="px-5">
						<img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
					</div>
				</div>
			</div>

			{/*	Mobile Menu*/}
			<div className="flex justify-between items-center">
				<div className="md:hidden visible px-8" onClick={handleNav}>
					{ !nav ? <MenuIcon className="h-6 w-6"/> : <XIcon className="h-6 w-6 mr-4"/> }
				</div>

				<div className="h-20 p-2 md:hidden">
					<img src={Logo} alt="logo" className="h-full w-full" />
				</div>

				<div className="px-5 md:hidden">
					<img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
				</div>

			</div>

			<div className={!nav ? "hidden" : "absolute flex flex-col justify-between bg-cyan-50 w-full h-screen"}>
				{/*	Menu */}
				<div className=" py-5 border border-0 border-b border-b-slate-200">
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
				<div className="py-5 border border-0 border-t border-t-slate-200 fixed bottom-0 w-full">
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

export default Navbar;
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {MenuIcon, XIcon} from "@heroicons/react/outline";
import Logo from "./../assets/images/logo.svg";

const Navbar = () => {
	const navigate = useNavigate();
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav) ;

	return (
		<div className="w-screen h-[80px] bg-white z-10 fixed drop-shadow-lg">
			<div className=" px-2 flex justify-between items-center w-full h-full">
				<div className="flex items-center">
					<img src={Logo} alt="ihs-logo" className="ml-0 w-1/2 sm:w-3/5 md:w-[50%]"/>

				</div>
				<div className="font-semibold hidden md:flex pr-4">
					<ul className="hidden font-semibold text-gray-800 md:flex ">
						<li>
							<Link to="/" className="text-gray-800 hover:text-gray-900">Home</Link>
						</li>
						<li>
							<Link to="/about" className="text-gray-800 hover:text-gray-900">About Us</Link>
						</li>
						<li>
							<Link to="/services" className="text-gray-800 hover:text-gray-900">Services</Link>
						</li>
						<li>
							<Link to="/contact" className="text-gray-800 hover:text-gray-900">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="font-semibold hidden md:flex pr-4">
					<button className="bg-transparent border-0 text-gray-800 md:px-7 md:py-3" onClick={() => {
						navigate('/signin')
					}}>Sign In</button>
					<button className="px-8 py-3" onClick={() => {
						navigate('/signup')
					}}>Sign Up</button>
				</div>
				<div className="md:hidden" onClick={handleNav}>
					{ !nav ? <MenuIcon className="h-6 w-6 mr-4"/> : <XIcon className="h-6 w-6 mr-4"/> }
				</div>
			</div>

			<ul className={!nav ? "hidden" : "absolute bg-white w-full px-8 font-semibold text-gray-800"}>
				<li className="border-b-2 border-zinc-200 w-full"><Link to="/">Home</Link></li>
				<li className="border-b-2 border-zinc-200 w-full"><Link to="/about">About Us</Link></li>
				<li className="border-b-2 border-zinc-200 w-full"><Link to="/services">Services</Link></li>
				<li className="border-b-2 border-zinc-200 w-full"><Link to="/contact">Contact</Link></li>
				<div className="flex flex-col my-4">
					<button className="bg-transparent text-ihs-green px-8 py-3 mb-4" onClick={() => {
						navigate('/signin')
					}}>Sign In</button>
					<button className="px-8 py-3" onClick={() => {
						navigate('/signup')
					}}>Sign Up</button>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
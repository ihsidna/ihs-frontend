import {ClipboardListIcon, CogIcon, LogoutIcon, TemplateIcon, UsersIcon} from "@heroicons/react/outline";

export const links = [
			{
				title: "dashboard",
				path: "dashboard",
				icon: <TemplateIcon  className="w-6" />,
			},
			{
				title: "beneficiaries",
				path: "beneficiaries",
				icon: <UsersIcon  className=" w-6" />,
			},
			{
				title: "appointments",
				path: "appointments",
				icon: <ClipboardListIcon  className="w-6" />,
			}
];

export const footerLinks = [
	{
		title: "profile",
		path: "profile",
		icon: <CogIcon  className="w-6" />,
	},
	{
		title: "logout",
		path: "logout",
		icon: <LogoutIcon  className=" w-6" />,
	},
];
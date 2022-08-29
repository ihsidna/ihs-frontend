import {
	ClipboardListIcon,
	CogIcon, GiftIcon,
	IdentificationIcon,
	TemplateIcon, UserGroupIcon, UsersIcon,
} from "@heroicons/react/outline";

export const adminLinks = [
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
			},
			{
				title: "services",
				path: "servicess",
				icon: <GiftIcon  className="w-6" />,
			},
			{
				title: "users",
				path: "users",
				icon: <UserGroupIcon  className="w-6" />,
			},
			{
				title: "health workers",
				path: "healthworkers",
				icon: <IdentificationIcon  className="w-6" />,
			}

];

export const userLinks = [
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
	},
];


export const footerLinks = [
	{
		title: "profile",
		path: "profile",
		icon: <CogIcon  className="w-6" />,
	}
];
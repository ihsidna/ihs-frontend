import {ClipboardListIcon, TemplateIcon, UsersIcon} from "@heroicons/react/outline";

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
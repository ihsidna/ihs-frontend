import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Modal from "../Modal";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { active } from "../../../data/enums";

export default function UserDropdown({ userDetails }) {
  const axiosPrivate = useAxiosPrivate();
  const [toggleModal, setToggleModal] = useState();

  const clicked = () => {
    setToggleModal(true);
  };

  const deactivateUser = async () => {
    try {
      await axiosPrivate.patch(
        `/user/${userDetails.id}/deactivate`,
        JSON.stringify({
          accountActive: active.False,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left pr-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ihs-green focus:ring-offset-2 focus:ring-offset-gray-100">
          Actions
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <button
                onClick={clicked}
                className="bg-transparent border-0 text-red-600 hover:text-red-900 block px-4 py-2 text-sm "
              >
                Deactivate User
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
      {toggleModal && (
        <Modal
          setToggleModal={setToggleModal}
          executeFunction={deactivateUser}
          message="Are you sure you want to deactivate this user?"
        />
      )}
    </Menu>
  );
}

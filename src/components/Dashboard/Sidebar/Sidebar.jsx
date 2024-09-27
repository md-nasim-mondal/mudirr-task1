"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import WorkspaceList from "./WorkspaceList";
import MenuItem from "./Shared/MenuItem";
import Launchpad from "./Launchpad";
import PinnedProjects from "./PinnedProjects";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Personal");
  const [selectedAccount, setSelectedAccount] = useState({
    id: 1,
    name: "Haseena Jameela",
    email: "haseenajameela@email.com",
    image: "/assets/images/Avatar.png",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='bg-[#F4F6FA] min-h-screen xl:p-6 overflow-x-hidden min-w-64'>
      <div>
        {/* Logo */}
        <Image
          src='/assets/Logo.svg'
          width={100}
          height={100}
          alt='Mudirr Logo'
        />
      </div>

      <div className='mt-4 relative'>
        {/* Dropdown Trigger */}
        <div
          className='focus:border focus:border-b-0 focus:border-gray-300 rounded-t-md w-full cursor-pointer flex items-center justify-between'
          onClick={handleDropdownToggle}
          tabIndex={0}>
          <div className='flex items-center'>
            <Image
              src={selectedAccount?.image}
              width={40}
              height={40}
              alt={selectedAccount?.name}
              className='rounded-full'
            />
            <div className='ml-2'>
              <p className='font-semibold text-[#050504] text-base'>
                {selectedAccount?.name}
              </p>
              <p className='text-sm text-[#3C3C34] text-[14px] truncate'>
                {selectedAccount?.email}
              </p>
            </div>
          </div>
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>{" "}
          {/* This is the dropdown arrow */}
        </div>

        {/* Dropdown Menu (optional) */}
        {isDropdownOpen && (
          <ul className='absolute top-[85%] left-0 w-full mt-2 bg-white border border-t-0 border-gray-300 rounded-b-md shadow-lg'>
            {/* Example of dropdown options */}
            <li
              onClick={() => setIsDropdownOpen(false)}
              className='p-2 cursor-pointer hover:bg-gray-100'>
              Switch Account
            </li>
            <li
              onClick={() => setIsDropdownOpen(false)}
              className='p-2 cursor-pointer hover:bg-gray-100'>
              Logout
            </li>
          </ul>
        )}
      </div>
      <div className='flex border border-[#DADAD7] rounded-lg bg-[#FFFFFF] p-1 w-full my-6'>
        {/* Personal Tab */}
        <button
          className={`flex-1 py-2 px-4 rounded-lg ${
            activeTab === "Personal"
              ? "bg-[#DBE2F0] text-[#334876] font-semibold"
              : "text-[#707066]"
          }`}
          onClick={() => setActiveTab("Personal")}>
          Personal
        </button>

        {/* Invited Tab */}
        <button
          className={`flex-1 py-2 px-4 rounded-lg ${
            activeTab === "Invited"
              ? "bg-[#DBE2F0] text-[#334876] font-semibold"
              : "text-[#707066]"
          }`}
          onClick={() => setActiveTab("Invited")}>
          Invited
        </button>
      </div>
      <div className='h-[65vh] overflow-y-auto overflow-x-hidden'>
        <div className='bg-[#EBF0FA] rounded-md p-2'>
          <div>
            <MenuItem label={"Dashboard"} address={"/dashboard"} />
            <MenuItem
              label={"Project History"}
              address={"/dashboard/project-history"}
            />
            <MenuItem
              label={"Client History"}
              address={"/dashboard/client-history"}
            />
            <MenuItem label={"Emails"} address={"/dashboard/emails"} />
          </div>
          <hr className='border-gray-300 my-3 h-1' />
          {<WorkspaceList />}
          <hr className='border-gray-300 my-3 h-1' />
          {<Launchpad />}
        </div>
        <div className='my-3'>{<PinnedProjects />}</div>
      </div>
      <div>
        <hr className='border-gray-300 mb-3 h-1' />
        <MenuItem label={"Account Settings"} address={"/account-settings"} />
        <div>
          <MenuItem label={"Logout"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

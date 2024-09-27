import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Launchpad = () => {
  const [launchpadIsOpen, setLaunchpadIsOpen] = useState(true);
  return (
    <div>
      {/* Launchpad Header */}
      <div
        className='cursor-pointer'
        onClick={() => setLaunchpadIsOpen(!launchpadIsOpen)}>
        <div className='flex items-center gap-2'>
          {launchpadIsOpen ? (
            <FaChevronUp className='text-gray-500' />
          ) : (
            <FaChevronDown className='text-gray-500' />
          )}
          <span className='font-semibold text-gray-600 uppercase'>LAUNCHPAD</span>
        </div>
      </div>

      {/* Businesses List */}
      {launchpadIsOpen && (
        <ul className='mt-2 space-y-1 pl-2 pr-2 text-sm'>
          {businesses?.map((business, index) => (
            <li key={index} className='flex justify-between items-center'>
              <span className="flex gap-2 items-center">
                <Image
                  alt={business?.name}
                  src={business?.icon}
                  width={20}
                  height={20}
                />
                <span className='text-[#707066]'>{business?.name}</span>
              </span>
              <FaChevronDown className='text-[#707066]' />
            </li>
          ))}
        </ul>
      )}

      {/* See All */}
      {launchpadIsOpen && (
        <div className='text-center mt-2'>
          <a
            href='#'
            className='text-[#5876B7] font-semibold text-sm hover:underline'>
            See All
          </a>
        </div>
      )}
    </div>
  );
};
const businesses = [
  {
    name: "Business Name 1",
    icon: "/assets/icons/Logo(1).svg",
  },
  {
    name: "Business Name 2",
    icon: "/assets/icons/Logo(2).svg",
  },
  {
    name: "Business Name 3",
    icon: "/assets/icons/Logo(3).svg",
  },
];

export default Launchpad;

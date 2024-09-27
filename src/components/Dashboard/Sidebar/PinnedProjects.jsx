import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PinnedProjects = () => {
  const [pinnedProjectsIsOpen, setPinnedProjectsIsOpen] = useState(true);
  return (
    <div>
      {/* PinnedProjects Header */}
      <div
        className='cursor-pointer'
        onClick={() => setPinnedProjectsIsOpen(!pinnedProjectsIsOpen)}>
        <div className='flex items-center gap-2'>
          {pinnedProjectsIsOpen ? (
            <FaChevronUp className='text-gray-500' />
          ) : (
            <FaChevronDown className='text-gray-500' />
          )}
          <span className='font-semibold text-gray-600 uppercase'>PINNED PROJECTS ({pinnedProjects?.length + '/' +pinnedProjects?.length}) </span>
        </div>
      </div>

      {/* PinnedProjects List */}
      {pinnedProjectsIsOpen && (
        <ul className='mt-2 space-y-1 pl-2 pr-2 text-sm'>
          {pinnedProjects?.map((project, index) => (
            <li key={index} className='flex justify-between items-center'>
              <span className="flex gap-2 items-center">
                <Image
                  alt={project}
                  src={"/assets/icons/Icon-Favorite(1).svg"}
                  width={20}
                  height={20}
                />
                <span className='text-[#707066]'>{project}</span>
              </span>
              <FaChevronDown className='text-[#707066]' />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const pinnedProjects = [
  "Project Name 1",
  "Project Name 2",
  "Project Name 3",
];


export default PinnedProjects;

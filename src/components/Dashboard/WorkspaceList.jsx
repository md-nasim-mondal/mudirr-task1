import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For icons

function WorkspaceList() {
  const [isOpen, setIsOpen] = useState(true); 
  
  return (
    <div>
      {/* Workspaces Header */}
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-2">
          {isOpen ? (
            <FaChevronUp className='text-gray-500' />
          ) : (
            <FaChevronDown className='text-gray-500' />
          )}
          <span className='font-semibold text-gray-600'>WORKSPACES</span>
        </div>
        <span className='text-gray-500 bg-[#DADAD7] px-1 rounded-md text-xs'>Coming Soon</span>
      </div>

      {/* Workspaces List */}
      {isOpen && (
        <ul className='mt-2 space-y-1 pl-8 pr-2 text-sm'>
          {workspaces.map((workspace, index) => (
            <li key={index} className='flex justify-between items-center'>
              <span className='text-[#707066]'>{workspace}</span>
              <FaChevronDown className='text-[#707066]' />
            </li>
          ))}
        </ul>
      )}

      {/* See All */}
      {isOpen && (
        <div className='text-center mt-2'>
          <a href='#' className='text-[#5876B7] font-semibold'>
            See All
          </a>
        </div>
      )}
    </div>
  );
}

const workspaces = [
    "Work Space Name 1",
    "Work Space Name 2",
    "Work Space Name 3",
  ];

export default WorkspaceList;

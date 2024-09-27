import Image from "next/image";
import React from "react";

const ProjectCard = ({project}) => {
  const { title, category, milestone, status } = project || {};
  return (
    <div className='rounded-md shadow-md p-4 max-w-[350px] border'>
      {/* Header: Title and Menu Icon */}
      <div>
        <div className='flex justify-between'>
          <div>
            <h3 className="text-[#050504] font-bold text-lg">{title}</h3>
            <p className="text-xs text-[#707066] pt-2">{category}</p>
          </div>
          <span>
            <Image src={'/assets/icons/IconDots.svg'} alt="More-btn-Icon" height={50} width={50} />
          </span>
        </div>

        {/* Custom Progress Bar */}
        <div className='my-2 flex flex-wrap justify-between items-center'>
          <div className='flex items-center justify-center'>
            {/* Circles for each step */}
            <div style={stepStyle(true)}></div>
            <div style={lineStyle}></div>
            <div style={stepStyle(true)}></div>
            <div style={lineStyle}></div>
            <div style={stepStyle(true)}></div>
            <div style={lineStyle1}></div>
            <div style={stepStyle(false)}></div>
          </div>
          <p className="text-end text-[#707066]">
            3/4 Done
          </p>
        </div>

        {/* Status Tags */}
        <div className='flex flex-col gap-1'>
          <span className="bg-[#DBE2F0] py-1 px-2 rounded-md w-fit">{status}</span> 
          <span className="bg-[#DBE2F0] py-1 px-2 rounded-md w-fit">Next milestone: {milestone}</span>
        </div>
      </div>

      {/* Action Section */}
      <div className='flex justify-between items-center mt-2'>
        <h4 className="text-[#050504] font-bold mt-auto">Follow up with manager</h4>
        <button className="bg-[#5876b7] p-2 rounded-md">
          <Image src={'/assets/icons/Send.svg'} alt="Send-Icon" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

// Styles for the circular steps and connecting lines
const stepStyle = (completed) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: completed ? "#5876B7" : "#DADAD7", // Blue for completed, gray for incomplete
  display: "inline-block",
});

const lineStyle = {
  height: 3,
  width: 50,
  backgroundColor: "#5876B7", // Blue connecting lines
  display: "inline-block",
};
const lineStyle1 = {
  height: 3,
  width: 50,
  backgroundColor: "#DADAD7", // Blue connecting lines
  display: "inline-block",
};

export default ProjectCard;

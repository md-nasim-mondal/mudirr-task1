import Image from "next/image";
import { useState } from "react";

const Tabs = ({ setFilter }) => {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const tabs = ["Ongoing", "Completed", "Cancelled", "Drafts"];

  return (
    <div className='flex justify-between gap-8 items-center'>
      <div className='border-b'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab ? "border-b-4 border-[#5876B7] text-[#5876B7]" : "text-[#707066]"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setFilter(tab);
            }}>
            {tab}
          </button>
        ))}
          </div>
          <div className="flex flex-wrap justify-center bg-[#5876B7] items-center px-4 py-2.5 rounded-md gap-2 text-white font-bold">
              <span>
                  <Image src={"/assets/icons/Add.svg"} alt="add-icon" height={20} width={20} />
              </span>
              <span className="text-center">
                  
              Create a Project
              </span>
          </div>
    </div>
  );
};

export default Tabs;

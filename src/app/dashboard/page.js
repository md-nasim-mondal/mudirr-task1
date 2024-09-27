"use client";
import ProjectCard from "@/components/Dashboard/ProjectCard";
import Tabs from "@/components/Dashboard/Tabs";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [filter, setFilter] = useState("Ongoing");
  const filteredProjects = projects.filter(
    (project) => project.status === filter
  );

  return (
    <div className='container mx-auto pt-8 px-6'>
      <div className='space-y-2'>
        <h2 className='font-bold text-3xl text-[#050504]'>
          Welcome Back, Haseena!
        </h2>
        <p className='text-[#707066]'>
          You have accomplished a lot today. Let us handle the rest.
        </p>
      </div>
      <div className='flex flex-wrap gap-4 md:gap-6 lg:gap-12 my-6'>
        {statuses?.map(({ id, img, title, totalNumber }) => (
          <div key={id} className='flex gap-2'>
            <Image src={img} alt='Folder-image' width={40} height={5} />
            <p className='flex flex-col'>
              <span className='font-bold text-[#050504]'>{totalNumber}</span>
              <span className='text-[#707066]'>{title}</span>
            </p>
          </div>
        ))}
      </div>
      <div className='h-[73vh] overflow-y-auto'>
        <Tabs setFilter={setFilter} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 justify-around'>
          {filteredProjects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div>
          {!filteredProjects?.length && (
            <>
              <div>
                <h3 className='text-3xl mt-12 font-semibold'>
                  You Have No {filter} Projects.
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
      <div className='flex flex-wrap gap-4 md:gap-6 lg:gap-12 mt-2'>
        <p className='flex gap-2 items-center'>
          <Image
            src='/assets/images/documentation.png'
            alt='documentation'
            width={30}
            height={10}
          />
          <span className='text-[#3C3C34] font-bold'>
            Explore Documentation
          </span>
        </p>
        <p className='flex gap-2 items-center'>
          <Image
            src='/assets/images/Calculate.png'
            alt='Calculator-Icon'
            width={30}
            height={10}
          />
          <span className='text-[#3C3C34] font-bold'>Cost Calculator</span>
        </p>
        <p className='flex gap-2 items-center'>
          <Image
            src='/assets/images/Calculate.png'
            alt='Calculator-Icon'
            width={30}
            height={10}
          />
          <span className='text-[#3C3C34] font-bold'>Billing Calculator</span>
        </p>
      </div>
    </div>
  );
};

const statuses = [
  {
    id: 1,
    title: "Completed",
    img: "/assets/images/Folder.png",
    totalNumber: 30,
  },
  {
    id: 2,
    title: "Ongoing",
    img: "/assets/images/Folder(1).png",
    totalNumber: "02",
  },
  {
    id: 3,
    title: "Cancelled",
    img: "/assets/images/Folder(2).png",
    totalNumber: "04",
  },
  {
    id: 4,
    title: "Drafts",
    img: "/assets/images/Folder(3).png",
    totalNumber: "02",
  },
];

const projects = [
  {
    id: 1,
    title: "Make an E-Commerce Website for a Brand Store",
    category: "Web",
    milestone: "Dec 5th",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Website technical maintenance project",
    category: "Web",
    milestone: "Jan 1st",
    status: "Ongoing",
  },
  {
    id: 3,
    title: "Website technical maintenance project",
    category: "Web",
    milestone: "In 3 days",
    status: "Ongoing",
  },
  {
    id: 4,
    title: "Website technical maintenance project",
    category: "Web",
    milestone: "In 3 days",
    status: "Ongoing",
  },
  {
    id: 5,
    title: "Make an E-Commerce Website for a Brand Store",
    category: "Web",
    milestone: "Dec 5th",
    status: "Ongoing",
  },
  {
    id: 6,
    title: "Website technical maintenance project",
    category: "Web",
    milestone: "Jan 1st",
    status: "Ongoing",
  },
  {
    id: 7,
    title: "Website technical maintenance project",
    category: "Web",
    milestone: "In 3 days",
    status: "Ongoing",
  },
];

export default Page;

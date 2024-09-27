"use client"
import ProjectCard from '@/components/Dashboard/ProjectCard';
import Tabs from '@/components/Dashboard/Tabs';
import React, { useState } from 'react';

const Page = () => {
  const [filter, setFilter] = useState('Ongoing');
  const filteredProjects = projects.filter((project) => project.status === filter);

  return (
    <div className="container mx-auto p-8">
      <Tabs setFilter={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 justify-around">
        {filteredProjects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div>
        {
          !filteredProjects?.length && <>
            <div>
              <h3 className="text-3xl mt-12 font-semibold">You Have No {filter} Projects.</h3>
          </div>
          </>
        }
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: 'Make an E-Commerce Website for a Brand Store',
    category: 'Web',
    milestone: 'Dec 5th',
    status: 'Ongoing',
  },
  {
    id: 2,
    title: 'Website technical maintenance project',
    category: 'Web',
    milestone: 'Jan 1st',
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Website technical maintenance project',
    category: 'Web',
    milestone: 'In 3 days',
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Website technical maintenance project',
    category: 'Web',
    milestone: 'In 3 days',
    status: 'Ongoing',
  },
  {
    id: 5,
    title: 'Make an E-Commerce Website for a Brand Store',
    category: 'Web',
    milestone: 'Dec 5th',
    status: 'Ongoing',
  },
  {
    id: 6,
    title: 'Website technical maintenance project',
    category: 'Web',
    milestone: 'Jan 1st',
    status: 'Ongoing',
  },
  {
    id: 7,
    title: 'Website technical maintenance project',
    category: 'Web',
    milestone: 'In 3 days',
    status: 'Ongoing',
  },
]

export default Page;

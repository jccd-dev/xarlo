'use client';

import Modal from './modal';
import Project from './project';
import { useState } from 'react';
import { projects } from './projectsData';

export default function WorkSection() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className='my-20 min-h-screen'>
      <div className='mb-10'>
        <h1 className='font-funnel text-[clamp(2rem,12vw,10rem)] md:leading-[0.95]'>
          <div className='block w-full text-start uppercase'>Projects</div>
        </h1>
        <h1 className='font-funnel text-[clamp(2rem,12vw,10rem)] text-westar-600 md:leading-[0.95]'>
          <div className='block w-full text-start uppercase'>Labs</div>
        </h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex w-full flex-col items-center justify-center'>
          {projects.map((project, index) => (
            <Project
              key={project.id}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          ))}
        </div>
        <Modal modal={modal} projects={projects} />
      </div>
    </div>
  );
}

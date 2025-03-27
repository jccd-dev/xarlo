'use client';

import Modal from './modal';
import Project from './project';
import { useState } from 'react';
// Define the project type
interface Project {
  id: string;
  title: string;
  client: string;
  services: string;
  color: string;
  year: number;
  image: string;
  slug: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: '1',
    title: 'Empowering Amazon Sellers',
    client: 'Titan Application',
    services: 'Application',
    year: 2024,
    color: '#000000',
    image: 'img1.jpg',
    slug: 'empowering-amazon-sellers',
  },
  {
    id: '3',
    title: 'Solutions for Government Contractors',
    client: 'Jackson Holcomb',
    services: 'Consulting',
    year: 2024,
    color: '#8C8C8C',
    image: 'img2.jpg',
    slug: 'solutions-government-contractors',
  },
  {
    id: '4',
    title: 'Knowledge and Wisdom',
    client: 'Nesh',
    services: 'Application',
    year: 2024,
    color: '#FF4D2E',
    image: 'img3.jpg',
    slug: 'knowledge-and-wisdom',
  },
  {
    id: '5',
    title: 'Transparency through Technology',
    client: 'Kayenta',
    services: 'Application',
    year: 2023,
    color: '#2E86FF',
    image: 'img4.jpg',
    slug: 'transparency-through-technology',
  },
  {
    id: '6',
    title: 'The Future of Prosperity',
    client: 'Etherfuse',
    services: 'Branding / Website',
    year: 2022,
    color: '#45FF2E',
    image: 'img5.jpg',
    slug: 'future-of-prosperity',
  },
];

export default function WorkSection() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className='flex min-h-screen items-center justify-center'>
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
  );
}

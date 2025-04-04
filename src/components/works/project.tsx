'use client';
import React from 'react';
import { ProjectProps } from '../../types/works';

export default function Project({ index, title, setModal }: ProjectProps) {
  return (
    <div
      className='group flex w-full cursor-pointer items-center justify-between border-t border-[#c9c9c9] px-10 py-10 transition-all duration-200 last:border-b hover:opacity-50'
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <h2 className='all m-0 text-3xl font-normal transition duration-300 group-hover:-translate-x-[10px]'>
        {title}
      </h2>
      <p className='all font-light transition duration-300 group-hover:translate-x-[10px]'>
        Design and Development
      </p>
    </div>
  );
}

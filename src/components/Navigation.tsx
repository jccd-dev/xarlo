'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/works', label: 'WORKS' },
  { href: '/about', label: 'ABOUT' },
];

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const activeClass =
    'before:-rotate-45 before:top-[1px] after:rotate-45 after:top-[-1px]';

  return (
    <nav className='fixed left-0 right-0 top-0 z-40'>
      <div className='relative mx-auto flex max-w-[1440px] items-center justify-between px-4 md:px-[5%]'>
        <div className='font-anomaly text-xl font-bold text-foreground'>
          XARLO
        </div>
        <div
          className={`z-20 flex h-20 w-20 cursor-pointer items-center justify-center ${
            isActive ? 'text-westar-100' : ''
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={`w-full before:relative before:top-[5px] before:m-auto before:block before:h-[1px] before:w-2/6 before:bg-current before:transition-transform before:duration-300 before:content-[''] after:relative after:-top-[5px] after:m-auto after:block after:h-[1px] after:w-2/6 after:bg-current after:transition-transform after:duration-300 after:content-[''] ${
              isActive ? activeClass : ''
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className='display absolute inset-0 z-10 flex h-screen w-full items-start justify-end px-[5%] pt-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='absolute inset-0 z-10 h-full w-full bg-westar-600 opacity-50 blur-sm backdrop-blur-sm'></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='relative -top-8 z-20 w-[33rem] max-w-full rounded-md bg-foreground px-5 pb-8 pt-16'
            >
              <div className='flex flex-col justify-between gap-8'>
                <div className=''>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className='text-4xl font-light text-white transition-colors hover:text-gray-300'
                        onClick={() => setIsActive(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className='mt-auto pt-8'>
                  <p className='text-sm text-white'>contact@example.com</p>
                  <p className='text-sm text-white'>@socialhandle</p>
                  <div className='mt-4'>
                    <p className='text-sm text-white'>
                      Freelancer Availability
                    </p>
                    <p className='text-sm text-white'>• Limited</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

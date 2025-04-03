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
    'before:-rotate-45 before:top-[3px] after:rotate-45 after:top-[3px]';

  return (
    <nav className='relative top-0 z-40 h-20'>
      <div className='fixed left-0 right-0 top-0'>
        <div className='relative mx-auto flex items-center justify-between px-4 pt-10 md:px-[5%]'>
          <div className='font-roboto text-2xl font-medium text-foreground'>
            Xarlo
          </div>
          <div className='font-roboto flex w-fit flex-row gap-2 text-2xl font-medium text-foreground'>
            <span>Work,</span>
            <span>About,</span>
            <span>Contact</span>
          </div>
          {/* <div
          className={`z-20 flex h-20 w-20 cursor-pointer items-center justify-center ${
            isActive ? 'text-westar-100' : ''
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={`relative w-full before:absolute before:left-1/2 before:top-0 before:m-auto before:block before:h-[2px] before:w-2/6 before:-translate-x-1/2 before:bg-current before:transition-all before:duration-300 before:content-[''] after:absolute after:left-1/2 after:top-[6px] after:m-auto after:block after:h-[2px] after:w-2/6 after:-translate-x-1/2 after:bg-current after:transition-all after:duration-300 after:content-[''] ${
              isActive ? activeClass : ''
            }`}
          ></div>
        </div> */}
        </div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className='display absolute inset-0 z-10 flex h-screen w-full items-start justify-end px-[5%] pt-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.5 } }}
          >
            <div className='absolute inset-0 z-10 h-full w-full bg-westar-600 opacity-50 blur-sm backdrop-blur-sm'></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.5 } }}
              className='relative -top-8 z-20 w-[33rem] max-w-full rounded-md bg-foreground px-6 py-16 pb-10'
            >
              <div className='flex flex-col justify-between gap-8'>
                <div className='flex flex-col gap-4'>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20, transition: { delay: 0 } }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className='font-uncage text-5xl font-semibold text-westar-800 transition-colors hover:text-westar-300'
                        onClick={() => setIsActive(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className='gird-cols-1 mt-auto grid pt-8 text-sm text-westar-500 sm:grid-cols-2'>
                  <div className=''>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20, transition: { delay: 0 } }}
                      transition={{ delay: 0.6 }}
                      className=''
                    >
                      johncarlo.digay@outlook.com
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20, transition: { delay: 0 } }}
                      transition={{ delay: 0.7 }}
                      className=''
                    >
                      +63 917 123 4567
                    </motion.div>
                  </div>
                  <div className='flex justify-end'>
                    <div className='text-start'>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20, transition: { delay: 0 } }}
                        transition={{ delay: 0.8 }}
                        className=''
                      >
                        @johncarlo7240
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20, transition: { delay: 0 } }}
                        transition={{ delay: 0.9 }}
                        className=''
                      >
                        @socialhandle
                      </motion.p>
                    </div>
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

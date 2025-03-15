'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDownRight, X } from 'lucide-react';

export default function Footer() {
  const [showForm, setShowForm] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    project: '',
  });

  const closeForm = () => {
    setShowForm(false);
    setCurrentStep(1);
  };

  return (
    <footer className='relative'>
      {/* Grid Background */}
      <div className='absolute inset-0 grid grid-cols-12 bg-[#FF5A47]'>
        {[...Array(12)].map((_, i) => (
          <div key={i} className='border-l border-[#FF6B5A] last:border-r' />
        ))}
      </div>

      <div className='relative z-10'>
        {/* Typography - Full Width */}
        <motion.div
          animate={{ width: showForm ? '40%' : '100%' }}
          className='h-full'
        >
          <div className='grid h-full w-full grid-cols-12'>
            {/* GET */}
            <div className='col-span-1 col-start-1 flex items-center pl-4'>
              <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
                g
              </span>
            </div>
            <div className='col-span-1 col-start-2 flex items-center'>
              <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
                e
              </span>
            </div>
            <div className='col-span-1 col-start-3 flex items-center'>
              <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
                t
              </span>
            </div>

            {/* QUOTE */}
            <div className='col-span-1 col-start-6 flex items-center'>
              <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
                q
              </span>
            </div>
            <div className='col-span-1 col-start-7 flex items-center'>
              <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
                u
              </span>
            </div>
            <div className='col-span-1 col-start-8 flex items-center'>
              <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
                o
              </span>
            </div>
            <div className='col-span-1 col-start-9 flex items-center'>
              <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
                t
              </span>
            </div>
            <div className='col-span-1 col-start-10 flex items-center'>
              <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
                e
              </span>
            </div>

            {/* A */}
            <div className='col-span-1 col-start-7 flex items-end pb-32'>
              <span className='text-[clamp(6rem,15vw,12rem)] font-medium text-white'>
                a
              </span>
            </div>
          </div>
        </motion.div>

        {/* Absolute Button */}
        {!showForm && (
          <div className='absolute bottom-12 right-6'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className='group flex h-32 w-32 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/90'
            >
              <div className='flex flex-col items-center gap-2'>
                <span className='text-sm font-medium'>FILL OUT</span>
                <span className='text-sm font-medium'>THE FORM</span>
                <ArrowDownRight className='h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5' />
              </div>
            </motion.button>
          </div>
        )}

        {/* Form Panel */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className='absolute right-0 top-0 h-full w-[60%] bg-white'
          >
            <div className='h-full overflow-y-auto p-12'>
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeForm}
                className='absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200'
              >
                <X className='h-5 w-5' />
                <span className='sr-only'>Close form</span>
              </motion.button>

              <div className='mb-16 max-w-xl'>
                <h1 className='mb-4 text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-tight'>
                  Please fill out the form below.
                </h1>
                <p className='text-gray-500'>
                  THE SOONER YOU START, THE SOONER YOU&apos;LL HAVE IT READY.
                </p>
              </div>

              <AnimatePresence mode='wait'>
                {currentStep === 1 ? (
                  <motion.div
                    key='step1'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className='space-y-12'
                  >
                    <div>
                      <div className='mb-6 flex items-center justify-between'>
                        <h2 className='text-2xl'>Introduce yourself.</h2>
                        <span className='text-sm text-gray-500'>1/2</span>
                      </div>
                      <p className='text-gray-500'>
                        Share your name and contact details so we can stay in
                        touch.
                      </p>
                    </div>

                    <div className='space-y-8'>
                      <div className='space-y-1'>
                        <input
                          type='text'
                          placeholder='Your name'
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className='w-full border-0 border-b border-gray-200 pb-2 text-lg placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0'
                        />
                      </div>
                      <div className='space-y-1'>
                        <input
                          type='email'
                          placeholder='Your email'
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className='w-full border-0 border-b border-gray-200 pb-2 text-lg placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0'
                        />
                      </div>
                      <div className='space-y-1'>
                        <input
                          type='text'
                          placeholder='Your company name'
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          className='w-full border-0 border-b border-gray-200 pb-2 text-lg placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0'
                        />
                      </div>
                    </div>

                    <div className='pt-8'>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className='text-lg font-medium hover:opacity-70'
                      >
                        Continue →
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key='step2'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className='space-y-12'
                  >
                    <div>
                      <div className='mb-6 flex items-center justify-between'>
                        <h2 className='text-2xl'>Project rundown.</h2>
                        <span className='text-sm text-gray-500'>2/2</span>
                      </div>
                      <p className='text-gray-500'>
                        Spill the beans! Tell us about your project vision,
                        desired outcomes, and goals you&apos;re striving for.
                      </p>
                    </div>

                    <div className='space-y-8'>
                      <textarea
                        placeholder='Describe the project here'
                        value={formData.project}
                        onChange={(e) =>
                          setFormData({ ...formData, project: e.target.value })
                        }
                        rows={6}
                        className='w-full resize-none border-0 border-b border-gray-200 pb-2 text-lg placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0'
                      />
                    </div>

                    <div className='flex items-center justify-between pt-8'>
                      <button
                        onClick={() => setCurrentStep(1)}
                        className='text-lg font-medium hover:opacity-70'
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => {
                          console.log(formData);
                          setShowForm(false);
                          setCurrentStep(1);
                          setFormData({
                            name: '',
                            email: '',
                            company: '',
                            project: '',
                          });
                        }}
                        className='text-lg font-medium hover:opacity-70'
                      >
                        Submit →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </footer>
  );
}

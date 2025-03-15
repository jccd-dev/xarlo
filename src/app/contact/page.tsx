'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', company: '', project: '' });
    setCurrentStep(1);
  };

  return (
    <div className='min-h-screen py-20'>
      {/* Grid Background with Orange/Coral Color */}
      <div className='absolute inset-0 grid grid-cols-12 bg-[#FF5A47]'>
        {[...Array(12)].map((_, i) => (
          <div key={i} className='border-l border-[#FF6B5A] last:border-r' />
        ))}
      </div>

      <Container className='relative z-10'>
        <div className='flex flex-col md:flex-row'>
          {/* Left side - Orange background with text */}
          <div className='w-full p-8 text-white md:w-1/2'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mb-8'
            >
              <h1 className='font-uncage text-[clamp(2rem,8vw,5rem)] tracking-tighter'>
                get
                <br />
                quote
                <br />a
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-lg'
            >
              Fill out the form and we'll get back to you as soon as possible.
            </motion.p>
          </div>

          {/* Right side - Form */}
          <div className='w-full overflow-hidden rounded-lg bg-white shadow-lg md:w-1/2'>
            <div className='p-8'>
              <AnimatePresence mode='wait'>
                {currentStep === 1 ? (
                  <motion.div
                    key='step1'
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='mb-6 flex items-center justify-between'>
                      <h2 className='text-xl font-semibold'>
                        Introduce yourself
                      </h2>
                      <span className='text-sm text-gray-500'>1/2</span>
                    </div>
                    <p className='mb-6 text-sm text-gray-600'>
                      Share your name and contact details so we can stay in
                      touch.
                    </p>

                    <div className='space-y-4'>
                      <div>
                        <label
                          htmlFor='name'
                          className='mb-1 block text-sm font-medium text-gray-700'
                        >
                          Your name
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF5A47]'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='mb-1 block text-sm font-medium text-gray-700'
                        >
                          Your email
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF5A47]'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='company'
                          className='mb-1 block text-sm font-medium text-gray-700'
                        >
                          Your company name
                        </label>
                        <input
                          type='text'
                          id='company'
                          name='company'
                          value={formData.company}
                          onChange={handleChange}
                          className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF5A47]'
                        />
                      </div>
                    </div>

                    <div className='mt-8 flex justify-end'>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextStep}
                        className='flex items-center rounded-full bg-[#FF5A47] px-6 py-2 text-white'
                      >
                        Next
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='ml-2 h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key='step2'
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='mb-6 flex items-center justify-between'>
                      <h2 className='text-xl font-semibold'>Project rundown</h2>
                      <span className='text-sm text-gray-500'>2/2</span>
                    </div>
                    <p className='mb-6 text-sm text-gray-600'>
                      Spill the beans! Tell us about your project vision,
                      desired outcomes, and goals youre striving for.
                    </p>

                    <div>
                      <label
                        htmlFor='project'
                        className='mb-1 block text-sm font-medium text-gray-700'
                      >
                        Describe the project here
                      </label>
                      <textarea
                        id='project'
                        name='project'
                        rows={6}
                        value={formData.project}
                        onChange={handleChange}
                        className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF5A47]'
                      />
                    </div>

                    <div className='mt-8 flex justify-between'>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevStep}
                        className='flex items-center rounded-full border border-gray-300 px-6 py-2'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='mr-2 h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Back
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSubmit}
                        className='rounded-full bg-[#FF5A47] px-6 py-2 text-white'
                      >
                        Submit
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import gsap from 'gsap';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
export default function Modal({ modal, projects }: any) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    //Move cursor

    let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });

    let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    //Move cursor label

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (event) => {
      const { pageX, pageY } = event;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);
  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        className='pointer-events-none absolute flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-white'
        ref={modalContainer}
      >
        <div
          className='absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]'
          style={{ top: index * -100 + '%' }}
        >
          {projects.map(
            (
              project: { image: string; color: string; title: string },
              i: number
            ) => {
              const { image, color, title } = project;
              return (
                <div
                  className='flex h-full w-full items-center justify-center'
                  style={{ backgroundColor: color }}
                  key={`modal_${i}`}
                >
                  <Image
                    className='h-auto'
                    src={`/images/${image}`}
                    alt={title}
                    width={350}
                    height={0}
                  />
                </div>
              );
            }
          )}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className='pointer-events-none absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#009688] text-sm text-white'
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
      ></motion.div>

      <motion.div
        ref={cursorLabel}
        className='pointer-events-none absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-transparent text-sm text-white'
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
      >
        View
      </motion.div>
    </>
  );
}

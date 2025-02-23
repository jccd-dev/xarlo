import Container from '@/components/Container';

const Home = () => {
  return (
    <>
      <Container>
        <div className='relative flex h-screen flex-col items-center justify-center'>
          {/* Main Hero Content */}
          <div className='flex w-full flex-col items-center justify-center gap-6'>
            <div className=''>
              <h1 className='font-uncage text-[clamp(2rem,12vw,9rem)] tracking-tighter md:leading-[0.95]'>
                <div className='block w-full text-start'>John Carlo</div>
              </h1>
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 transform'>
              <div className='font-uncage text-md font-light tracking-normal text-gray-500 md:text-2xl'>
                WEB DEVELOPER
              </div>
            </div>
            <div className=''>
              <h1 className='font-uncage text-[clamp(2rem,12vw,9rem)] tracking-tighter md:leading-[0.95]'>
                <div className='block w-full text-start'>C. Digay</div>
              </h1>
            </div>
          </div>

          {/* Availability Status */}
          <div className='absolute bottom-8 left-0'>
            <div className='flex flex-col gap-1'>
              <span className='text-sm font-semibold text-gray-600'>
                Freelancer Availability
              </span>
              <span className='text-sm font-normal text-gray-500'>
                ⭐ Available
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

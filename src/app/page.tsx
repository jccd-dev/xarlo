import Container from '@/components/Container';
import Workstation from '@/components/works/Workstation';

const Home = () => {
  return (
    <>
      <Container>
        {/* Hero Section */}
        <div className='relative flex min-h-screen flex-col items-center justify-center'>
          {/* Main Hero Content */}
          <div className='flex w-full flex-col items-center justify-center gap-6'>
            <div className=''>
              <h1 className='font-uncage text-[clamp(2rem,12vw,10rem)] tracking-tighter md:leading-[0.95]'>
                <div className='block w-full text-start'>John Carlo</div>
              </h1>
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-lg text-neutral-400 sm:top-[48%] md:text-xl'>
              <div className='text-md font-uncage font-thin tracking-normal text-gray-500 md:text-2xl'>
                WEB DEVELOPER
              </div>
            </div>
            <div className=''>
              <h1 className='font-uncage text-[clamp(2rem,12vw,10rem)] tracking-tighter md:leading-[0.95]'>
                <div className='block w-full text-start'>C. Digay</div>
              </h1>
            </div>
          </div>
        </div>

        <Workstation />
      </Container>
    </>
  );
};

export default Home;

export default function Navigation() {
  return (
    <nav className='fixed left-0 right-0 top-0 z-40'>
      <div className='mx-auto flex max-w-[1440px] items-center justify-between px-4 py-8 md:px-[5%]'>
        <div className='font-anomaly text-xl font-bold'>XARLO</div>
        <button className='text-2xl'>☰</button>
      </div>
    </nav>
  );
}

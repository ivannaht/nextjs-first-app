import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Home Page</h1>
      <Link href='/about' className='btn btn-accent'>
        go to About page
      </Link>
    </div>
  );
};

export default HomePage;

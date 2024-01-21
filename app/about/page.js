import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>About Page</h1>
      <Link href='/' className='btn btn-accent'>
        back to Home page
      </Link>
    </div>
  );
};

export default AboutPage;
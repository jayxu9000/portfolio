import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="flex items-center space-x-12">
        <Image
          src="/profile.jpg" 
          alt="Profile Picture"
          width={256} 
          height={256} 
          className="rounded-full object-cover"
        />
        <div className="text-left">
          <h1 className="text-4xl mb-4">Jay Xu</h1>
          <h2 className="text-lg mb-2">Software Engineer & Full Stack Developer</h2>
          <p>Developing software to make life simple</p>
        </div>
      </div>
      <p className="max-w-4xl mt-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default Home;

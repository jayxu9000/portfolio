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
          <h2 className="text-lg mb-2 text-gray-400">Software Engineer & Full Stack Developer</h2>
        </div>
      </div>
      <p className="max-w-2xl mt-12 mb-2 text-gray-400">
        Hello I am a new graduate who loves building software to make life more efficient, simple, and fun.
        I aspire towards a career where I can develop products and work on projects that improves human lives.
      </p>
    </div>
  );
};

export default Home;

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 less-than-500:pt-56">
      <div className="flex flex-col items-center space-y-6 md:flex-row md:items-center md:space-x-12 md:space-y-0">
        <Image
          src="/profile.jpg" 
          alt="Profile Picture"
          width={256} 
          height={256} 
          className="rounded-full object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl mb-4">Jay Xu</h1>
          <h2 className="text-lg mb-2 text-gray-400">Software Engineer & Full Stack Developer</h2>
        </div>
      </div>
      <p className="max-w-2xl mt-12 mb-2 text-gray-300">
        Hello, I am a new graduate who loves building software to make life more efficient, simple, and fun.
        I aspire towards a career where I can develop products and work on projects that incorporate my hobbies of gaming, sports, and networking.
      </p>
      
      {/* Social Links Section */}
      <div className="flex space-x-6 mt-6 less-than-500:pb-14">
        <a href="mailto:jayxu9000@gmail.com" className="text-gray-400 hover:text-white" aria-label="Email">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.linkedin.com/in/jayxu9000/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/jayxu9000" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="/Resume_JayXu.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="Resume">
          <HiDocumentText size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;

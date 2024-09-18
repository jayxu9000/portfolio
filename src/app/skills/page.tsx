const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center less-than-800:h-auto less-than-800:pt-24 h-full text-center text-white px-4 py-6">
      {/* Title Section */}
      <div className="text-left">
          <h2 className="text-2xl font-bold mb-10">Skills</h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        

        {/* Languages Section */}
        <div className="text-left">
          <h2 className="text-xl font-bold mb-4">Languages</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Python</li>
            <li>Scala</li>
            <li>C</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>Matlab</li>  
            {/* Add more languages as needed */}
          </ul>
        </div>

         {/* Framework Section */}
         <div className="text-left">
          <h2 className="text-xl font-bold mb-4">Frameworks</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>NextJS</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>ExpressJS</li>
            <li>NodeJS</li>
            {/* Add more frameworks as needed */}
          </ul>
        </div>

        {/* Tools Section */}
        <div className="text-left">
          <h2 className="text-xl font-bold mb-4">Tools</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Git</li>
            <li>Linux</li>
            <li>Unix</li>
            <li>MongoDB</li>
            <li>Supabase</li>
            <li>phpMyAdmin</li>
            <li>Postman</li>
            <li>Render</li>
            <li>Trello</li>
            <li>Zenhub</li>
            <li>Figma</li>
            {/* Add more tools as needed */}
          </ul>
        </div>

        {/* Knowledge Section */}
        <div className="text-left">
          <h2 className="text-xl font-bold mb-4">Knowledge</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Object Oriented Design</li>
            <li>Data Structures & Algorithms</li>
            <li>Front-End Development</li>
            <li>Back-End Development</li>
            <li>Responsive Design</li>
            <li>API Integration</li>
            <li>Project Management</li>
            <li>Agile</li>
            {/* Add more knowledge areas as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

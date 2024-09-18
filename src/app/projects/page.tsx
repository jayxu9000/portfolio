"use client";  // Ensures the component runs on the client side

import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    image: "/portfolio_display.png", // Replace with your image paths
    startDate: "August 2024",
    endDate: "Present",
    languages: ["NextJS", "Tailwind CSS", "Typescript"],
    link: "/" // Add your specific project link
  },
  {
    title: "Theta Tau Chapter Website",
    image: "/ot_display.png",
    startDate: "September 2023",
    endDate: "Present",
    languages: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
    link: "https://ot-website.onrender.com/" // Add your specific project link
  },
  {
    title: "File Organizer",
    image: "organizer_display.png",
    startDate: "December 2023",
    endDate: "January 2024",
    languages: ["Python"],
    link: "https://github.com/jayxu9000/File_Organizer?tab=readme-ov-file" // Add your specific project link
  },
  {
    title: "United States Breweries",
    image: "breweries_display.png",
    startDate: "September 2023",
    endDate: "November 2023",
    languages: ["ReactJS"],
    link: "https://brewerydetails.onrender.com/" // Add your specific project link
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center less-than-800:h-auto less-than-800:pt-24 h-full text-center text-white px-4 py-6">
      <h2 className="text-2xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link} // Adding the link here
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Enhances security
            className="group relative bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            {/* Project Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{`${project.startDate} - ${project.endDate}`}</p>
              <p className="mt-2 text-gray-300">
                {project.languages.join(", ")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

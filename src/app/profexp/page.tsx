// src/app/profexp/page.tsx
"use client";  // This ensures the component runs on the client side

import React from 'react';

const ProfExp = () => {
  const experiences = [
    {
      title: "IT Intern at NYC Health + Hospitals: Woodhull",
      date: "July 2023 - August 2023",
      description: "Provided technical support to 10+ departments by troubleshooting computers, printers, and other medical kiosks. Configured 200+ network devices using SCCM via Task Sequence or PXE boot so staff had quicker access to devices. Supervised 50+ laptops using Trellix ePolicy Orchestrator-Preboot Encryption updates so users can easily reset accounts",
    },
    {
      title: "Data Entry Intern at Kumon",
      date: "July 2021 - August 2021",
      description: "Recorded coursework data quickly and efficiently allowing ease of access for 10+ tutors and classroom preparation. Coached 50+ students enabling 80% of participants to achieve higher scores in subsequent evaluations and assessments. Composed 2 months of daily lesson plans to guide students ensuring progress with their classwork and assignments.",
    },
    // Add more experiences as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center less-than-500:items-start less-than-500:justify-start less-than-500:h-auto less-than-500:pt-18 h-full text-center text-white px-4 py-6">
      <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
      <div className="relative flex flex-col items-start w-full max-w-4xl">
        {/* Vertical Line on the Left */}
        <div className="absolute left-3 w-1 bg-gray-600 h-full"></div>

        {/* Timeline Nodes */}
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-start w-full mb-8">
            {/* Node */}
            <div className="relative z-10 flex items-center">
              <div className="w-6 h-6 bg-gray-800 border-4 border-gray-600 rounded-full"></div>
            </div>
            {/* Experience Content */}
            <div className="ml-8 text-left">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <span className="text-gray-400">{experience.date}</span>
              <p className="mt-2 text-gray-300">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfExp;

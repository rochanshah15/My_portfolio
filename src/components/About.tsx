
import React from 'react';
import { GraduationCap, Code, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science Engineering - Expected 2025"
    },
    {
      icon: Code,
      title: "Focus",
      description: "Software Engineering & Full-Stack Development"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Active in tech communities and coding clubs"
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Dean's List, Hackathon winner, Open source contributor"
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Computer Science Engineering student with a deep love for software development 
              and problem-solving. Currently pursuing my degree with a focus on software engineering, 
              I'm constantly exploring new technologies and building projects that challenge my skills.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in tech started with curiosity about how software works, and has evolved into 
              a commitment to creating efficient, scalable, and user-friendly applications. I believe 
              in writing clean code, following best practices, and continuous learning.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Collaboration', 'Quick Learner', 'Leadership'].map((trait) => (
                <span key={trait} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

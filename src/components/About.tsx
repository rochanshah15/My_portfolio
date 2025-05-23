
import React from 'react';
import { GraduationCap, Code, Users, Award } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

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
    <section className="py-20 bg-white dark:bg-gray-900" id="about">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-full border-4 border-blue-600 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
              alt="Alex Chen" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-2"></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Computer Science Engineering student with a deep love for software development 
              and problem-solving. Currently pursuing my degree with a focus on software engineering, 
              I'm constantly exploring new technologies and building projects that challenge my skills.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in tech started with curiosity about how software works, and has evolved into 
              a commitment to creating efficient, scalable, and user-friendly applications. I believe 
              in writing clean code, following best practices, and continuous learning.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Collaboration', 'Quick Learner', 'Leadership'].map((trait) => (
                <span key={trait} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

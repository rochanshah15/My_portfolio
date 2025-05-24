
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "C++", level: 80 },
        { name: "TypeScript", level: 82 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 92 },
        { name: "MongoDB", level: 75 },
        { name: "Express.js", level: 78 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 88 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Linux", level: 82 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 px-4 sm:px-6" id="skills">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xs xs:max-w-lg sm:max-w-2xl mx-auto px-2 sm:px-0">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>
        
        <div 
          ref={skillsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto transition-all duration-700 delay-300 ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                skillsVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center leading-tight">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <div 
                        className={`bg-gradient-to-r from-blue-600 to-purple-600 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out ${
                          skillsVisible ? '' : 'w-0'
                        }`}
                        style={{ 
                          width: skillsVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

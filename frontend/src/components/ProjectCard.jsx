import React from 'react';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const getBgColorClass = (bgColor) => {
    const colorMap = {
      'mid-blue': 'bg-blue-500 text-white',
      'light-pink': 'bg-pink-200 text-black',
      'light-yellow': 'bg-yellow-200 text-black',
      'mid-purple': 'bg-purple-500 text-white',
      'mid-green': 'bg-green-500 text-white',
      'mid-orange': 'bg-orange-500 text-white'
    };
    return colorMap[bgColor] || 'bg-pink-200 text-black';
  };

  const getCategoryColorClass = (category) => {
    const categoryColorMap = {
      'Machine Learning': 'bg-blue-600 text-white',
      'Natural Language Processing': 'bg-purple-600 text-white',
      'Data Visualization': 'bg-green-600 text-white',
      'Recommendation Systems': 'bg-orange-600 text-white',
      'Deep Learning': 'bg-red-600 text-white'
    };
    return categoryColorMap[category] || 'bg-gray-600 text-white';
  };

  return (
    <div className={`project-card rounded-lg p-6 min-h-[350px] flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${getBgColorClass(project.bgColor)}`}>
      <div>
        <div className="flex items-start justify-between mb-4">
          <span className={`service-button text-xs px-3 py-1 rounded-full font-mono uppercase tracking-wider ${getCategoryColorClass(project.category)}`}>
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-normal mb-3 hover:underline cursor-pointer transition-all duration-200">
          {project.title}
        </h3>

        <p className="text-lg opacity-80 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-mono uppercase tracking-wider mb-2 opacity-70">
            Key Highlights
          </h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-sm opacity-80 flex items-center">
                <span className="w-2 h-2 bg-current rounded-full mr-2 opacity-60"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-mono uppercase tracking-wider mb-2 opacity-70">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-black/20 px-2 py-1 rounded text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-auto">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 bg-transparent border-current hover:bg-black/10 transition-all duration-200"
          onClick={() => window.open(project.github, '_blank')}
        >
          <Github size={16} />
          Code
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 bg-transparent border-current hover:bg-black/10 transition-all duration-200"
          onClick={() => window.open(project.demo, '_blank')}
        >
          <ExternalLink size={16} />
          Demo
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
import React, { useState, useEffect } from 'react';
import { portfolioData as initialData } from '../data/mock';
import Header from './Header';
import ProjectCard from './ProjectCard';
import AdminPanel from './AdminPanel';
import { CertificationsSection, AchievementsSection, HobbiesSection, ContactSection, Footer } from './PortfolioSections';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, Calendar, Building, GraduationCap } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { AnimatedSection, FadeIn, FadeInStagger } from './AnimatedSection';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(initialData);

  // Load data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        setPortfolioData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }

    // Listen for storage changes to update data in real-time
    const handleStorageChange = () => {
      const updatedData = localStorage.getItem('portfolioData');
      if (updatedData) {
        try {
          setPortfolioData(JSON.parse(updatedData));
        } catch (error) {
          console.error('Error loading updated data:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const { personal, skills, projects, experience, education, certifications, achievements, hobbies } = portfolioData;

  const getIconComponent = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent || LucideIcons.Star;
  };

  return (
    <div className="min-h-screen bg-black text-light-pink">
      <Header />
      <AdminPanel />
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-16">
        <AnimatedSection className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <FadeIn>
                  <div className="space-y-4">
                    <h1 className="font-display text-6xl lg:text-8xl font-bold uppercase leading-none text-white">
                      {personal.name.split(' ')[0]}
                      <br />
                      <span className="text-light-pink">{personal.name.split(' ')[1] || ''}</span>
                    </h1>
                    <h2 className="text-2xl lg:text-3xl text-mid-grey font-normal">
                      {personal.title}
                    </h2>
                    <p className="text-xl text-light-pink opacity-80">
                      {personal.tagline}
                    </p>
                  </div>
                </FadeIn>              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                {personal.bio}
              </p>

              <div className="flex gap-4 pt-6">
                <Button 
                  className="cta-button bg-light-pink text-black hover:bg-light-pink/90"
                  onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  className="border-light-pink text-light-pink hover:bg-light-pink hover:text-black"
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              <FadeIn>
                <div className="w-[800px] h-[600px] mx-auto relative"> {/* Increased from 600x500 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="text-2xl font-mono text-light-pink mb-12">Data Pipeline</div> {/* Increased from text-lg and mb-8 */}
                      
                      <div className="relative h-48 flex items-center justify-center"> {/* Increased from h-32 */}
                        {/* Raw Data Stage */}
                        <div className="absolute w-48 h-48 bg-mid-blue/20 rounded-xl border-2 border-mid-blue flex items-center justify-center animate-data-stage-1"> {/* Increased from w-24 h-24 */}
                          <div className="grid grid-cols-2 gap-4"> {/* Increased from gap-2 */}
                            <div className="w-8 h-8 bg-mid-blue/40 rounded animate-pulse"></div> {/* Increased from w-4 h-4 */}
                            <div className="w-8 h-8 bg-mid-blue/40 rounded animate-pulse-delay-1"></div>
                            <div className="w-8 h-8 bg-mid-blue/40 rounded animate-pulse-delay-2"></div>
                            <div className="w-8 h-8 bg-mid-blue/40 rounded animate-pulse-delay-3"></div>
                          </div>
                          <span className="absolute -bottom-12 text-base text-mid-blue">Raw Data</span> {/* Increased from -bottom-8 and text-sm */}
                        </div>

                        {/* Cleaning Stage */}
                        <div className="absolute w-48 h-48 bg-light-pink/20 rounded-xl border-2 border-light-pink flex items-center justify-center animate-data-stage-2 opacity-0">
                          <div className="h-24 w-24 border-4 border-light-pink rounded-full animate-spin border-t-transparent"></div> {/* Increased from h-12 w-12 border-3 */}
                          <span className="absolute -bottom-12 text-base text-light-pink">Cleaning</span>
                        </div>

                        {/* Processing Stage */}
                        <div className="absolute w-48 h-48 bg-mid-purple/20 rounded-xl border-2 border-mid-purple flex items-center justify-center animate-data-stage-3 opacity-0">
                          <div className="flex flex-col gap-4"> {/* Increased from gap-2 */}
                            <div className="h-4 w-32 bg-mid-purple/40 rounded-full animate-grow"></div> {/* Increased from h-2 w-16 */}
                            <div className="h-4 w-24 bg-mid-purple/40 rounded-full animate-grow-delay-1"></div>
                            <div className="h-4 w-28 bg-mid-purple/40 rounded-full animate-grow-delay-2"></div>
                          </div>
                          <span className="absolute -bottom-12 text-base text-mid-purple">Processing</span>
                        </div>

                        {/* Model Stage */}
                        <div className="absolute w-48 h-48 bg-gradient-to-br from-light-pink/20 to-mid-purple/20 rounded-xl border-2 border-light-pink/30 flex items-center justify-center animate-data-stage-4 opacity-0">
                          <div className="grid grid-cols-2 gap-4"> {/* Increased from gap-2 */}
                            <div className="h-6 w-6 bg-light-pink/50 rounded-full animate-pulse"></div>
                            <div className="h-6 w-6 bg-mid-purple/50 rounded-full animate-pulse-delay-1"></div>
                            <div className="h-6 w-6 bg-mid-blue/50 rounded-full animate-pulse-delay-2"></div>
                            <div className="h-6 w-6 bg-light-pink/50 rounded-full animate-pulse-delay-3"></div>
                          </div>
                          <div className="absolute inset-0 rounded-xl border-2 border-white/10 animate-spin"></div>
                          <div className="absolute w-full h-full rounded-xl bg-black/20 backdrop-blur-sm"></div>
                          <span className="absolute -bottom-12 text-base text-light-pink">Model</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 lg:px-8 bg-white/5">
        <AnimatedSection className="container mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl lg:text-6xl font-display font-bold uppercase text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-mid-grey max-w-3xl mx-auto">
                Showcasing data science projects that demonstrate my expertise in machine learning, analytics, and problem-solving
              </p>
            </FadeIn>
          </div>
          
          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <FadeIn key={project.id}>
                  <ProjectCard key={project.id} project={project} />
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </AnimatedSection>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 lg:px-8">
        <AnimatedSection className="container mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl lg:text-6xl font-display font-bold uppercase text-white mb-4">
                Technical Skills
              </h2>
              <p className="text-xl text-mid-grey">
                Comprehensive toolkit for data science and machine learning
              </p>
            </FadeIn>
          </div>

          <FadeInStagger>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <FadeIn>
              <Card className="bg-mid-blue/20 border-mid-blue/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-mono uppercase tracking-wider text-white mb-4">
                    Programming
                  </h3>
                  <div className="space-y-4">
                    {skills.programming.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-light-pink">{skill.name}</span>
                          <span className="text-mid-grey">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-black/30 rounded-full h-2">
                          <div 
                            className="bg-mid-blue h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Data Science */}
            <FadeIn>
              <Card className="bg-light-pink/20 border-light-pink/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-mono uppercase tracking-wider text-white mb-4">
                    Data Science
                  </h3>
                  <div className="space-y-4">
                    {skills.dataScience.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-light-pink">{skill.name}</span>
                          <span className="text-mid-grey">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-black/30 rounded-full h-2">
                          <div 
                            className="bg-light-pink h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Tools & Technologies */}
            <FadeIn>
              <Card className="bg-mid-purple/20 border-mid-purple/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-mono uppercase tracking-wider text-white mb-4">
                    Tools & Frameworks
                  </h3>
                  <div className="space-y-4">
                    {skills.tools.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-light-pink">{skill.name}</span>
                          <span className="text-mid-grey">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-black/30 rounded-full h-2">
                          <div 
                            className="bg-mid-purple h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
          </FadeInStagger>
        </AnimatedSection>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24 px-4 lg:px-8 bg-white/5">
        <AnimatedSection className="container mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl lg:text-6xl font-display font-bold uppercase text-white mb-4">
                Experience & Education
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-mono uppercase tracking-wider text-light-pink mb-8 flex items-center gap-2">
                <Building size={24} />
                Experience
              </h3>
              <div className="space-y-8">
                <FadeInStagger>
                  {experience.map((exp) => (
                    <FadeIn key={exp.id}>
                      <Card className="bg-black/50 border-grey/20">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl text-white font-medium">{exp.position}</h4>
                            <Badge variant="outline" className="border-light-pink text-light-pink">
                              {exp.type}
                            </Badge>
                          </div>
                          <p className="text-light-pink mb-1">{exp.company}</p>
                          <p className="text-mid-grey text-sm mb-4">{exp.duration} • {exp.location}</p>
                          <p className="text-white/80 mb-4">{exp.description}</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, index) => (
                              <li key={index} className="text-sm text-mid-grey flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-light-pink rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </div>
            </div>

            {/* Education */}
            <div>
              <FadeIn>
                <h3 className="text-2xl font-mono uppercase tracking-wider text-light-pink mb-8 flex items-center gap-2">
                  <GraduationCap size={24} />
                  Education
                </h3>
              </FadeIn>
              <div className="space-y-8">
                <FadeInStagger>
                  {education.map((edu) => (
                    <FadeIn key={edu.id}>
                      <Card key={edu.id} className="bg-black/50 border-grey/20">
                        <CardContent className="p-6">
                          <h4 className="text-xl text-white font-medium mb-1">{edu.degree}</h4>
                          <p className="text-light-pink mb-1">{edu.school}</p>
                          <p className="text-mid-grey text-sm mb-2">{edu.duration} • {edu.location}</p>
                          <p className="text-white/80 text-sm mb-4">CGPA: {edu.cgpa}</p>
                          <div>
                            <p className="text-sm font-mono uppercase tracking-wider text-mid-grey mb-2">
                              Relevant Coursework:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course, index) => (
                                <Badge key={index} variant="secondary" className="bg-grey/20 text-white text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Import and render remaining sections */}
      {/* Certifications Section */}
      <CertificationsSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Hobbies Section */}
      <HobbiesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;

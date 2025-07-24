import React from 'react';
import { portfolioData } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, Calendar } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { AnimatedSection, FadeIn, FadeInStagger } from './AnimatedSection';

const { certifications, achievements, hobbies, personal } = portfolioData;

const getIconComponent = (iconName) => {
  const IconComponent = LucideIcons[iconName];
  return IconComponent || LucideIcons.Star;
};

// Certifications Section
export const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-4 lg:px-8">
    <AnimatedSection className="container mx-auto">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-4xl lg:text-6xl font-display font-bold uppercase text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-mid-grey">
            Professional certifications and continuous learning achievements
          </p>
        </FadeIn>
      </div>

      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <FadeIn key={cert.id}>
              <Card className="bg-black/50 border-grey/20 hover:border-light-pink/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Award className="text-light-pink" size={24} />
                    <Badge variant="outline" className="border-mid-grey text-mid-grey text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg text-white font-medium mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  
                  <p className="text-light-pink mb-3">{cert.issuer}</p>
                  
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-mid-grey">
                      ID: {cert.credentialId}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-light-pink hover:text-white hover:bg-light-pink/10 p-1"
                      onClick={() => window.open(cert.url, '_blank')}
                    >
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </AnimatedSection>
  </section>
);

// Achievements Section
export const AchievementsSection = () => (
  <section id="achievements" className="py-24 px-4 lg:px-8 bg-white/5">
    <AnimatedSection className="container mx-auto">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-4xl lg:text-6xl font-display font-bold uppercase text-white mb-4">
            Achievements
          </h2>
          <p className="text-xl text-mid-grey">
            Recognition and milestones in my data science journey
          </p>
        </FadeIn>
      </div>

      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <FadeIn key={achievement.id}>
              <Card className="bg-light-pink/10 border-light-pink/20 hover:bg-light-pink/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-light-pink/20 p-3 rounded-full flex-shrink-0">
                      <Award className="text-light-pink" size={20} />
                    </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl text-white font-medium leading-tight">
                      {achievement.title}
                    </h3>
                    <Badge variant="outline" className="border-light-pink text-light-pink text-xs ml-2">
                      {achievement.date}
                    </Badge>
                  </div>
                  
                  <p className="text-light-pink mb-3 font-medium">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-white/80 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </AnimatedSection>
  </section>
);

// Hobbies Section
export const HobbiesSection = () => (
  <section id="hobbies" className="py-24 px-4 lg:px-8">
    <AnimatedSection className="container mx-auto">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-4xl lg:text-6xl font-display font-bold uppercase text-white mb-4">
            Interests & Hobbies
          </h2>
          <p className="text-xl text-mid-grey">
            Personal interests that fuel creativity and balance
          </p>
        </FadeIn>
      </div>

      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby) => {
            const IconComponent = getIconComponent(hobby.icon);
            return (
              <FadeIn key={hobby.id}>
                <Card className="bg-mid-purple/10 border-mid-purple/20 hover:bg-mid-purple/15 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="bg-mid-purple/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-mid-purple" size={24} />
                    </div>
                    
                    <h3 className="text-lg text-white font-medium mb-3">
                      {hobby.name}
                    </h3>
                    
                    <p className="text-white/80 text-sm leading-relaxed">
                      {hobby.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </FadeInStagger>
    </AnimatedSection>
  </section>
);

// Contact Section
export const ContactSection = () => (
  <section id="contact" className="py-24 px-4 lg:px-8 bg-black/80">
    <AnimatedSection className="container mx-auto">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-4xl lg:text-6xl font-display font-bold uppercase text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-mid-grey max-w-2xl mx-auto">
            Ready to collaborate on exciting data science projects
          </p>
        </FadeIn>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        {/* Contact Info Only - No Form */}
        <FadeInStagger>
          <div className="space-y-8">
            <FadeIn>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-light-pink/20 p-3 rounded-full">
                  <Mail className="text-light-pink" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-light-pink hover:text-white transition-colors text-lg">
                    {personal.email}
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-light-pink/20 p-3 rounded-full">
                  <Phone className="text-light-pink" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href={`tel:${personal.phone}`} className="text-light-pink hover:text-white transition-colors text-lg">
                    {personal.phone}
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-light-pink/20 p-3 rounded-full">
                  <MapPin className="text-light-pink" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-light-pink text-lg">{personal.location}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>

        <FadeIn>
          <div className="pt-12 border-t border-grey/20 mt-12">
            <p className="text-mid-grey mb-6 text-lg">Connect with me on:</p>
            <div className="flex justify-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="border-light-pink text-light-pink hover:bg-light-pink hover:text-black"
                onClick={() => window.open(`https://${personal.linkedin}`, '_blank')}
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-light-pink text-light-pink hover:bg-light-pink hover:text-black"
                onClick={() => window.open(`https://${personal.github}`, '_blank')}
              >
                <Github size={20} className="mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-light-pink text-light-pink hover:bg-light-pink hover:text-black"
                onClick={() => window.open(`https://${personal.portfolio}`, '_blank')}
              >
                <ExternalLink size={20} className="mr-2" />
                Portfolio
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  </section>
);

// Footer
export const Footer = () => (
  <footer className="py-12 px-4 lg:px-8 bg-black border-t border-grey/20">
    <AnimatedSection className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <FadeIn>
          <div className="mb-4 md:mb-0">
            <p className="text-mid-grey text-sm">
              © 2024 {personal.name}. Built with passion for data science.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn direction="left">
          <div className="flex items-center gap-6">
            <a href="#about" className="text-mid-grey hover:text-light-pink transition-colors text-sm">
              Back to Top
            </a>
            <div className="flex gap-3">
              <button 
                onClick={() => window.open(`https://${personal.linkedin}`, '_blank')}
                className="text-mid-grey hover:text-light-pink transition-colors"
              >
                <Linkedin size={16} />
              </button>
              <button 
                onClick={() => window.open(`https://${personal.github}`, '_blank')}
                className="text-mid-grey hover:text-light-pink transition-colors"
              >
                <Github size={16} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  </footer>
);

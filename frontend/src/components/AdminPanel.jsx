import React, { useState, useEffect } from 'react';
import { portfolioData as initialData } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Trash2, Plus, Save, Eye, EyeOff } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const AdminPanel = () => {
  const [portfolioData, setPortfolioData] = useState(initialData);
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'admin123';

  useEffect(() => {
    // Load data from localStorage if available
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        setPortfolioData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect password. Try 'admin123'",
        variant: "destructive",
      });
    }
  };

  const saveData = () => {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
    // Update the original mock data (this would be an API call in production)
    window.portfolioData = portfolioData;
    toast({
      title: "Changes Saved",
      description: "Your portfolio has been updated successfully!",
    });
  };

  const updatePersonal = (field, value) => {
    setPortfolioData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const updateSkill = (category, index, field, value) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].map((skill, i) => 
          i === index ? { ...skill, [field]: value } : skill
        )
      }
    }));
  };

  const addSkill = (category) => {
    const newSkill = { name: '', level: 50, category: category };
    setPortfolioData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: [...prev.skills[category], newSkill]
      }
    }));
  };

  const removeSkill = (category, index) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter((_, i) => i !== index)
      }
    }));
  };

  const updateProject = (index, field, value) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      )
    }));
  };

  const updateProjectTechnologies = (index, technologies) => {
    const techArray = technologies.split(',').map(tech => tech.trim()).filter(tech => tech);
    updateProject(index, 'technologies', techArray);
  };

  const updateProjectHighlights = (index, highlights) => {
    const highlightsArray = highlights.split(',').map(h => h.trim()).filter(h => h);
    updateProject(index, 'highlights', highlightsArray);
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
        >
          <Eye size={16} className="mr-2" />
          Admin
        </Button>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Admin Access</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
              <p className="text-sm text-muted-foreground mt-1">
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleLogin} className="flex-1">
                Login
              </Button>
              <Button variant="outline" onClick={() => setIsVisible(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Portfolio Admin Panel</h1>
          <div className="flex gap-2">
            <Button onClick={saveData} className="bg-green-600 hover:bg-green-700">
              <Save size={16} className="mr-2" />
              Save Changes
            </Button>
            <Button variant="outline" onClick={() => setIsVisible(false)}>
              <EyeOff size={16} className="mr-2" />
              Close
            </Button>
          </div>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certs</TabsTrigger>
            <TabsTrigger value="achievements">Awards</TabsTrigger>
            <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input
                      value={portfolioData.personal.name}
                      onChange={(e) => updatePersonal('name', e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label>Professional Title</Label>
                    <Input
                      value={portfolioData.personal.title}
                      onChange={(e) => updatePersonal('title', e.target.value)}
                      placeholder="e.g., Data Science Graduate"
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      value={portfolioData.personal.email}
                      onChange={(e) => updatePersonal('email', e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input
                      value={portfolioData.personal.phone}
                      onChange={(e) => updatePersonal('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      value={portfolioData.personal.location}
                      onChange={(e) => updatePersonal('location', e.target.value)}
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <Label>LinkedIn</Label>
                    <Input
                      value={portfolioData.personal.linkedin}
                      onChange={(e) => updatePersonal('linkedin', e.target.value)}
                      placeholder="linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div>
                    <Label>GitHub</Label>
                    <Input
                      value={portfolioData.personal.github}
                      onChange={(e) => updatePersonal('github', e.target.value)}
                      placeholder="github.com/yourusername"
                    />
                  </div>
                  <div>
                    <Label>Portfolio Website</Label>
                    <Input
                      value={portfolioData.personal.portfolio}
                      onChange={(e) => updatePersonal('portfolio', e.target.value)}
                      placeholder="yourwebsite.com"
                    />
                  </div>
                </div>
                <div>
                  <Label>Tagline</Label>
                  <Input
                    value={portfolioData.personal.tagline}
                    onChange={(e) => updatePersonal('tagline', e.target.value)}
                    placeholder="Your professional tagline"
                  />
                </div>
                <div>
                  <Label>Bio</Label>
                  <Textarea
                    value={portfolioData.personal.bio}
                    onChange={(e) => updatePersonal('bio', e.target.value)}
                    placeholder="Write a brief bio about yourself"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="skills">
            <div className="space-y-6">
              {['programming', 'dataScience', 'tools'].map((category) => (
                <Card key={category}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="capitalize">
                        {category === 'dataScience' ? 'Data Science' : category === 'tools' ? 'Tools & Frameworks' : 'Programming'}
                      </CardTitle>
                      <Button onClick={() => addSkill(category)} size="sm">
                        <Plus size={16} className="mr-1" />
                        Add Skill
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {portfolioData.skills[category].map((skill, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 border rounded">
                          <Input
                            value={skill.name}
                            onChange={(e) => updateSkill(category, index, 'name', e.target.value)}
                            placeholder="Skill name"
                            className="flex-1"
                          />
                          <div className="flex items-center gap-2">
                            <Label className="text-sm">Level:</Label>
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              value={skill.level}
                              onChange={(e) => updateSkill(category, index, 'level', parseInt(e.target.value))}
                              className="w-20"
                            />
                            <span className="text-sm text-muted-foreground">%</span>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeSkill(category, index)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects */}
          <TabsContent value="projects">
            <div className="space-y-6">
              {portfolioData.projects.map((project, index) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle>Project {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Project Title</Label>
                        <Input
                          value={project.title}
                          onChange={(e) => updateProject(index, 'title', e.target.value)}
                          placeholder="Project title"
                        />
                      </div>
                      <div>
                        <Label>Category</Label>
                        <Input
                          value={project.category}
                          onChange={(e) => updateProject(index, 'category', e.target.value)}
                          placeholder="e.g., Machine Learning"
                        />
                      </div>
                      <div>
                        <Label>GitHub URL</Label>
                        <Input
                          value={project.github}
                          onChange={(e) => updateProject(index, 'github', e.target.value)}
                          placeholder="github.com/username/project"
                        />
                      </div>
                      <div>
                        <Label>Demo URL</Label>
                        <Input
                          value={project.demo}
                          onChange={(e) => updateProject(index, 'demo', e.target.value)}
                          placeholder="your-demo-url.com"
                        />
                      </div>
                      <div>
                        <Label>Background Color</Label>
                        <select
                          value={project.bgColor}
                          onChange={(e) => updateProject(index, 'bgColor', e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        >
                          <option value="mid-blue">Blue</option>
                          <option value="light-pink">Pink</option>
                          <option value="light-yellow">Yellow</option>
                          <option value="mid-purple">Purple</option>
                          <option value="mid-green">Green</option>
                          <option value="mid-orange">Orange</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => updateProject(index, 'description', e.target.value)}
                        placeholder="Project description"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label>Technologies (comma-separated)</Label>
                      <Input
                        value={project.technologies.join(', ')}
                        onChange={(e) => updateProjectTechnologies(index, e.target.value)}
                        placeholder="Python, React, MongoDB"
                      />
                    </div>
                    <div>
                      <Label>Key Highlights (comma-separated)</Label>
                      <Input
                        value={project.highlights.join(', ')}
                        onChange={(e) => updateProjectHighlights(index, e.target.value)}
                        placeholder="High accuracy, Real-time processing"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Experience editor coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {portfolioData.education.map((edu, index) => (
                    <Card key={index} className="bg-gray-900/80">
                      <CardHeader>
                        <CardTitle>
                          {edu.degree || "Degree"} @ {edu.institution || "Institution"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Degree/Program</Label>
                            <Input
                              value={edu.degree}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  education: prev.education.map((item, i) =>
                                    i === index ? { ...item, degree: value } : item
                                  )
                                }));
                              }}
                              placeholder="e.g., Bachelor of Technology"
                            />
                          </div>
                          <div>
                            <Label>Institution</Label>
                            <Input
                              value={edu.institution}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  education: prev.education.map((item, i) =>
                                    i === index ? { ...item, institution: value } : item
                                  )
                                }));
                              }}
                              placeholder="University/College name"
                            />
                          </div>
                          <div>
                            <Label>Duration</Label>
                            <Input
                              value={edu.duration}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  education: prev.education.map((item, i) =>
                                    i === index ? { ...item, duration: value } : item
                                  )
                                }));
                              }}
                              placeholder="e.g., 2019-2023"
                            />
                          </div>
                          <div>
                            <Label>Score/Grade</Label>
                            <Input
                              value={edu.score}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  education: prev.education.map((item, i) =>
                                    i === index ? { ...item, score: value } : item
                                  )
                                }));
                              }}
                              placeholder="e.g., CGPA: 3.8/4.0"
                            />
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setPortfolioData(prev => ({
                              ...prev,
                              education: prev.education.filter((_, i) => i !== index)
                            }));
                          }}
                        >
                          <Trash2 size={16} /> Remove Education
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    onClick={() => {
                      setPortfolioData(prev => ({
                        ...prev,
                        education: [
                          ...prev.education,
                          {
                            degree: "",
                            institution: "",
                            duration: "",
                            score: ""
                          }
                        ]
                      }));
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Plus size={16} className="mr-1" />
                    Add Education
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications">
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {portfolioData.certifications.map((cert, index) => (
                    <Card key={index} className="bg-gray-900/80">
                      <CardHeader>
                        <CardTitle>
                          {cert.name || "Certification"} {cert.issuer ? `by ${cert.issuer}` : ""}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Certification Name</Label>
                            <Input
                              value={cert.name}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  certifications: prev.certifications.map((item, i) =>
                                    i === index ? { ...item, name: value } : item
                                  )
                                }));
                              }}
                              placeholder="e.g., AWS Certified Solutions Architect"
                            />
                          </div>
                          <div>
                            <Label>Issuer</Label>
                            <Input
                              value={cert.issuer}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  certifications: prev.certifications.map((item, i) =>
                                    i === index ? { ...item, issuer: value } : item
                                  )
                                }));
                              }}
                              placeholder="e.g., Amazon Web Services"
                            />
                          </div>
                          <div>
                            <Label>Date</Label>
                            <Input
                              type="date"
                              value={cert.date}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  certifications: prev.certifications.map((item, i) =>
                                    i === index ? { ...item, date: value } : item
                                  )
                                }));
                              }}
                              placeholder="YYYY-MM-DD"
                            />
                          </div>
                          <div>
                            <Label>Credential URL</Label>
                            <Input
                              value={cert.url}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  certifications: prev.certifications.map((item, i) =>
                                    i === index ? { ...item, url: value } : item
                                  )
                                }));
                              }}
                              placeholder="Link to certificate"
                            />
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setPortfolioData(prev => ({
                              ...prev,
                              certifications: prev.certifications.filter((_, i) => i !== index)
                            }));
                          }}
                        >
                          <Trash2 size={16} /> Remove Certification
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    onClick={() => {
                      setPortfolioData(prev => ({
                        ...prev,
                        certifications: [
                          ...prev.certifications,
                          {
                            name: "",
                            issuer: "",
                            date: "",
                            url: ""
                          }
                        ]
                      }));
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Plus size={16} className="mr-1" />
                    Add Certification
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {portfolioData.achievements.map((achievement, index) => (
                    <Card key={index} className="bg-gray-900/80">
                      <CardContent className="space-y-4 pt-6">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label>Achievement Title</Label>
                            <Input
                              value={achievement.title}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  achievements: prev.achievements.map((item, i) =>
                                    i === index ? { ...item, title: value } : item
                                  )
                                }));
                              }}
                              placeholder="e.g., First Place in Hackathon"
                            />
                          </div>
                          <div>
                            <Label>Description</Label>
                            <Textarea
                              value={achievement.description}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  achievements: prev.achievements.map((item, i) =>
                                    i === index ? { ...item, description: value } : item
                                  )
                                }));
                              }}
                              placeholder="Describe your achievement"
                              rows={3}
                            />
                          </div>
                          <div>
                            <Label>Date/Year</Label>
                            <Input
                              value={achievement.date}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  achievements: prev.achievements.map((item, i) =>
                                    i === index ? { ...item, date: value } : item
                                  )
                                }));
                              }}
                              placeholder="e.g., 2023"
                            />
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setPortfolioData(prev => ({
                              ...prev,
                              achievements: prev.achievements.filter((_, i) => i !== index)
                            }));
                          }}
                        >
                          <Trash2 size={16} /> Remove Achievement
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    onClick={() => {
                      setPortfolioData(prev => ({
                        ...prev,
                        achievements: [
                          ...prev.achievements,
                          {
                            title: "",
                            description: "",
                            date: ""
                          }
                        ]
                      }));
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Plus size={16} className="mr-1" />
                    Add Achievement
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hobbies Tab */}
          <TabsContent value="hobbies">
            <Card>
              <CardHeader>
                <CardTitle>Hobbies & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {portfolioData.hobbies.map((hobby, index) => (
                    <Card key={index} className="bg-gray-900/80">
                      <CardContent className="space-y-4 pt-6">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label>Hobby/Interest</Label>
                            <Input
                              value={hobby.name}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  hobbies: prev.hobbies.map((item, i) =>
                                    i === index ? { ...item, name: value } : item
                                  )
                                }));
                              }}
                              placeholder="e.g., Photography"
                            />
                          </div>
                          <div>
                            <Label>Description</Label>
                            <Textarea
                              value={hobby.description}
                              onChange={e => {
                                const value = e.target.value;
                                setPortfolioData(prev => ({
                                  ...prev,
                                  hobbies: prev.hobbies.map((item, i) =>
                                    i === index ? { ...item, description: value } : item
                                  )
                                }));
                              }}
                              placeholder="Describe your hobby or interest"
                              rows={3}
                            />
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setPortfolioData(prev => ({
                              ...prev,
                              hobbies: prev.hobbies.filter((_, i) => i !== index)
                            }));
                          }}
                        >
                          <Trash2 size={16} /> Remove Hobby
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    onClick={() => {
                      setPortfolioData(prev => ({
                        ...prev,
                        hobbies: [
                          ...prev.hobbies,
                          {
                            name: "",
                            description: ""
                          }
                        ]
                      }));
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Plus size={16} className="mr-1" />
                    Add Hobby
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;

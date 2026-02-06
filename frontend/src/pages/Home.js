import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook, Code, Database, Server, ArrowRight, Briefcase, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { personalInfo, skills, projects, socialLinks, experience } from '../data/mock';
import { toast } from '../hooks/use-toast';

const Home = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Contact form submitted:', contactForm);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div
                className="inline-block px-4 py-2 bg-[#F59E0B] mb-6"
                style={{
                  border: '3px solid #000',
                  boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 'bold'
                }}
              >
                OPEN FOR OPPORTUNITIES
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Hi, I'm <span className="text-[#06B6D4]">{personalInfo.name}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold mb-6">{personalInfo.title}</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{personalInfo.tagline}</p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-6 text-lg transition-all duration-300"
                  style={{
                    border: '4px solid #000',
                    boxShadow: '6px 6px 0 0 rgba(0,0,0,1)',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-3px, -3px)';
                    e.currentTarget.style.boxShadow = '9px 9px 0 0 rgba(0,0,0,1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = '6px 6px 0 0 rgba(0,0,0,1)';
                  }}
                >
                  Get In Touch <ArrowRight className="ml-2" size={20} />
                </Button>
                
                <Button
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white hover:bg-gray-100 text-black font-bold px-8 py-6 text-lg transition-all duration-300"
                  style={{
                    border: '4px solid #000',
                    boxShadow: '6px 6px 0 0 rgba(0,0,0,1)',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-3px, -3px)';
                    e.currentTarget.style.boxShadow = '9px 9px 0 0 rgba(0,0,0,1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = '6px 6px 0 0 rgba(0,0,0,1)';
                  }}
                >
                  View Projects
                </Button>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative"
                style={{
                  border: '6px solid #000',
                  boxShadow: '12px 12px 0 0 rgba(0,0,0,1)',
                  backgroundColor: '#06B6D4'
                }}
              >
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full max-w-md h-auto object-cover"
                />
                <div
                  className="absolute -bottom-6 -right-6 bg-[#F59E0B] px-6 py-4"
                  style={{
                    border: '4px solid #000',
                    boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}
                >
                  {experience.years} YRS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            About <span className="text-[#06B6D4]">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div
                className="bg-[#FAFAFA] p-8"
                style={{
                  border: '4px solid #000',
                  boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
                }}
              >
                <p className="text-lg leading-relaxed mb-6">{personalInfo.bio}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-[#06B6D4]" size={24} />
                    <span className="font-medium">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#06B6D4]" size={24} />
                    <span className="font-medium">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#06B6D4]" size={24} />
                    <span className="font-medium">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-[#06B6D4]" size={24} />
                    <span className="font-medium">{experience.years} Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="bg-black text-white p-8 h-full flex flex-col justify-center"
                style={{
                  border: '4px solid #000',
                  boxShadow: '8px 8px 0 0 rgba(6,182,212,0.5)'
                }}
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Quick Facts
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#06B6D4] mt-2"></div>
                    <span>2+ years of backend development experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#F59E0B] mt-2"></div>
                    <span>Worked on enterprise projects for Transjakarta & Telkom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#06B6D4] mt-2"></div>
                    <span>Expert in NestJS, NodeJS, and Go</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#F59E0B] mt-2"></div>
                    <span>Strong DevOps and database optimization skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured <span className="text-[#06B6D4]">Projects</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white p-8 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300"
                style={{
                  border: '4px solid #000',
                  boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="px-4 py-2 text-sm font-bold"
                    style={{
                      backgroundColor: index === 0 ? '#06B6D4' : '#F59E0B',
                      border: '3px solid #000',
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}
                  >
                    {project.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Calendar size={16} />
                    {project.year}
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 font-semibold mb-3">{project.company}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#FAFAFA] text-sm font-medium"
                      style={{
                        border: '2px solid #000'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical <span className="text-[#06B6D4]">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div
              className="bg-[#06B6D4] p-8 text-white"
              style={{
                border: '4px solid #000',
                boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
              }}
            >
              <Code size={48} className="mb-4" />
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Backend Development
              </h3>
              <p>Building scalable server-side applications with modern frameworks and best practices.</p>
            </div>

            <div
              className="bg-[#F59E0B] p-8 text-white"
              style={{
                border: '4px solid #000',
                boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
              }}
            >
              <Database size={48} className="mb-4" />
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Database Management
              </h3>
              <p>Expert in designing and optimizing relational databases for high-performance applications.</p>
            </div>

            <div
              className="bg-black p-8 text-white"
              style={{
                border: '4px solid #000',
                boxShadow: '8px 8px 0 0 rgba(6,182,212,0.5)'
              }}
            >
              <Server size={48} className="mb-4" />
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                DevOps & Deployment
              </h3>
              <p>Containerization, CI/CD pipelines, and cloud infrastructure management.</p>
            </div>
          </div>

          <div
            className="bg-[#FAFAFA] p-8"
            style={{
              border: '4px solid #000',
              boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
            }}
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-6 py-3 bg-white text-lg font-bold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                  style={{
                    border: '3px solid #000',
                    boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's <span className="text-[#06B6D4]">Connect</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div
              className="bg-white p-8"
              style={{
                border: '4px solid #000',
                boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Send Me a Message
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 text-lg"
                    style={{
                      border: '3px solid #000',
                      borderRadius: '0',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 text-lg"
                    style={{
                      border: '3px solid #000',
                      borderRadius: '0',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-4 text-lg"
                    style={{
                      border: '3px solid #000',
                      borderRadius: '0',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#06B6D4] hover:bg-[#0891B2] text-white font-bold py-4 text-lg transition-all duration-300"
                  style={{
                    border: '4px solid #000',
                    boxShadow: '6px 6px 0 0 rgba(0,0,0,1)',
                    borderRadius: '0',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-3px, -3px)';
                    e.currentTarget.style.boxShadow = '9px 9px 0 0 rgba(0,0,0,1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = '6px 6px 0 0 rgba(0,0,0,1)';
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-6">
              <div
                className="bg-black text-white p-8"
                style={{
                  border: '4px solid #000',
                  boxShadow: '8px 8px 0 0 rgba(6,182,212,0.5)'
                }}
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-[#06B6D4]" size={24} />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-[#06B6D4] transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-[#F59E0B]" size={24} />
                    <a href={`tel:${personalInfo.phone}`} className="hover:text-[#F59E0B] transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-[#06B6D4]" size={24} />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#F59E0B] p-8"
                style={{
                  border: '4px solid #000',
                  boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
                }}
              >
                <h3
                  className="text-2xl font-bold mb-6 text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white text-black p-4 hover:bg-black hover:text-white transition-all duration-300"
                        style={{
                          border: '3px solid #000',
                          boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 'bold'
                        }}
                      >
                        <Icon size={20} />
                        <span className="text-sm">{social.platform}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

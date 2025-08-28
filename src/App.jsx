import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Code, Award, Briefcase, Globe, Shield, Star, Menu, X, ArrowUp, ExternalLink, GitBranch, Download, Send, Target, Zap, Rocket, Eye, Sparkles, Play, Pause, Lightbulb } from 'lucide-react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const portfolioData = {
    name: "Saloni Upadhyay",
    titles: ["CSE Student", "Software Developer", "Problem Solver"],
    email: "saloniupadhyay259@gmail.com",
    resumeUrl: "./Saloni_Upadhyay_Resume.pdf",
    profileImage: "profile.jpg", // You can replace this with an actual image file
    social: {
      linkedin: "https://www.linkedin.com/in/saloni-upadhyay-b54192257/",
      github: "https://github.com/saloniupadhyay",
      leetcode: "https://leetcode.com/u/saloniupadhyay259/",
    },
    about: "A dedicated, passionate, and hardworking Computer Science and Engineering (CSE) student with a strong interest in software development, problem-solving, and emerging technologies. Seeking an opportunity to apply my technical knowledge, creativity, and analytical thinking in areas such as software development and innovative tech solutions.",
    mission: [
        { icon: <Lightbulb className="w-8 h-8" />, text: "Apply creative problem-solving to build effective and innovative solutions." },
        { icon: <Zap className="w-8 h-8" />, text: "Utilize analytical thinking to tackle complex technical challenges." },
        { icon: <Globe className="w-8 h-8" />, text: "Continuously learn and adapt to emerging technologies to drive progress." },
    ],
    education: [
      {
        degree: "B.Tech Computer Scienece & Engineering",
        institution: "Chandigarh Engineering Colleges jhanjeri",
        duration: "2022-2026",
        score: "CGPA: 8.59 (till 5th Semester)",
      },
      {
        degree: "Class 12th Science with mathematics",
        institution: "CBSE Varanasi",
        duration: "2022",
        score: "Percentage: 89.6%",
      },
    ],
    projects: [
      {
        featured: true,
        title: "Online Banking System",
        technologies: ["Java", "MySQL", "JDBC", "NetBeans"],
        description: "Designed and implemented the backend using Java and JDBC for seamless interaction with a MySQL database. Ensured secure user authentication and transaction handling with multi-factor authentication and encryption.",
        liveUrl: "#",
        repoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1620714223084-86c9df2a38a7?w=600&h=400&fit=crop"
      },
      {
        featured: false,
        title: "Budget Tracking System",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
        description: "Developed an interactive web application to help users manage income and expenses effectively. Implemented core functionalities like adding/editing transactions, real-time balance calculation, and local storage for data persistence.",
        liveUrl: "#",
        repoUrl: "#",
      },
    ],
    experience: [
      {
        type: "Internship",
        role: "JAVA Development",
        company: "CODESOFT",
        duration: "June 2024 - July 2024",
      },
      {
        type: "Internship",
        role: "Web Technologies",
        company: "FCC, IIT Hyderabad and Remark Skill Edu",
        duration: "July 2024",
      },
      {
        type: "Volunteer",
        role: "Public Relation Volunteer",
        company: "GeeksforGeeks (GFG) CGC-J",
        duration: "Community Role",
      },
    ],
    skills: {
      "Programming": ["C++", "Java"],
      "Web Frontend": ["HTML", "CSS", "JavaScript"],
      "Web Backend": ["Node.js"],
      "Databases": ["SQL", "MongoDB"],
      "Cloud": ["AWS"],
      "CS Fundamentals": ["Data Structures & Algorithms", "Operating Systems", "Git/GitHub"],
    },
    achievements: [
      { title: "School Topper", platform: "Secondary Examination", icon: <Award className="w-10 h-10" /> },
      { title: "100+ Problems", platform: "LeetCode", icon: <Code className="w-10 h-10" /> },
      { title: "400+ Problems", platform: "CodeChef", icon: <Rocket className="w-10 h-10" /> },
      { title: "FlipKart GRID 6.0", platform: "Participant", icon: <Zap className="w-10 h-10" /> }
    ],
    certifications: [
      "Introduction to MongoDB",
      "AWS Cloud Practitioner Essential Training by Nasscom",
      "IBM IT Fundamentals, Professional, Communication",
      "AWS Cloud Essential - knowledge badge",
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 300);
      
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    if (!isLoading) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (isLoading) {
    return <Loader name={portfolioData.name} />;
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-inter relative overflow-x-hidden selection:bg-purple-400 selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/10 to-transparent"></div>
      <ParallaxBackground scrollY={scrollY} />
      <MouseGlow position={mousePosition} />
      <FloatingOrbs />
      <Header portfolioData={portfolioData} activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="relative z-10">
        <HeroSection portfolioData={portfolioData} />
        <AboutSection portfolioData={portfolioData} />
        <SkillsSection portfolioData={portfolioData} />
        <ProjectsSection portfolioData={portfolioData} />
        <ExperienceSection portfolioData={portfolioData} />
        <AchievementsSection portfolioData={portfolioData} />
        <ContactSection portfolioData={portfolioData} />
      </main>
      <Footer portfolioData={portfolioData} />
      <BackToTopButton show={showBackToTop} onClick={scrollToTop} />
    </div>
  );
};

const Loader = ({ name }) => (
  <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-[100] font-inter">
    <div className="text-center">
      <div className="relative mb-8">
        <div className="w-32 h-32 border-4 border-purple-400/20 rounded-full animate-spin">
          <div className="absolute inset-2 border-4 border-transparent border-t-purple-400 rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-4 w-24 h-24 border-4 border-cyan-400/20 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}>
          <div className="absolute inset-2 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>
        <div className="absolute inset-8 w-16 h-16 border-4 border-pink-400/20 rounded-full animate-spin">
          <div className="absolute inset-2 border-4 border-transparent border-t-pink-400 rounded-full animate-spin"></div>
        </div>
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse mb-4">
        {name.toUpperCase()}
      </div>
      <div className="text-lg text-gray-300 animate-pulse">
        Building a Digital Portfolio...
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        {[0, 1, 2, 3, 4].map(i => (
          <div 
            key={i} 
            className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce" 
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ParallaxBackground = ({ scrollY }) => (
  <div className="fixed inset-0 pointer-events-none">
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        background: `radial-gradient(circle at ${50 + scrollY * 0.01}% ${50 + scrollY * 0.02}%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)`,
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    />
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        background: `radial-gradient(circle at ${30 - scrollY * 0.01}% ${70 - scrollY * 0.01}%, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`,
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    />
  </div>
);

const MouseGlow = ({ position }) => (
  <div 
    className="fixed w-[600px] h-[600px] pointer-events-none z-10 mix-blend-screen transition-opacity duration-300"
    style={{
      left: position.x - 300,
      top: position.y - 300,
      background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(6, 182, 212, 0.1) 30%, rgba(236, 72, 153, 0.05) 60%, transparent 80%)',
    }}
  />
);

const FloatingOrbs = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className={`absolute rounded-full animate-float blur-sm ${
          i % 3 === 0 ? 'bg-purple-400/20' : i % 3 === 1 ? 'bg-cyan-400/20' : 'bg-pink-400/20'
        }`}
        style={{
          width: `${20 + Math.random() * 60}px`,
          height: `${20 + Math.random() * 60}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${8 + Math.random() * 10}s`
        }}
      />
    ))}
  </div>
);

const Header = ({ portfolioData, activeSection, isMenuOpen, setIsMenuOpen }) => {
  const navLinks = ["home", "about", "skills", "projects", "experience", "contact"];
  
  const NavLink = ({ href, children }) => (
    <a 
      href={`#${href}`} 
      onClick={(e) => { 
        e.preventDefault(); 
        document.querySelector(`#${href}`)?.scrollIntoView({ behavior: 'smooth' }); 
        setIsMenuOpen(false); 
      }} 
      className={`relative px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-500 group ${
        activeSection === href ? 'text-purple-400' : 'text-white/80 hover:text-purple-400'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-lg transition-all duration-500 ${
        activeSection === href ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-50 group-hover:scale-100'
      }`}></div>
      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 ${
        activeSection === href ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          &lt;SALONI.DEV/&gt;
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <NavLink key={link} href={link}>{link}</NavLink>
          ))}
          <a 
            href={portfolioData.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold uppercase tracking-wider rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Download size={18} className="group-hover:animate-bounce"/> RESUME
          </a>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 hover:text-purple-400 transition-colors relative z-10"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20">
          <nav className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map(link => (
              <NavLink key={link} href={link}>{link}</NavLink>
            ))}
            <a 
              href={portfolioData.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold uppercase tracking-wider rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18}/> RESUME
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const GlassCard = ({ children, className = "", glowColor = "purple" }) => (
  <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl ${className}`} 
    style={{
      boxShadow: `0 0 40px ${
        glowColor === 'purple' ? 'rgba(168, 85, 247, 0.2)' : 
        glowColor === 'pink' ? 'rgba(236, 72, 153, 0.2)' : 
        glowColor === 'cyan' ? 'rgba(6, 182, 212, 0.2)' :
        'rgba(34, 197, 94, 0.2)'
      }`
    }}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

const AnimatedText = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
};

const HeroSection = ({ portfolioData }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % portfolioData.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [portfolioData.titles.length, isPlaying]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedText delay={200}>
            <div className="mb-12 relative">
              <div className="relative inline-block">
                <img 
                  src={portfolioData.profileImage} 
                  alt={portfolioData.name} 
                  className="w-48 h-48 mx-auto rounded-full border-4 border-purple-400 shadow-2xl shadow-purple-400/30 hover:shadow-pink-400/30 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={400}>
            <div className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-6 font-bold flex items-center justify-center gap-2">
              <Sparkles size={16} className="animate-pulse" />
              WELCOME TO MY DIGITAL SPACE
              <Sparkles size={16} className="animate-pulse" />
            </div>
          </AnimatedText>

          <AnimatedText delay={600}>
            <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              SALONI
            </h1>
          </AnimatedText>

          <AnimatedText delay={800}>
            <div className="text-3xl md:text-5xl mb-12 h-20 flex items-center justify-center relative">
              <div className="relative overflow-hidden">
                <span className="block text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text font-bold animate-fadeInUp">
                  {portfolioData.titles[titleIndex]}
                </span>
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="ml-4 p-2 text-purple-400 hover:text-pink-400 transition-colors"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
            </div>
          </AnimatedText>

          <AnimatedText delay={1000}>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into digital reality through <span className="text-purple-400 font-semibold">innovative engineering</span> and 
              <span className="text-pink-400 font-semibold"> creative problem-solving</span>
            </p>
          </AnimatedText>

          <AnimatedText delay={1200}>
            <div className="flex justify-center space-x-8 mb-16">
              {[
                { icon: <Github size={36} />, href: portfolioData.social.github, color: "hover:text-purple-400" },
                { icon: <Linkedin size={36} />, href: portfolioData.social.linkedin, color: "hover:text-pink-400" },
                { icon: <Code size={36} />, href: portfolioData.social.leetcode, color: "hover:text-cyan-400" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-gray-400 ${social.color} transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 relative group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">{social.icon}</div>
                </a>
              ))}
            </div>
          </AnimatedText>

          <AnimatedText delay={1400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold uppercase tracking-wider rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center gap-3 group"
              >
                <Eye size={20} className="group-hover:animate-pulse" />
                EXPLORE MY WORK
              </button>
              
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 border-2 border-purple-400 text-purple-400 font-bold uppercase tracking-wider rounded-full hover:bg-purple-400 hover:text-white transition-all duration-500 transform hover:scale-110 flex items-center gap-3 group"
              >
                <Send size={20} className="group-hover:animate-pulse" />
                GET IN TOUCH
              </button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ portfolioData }) => (
  <section id="about" className="py-32 relative">
    <div className="container mx-auto px-6">
      <AnimatedText>
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ABOUT ME
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
      </AnimatedText>

      <div className="max-w-6xl mx-auto">
        <GlassCard className="p-12 mb-16" glowColor="purple">
          <AnimatedText delay={200}>
            <p className="text-2xl text-gray-300 leading-relaxed mb-12 text-center">
              {portfolioData.about}
            </p>
          </AnimatedText>
          
          <AnimatedText delay={400}>
            <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              MY MISSION & VALUES
            </h3>
          </AnimatedText>
          
          <div className="grid md:grid-cols-3 gap-10">
            {portfolioData.mission.map((item, index) => (
              <AnimatedText key={index} delay={600 + index * 200}>
                <GlassCard className="p-8 text-center group hover:scale-105 transition-all duration-500" glowColor={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'pink' : 'cyan'}>
                  <div className="text-purple-400 mb-6 flex justify-center group-hover:text-pink-400 transition-colors duration-500 group-hover:animate-bounce">
                    {item.icon}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                    {item.text}
                  </p>
                </GlassCard>
              </AnimatedText>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
);

const SkillsSection = ({ portfolioData }) => (
  <section id="skills" className="py-32 relative">
    <div className="container mx-auto px-6">
      <AnimatedText>
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SKILLS & EXPERTISE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
      </AnimatedText>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <AnimatedText key={category} delay={index * 150}>
              <GlassCard 
                className="p-8 group hover:scale-105 transition-all duration-500" 
                glowColor={index % 4 === 0 ? 'purple' : index % 4 === 1 ? 'pink' : index % 4 === 2 ? 'cyan' : 'green'}
              >
                <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {category.toUpperCase()}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill} className="flex items-center justify-between bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedText>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProjectsSection = ({ portfolioData }) => {
  const featuredProject = portfolioData.projects.find(p => p.featured);
  const otherProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <AnimatedText>
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FEATURED PROJECTS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
        </AnimatedText>

        <div className="max-w-7xl mx-auto">
          {featuredProject && (
            <AnimatedText delay={200}>
              <GlassCard className="mb-16 overflow-hidden group hover:scale-[1.02] transition-all duration-700" glowColor="pink">
                <div className="md:flex">
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img 
                      src={featuredProject.imageUrl} 
                      alt={featuredProject.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="md:w-1/2 p-10">
                    <div className="text-pink-400 font-bold mb-4 uppercase tracking-wider flex items-center gap-2">
                      <Star size={18} />
                      FEATURED PROJECT
                    </div>
                    <h3 className="text-4xl font-bold mb-6 text-white leading-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {featuredProject.technologies.map(tech => (
                        <span key={tech} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-semibold border border-purple-400/30 rounded-full hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-6">
                      <a 
                        href={featuredProject.liveUrl} 
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold uppercase tracking-wider rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group"
                      >
                        <ExternalLink size={18} className="group-hover:animate-pulse" /> LIVE DEMO
                      </a>
                      <a 
                        href={featuredProject.repoUrl} 
                        className="flex items-center gap-2 px-6 py-3 border-2 border-pink-400 text-pink-400 font-bold uppercase tracking-wider rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300 group"
                      >
                        <GitBranch size={18} className="group-hover:animate-pulse" /> SOURCE CODE
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedText>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <AnimatedText key={index} delay={300 + index * 100}>
                <GlassCard className="p-8 group hover:scale-105 hover:-translate-y-2 transition-all duration-500" glowColor="cyan">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 text-green-400 text-xs font-semibold rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl} 
                      className="flex items-center gap-2 text-cyan-400 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors duration-300 group"
                    >
                      <ExternalLink size={16} className="group-hover:animate-pulse" /> LIVE
                    </a>
                    <a 
                      href={project.repoUrl} 
                      className="flex items-center gap-2 text-pink-400 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors duration-300 group"
                    >
                      <GitBranch size={16} className="group-hover:animate-pulse" /> CODE
                    </a>
                  </div>
                </GlassCard>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ portfolioData }) => (
  <section id="experience" className="py-32 relative">
    <div className="container mx-auto px-6">
      <AnimatedText>
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            EXPERIENCE & JOURNEY
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
      </AnimatedText>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 rounded-full"></div>
          
          {portfolioData.experience.map((exp, index) => (
            <AnimatedText key={index} delay={index * 200}>
              <div className="relative flex items-center mb-16">
                <div className="absolute left-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-400/30"></div>
                <div className="ml-24">
                  <GlassCard className="p-8 group hover:scale-105 transition-all duration-500" glowColor={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'pink' : 'cyan'}>
                    <div className="flex items-center gap-4 mb-4">
                      <Briefcase className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300" size={24} />
                      <span className="text-purple-400 text-sm font-bold uppercase tracking-wider bg-purple-400/10 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{exp.role}</h3>
                    <p className="text-pink-400 font-semibold mb-3 text-lg">{exp.company}</p>
                    <p className="text-gray-400">{exp.duration}</p>
                  </GlassCard>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AchievementsSection = ({ portfolioData }) => (
  <section id="achievements" className="py-32 relative">
    <div className="container mx-auto px-6">
      <AnimatedText>
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ACHIEVEMENTS & MILESTONES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
      </AnimatedText>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <AnimatedText key={index} delay={index * 150}>
              <GlassCard 
                className="p-8 text-center group hover:scale-110 hover:-translate-y-4 transition-all duration-500" 
                glowColor={index % 4 === 0 ? 'purple' : index % 4 === 1 ? 'pink' : index % 4 === 2 ? 'cyan' : 'green'}
              >
                <div className="text-purple-400 mb-6 flex justify-center group-hover:text-pink-400 transition-colors duration-500 group-hover:animate-bounce">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider bg-white/5 py-2 px-4 rounded-full">
                  {achievement.platform}
                </p>
              </GlassCard>
            </AnimatedText>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = ({ portfolioData }) => (
  <section id="contact" className="pt-32 pb-16 relative">
    <div className="container mx-auto px-6">
      <AnimatedText>
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            LET'S CONNECT
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
      </AnimatedText>

      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-12" glowColor="pink">
          <AnimatedText delay={200}>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                HAVE A PROJECT IN MIND?
              </h3>
              <p className="text-2xl text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of an amazing team.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText delay={400}>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="YOUR NAME" 
                    className="w-full bg-white/5 border-2 border-purple-400/30 p-6 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300 font-inter rounded-2xl group-hover:bg-white/10"
                    required 
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL" 
                    className="w-full bg-white/5 border-2 border-purple-400/30 p-6 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300 font-inter rounded-2xl group-hover:bg-white/10"
                    required 
                  />
                </div>
              </div>
              
              <div className="relative group">
                <textarea 
                  placeholder="YOUR MESSAGE - Tell me about your project, ideas, or just say hello!" 
                  rows="8" 
                  className="w-full bg-white/5 border-2 border-purple-400/30 p-6 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300 font-inter resize-none rounded-2xl group-hover:bg-white/10"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold uppercase tracking-wider rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center gap-3 mx-auto group"
                >
                  <Send size={20} className="group-hover:animate-pulse" />
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </AnimatedText>
        </GlassCard>
      </div>
    </div>
  </section>
);

const Footer = ({ portfolioData }) => (
  <footer className="py-16 bg-gradient-to-t from-slate-900/80 to-transparent border-t border-purple-400/20 relative">
    <div className="container mx-auto px-6 text-center">
      <AnimatedText>
        <div className="flex justify-center space-x-10 mb-12">
          {[
            { icon: <Github size={36} />, href: portfolioData.social.github, color: "hover:text-purple-400" },
            { icon: <Linkedin size={36} />, href: portfolioData.social.linkedin, color: "hover:text-pink-400" },
            { icon: <Code size={36} />, href: portfolioData.social.leetcode, color: "hover:text-cyan-400" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`text-gray-400 ${social.color} transition-all duration-500 transform hover:scale-125 hover:-translate-y-3 relative group`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-sm"></div>
              <div className="relative">{social.icon}</div>
            </a>
          ))}
        </div>
      </AnimatedText>
      
      <AnimatedText delay={200}>
        <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          &lt;SALONI.DEV/&gt;
        </div>
      </AnimatedText>
      
      <AnimatedText delay={400}>
        <p className="text-gray-400 font-inter text-lg mb-4">
          Crafted with <span className="text-pink-400 animate-pulse text-xl">💜</span> and code by{' '}
          <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {portfolioData.name}
          </span>
        </p>
      </AnimatedText>
      
      <AnimatedText delay={600}>
        <p className="text-gray-500 text-sm font-inter">
          &copy; {new Date().getFullYear()} - Innovation Never Stops | Keep Building the Future
        </p>
      </AnimatedText>
    </div>
  </footer>
);

const BackToTopButton = ({ show, onClick }) => (
  <button 
    onClick={onClick} 
    className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-500 z-50 group hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 ${
      show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
    }`}
  >
    <ArrowUp size={28} className="mx-auto group-hover:animate-bounce" />
  </button>
);

// Enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  
  .font-inter { font-family: 'Inter', sans-serif; }
  
  html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-30px) rotate(2deg); }
    66% { transform: translateY(30px) rotate(-2deg); }
  }
  
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
    50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.7); }
  }
  
  @keyframes sparkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
  
  .animate-float { animation: float 8s ease-in-out infinite; }
  .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
  .animate-glow { animation: glow 2s ease-in-out infinite; }
  .animate-sparkle { animation: sparkle 1.5s ease-in-out infinite; }
  
  /* Smooth scrolling */
  html { scroll-behavior: smooth; }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.8); }
  ::-webkit-scrollbar-thumb { 
    background: linear-gradient(to bottom, #a855f7, #ec4899); 
    border-radius: 4px; 
  }
  ::-webkit-scrollbar-thumb:hover { 
    background: linear-gradient(to bottom, #9333ea, #db2777); 
  }
  
  /* Enhanced hover effects */
  .hover-lift:hover { transform: translateY(-5px); }
  .hover-glow:hover { box-shadow: 0 10px 40px rgba(168, 85, 247, 0.3); }
`;
document.head.appendChild(style);

export default App;

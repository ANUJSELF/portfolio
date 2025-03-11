import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Github, Globe, Linkedin, Code } from 'lucide-react';

// 3D Components for each project
function TicTacToeModel() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.2, 2]} />
        <meshStandardMaterial color="#00ff88" />
      </mesh>
      {/* Grid lines */}
      {[-0.67, 0.67].map((pos, i) => (
        <React.Fragment key={i}>
          <mesh position={[pos, 0.15, 0]}>
            <boxGeometry args={[0.1, 0.3, 2]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0, 0.15, pos]}>
            <boxGeometry args={[2, 0.3, 0.1]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
}

function PortfolioModel() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial color="#ff00ff" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  );
}

function ANPRModel() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 1.5, 0.5]} />
        <meshStandardMaterial color="#4444ff" />
      </mesh>
      {/* License plate */}
      <mesh position={[0, 0, 0.3]}>
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

const projects = [
  {
    title: "Tic-Tac-Toe 3D",
    description: "Interactive 3D Tic-Tac-Toe game built with Three.js and React",
    github: "https://github.com/ANUJSELF/tic-tac-toe-3d",
    live: "https://anujtictactoe.web.app/",
    ModelComponent: TicTacToeModel,
    skills: ["React", "Three.js", "JavaScript", "WebGL"]
  },
  {
    title: "Three.js Portfolio",
    description: "Interactive 3D portfolio website showcasing projects and skills",
    github: "https://github.com/ANUJSELF/threejs-portfolio-Main",
    live: "https://anuj-tiwari-afd74.web.app/",
    ModelComponent: PortfolioModel,
    skills: ["Three.js", "React", "TailwindCSS", "3D Modeling"]
  },
  {
    title: "ANPR System",
    description: "Automatic Number Plate Recognition System using Computer Vision",
    github: "https://github.com/ANUJSELF/ANPR-Project",
    ModelComponent: ANPRModel,
    skills: ["Python", "OpenCV", "Machine Learning", "Computer Vision"]
  }
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/ANUJSELF",
    color: "hover:text-purple-400"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/anuj-tiwari-15548a180/",
    color: "hover:text-blue-400"
  },
  {
    name: "LeetCode",
    icon: Code,
    url: "https://leetcode.com/u/SELFANUJ/",
    color: "hover:text-yellow-400"
  },
  {
    name: "HackerRank",
    icon: Code,
    url: "https://www.hackerrank.com/profile/2003480130011_IT",
    color: "hover:text-green-400"
  }
];

export function ProjectsShowcase() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform hover:scale-110 transition-all duration-300 ${link.color}`}
            >
              <link.icon className="w-8 h-8" />
            </a>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-black/30 backdrop-blur-lg rounded-xl overflow-hidden border border-cyan-500/30 transform hover:scale-105 transition-all duration-300"
            >
              {/* 3D Model Viewer */}
              <div className="h-48 relative">
                <Canvas>
                  <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <OrbitControls enableZoom={false} autoRotate />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <project.ModelComponent />
                  </Suspense>
                </Canvas>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
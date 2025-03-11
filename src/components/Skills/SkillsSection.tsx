import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text } from '@react-three/drei';
import { Monitor, Server, Database, Brain, Cpu, Cuboid as Cube } from 'lucide-react';

// 3D Model Components for each skill category
function SkillModel({ color, rotation = [0, 0, 0], position = [0, 0, 0] }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      <mesh>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.7}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "#00ff88",
    skills: [
      "HTML", "CSS", "JavaScript", "React",
      "Bootstrap", "TailwindCSS",
      "Three.js", "React Three Fiber"
    ],
    position: [-4, 2, 0]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "#ff00ff",
    skills: [
      "Node.js", "Express",
      "Django", "Flask"
    ],
    position: [4, 2, 0]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "#4444ff",
    skills: [
      "MongoDB", "Firebase",
      "AWS", "GCP", "Heroku",
      "Vercel", "Netlify"
    ],
    position: [-4, -2, 0]
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    color: "#ff4444",
    skills: [
      "Python", "TensorFlow", "OpenCV",
      "PyTorch", "Scikit-Learn",
      "R", "MATLAB", "SQL"
    ],
    position: [4, -2, 0]
  },
  {
    title: "IoT & Embedded",
    icon: Cpu,
    color: "#44ff44",
    skills: [
      "Arduino", "Raspberry Pi",
      "Embedded C", "C++",
      "GPS", "GSM", "Sensors"
    ],
    position: [-2, 0, 0]
  },
  {
    title: "DevOps & 3D",
    icon: Cube,
    color: "#ffff44",
    skills: [
      "Git", "Docker", "Jenkins",
      "Three.js", "WebGL", "GLSL",
      "Blender"
    ],
    position: [2, 0, 0]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Technical Skills & Expertise
        </h2>

        {/* 3D Skills Visualization */}
        <div className="h-[600px] relative mb-16 rounded-xl overflow-hidden border border-cyan-500/30">
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 15]} />
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />

              {skillCategories.map((category) => (
                <SkillModel
                  key={category.title}
                  color={category.color}
                  position={category.position}
                />
              ))}
            </Suspense>
          </Canvas>

          {/* Overlay with skill categories */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon 
                      className="w-6 h-6" 
                      style={{ color: category.color }} 
                    />
                    <h3 className="text-xl font-bold" style={{ color: category.color }}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill} 
                        className="text-gray-300 flex items-center gap-2 text-sm"
                      >
                        <span 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: category.color }} 
                        />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
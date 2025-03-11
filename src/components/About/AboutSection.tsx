import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text3D } from '@react-three/drei';
import { Monitor, Server, Database, Brain, Cpu, Code } from 'lucide-react';

// 3D Skill Category Component
function SkillCategory({ position, color, children }: any) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
      </mesh>
      {children}
    </group>
  );
}

// Skill Categories with their respective colors
const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "#00ff88",
    skills: ["React", "Three.js", "TailwindCSS", "JavaScript"],
    position: [-4, 0, 0]
  },
  {
    title: "Backend",
    icon: Server,
    color: "#ff00ff",
    skills: ["Node.js", "Express", "Django", "Flask"],
    position: [0, 0, 0]
  },
  {
    title: "AI & ML",
    icon: Brain,
    color: "#4444ff",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn"],
    position: [4, 0, 0]
  },
  {
    title: "IoT",
    icon: Cpu,
    color: "#ff4444",
    skills: ["Arduino", "Raspberry Pi", "Embedded C", "Sensors"],
    position: [-2, -4, 0]
  },
  {
    title: "DevOps",
    icon: Code,
    color: "#44ff44",
    skills: ["Git", "Docker", "AWS", "CI/CD"],
    position: [2, -4, 0]
  }
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        {/* Bio Section */}
        <div className="mb-16 max-w-3xl mx-auto text-gray-300">
          <p className="text-xl mb-6">
            👋 Hi, I'm Anuj Tiwari – a passionate Full-Stack Developer, AI & IoT Enthusiast, and Tech Innovator.
          </p>
          <p className="mb-4">
            With a strong foundation in software development and a love for futuristic technologies,
            I specialize in building interactive web experiences, AI-driven applications, and IoT-based solutions.
          </p>
          <p className="mb-4">
            💡 I thrive on problem-solving, constantly pushing the boundaries of 3D web development,
            artificial intelligence, and embedded systems.
          </p>
        </div>

        {/* 3D Skills Showcase */}
        <div className="h-[600px] relative mb-16 rounded-xl overflow-hidden border border-cyan-500/30">
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 12]} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />

              {skillCategories.map((category) => (
                <SkillCategory
                  key={category.title}
                  position={category.position}
                  color={category.color}
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
                  className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-6 h-6" style={{ color: category.color }} />
                    <h3 className="text-xl font-bold" style={{ color: category.color }}>
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-4 gradient-text">What I Do</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Build scalable full-stack applications</li>
              <li>• Create AI-driven solutions for real-world applications</li>
              <li>• Develop IoT-based systems for automation & monitoring</li>
              <li>• Design 3D immersive experiences using Three.js</li>
              <li>• Solve complex problems through data science & machine learning</li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Core Expertise</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Full-Stack Development: React, Node.js, Express, MongoDB</li>
              <li>• 3D Web & Interactive UI: Three.js, React Three Fiber</li>
              <li>• AI & Machine Learning: TensorFlow, OpenCV, PyTorch</li>
              <li>• IoT & Embedded Systems: Arduino, Raspberry Pi, Embedded C</li>
              <li>• Cloud & DevOps: AWS, Docker, CI/CD, Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
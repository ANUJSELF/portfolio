import React from 'react';
import { Scene } from './components/Canvas/Scene';
import { Header } from './components/Layout/Header';
import { ChatbotAvatar } from './components/Chat/ChatbotAvatar';
import { ProjectsShowcase } from './components/Projects/ProjectsShowcase';
import { AboutSection } from './components/About/AboutSection';
import { SkillsSection } from './components/Skills/SkillsSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      {/* Main content container */}
      <main className="relative">
        {/* 3D Scene background */}
        <div className="fixed inset-0">
          <Scene />
        </div>
        
        {/* Content sections */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 py-24">
              <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Building the Future
              </h1>
              <p className="text-xl text-center text-gray-400 max-w-2xl mx-auto">
                Full-stack developer specializing in creating immersive digital experiences
                with cutting-edge technologies.
              </p>
            </div>
          </section>

          {/* About Section */}
          <AboutSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Projects Section */}
          <ProjectsShowcase />
        </div>
      </main>

      {/* AI Chatbot */}
      <ChatbotAvatar />
    </div>
  );
}

export default App;
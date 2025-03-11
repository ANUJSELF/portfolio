import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatbotAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    let timeBasedGreeting = '';
    
    if (hour < 12) timeBasedGreeting = 'Good morning';
    else if (hour < 18) timeBasedGreeting = 'Good afternoon';
    else timeBasedGreeting = 'Good evening';
    
    setGreeting(`${timeBasedGreeting}! I'm your AI assistant. How can I help you today?`);
    
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: greeting,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, greeting]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        text: "I'm an AI assistant designed to help you navigate through this portfolio. Feel free to ask about my skills, projects, or experience!",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-cyan-500 hover:bg-cyan-600'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-black/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/30 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-cyan-500/30 flex items-center space-x-3">
            <Bot className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">AI Assistant</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-cyan-500/20 text-cyan-100'
                      : 'bg-purple-500/20 text-purple-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-cyan-500/30">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-white/10 border border-cyan-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
"use client"
import { ChevronDown, Download, Github, Linkedin, Eye } from "lucide-react"

export default function HeroSection({ isActive }) {
  const handleViewCV = () => {
    window.open('/JAIRUS-VALENCIA-CV.pdf', '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/JAIRUS-VALENCIA-CV.pdf';
    link.setAttribute('download', 'JAIRUS-VALENCIA-CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-50 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JV</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Jairus Valencia
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-delay">
          Web & Mobile Application Developer
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
          Passionate about creating interactive web applications with modern technologies. Dedicated to continuous
          learning and delivering high-quality solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-3">
          <button 
            onClick={handleViewCV}
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Eye size={18} />
            <span>View CV</span>
          </button>

          <button 
            onClick={handleDownloadCV}
            className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={18} />
            <span>Download CV</span>
          </button>

          <a
            onClick={() => window.open('https://github.com/jairuscvalencia', '_blank')}
            className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a
            onClick={() => window.open('https://linkedin.com/in/jairusvalencia-it', '_blank')}
            className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="animate-bounce">
            <a href="#about" >
              <span className="sr-only">Scroll Down</span>
              <ChevronDown className="mx-auto text-cyan-400" size={32} />
            </a>
          </div>
      </div>
    </section>
  )
}

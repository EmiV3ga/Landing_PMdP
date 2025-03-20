
import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with blur effect */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
          isLoaded ? 'image-loaded' : 'image-loading'
        }`}
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop)', 
          backgroundSize: 'cover' 
        }}
      ></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background"></div>
      
      {/* Content container */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="max-w-3xl mx-auto text-center">
          <span 
            className={`inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experienced Software Development Team
          </span>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Building Digital Solutions for Modern Businesses
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white/80 mb-8 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We specialize in creating custom software solutions that streamline workflows, improve efficiency, and drive growth for businesses of all sizes.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a href="#contact" className="button-primary">
              Get in Touch
            </a>
            <a href="#services" className="button-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700 delay-500 cursor-pointer ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll Down</span>
          <ChevronDown className="text-white/70 animate-bounce h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

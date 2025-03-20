
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-display font-bold text-2xl text-foreground">Tech</span>
              <span className="ml-1 text-xs text-accent font-medium">INNOVATE</span>
            </div>
            <p className="text-muted-foreground">
              Custom software development solutions for businesses looking to streamline operations, improve efficiency, and drive growth.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-accent hover:bg-accent hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-accent hover:bg-accent hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-accent hover:bg-accent hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Web Application Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Custom Software Development</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="ml-3 text-muted-foreground">123 Tech Plaza, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+15551234567" className="ml-3 text-muted-foreground hover:text-accent transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@techinnovate.com" className="ml-3 text-muted-foreground hover:text-accent transition-colors">info@techinnovate.com</a>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 text-accent shrink-0" />
                <a href="https://www.techinnovate.com" className="ml-3 text-muted-foreground hover:text-accent transition-colors">www.techinnovate.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tech Innovate. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

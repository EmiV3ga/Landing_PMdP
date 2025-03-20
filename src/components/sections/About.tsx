
import { useRef, useEffect } from 'react';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section id="about" className="section bg-secondary/50">
      <div className="text-center mb-16">
        <h2 ref={titleRef} className="section-title reveal">
          About Our Team
        </h2>
        <p ref={subtitleRef} className="section-subtitle reveal">
          A passionate team of developers dedicated to crafting exceptional software solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={imageRef} className="reveal order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-accent/10 rounded-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Development Team Collaboration"
              className="relative z-10 w-full h-auto rounded-xl shadow-xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-xl shadow-lg">
              <p className="text-4xl font-bold text-accent">10+</p>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>

        <div ref={contentRef} className="reveal order-1 lg:order-2">
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="text-muted-foreground mb-6">
            We are a team of skilled software engineers, designers, and project managers passionate about creating innovative digital solutions. With over a decade of experience in the industry, we've helped businesses of all sizes transform their operations through custom software.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
          <p className="text-muted-foreground mb-6">
            We believe in collaborative development that puts your business needs at the center of everything we do. Our agile methodology ensures transparent communication, regular updates, and a final product that exceeds expectations.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-accent text-sm font-bold">✓</span>
              </div>
              <p className="text-foreground">Cutting-edge technology stack</p>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-accent text-sm font-bold">✓</span>
              </div>
              <p className="text-foreground">Agile development methodology</p>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-accent text-sm font-bold">✓</span>
              </div>
              <p className="text-foreground">Comprehensive testing and quality assurance</p>
            </div>
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-accent text-sm font-bold">✓</span>
              </div>
              <p className="text-foreground">Ongoing maintenance and support</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 reveal">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <p className="text-4xl font-bold text-accent mb-2">100+</p>
          <p className="text-sm text-muted-foreground">Projects Completed</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <p className="text-4xl font-bold text-accent mb-2">50+</p>
          <p className="text-sm text-muted-foreground">Happy Clients</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <p className="text-4xl font-bold text-accent mb-2">15+</p>
          <p className="text-sm text-muted-foreground">Team Members</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <p className="text-4xl font-bold text-accent mb-2">98%</p>
          <p className="text-sm text-muted-foreground">Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default About;

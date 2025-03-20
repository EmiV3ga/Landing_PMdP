
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get a Quote',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer comprehensive software development solutions tailored to your specific business needs.',
    'services.webApps.title': 'Custom Web Applications',
    'services.webApps.description': 'We build tailored web applications that automate business processes, improve efficiency, and provide seamless user experiences across devices.',
    'services.responsive.title': 'Responsive Web Design',
    'services.responsive.description': 'Our designs adapt fluidly to different screen sizes, ensuring your application looks and functions perfectly on desktops, tablets, and mobile devices.',
    'services.frontend.title': 'Frontend Development',
    'services.frontend.description': 'We create intuitive, engaging user interfaces using modern frameworks like React, Angular, and Vue.js that provide exceptional user experiences.',
    'services.backend.title': 'Backend Development',
    'services.backend.description': 'Our robust server-side solutions handle complex business logic, data processing, and integrate with third-party services to power your applications.',
    'services.database.title': 'Database Design',
    'services.database.description': 'We architect efficient, scalable database solutions that securely store and manage your critical business data with optimal performance.',
    'services.support.title': 'Consultation & Support',
    'services.support.description': 'Our team provides expert technical guidance, ongoing maintenance, and responsive support to ensure your software solutions continue to meet your needs.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your project? Get in touch with our team to discuss your requirements.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been sent successfully. We\'ll get back to you soon!',
    'contact.info.title': 'Contact Information',
    'contact.info.location': 'Our Location',
    'contact.info.address': '123 Tech Plaza, Silicon Valley, CA 94025',
    'contact.info.phone': 'Phone Number',
    'contact.info.phoneNumbers': '+1 (555) 123-4567',
    'contact.info.tollFree': '+1 (800) 987-6543 (Toll Free)',
    'contact.info.email': 'Email Address',
    'contact.info.emails': 'info@techinnovate.com',
    'contact.info.support': 'support@techinnovate.com',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.weekdayHours': '9:00 AM - 6:00 PM',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.saturdayHours': '10:00 AM - 2:00 PM',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.sundayHours': 'Closed',
    'contact.inquiry.title': 'Project Inquiry',
    'contact.inquiry.description': 'For detailed project discussions or custom solutions, please schedule a consultation call:',
    'contact.inquiry.email': 'projects@techinnovate.com',
  },
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.getQuote': 'Solicitar Presupuesto',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Ofrecemos soluciones integrales de desarrollo de software adaptadas a las necesidades específicas de su negocio.',
    'services.webApps.title': 'Aplicaciones Web Personalizadas',
    'services.webApps.description': 'Construimos aplicaciones web a medida que automatizan procesos empresariales, mejoran la eficiencia y proporcionan experiencias de usuario fluidas en todos los dispositivos.',
    'services.responsive.title': 'Diseño Web Responsivo',
    'services.responsive.description': 'Nuestros diseños se adaptan de manera fluida a diferentes tamaños de pantalla, asegurando que su aplicación se vea y funcione perfectamente en computadoras de escritorio, tablets y dispositivos móviles.',
    'services.frontend.title': 'Desarrollo Frontend',
    'services.frontend.description': 'Creamos interfaces de usuario intuitivas y atractivas utilizando frameworks modernos como React, Angular y Vue.js que proporcionan experiencias de usuario excepcionales.',
    'services.backend.title': 'Desarrollo Backend',
    'services.backend.description': 'Nuestras sólidas soluciones del lado del servidor manejan lógica empresarial compleja, procesamiento de datos e integración con servicios de terceros para impulsar sus aplicaciones.',
    'services.database.title': 'Diseño de Bases de Datos',
    'services.database.description': 'Arquitecturamos soluciones de bases de datos eficientes y escalables que almacenan y gestionan de forma segura los datos críticos de su empresa con un rendimiento óptimo.',
    'services.support.title': 'Consultoría y Soporte',
    'services.support.description': 'Nuestro equipo proporciona orientación técnica experta, mantenimiento continuo y soporte receptivo para garantizar que sus soluciones de software continúen satisfaciendo sus necesidades.',
    
    // Contact
    'contact.title': 'Contáctenos',
    'contact.subtitle': '¿Listo para iniciar su proyecto? Póngase en contacto con nuestro equipo para discutir sus requisitos.',
    'contact.form.title': 'Envíenos un Mensaje',
    'contact.form.name': 'Su Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Su Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Su mensaje ha sido enviado con éxito. Nos pondremos en contacto con usted pronto!',
    'contact.info.title': 'Información de Contacto',
    'contact.info.location': 'Nuestra Ubicación',
    'contact.info.address': '123 Tech Plaza, Silicon Valley, CA 94025',
    'contact.info.phone': 'Número de Teléfono',
    'contact.info.phoneNumbers': '+1 (555) 123-4567',
    'contact.info.tollFree': '+1 (800) 987-6543 (Llamada gratuita)',
    'contact.info.email': 'Correo Electrónico',
    'contact.info.emails': 'info@techinnovate.com',
    'contact.info.support': 'soporte@techinnovate.com',
    'contact.hours.title': 'Horario de Atención',
    'contact.hours.weekdays': 'Lunes - Viernes',
    'contact.hours.weekdayHours': '9:00 AM - 6:00 PM',
    'contact.hours.saturday': 'Sábado',
    'contact.hours.saturdayHours': '10:00 AM - 2:00 PM',
    'contact.hours.sunday': 'Domingo',
    'contact.hours.sundayHours': 'Cerrado',
    'contact.inquiry.title': 'Consulta de Proyectos',
    'contact.inquiry.description': 'Para discusiones detalladas sobre proyectos o soluciones personalizadas, programe una llamada de consulta:',
    'contact.inquiry.email': 'proyectos@techinnovate.com',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

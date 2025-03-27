import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.title': 'PMDP S.A. | Fuel and Lubricant Distribution Solutions',
    'header.subtitle': 'Premium quality fuels and lubricants',

    // Navbar
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Request Quote',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions in fuel and lubricant distribution',
    'services.webApps.title': 'Fuel Distribution',
    'services.webApps.description': 'Premium fuels from recognized oil companies, meeting the highest quality standards',
    'services.responsive.title': 'Lubricants',
    'services.responsive.description': 'High-tech Mobil Super™ lubricants providing superior protection for all vehicle types',
    'services.frontend.title': 'Urea Solution',
    'services.frontend.description': 'Automotive urea additive for selective catalytic reduction to minimize emissions',
    'services.backend.title': 'Satellite Monitoring',
    'services.backend.description': 'Complete product traceability from loading to final delivery',
    'services.database.title': 'Lubricant Analysis',
    'services.database.description': 'Comprehensive analysis to optimize your equipment performance',
    'services.support.title': 'Technical Support',
    'services.support.description': 'Expert engineering service and technical advice for all solutions',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team for more information',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.info.title': 'Our Locations',
    'contact.info.location': 'Main Office',
    'contact.info.address': 'AV. CHAMPAGNAT 3490, MAR DEL PLATA',
    'contact.info.phone': 'Phone',
    'contact.info.phoneNumbers': '2236015815',
    'contact.info.email': 'Email',
    'contact.info.emails': 'INFO@PMDP.COM.AR',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.weekdayHours': '8:00 AM - 2:00 PM',
  },
  es: {
    // Header
    'header.title': 'PMDP S.A. | Soluciones en Distribución de Combustibles y Lubricantes',
    'header.subtitle': 'Combustibles y lubricantes de calidad premium',

    // Navbar
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.getQuote': 'Solicitar Cotización',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales en distribución de combustibles y lubricantes',
    'services.webApps.title': 'Distribución de Combustibles',
    'services.webApps.description': 'Combustibles premium de petroleras reconocidas, cumpliendo los más altos estándares de calidad',
    'services.responsive.title': 'Lubricantes',
    'services.responsive.description': 'Lubricantes Mobil Super™ de alta tecnología que brindan protección superior para todo tipo de vehículos',
    'services.frontend.title': 'Solución de Urea',
    'services.frontend.description': 'Aditivo de urea automotriz para reducción catalítica selectiva y minimización de emisiones',
    'services.backend.title': 'Monitoreo Satelital',
    'services.backend.description': 'Trazabilidad completa de productos desde la carga hasta la entrega final',
    'services.database.title': 'Análisis de Lubricantes',
    'services.database.description': 'Análisis integral para optimizar el rendimiento de sus equipos',
    'services.support.title': 'Soporte Técnico',
    'services.support.description': 'Servicio de ingeniería especializado y asesoramiento técnico para todas las soluciones',

    // Contact
    'contact.title': 'Contáctenos',
    'contact.subtitle': 'Comuníquese con nuestro equipo para más información',
    'contact.form.title': 'Envíenos un mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.phone': 'Teléfono',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Su mensaje ha sido enviado con éxito!',
    'contact.info.title': 'Nuestras Ubicaciones',
    'contact.info.location': 'Oficina Principal',
    'contact.info.address': 'AV. CHAMPAGNAT 3490, MAR DEL PLATA',
    'contact.info.phone': 'Teléfono',
    'contact.info.phoneNumbers': '2236015815',
    'contact.info.email': 'Correo electrónico',
    'contact.info.emails': 'INFO@PMDP.COM.AR',
    'contact.hours.title': 'Horario de Atención',
    'contact.hours.weekdays': 'Lunes - Viernes',
    'contact.hours.weekdayHours': '8:00 AM - 2:00 PM',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es'); // Cambiado a 'es' para español por defecto

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
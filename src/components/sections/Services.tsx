
import { useRef, useEffect } from 'react';
import AnimatedCard from '../ui/AnimatedCard';
import { Code, Database, Globe, Layout, Server, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  return (
    <section id="services" className="section">
      <div className="text-center mb-16">
        <h2 ref={titleRef} className="section-title reveal">
          {t('services.title')}
        </h2>
        <p ref={subtitleRef} className="section-subtitle reveal">
          {t('services.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatedCard
          icon={<Layout className="h-6 w-6" />}
          title={t('services.webApps.title')}
          description={t('services.webApps.description')}
          delay={100}
        />

        <AnimatedCard
          icon={<Globe className="h-6 w-6" />}
          title={t('services.responsive.title')}
          description={t('services.responsive.description')}
          delay={200}
        />

        <AnimatedCard
          icon={<Code className="h-6 w-6" />}
          title={t('services.frontend.title')}
          description={t('services.frontend.description')}
          delay={300}
        />

        <AnimatedCard
          icon={<Server className="h-6 w-6" />}
          title={t('services.backend.title')}
          description={t('services.backend.description')}
          delay={400}
        />

        <AnimatedCard
          icon={<Database className="h-6 w-6" />}
          title={t('services.database.title')}
          description={t('services.database.description')}
          delay={500}
        />

        <AnimatedCard
          icon={<Users className="h-6 w-6" />}
          title={t('services.support.title')}
          description={t('services.support.description')}
          delay={600}
        />
      </div>
    </section>
  );
};

export default Services;


import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AnimatedCard = ({ icon, title, description, delay }: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="reveal rounded-xl border border-border bg-card p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 dark:bg-card dark:border-border/20 dark:hover:shadow-accent/5"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default AnimatedCard;

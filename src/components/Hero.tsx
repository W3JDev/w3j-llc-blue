import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { AnimatedText } from './AnimatedText';
import { useRef } from 'react';
export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => (pos === 1 ? 'relative' : 'fixed'));
  return (
    <section id="home" ref={targetRef} className="relative h-[200vh] w-full">
      <motion.div
        style={{ opacity, scale, position }}
        className="sticky top-0 flex h-screen items-center justify-center"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
          <div className="aurora-bg"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-6">
            <AnimatedText
              el="h1"
              text="Enterprise-Grade Full Stack Development & AI Integration"
              className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            />
            <AnimatedText
              text="Transforming business requirements into scalable, intelligent, and robust technical solutions."
              className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-10"
          >
            <Link to="contact" smooth={true} duration={500} spy={true} offset={-80}>
              <Button size="lg" className="h-12 px-8 text-base font-semibold shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95">
                Get Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
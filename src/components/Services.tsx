import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, Cpu, Database, BrainCircuit, Building, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Full Stack Development',
    description: 'Expertise in Python, JavaScript, and React to build comprehensive, end-to-end web applications.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI & OpenAI Integration',
    description: 'Implementing cutting-edge OpenAI models to create intelligent, automated, and data-driven features.',
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'Backend Systems & APIs',
    description: 'Designing and developing robust, scalable backend architectures and secure RESTful APIs.',
  },
  {
    icon: <LinkIcon className="h-8 w-8 text-primary" />,
    title: 'LangChain & Data Pipelines',
    description: 'Building powerful data processing pipelines and custom solutions using the LangChain framework.',
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: 'Enterprise Applications',
    description: 'Developing large-scale, mission-critical applications tailored for corporate environments.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'Technology Consulting',
    description: 'Providing strategic guidance to help businesses leverage technology for growth and efficiency.',
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};
export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/50 dark:bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Expertise</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We provide a suite of technology services designed to solve complex business challenges.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateX: 5,
                rotateY: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Card className="h-full">
                <CardHeader className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="pt-2 text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
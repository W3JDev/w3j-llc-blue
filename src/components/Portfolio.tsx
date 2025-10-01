import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Blocks, Link2, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
const portfolioItems = [
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Business Intelligence Dashboard',
    description: 'A comprehensive dashboard that uses AI to analyze business data and provide actionable insights in real-time.',
  },
  {
    icon: <Blocks className="h-8 w-8 text-primary" />,
    title: 'Enterprise API Integration Platform',
    description: 'A scalable platform designed to connect disparate enterprise systems through a unified, secure API gateway.',
  },
  {
    icon: <Link2 className="h-8 w-8 text-primary" />,
    title: 'Custom LangChain Implementation',
    description: 'A bespoke solution leveraging LangChain for complex data processing and generative AI workflows.',
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: 'Multi-Currency Payment Processing System',
    description: 'A robust backend system for handling international payments, currency conversions, and financial reporting.',
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-secondary/50 dark:bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Project Showcase</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Examples of solutions we design and build for our enterprise clients.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Card className="h-full">
                <CardHeader className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  <CardDescription className="pt-2 text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
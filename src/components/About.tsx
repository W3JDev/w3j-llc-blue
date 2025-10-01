import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
const expertiseAreas = [
  'Enterprise-Scale Python Development',
  'Advanced LangChain Implementations',
  'OpenAI Model Fine-Tuning & Integration',
  'Robust and Scalable Backend Systems',
  'Modern Full-Stack Web Solutions',
];
const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About W3J LLC</h2>
            <p className="text-lg text-muted-foreground">
              W3J LLC provides specialized consulting services for enterprise technology solutions. Founded in 2025, we help businesses integrate cutting-edge AI technologies with robust backend systems to drive innovation and efficiency.
            </p>
            <p className="text-lg text-muted-foreground">
              Our core mission is to bridge the gap between complex business needs and high-performance technical implementations, ensuring our clients receive scalable, maintainable, and impactful solutions.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-foreground">Core Competencies</h3>
            <motion.ul
              className="space-y-3"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {expertiseAreas.map((area, index) => (
                <motion.li key={index} className="flex items-start" variants={itemVariants}>
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base text-muted-foreground">{area}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
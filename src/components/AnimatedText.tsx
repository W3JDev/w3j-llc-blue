import { motion, Variants } from 'framer-motion';
interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
}
const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.04,
    },
  },
};
const characterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export function AnimatedText({ text, el: Wrapper = 'p', className, once = true }: AnimatedTextProps) {
  const words = text.split(' ');
  return (
    <Wrapper className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={defaultVariants}
        aria-label={text}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={characterVariants}
              >
                {char}
              </motion.span>
            ))}
            {/* Add space back in */}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
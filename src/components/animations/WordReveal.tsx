import { motion } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
  delay?: number;
}

const WordReveal = ({
  text,
  className = '',
  highlightWords = [],
  highlightClass = 'text-primary',
  delay = 0,
}: WordRevealProps) => {
  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 30, rotateX: 40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`inline-flex flex-wrap ${className}`}
      style={{ perspective: '600px' }}
    >
      {words.map((w, i) => {
        const isHighlight = highlightWords.some(hw => w.toLowerCase().includes(hw.toLowerCase()));
        return (
          <motion.span
            key={i}
            variants={word}
            className={`inline-block mr-[0.3em] ${isHighlight ? highlightClass : ''}`}
          >
            {w}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default WordReveal;

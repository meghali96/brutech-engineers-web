import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LetterRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
  delay?: number;
}

const LetterReveal = ({
  text,
  className = '',
  highlightWords = [],
  highlightClass = 'text-primary',
  delay = 0,
}: LetterRevealProps) => {
  const words = text.split(' ');

  // Build a flat list of characters with their word index for highlight detection
  const elements: { char: string; isHighlight: boolean; isSpace: boolean }[] = [];
  words.forEach((word, wordIndex) => {
    const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
    for (const char of word) {
      elements.push({ char, isHighlight, isSpace: false });
    }
    if (wordIndex < words.length - 1) {
      elements.push({ char: '\u00A0', isHighlight: false, isSpace: true });
    }
  });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: -20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 14,
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
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={letter}
          className={`inline-block ${el.isHighlight ? highlightClass : ''}`}
        >
          {el.char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default LetterReveal;

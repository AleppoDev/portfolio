import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { CSSProperties, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder keeps the natural layout / line breaks. */}
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
}

/**
 * Reveals the paragraph character by character as it scrolls through the
 * viewport: every character eases from 0.2 to full opacity in sequence.
 */
export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.replace(/ /g, '').length;
  let charIndex = 0;

  return (
    <p ref={paragraphRef} className={className} style={style}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char) => {
            const start = charIndex / totalChars;
            const end = (charIndex + 1) / totalChars;
            charIndex += 1;
            return (
              <Char
                key={`${wordIndex}-${charIndex}`}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </p>
  );
}

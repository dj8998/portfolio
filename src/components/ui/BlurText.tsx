"use client";
import { motion, type Transition, type TargetAndTransition } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: TargetAndTransition;
  animationTo?: TargetAndTransition[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
}

const buildKeyframes = (from: TargetAndTransition, steps: TargetAndTransition[]): TargetAndTransition => {
  const result: Record<string, unknown> = {};
  
  // Get all unique keys from from and steps
  const allKeys = new Set([
    ...Object.keys(from),
    ...steps.flatMap(step => Object.keys(step))
  ]);
  
  // Build keyframes for each property
  allKeys.forEach(key => {
    const fromValue = (from as Record<string, unknown>)[key];
    const stepValues = steps.map(step => (step as Record<string, unknown>)[key]);
    result[key] = [fromValue, ...stepValues];
  });
  
  return result as TargetAndTransition;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}: BlurTextProps) => {
  // Find the index of 'Dinesh Jangid' in the text
  const namePhrase = "Dinesh Jangid";
  const nameIndex = text.indexOf(namePhrase);
  let elements: { segment: string; isName: boolean }[] = [];
  if (nameIndex !== -1) {
    // Split into: before, name, after
    const before = text.slice(0, nameIndex);
    const after = text.slice(nameIndex + namePhrase.length);
    if (before) elements.push({ segment: before, isName: false });
    elements.push({ segment: namePhrase, isName: true });
    if (after) elements.push({ segment: after, isName: false });
  } else {
    elements = [{ segment: text, isName: false }];
  }

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <p
      ref={ref}
      className={cn(
        "flex flex-wrap font-extrabold text-3xl drop-shadow-lg text-balance font-cartoon text-black dark:text-white",
        className
      )}
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {elements.map(({ segment, isName }, idx) => {
        // Animate by words or letters within each segment
        const subElements = animateBy === 'words' ? segment.split(' ') : segment.split('');
        return subElements.map((word, index) => {
          const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
          const spanTransition: Transition = {
            duration: totalDuration,
            times,
            delay: ((idx * 100) + (index * delay)) / 1000,
            ease: easing,
          };
          return (
            <motion.span
              className={cn(
                "inline-block will-change-[transform,filter,opacity]",
                isName &&
                  "bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent"
              )}
              key={idx + '-' + index}
              initial={fromSnapshot}
              animate={inView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              onAnimationComplete={
                idx === elements.length - 1 && index === subElements.length - 1
                  ? onAnimationComplete
                  : undefined
              }
            >
              {word === ' ' ? '\u00A0' : word}
              {animateBy === 'words' && index < subElements.length - 1 && '\u00A0'}
            </motion.span>
          );
        });
      })}
    </p>
  );
};

export default BlurText; 
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number; // duration in milliseconds (default is 3000ms as requested)
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 3000,
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    // IntersectionObserver to detect when the counter scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
        } else {
          // Reset the animation every time the element leaves the screen
          // so it runs again "every time it appears on the screen" as requested.
          setHasIntersected(false);
          setCount(0);
        }
      },
      { 
        // Slight offset to trigger right as it becomes visible
        threshold: 0.05 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasIntersected) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Premium cubic deceleration easing curve so the numbers slow down gracefully towards the end
      const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasIntersected, target, duration]);

  // Safely format large numbers with local thousands separator (e.g., "1,600")
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span ref={elementRef} className="font-sans tabular-nums inline-block">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

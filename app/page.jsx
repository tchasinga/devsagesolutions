"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const messages = [
  "hi client ! Will be ready soon",
  "hi client ! Almost there",
  "hi client ! Coming soon",
  "hi client ! Stay tuned",
  "hi client ! We're working on it",
];

export default function Home() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      gsap.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          // Change message
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          // Fade in
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            }
          );
        },
      });
    }, 5000);

    // Initial animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1
        ref={textRef}
        className="text-4xl md:text-6xl font-medium text-center px-4"
      >
        {messages[currentMessageIndex]}
      </h1>
    </div>
  );
}
"use client";

import { CSSProperties, startTransition, useEffect, useState } from "react";

type TypewriterEffectProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorColor?: string;
  className?: string;
  style?: CSSProperties;
};

export default function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1400,
  cursorColor = "#00c2b2",
  className,
  style,
}: TypewriterEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const currentWord = words[wordIndex % words.length] ?? "";

  useEffect(() => {
    const isComplete = charIndex === currentWord.length;
    const delay = isComplete && !isDeleting ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed;
    const timeout = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        startTransition(() => setCharIndex((index) => index + 1));
      } else if (!isDeleting && isComplete) {
        startTransition(() => setIsDeleting(true));
      } else if (isDeleting && charIndex > 0) {
        startTransition(() => setCharIndex((index) => index - 1));
      } else {
        startTransition(() => {
          setIsDeleting(false);
          setWordIndex((index) => (index + 1) % Math.max(words.length, 1));
        });
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [charIndex, currentWord, deletingSpeed, isDeleting, pauseDuration, typingSpeed, words.length]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      startTransition(() => setShowCursor((visible) => !visible));
    }, 500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className={className} style={style} aria-live="polite">
      {currentWord.slice(0, charIndex)}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: 2,
          height: "1em",
          marginLeft: 4,
          backgroundColor: cursorColor,
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      />
    </span>
  );
}
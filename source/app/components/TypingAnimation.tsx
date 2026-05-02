import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
}


export function TypingAnimation({ texts }: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        if (currentText !== fullText) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText !== "") {
          setCurrentText(fullText.substring(0, currentText.length -1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);s
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <div className="text-lg md:text-xl text-[var(--color-primary)] h-8 flex items-center">
      <span>(currentText)</span>
      <span className="animate-pulse m1-1">|</span>
    </div>
  );
}
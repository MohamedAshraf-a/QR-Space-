"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedTitle() {
  const text = "CodeSpace";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const typingSpeed = 100;
    const deletingSpeed = 60;
    const pauseTime = 1200;

    const handleTyping = () => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setIsTypingComplete(true);
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (index > 0) {
          setIsTypingComplete(false);
          setDisplayedText(text.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          timer = setTimeout(() => setIsDeleting(false), 800);
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [index, isDeleting, text]);

  const characterVariants = {
    hidden: { opacity: 0, y: 20, rotateZ: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        mass: 0.5,
      },
    },
    exit: { opacity: 0, y: -20, rotateZ: -45 },
  };

  const cursorVariants = {
    blink: {
      opacity: [0, 1, 0],
      transition: { duration: 0.8, repeat: Infinity },
    },
    typing: {
      scaleY: [1, 1.2, 1],
      y: [0, -2, 0],
      transition: { duration: 0.2, type: "spring" },
    },
  };

  const finalPop = {
    complete: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <h1 className="text-5xl font-extrabold flex justify-center items-center">
      <motion.span
        variants={finalPop}
        animate={isTypingComplete ? "complete" : ""}
        className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
      >
        <AnimatePresence mode="wait">
          {displayedText.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={characterVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.span>

      <motion.span
        className="ml-1 text-accent font-light"
        variants={cursorVariants}
        initial="blink"
        animate={isDeleting ? "blink" : "typing"}
      >
        |
      </motion.span>
    </h1>
  );
}
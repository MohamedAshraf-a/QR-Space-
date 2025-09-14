'use client';

import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  footerText: string;
  madeByText: string;
}

export default function Footer({ footerText, madeByText }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const iconHover = {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.6)',
    transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' },
  };

  return (
    <footer className="w-full text-center p-6 mt-16 text-white/70 text-sm relative z-10">
      <p>
        © {currentYear} QR Space. {footerText}
      </p>

      <div className="flex justify-center items-center gap-6 mt-4">
        <span>{madeByText}</span>

        {/* GitHub Icon */}
        <motion.a
          href="https://github.com/MohamedAshraf-a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 "
          whileHover={iconHover}
        >
          <Github size={38} />
        </motion.a>

        {/* LinkedIn Icon */}
        <motion.a
          href="https://www.linkedin.com/in/mohamed-ashraf-99b754317/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 "
          whileHover={iconHover}
        >
          <Linkedin size={30} />
        </motion.a>
      </div>
    </footer>
  );
}

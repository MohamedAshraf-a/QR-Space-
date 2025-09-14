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
    transition: { duration: 0.4 },
  };

  return (
    <footer className="w-full text-center p-6 mt-16 text-white/70 text-sm relative z-10">
      <p>
        © {currentYear} QR Space. {footerText}
      </p>

      <div className="flex justify-center items-center gap-6 mt-4">
        <span>{madeByText}</span>

        <motion.a
          href="https://github.com/MohamedAshraf-a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
          whileHover={iconHover}
        >
          <Github size={30} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/mohamed-ashraf-99b754317/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
          whileHover={iconHover}
        >
          <Linkedin size={30} />
        </motion.a>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import GenerateButton from './GenerateButton';
import QRCodeDisplay from './QRCodeDisplay';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

export default function QRGeneratorClient({
  translations,
}: {
  translations: {
    title: string;
    subtitle: string;
    placeholder: string;
    generateButton: string;
    downloadButton: string;
    info: string;
  };
}) {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleGenerate = () => {
    if (inputValue.trim()) {
      setQrValue(inputValue);
    }
  };

  return (
    <div className="w-full max-w-lg text-center text-white mt-24">
      <h1 className="text-3xl font-bold mb-2">{translations.title}</h1>
      <p className="text-white/70 mb-6">{translations.subtitle}</p>

      <input
       type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  placeholder={translations.placeholder}
  onKeyDown={(e) => {
    if (e.key === 'Enter') handleGenerate(); // اضغط على Enter لتوليد QR
  }}
        className="w-full px-4 py-2 rounded-lg border border-white/20 bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-400"
      />

      <div className="mt-6">
        <button
          onClick={handleGenerate}
          className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
        >
          {translations.generateButton}
        </button>
      </div>
      <AnimatePresence>
  {qrValue && (
    <motion.div
      key="qr"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      className="w-full flex justify-center "
    >
      <QRCodeDisplay value={qrValue} downloadText={translations.downloadButton} />
    </motion.div>
  )}
</AnimatePresence>

     

      <p className="mt-6 text-sm text-white/60">{translations.info}</p>
    </div>
  );
}

// components/GenerateButton.jsx
import { motion } from 'framer-motion';

export default function GenerateButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(132, 118, 255, 0.6)' }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
    >
      Generate QR Code
    </motion.button>
  );
}
"use client";

import { motion } from "motion/react";

export default function ScrollBottom() {
  return (
    <motion.div
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-black text-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <motion.span
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Scroll to learn more
      </motion.span>
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M13.8632 24.7812L12.8481 23.4926C11.2035 21.4048 10.3812 20.361 10.7562 19.5139C11.1313 18.6667 12.4158 18.6667 14.9848 18.6667H17.0151C19.5841 18.6667 20.8685 18.6667 21.2437 19.5139C21.6188 20.361 20.7964 21.4048 19.1517 23.4926L18.1367 24.7811C17.1464 26.0382 16.6513 26.6667 16 26.6667C15.3485 26.6667 14.8535 26.0382 13.8632 24.7812Z"
          stroke="#1D2026"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 18.6666V5.33331"
          stroke="#1D2026"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}

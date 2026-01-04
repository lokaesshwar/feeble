"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const clipVariants = {
    initial: {
      clipPath: "circle(51.5% at 100% 52%)",
      x: 100,
    },
    animate: {
      clipPath: "circle(100% at 50% 53%)",
      x: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 sm:top-10 inset-x-0 z-50 px-2 lg:px-2 xl:px-0 w-full flex justify-center"
    >
      <nav className="px-6 py-4 w-full max-w-6xl bg-white rounded-full mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="E-VAL Logo"
                width={107}
                height={34}
                priority
                className="h-6 md:h-8 lg:h-[34px] w-auto"
              />
            </Link>
          </div>

          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="#how-it-works"
              className="text-sm lg:text-base text-hero-text-secondary hover:text-hero-text-primary transition-colors font-medium"
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm lg:text-base text-hero-text-secondary hover:text-hero-text-primary transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#use-case"
              className="text-sm lg:text-base text-hero-text-secondary hover:text-hero-text-primary transition-colors font-medium"
            >
              Use Case
            </Link>
            <Link
              href="#faq"
              className="text-sm lg:text-base text-hero-text-secondary hover:text-hero-text-primary transition-colors font-medium"
            >
              FAQ
            </Link>
          </div>

          <div className="hidden md:block">
            <motion.button
              initial="initial"
              whileHover="animate"
              className="relative px-6 py-2.5 bg-brand text-white rounded-full font-semibold text-sm overflow-hidden group transition-all duration-300"
            >
              <motion.span
                className=" absolute inset-0 bg-white"
                variants={clipVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <motion.span className="relative z-10 flex items-center justify-center group-hover:text-brand transition-colors duration-300">
                Contact Sales
              </motion.span>
            </motion.button>
          </div>

          
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-hero-text-primary transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-hero-text-primary transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-hero-text-primary transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden mx-4 rounded-lg absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            <Link
              href="#features"
              className="block text-base text-hero-text-primary hover:text-button-primary-bg transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block text-base text-hero-text-primary hover:text-button-primary-bg transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="block text-base text-hero-text-primary hover:text-button-primary-bg transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

"use client";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <main className="relative z-10 h-dvh flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center flex-col items-center gap-4">
            <div className="flex justify-center">
              <div className="inline-flex justify-center items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-brand">
                <svg
                  width="32"
                  height="17"
                  viewBox="0 0 32 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="17" rx="8.5" fill="var(--brand)" />{" "}
                  <circle cx="9.65888" cy="8.65888" r="1.65888" fill="white" />{" "}
                  <circle cx="16.2944" cy="8.65891" r="1.65888" fill="white" />{" "}
                  <circle cx="22.9299" cy="8.65891" r="1.65888" fill="white" />{" "}
                </svg>
                <span className="font-medium">#1 iMessage Automation Tool</span>
              </div>
            </div>

            
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em]">
              <p>
                <span className="text-brand">iMessage </span> Automation
              </p>
              <span className="text-hero-text-primary">
                for Teams and AI Workflows.
              </span>
            </h1>

            
            <p className="text-base text-center leading-[1.6] font-normal text-black">
              Coup lets you, your team, or AI workflows send iMessages directly
              from your phone number, running securely on your Mac or Mac Mini.
            </p>
          </div>
          <div className="relative flex justify-center items-center pt-12">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 lg:gap-6 relative z-10">
              <button className="px-4 h-[46px]  bg-brand text-white rounded-full font-medium text-base  hover:opacity-90 active:opacity-95 transition-opacity shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-4 h-[46px] bg-white text-hero-text-primary rounded-full font-medium text-base  border border-[#D1D5DB] hover:bg-gray-50 active:bg-gray-100 transition-colors shadow-sm hover:shadow-md flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="w-px h-4 my-3 bg-gray-500 rounded-full" />
                <span>Download the Mac app</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

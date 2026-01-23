import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-20 bg-[#06131f] text-white/70">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/ctfy-02.png"
          className="w-30 h-30 brightness-0 invert"
          alt="Courtify"
        />
        <h1 className="text-xl font-semibold text-white">Courtify</h1>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-center text-sm">
        Copyright © 2026{" "}
        <a href="#" className="text-white hover:text-green-500 transition">
          Courtify
        </a>
        . All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-5 mt-6">
        
        {/* Facebook */}
        <a
          href="#"
          className="text-white/50 hover:text-green-500 transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="#"
          className="text-white/50 hover:text-green-500 transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M17.5 6.5h.01"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          className="text-white/50 hover:text-green-500 transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M6 9H2v12h4V9Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>

        {/* Twitter */}
        <a
          href="#"
          className="text-white/50 hover:text-green-500 transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 
              2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5
              c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8
              1.1 0 3-1.2 3-1.2Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>

      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Portfolio from "@/components/sections/portfolio";
import Blog from "@/components/sections/blog";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 matrix-glow animate-pulse">
            DAVE<span className="text-matrix-light">.init()</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 matrix-glow opacity-80">
            {"<"}Software Developer Full Stack{"/>"}
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/ntcdave"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-matrix-light transition-all duration-300 matrix-glow"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ntcdave/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-matrix-light transition-all duration-300 matrix-glow"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-matrix-light transition-all duration-300 matrix-glow"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="matrix-border p-6 inline-block">
            <code className="text-sm md:text-base">
              <span className="text-matrix-light">const</span> developer = {"{"}
              <br />
              &nbsp;&nbsp;name: <span className="text-matrix-light">"Davi Brito"</span>,
              <br />
              &nbsp;&nbsp;type: <span className="text-matrix-light">"Full Stack Developer"</span>,
              <br />
              &nbsp;&nbsp;skills: [<span className="text-matrix-light">"React", "Node.js", "TypeScript", "Next.js", "Python"</span>],
              <br />
              &nbsp;&nbsp;location: <span className="text-matrix-light">"Acre, Brazil"</span>,
              <br />
              &nbsp;&nbsp;status: <span className="text-matrix-light">"Available for opportunities"</span>
              <br />
              {"}"};
            </code>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

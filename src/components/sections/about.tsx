"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobile, FaDatabase } from "react-icons/fa";

const skills = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, HTML5, CSS3, JavaScript",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Node.js, Express.js, Python, Django, REST APIs",
  },
  {
    icon: FaMobile,
    title: "Mobile Development",
    description: "React Native, Android Studio, Kotlin",
  },
  {
    icon: FaDatabase,
    title: "Database & Tools",
    description: "PostgreSQL, MySQL, MongoDB, Git, Docker",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-matrix-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 matrix-glow"
          >
            ./about.exe
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-matrix-light opacity-80 max-w-3xl mx-auto"
          >
            {">"} Desenvolvedor Full Stack apaixonado por tecnologia e inovação. Especializado em desenvolvimento web moderno,
            com foco em criar soluções eficientes e escaláveis. Experiência em desenvolvimento front-end e back-end,
            com habilidade em trabalhar com diversas tecnologias e frameworks.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="matrix-box p-6 rounded-lg text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 text-4xl text-matrix-light flex justify-center">
                <skill.icon className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2 matrix-glow">
                {skill.title}
              </h3>
              <p className="text-matrix-light opacity-80">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/cv.pdf"
            download
            className="inline-block px-8 py-3 matrix-border rounded-lg hover:matrix-glow transition-all duration-300"
          >
            {">"} Download CV.exe
          </a>
        </motion.div>
      </div>
    </section>
  );
}

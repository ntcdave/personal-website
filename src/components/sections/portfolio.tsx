"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Uma plataforma de comércio eletrônico completa com carrinho de compras, pagamentos e painel administrativo.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real e integração com calendário.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Dashboard para análise de métricas de redes sociais com visualizações de dados em tempo real.",
    image: "/projects/dashboard.jpg",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-matrix-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 matrix-glow">
            ./projects.exe
          </h2>
          <p className="text-lg text-matrix-light opacity-80 max-w-3xl mx-auto">
            {">"} Explore meus projetos mais recentes. Cada projeto é uma oportunidade de
            inovação e aprendizado contínuo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="matrix-box rounded-lg overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-matrix-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 matrix-glow">
                  {project.title}
                </h3>
                <p className="text-matrix-light opacity-80 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 matrix-border rounded-full text-matrix-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-matrix-light hover:matrix-glow transition-all duration-300"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-matrix-light hover:matrix-glow transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

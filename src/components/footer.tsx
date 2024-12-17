"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ntcdave",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ntcdave/",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: FaTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500"
            >
              Seu Nome
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300"
            >
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
            </motion.p>
          </div>

          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              Links Rápidos
            </motion.h4>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col space-y-2"
            >
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                Projetos
              </a>
              <a
                href="#blog"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                Contato
              </a>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              Redes Sociais
            </motion.h4>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-xl"
                >
                  <link.icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-1">
            Feito com <FaHeart className="text-red-500" /> por{" "}
            <a
              href="#"
              className="text-primary-500 dark:text-primary-400 hover:underline"
            >
              Seu Nome
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

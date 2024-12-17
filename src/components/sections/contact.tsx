"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    content: "davibrito1282@gmail.com",
    link: "mailto:davibrito1282@gmail.com",
  },
  {
    icon: FaPhone,
    title: "Telefone",
    content: "+55 (68) 98105-2465",
    link: "tel:+5568981052465",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Localização",
    content: "Rio Branco, AC - Brasil",
    link: "https://maps.google.com",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-matrix-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 matrix-glow">
            ./contact.exe
          </h2>
          <p className="text-lg text-matrix-light opacity-80 max-w-3xl mx-auto">
            {">"} Vamos trabalhar juntos? Entre em contato e transforme suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="matrix-box p-6 rounded-lg text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 text-4xl text-matrix-light flex justify-center">
                <info.icon className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2 matrix-glow">{info.title}</h3>
              <p className="text-matrix-light opacity-80">{info.content}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="> Digite seu nome"
                className="w-full px-4 py-3 bg-transparent matrix-border rounded-lg focus:matrix-glow transition-all duration-300 text-matrix-light placeholder-matrix-light/50"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="> Digite seu email"
                className="w-full px-4 py-3 bg-transparent matrix-border rounded-lg focus:matrix-glow transition-all duration-300 text-matrix-light placeholder-matrix-light/50"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="> Digite sua mensagem"
                rows={5}
                className="w-full px-4 py-3 bg-transparent matrix-border rounded-lg focus:matrix-glow transition-all duration-300 text-matrix-light placeholder-matrix-light/50 resize-none"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 matrix-border rounded-lg hover:matrix-glow transition-all duration-300"
              >
                {">"} Enviar mensagem.exe
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

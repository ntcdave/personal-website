"use client";

import { motion } from "framer-motion";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
};

const posts: BlogPost[] = [
  {
    title: "Building a Modern Web Application with Next.js",
    excerpt: "Learn how to create a performant web application using Next.js and React...",
    date: "2023-12-15",
    readTime: "5 min read",
    image: "/blog/post1.jpg",
    slug: "building-modern-web-app",
  },
  {
    title: "The Power of TypeScript in Large Projects",
    excerpt: "Discover how TypeScript can improve your development workflow...",
    date: "2023-12-10",
    readTime: "4 min read",
    image: "/blog/post2.jpg",
    slug: "typescript-in-large-projects",
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-matrix-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 matrix-glow">
            ./blog.exe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-matrix-black border border-matrix-light/20 rounded-xl overflow-hidden shadow-lg hover:border-matrix-light/50 transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-matrix-light/70 mb-3">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-matrix-light matrix-glow">{post.title}</h3>
                    <p className="text-matrix-light/80">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

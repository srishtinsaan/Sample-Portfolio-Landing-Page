import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      title: "BRANDKARO Platform",
      desc: "A SaaS platform helping professionals craft a premium digital persona. Features AI brand audits, content strategy, and automated LinkedIn optimization.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      title: "Personal Branding Engine",
      desc: "An internal system that automates content suggestions, tone alignment, and engagement analytics for users aiming for elite online presence.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BRAND Analytics Dashboard",
      desc: "Real-time analytics dashboard for tracking personal brand metrics — engagement, visibility, and audience growth insights powered by AI.",
      
      link: "#",
    },
  ];

  return (
    <div>
      <section
        id="projects"
        className="py-24 px-6 md:px-20 bg-gray-950 text-center text-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-indigo-400 mb-12"
        >
          Featured Work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg group bg-gray-900/60 border border-gray-800"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center p-6 text-left">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{proj.desc}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  
                </div>
                <a
                  href={proj.link}
                  className="text-sm mt-2 text-indigo-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;

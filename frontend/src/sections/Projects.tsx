import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  name: string;
  type: string;
  bullets: string[];
  github: string;
};

const projects: Project[] = [
  {
    name: "Tracks",
    type: "Full-Stack Finance Expense Tracker",
    bullets: [
      "Designed and built a full-stack expense tracking system focused on clarity and usability.",
      "Features include expense tracking, category-wise and date-range analytics, monthly/yearly trends, spending limits, financial goals, and streak tracking.",
      "Frontend built with React (Vite) as a single-page dashboard with light/dark/auto themes.",
      "Backend implemented using Java Spring Boot with RESTful APIs and PostgreSQL persistence.",
      "Used JWT authentication, DTO-based validation, centralized exception handling, and clean layered architecture.",
      "Designed complete data models (User, Expense, Category, Goal, Streak) with backend-computed analytics and frontend visualization using Recharts."
    ],
    github: "https://github.com/waseemhimself/Tracks"
  },
  {
    name: "PEISR",
    type: "Prompt Enhancement via Intent-Sensitive Routing – LLM Project",
    bullets: [
      "Built a Python-based intermediate system that improves LLM response quality by preprocessing user prompts before generation.",
      "Implemented intent classification (SOCIAL, QA, TASK, TECH, CREATIVE) using custom heuristics with LLM fallback.",
      "Designed intent-aware rewrite gating to selectively rewrite prompts while preserving user intent.",
      "Added a rubric-based prompt quality scoring system and controlled self-refinement loop to prevent over-editing.",
      "Routed prompts through intent-specific generation policies with temperature controls.",
      "Developed a runnable multi-turn chat pipeline for testing and analysis.",
      "Github link will be added soon."
    ],
    github: ""
  }
];

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 border-b border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-200 transition"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {project.name}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.type}
              </p>

              <button
                onClick={() => setSelected(project)}
                className="text-blue-300 hover:text-blue-200 transition"
              >
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-2xl mx-4"
            >
              <h3 className="text-2xl font-bold mb-4">
                {selected.name}
              </h3>

              <h4 className="text-gray-400 mb-6">
                {selected.type}
              </h4>

              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                {selected.bullets.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="mt-8 flex gap-4">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-gray-700 hover:border-blue-500 rounded-lg transition"
                >
                  GitHub
                </a>

                <button
                  onClick={() => setSelected(null)}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
                >
                  Close
                </button>
              </div>

          
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
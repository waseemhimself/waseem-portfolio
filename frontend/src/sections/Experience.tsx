import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="py-24 border-b border-gray-800 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold">
            Backend Web Development Intern
          </h3>

          <p className="text-gray-400 mt-1">
            VAlignIt Technologies · 2 Months
          </p>

          <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
            <li>Built Spring Boot backends using layered architecture.</li>
            <li>Implemented JWT authentication with Spring Security.</li>
            <li>Developed RESTful CRUD APIs with DTO validation.</li>
            <li>Applied centralized exception handling and proper HTTP status codes.</li>
            <li>Worked on backend file management system.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
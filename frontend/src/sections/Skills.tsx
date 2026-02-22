import { motion } from "framer-motion";

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "SQL",
  "Spring Boot",
  "Spring Security",
  "REST APIs",
  "JPA/Hibernate",
  "PostgreSQL",
  "React",
  "Git",
  "Postman",
];

function Skills() {
  return (
    <section className="py-24 border-b border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-5 py-3 bg-gray-900 border border-gray-700 rounded-xl hover:border-blue-500 hover:scale-105 transition cursor-default"
            >
              {skill}
            </motion.div>
            
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://leetcode.com/u/WaseemKhan22126/"
            target="_blank"
            className="px-6 py-3 border border-white hover:border-blue-500 rounded-lg transition"
          >
            LeetCode 
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
import { motion } from "framer-motion";

const rows = [
  ["FULL-STACK", "SPRING BOOT", "POSTGRESQL", "JWT", "SYSTEM DESIGN"],
  ["AI ENGINEER", "RAG", "LLM ROUTING", "PYTHON", "VECTOR SEARCH"],
  ["REACT", "REST APIs", "ARCHITECTURE", "BACKEND", "SCALABLE SYSTEMS"],
  ["CLEAN CODE", "API DESIGN", "AUTHENTICATION", "DATA MODELS", "DOCKER"],
  ["ALGORITHMS", "PERFORMANCE", "OPTIMIZATION", "SECURITY", "DATABASES"],
  ["JAVA", "TYPESCRIPT", "MICROSERVICES", "STATE MANAGEMENT", "OAUTH"],
  ["CLOUD", "DEPLOYMENT", "TESTING", "DEBUGGING", "VERSION CONTROL"],
  ["ENGINEERING", "STRUCTURE", "DESIGN PATTERNS", "EFFICIENCY", "LOGIC"],
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const content = [...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-flex gap-16 text-3xl md:text-5xl font-semibold italic tracking-wide text-white opacity-6"
      >
        {content.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </motion.div>
    </div>
  );
}

function MarqueeBackground() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
      {rows.map((row, index) => (
        <MarqueeRow
          key={index}
          items={row}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}

export default MarqueeBackground;
import { motion } from "framer-motion";
import MarqueeBackground from "../components/MarqueeBackground";

function Hero() {

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black border-b border-gray-900">

      <MarqueeBackground />

      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />


      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          Waseem Khan
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Full-stack Developer • AI Engineer
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 bg-white text-black rounded-lg hover:opacity-80 transition"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition"
          >
            Contact
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
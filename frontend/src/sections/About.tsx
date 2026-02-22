function About() {
  return (
    <section className="py-24 border-b border-gray-800 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed text-lg">
          Hi, I am a Computer Science undergraduate at Woxsen University with a strong focus on backend engineering and system design. 
          I designing scalable APIs, and work with modern technologies such as Spring Boot and React.
        </p>

        <p className="text-gray-400 leading-relaxed text-lg mt-6">
          Recently, I have been exploring AI system design, Retrieval-Augmented Generation (RAG), and LLM routing architectures.
        </p>
      </div>
    </section>
  );
}

export default About;
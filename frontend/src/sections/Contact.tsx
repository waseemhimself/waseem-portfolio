function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-black border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Feel free to reach out for collaborations, internships, or any other opportunities.
        </p>

        <div className="space-y-4 text-gray-300 text-lg">
          <p>
             waseemwhack@gmail.com
          </p>
          <p>
             Hyderabad, India
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/waseemhimself"
            target="_blank"
            className="px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/waseemkhan99"
            target="_blank"
            className="px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
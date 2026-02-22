import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Experience />
      <ChatWidget />
    </div>
  );
}

export default App;
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function App() {
  return (
    <main>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
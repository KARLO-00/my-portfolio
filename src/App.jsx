import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Experience from "./pages/Experience";

function App() {
  // const [darkMode, setDarkMode] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
  });


  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/" element={
        <Home
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      } />

      <Route path="/projects" element={
        <Projects
          darkMode={darkMode}
        />
      } />

      <Route path="/techstack" element={
        <TechStack
          darkMode={darkMode}
        />
      } />

      <Route path="/experience" element={
        <Experience
          darkMode={darkMode}
        />
      } />

    </Routes>
  );
}

export default App;
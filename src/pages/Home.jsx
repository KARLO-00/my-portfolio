import { useState } from "react";

import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import ProjectsPreview from "../sections/ProjectsPreview";
import Contact from "../sections/Contact";

function Home({
    darkMode, setDarkMode
}) {
    return (
        <main className={darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}>
            <Hero darkMode={darkMode} />
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <About darkMode={darkMode} />
            <ProjectsPreview darkMode={darkMode} />
            <Contact darkMode={darkMode} />
        </main>
    );
}

export default Home;
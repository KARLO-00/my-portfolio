import { useState } from "react";

import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Expertise from "../sections/Expertise";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

import useThemeToggle from "../hooks/useThemeToggle";
import ThemeRipple from "../components/ThemeRipple";

function Home({
    darkMode, setDarkMode
}) {
    const { ripple, toggle } = useThemeToggle(darkMode, setDarkMode);

    return (
        <>
            <ThemeRipple ripple={ripple} darkMode={darkMode} />

            <main className={darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}>
                <Hero darkMode={darkMode} />
                <Navbar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    toggle={toggle}
                />
                <About darkMode={darkMode} />
                <Expertise darkMode={darkMode} />
                <Projects darkMode={darkMode} />
                <Contact darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </main>

        </>
    );
}

export default Home;
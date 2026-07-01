import { useState } from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";

export default function Navbar({
    darkMode,
    setDarkMode,
}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "expertise", label: "Expertise" },
        { id: 'projects', label: 'Projects' },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur border-b
                ${darkMode ? "border-gray-800" : "border-gray-200"}
            `}
        >
            <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">

                {/* Logo */}
                <a href="#home" className={`font-bold text-lg 
                    ${darkMode ? "text-white" : "text-black"}
                    `}>
                    carlo.<span className="text-blue-400">dev</span><span className="animate-blink text-blue-400">_</span>
                </a>

                {/* Desktop Nav */}
                <nav className={`hidden md:flex gap-8 text-sm
                    ${darkMode ? "text-gray-300" : "text-gray-800"}
                `}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="hover:text-blue-400 transition mt-2"
                        >
                            {link.label}
                        </a>
                    ))}

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded-lg  transition
                            ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"}
                        `}
                    >
                        {darkMode ? (
                            <LuSun size={20} />
                        ) : (
                            <LuMoonStar size={20} />
                        )}
                    </button>

                </nav>

                {/* Mobile Button */}
                <div className="flex items-center gap-3 md:hidden">

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg transition"
                    >
                        {darkMode ? (
                            <LuSun size={20} />
                        ) : (
                            <LuMoonStar size={20} />
                        )}
                    </button>

                    <button
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={`md:hidden px-6 pb-4 flex flex-col gap-4 border-t 
                   ${darkMode
                        ? "text-gray-300 bg-gray-950 border-gray-800"
                        : "text-gray-700 bg-white border-gray-200"
                    }
                `}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-400 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
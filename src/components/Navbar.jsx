import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <a href="#home" className="text-white font-bold text-lg">
                    carlo.<span className="text-green-400">dev</span><span className="animate-blink">_</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm text-gray-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="hover:text-green-400 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-gray-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-300 bg-gray-950 border-t border-gray-800">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-green-400 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
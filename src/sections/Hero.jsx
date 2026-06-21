import { useState } from "react";
import { useEffect } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaViber,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero({ darkMode }) {
    const titles = [
        "Fullstack Developer",
        "React Developer",
        "PHP Developer"
    ];

    const [text, setText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);

    const links = [
        {
            'href': 'https://github.com/repos',
            'icon': <FaGithub />
        },
        {
            'href': '#',
            'icon': <FaLinkedin />
        },
        {
            'href': '#',
            'icon': <SiGmail />
        },
        {
            'href': '#',
            'icon': <FaViber />
        }
    ]

    useEffect(() => {
        const currentTitle = titles[titleIndex];

        // Still typing
        if (text.length < currentTitle.length) {
            const timeout = setTimeout(() => {
                setText(currentTitle.slice(0, text.length + 1));
            }, 100);

            return () => clearTimeout(timeout);
        }

        // Finished typing
        const timeout = setTimeout(() => {
            setText("");
            setTitleIndex(
                (prev) => (prev + 1) % titles.length
            );
        }, 1500);

        return () => clearTimeout(timeout);

    }, [text, titleIndex]);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6">
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]  blur-[120px] rounded-full
                ${darkMode ? "bg-blue-500/20" : "bg-blue-300/40"}
            `} />

            <div className="max-w-4xl text-center">

                {/* Intro badge */}
                <p className="text-sm text-blue-400 mb-4">
                    👋 Hello, I'm
                </p>

                {/* Name */}
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    John Carlo Balcita
                </h1>

                {/* Role */}
                <h2 className={`text-xl md:text-2xl mt-3 h-8
                    ${darkMode ? "text-gray-400" : "text-gray-900"}    
                `}>
                    {text}
                    <span className="animate-pulse text-blue-400">_</span>
                </h2>

                {/* Description */}
                <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
                    I build clean, responsive web applications using modern React and Tailwind CSS.
                    Coming from a PHP and jQuery background, I focus on turning ideas into simple, fast, and usable interfaces.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex gap-4 justify-center flex-wrap">
                    <a
                        href="#"
                        className="px-6 py-3 bg-blue-500 text-black font-medium rounded-lg hover:bg-blue-400 transition"
                    >
                        Download Resume
                    </a>

                    <a
                        href="#expertise"
                        className="px-6 py-3 border border-gray-600 rounded-lg hover:border-blue-400 hover:text-blue-400 transition"
                    >
                        View Projects
                    </a>
                </div>

                <div className="flex justify-center gap-6 mt-8 text-2xl">
                    {links.map((link, index) => (
                        <a href={link.href} target="_blank" key={index}>
                            {link.icon}
                        </a>
                    ))}
                </div>

            </div>
        </section >
    );
}
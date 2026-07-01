// components/Lightbox.jsx  (same as before — no changes needed)

// components/Projects.jsx
import { useState } from "react";
import Lightbox from "../components/Lightbox";


import carlodev1 from "../assets/images/carlo.dev_1.png";
import carlodev2 from "../assets/images/carlo.dev_2.png";

const projects = [
    {
        id: 0,
        title: "Inventorify",
        description: "Inventory management system for tracking stock and production.",
        tech: ["PHP", "MySQL", "Bootstrap"],
        github: "https://github.com/KARLO-00/inventorify",
        images: [carlodev1], // swap with inventorify screenshots
    },
    {
        id: 1,
        title: "travelFIND",
        description: "Travel companion matching platform for finding co-travelers.",
        tech: ["React", "PHP", "MySQL"],
        github: "https://github.com/KARLO-00/travelfind",
        images: [carlodev1, carlodev2],
    },
    {
        id: 2,
        title: "Task Manager",
        description: "Task tracking application with status management and filtering.",
        tech: ["Laravel", "Tailwind CSS"],
        github: "https://github.com/KARLO-00/task-manager",
        images: [carlodev1],
    },
];

const POSITIONS = ["pos-left", "pos-front", "pos-right"];

export default function Projects({ darkMode }) {
    const [order, setOrder] = useState([0, 1, 2]); // order[cardIndex] = positionIndex
    const [lightbox, setLightbox] = useState(null);

    const rotate = (dir) => {
        setOrder((prev) => prev.map((p) => (p - dir + 3) % 3));
    };

    const handleCardClick = (cardIdx) => {
        const pos = POSITIONS[order[cardIdx]];
        if (pos === "pos-front") return; // handled by image click
        if (pos === "pos-left") rotate(-1);
        if (pos === "pos-right") rotate(1);
    };

    const cardStyles = {
        "pos-left": "rotate-[-9deg] -translate-x-36 translate-y-3 scale-[0.88] opacity-50 blur-[0.5px] z-10 cursor-pointer hover:opacity-75",
        "pos-front": "rotate-0 translate-x-0 translate-y-0 scale-100 opacity-100 z-30 cursor-default shadow-2xl",
        "pos-right": "rotate-[9deg] translate-x-36 translate-y-3 scale-[0.88] opacity-50 blur-[0.5px] z-10 cursor-pointer hover:opacity-75",
    };

    return (
        <section id="projects" className={`py-25
            ${darkMode ? "bg-gray-900" : "bg-gray-50"}
        `}>

            <div className="max-w-5xl lg:max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-xl font-medium">
                        Projects
                    </h2>
                    <a href="#" className="text-xs tracking-widest text-blue-400 hover:text-blue-300">
                        ALL PROJECTS →
                    </a>
                </div>

                {/* stacked cards */}
                <div className="relative h-[300px] flex items-center justify-center mb-8">
                    {projects.map((project, i) => {
                        const pos = POSITIONS[order[i]];
                        const isFront = pos === "pos-front";

                        return (
                            <div
                                key={project.id}
                                onClick={() => handleCardClick(i)}
                                className={`absolute w-64 border rounded-xl p-4 transition-all duration-500 ease-in-out
                                ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}
                                ${cardStyles[pos]}`}
                            >

                                {/* image */}
                                <div
                                    onClick={(e) => {
                                        if (!isFront) return;
                                        e.stopPropagation();
                                        setLightbox({ images: project.images, title: project.title });
                                    }}
                                    className={`relative w-full h-28 rounded-lg overflow-hidden border mb-3 flex items-center justify-center
                                    ${darkMode ? "bg-gray-950 border-gray-800" : "bg-gray-100 border-gray-200"}
                                    ${isFront ? "cursor-pointer" : "cursor-default"}`}
                                >
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* hover hint on front card only */}
                                    {isFront && (
                                        <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <span className="text-[11px] text-blue-400 border border-blue-500 px-3 py-1 rounded-md bg-black/50">
                                                View photos
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <p className={`text-sm font-medium mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                                    {project.title}
                                </p>
                                <p className={`text-xs mb-3 leading-relaxed ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.tech.map((t) => (
                                        <span key={t} className={`text-[10px] px-2 py-1 rounded-full border
                                        ${darkMode ? "bg-gray-800 border-gray-700 text-gray-400" : "bg-gray-100 border-gray-200 text-gray-500"}`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-xs text-blue-400 hover:text-blue-300"
                                >
                                    GitHub →
                                </a>
                            </div>
                        );
                    })}
                </div>

            </div>

            {lightbox && (
                <Lightbox
                    images={lightbox.images}
                    title={lightbox.title}
                    onClose={() => setLightbox(null)}
                    darkMode={darkMode}
                />
            )}

        </section>
    );
}
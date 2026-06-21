import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects({ darkMode }) {
    

    return (
        <section className={`min-h-screen px-6 py-20
            ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
        `}>
            <div className="max-w-6xl mx-auto">

                <Link to="/">Back to home</Link>

                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold mb-10">
                    Projects
                </h1>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`ounded-xl p-6 hover:border-blue-400 transition border
                                ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white  border-gray-200"}
                                `}
                        >
                            <h2 className="text-xl font-medium mb-2">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 text-sm mb-4">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className={`px-2 py-1 text-xs rounded-md
                                            ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}
                                        `}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 text-sm">
                                <a
                                    href={project.github}
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.live}
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
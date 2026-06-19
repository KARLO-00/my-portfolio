import { Link } from "react-router-dom";

export default function ProjectsPreview({ darkMode }) {
    const projects = [
        {
            title: "Production Monitoring System",
            description:
                "Internal system for tracking machine status, production output, and workflow monitoring.",
            tech: ["PHP", "MySQL", "jQuery", "Bootstrap"],
            github: "#",
            live: "#",
        },
        {
            title: "Machine Setup Management",
            description:
                "Tool management system for setup tracking and efficiency optimization.",
            tech: ["PHP", "JavaScript", "MySQL"],
            github: "#",
            live: "#",
        },
        {
            title: "React Portfolio Website",
            description:
                "Personal portfolio built with React, Tailwind CSS, and modern UI design.",
            tech: ["React", "Tailwind", "Vite"],
            github: "#",
            live: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="py-24 flex items-center justify-center px-6"
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}


                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-10">
                        Projects
                    </h1>

                    <Link
                        to="/projects"
                        className="text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                        View All
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl p-6 hover:border-blue-400 transition
                                ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}
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
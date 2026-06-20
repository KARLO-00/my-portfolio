import { Link } from "react-router-dom";

export default function ProjectsPreview({ darkMode }) {
    const skills = [
        {
            "category": 'Frontend',
            'techlist': [
                "JavaScript",
                "jQuery",
                "React",
                "Tailwind CSS",
                "Bootstrap"]
        },
        {
            'category': 'Backend',
            'techlist': [
                "PHP",
                "Laravel",
                "PostgreSQL",
                "MySQL",
                "Node.js"
            ]
        },
        {
            'category': 'Developer Tools',
            'techlist': [
                "Git",
                "Github",
                "VS Code",
                "Teams",
                "Trello",
                "draw.io"
            ]
        }
    ]

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
            className="min-h-screen px-6 lg:px-80 py-20 flex flex-col lg:flex-row gap-5"
        >
            <div className="lg:w-3/4">
                {/* Tech Stack */}
                <div className="w-full lg:w-full">
                    <div className={`border  rounded-xl p-6
                            ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}
                        `}>

                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-medium">
                                Tech Stack
                            </h2>

                            <Link
                                to="/experience"
                                className="text-sm text-blue-400 hover:text-blue-300 transition"
                            >
                                View All
                            </Link>
                        </div>

                        <div className="space-y-4">

                            {skills.map((item) => (
                                <div key={item.category}>
                                    <h3 className={`"text-sm mb-2" ${darkMode ? "text-gray-400" : "text-gray-900"}`}>
                                        {item.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {item.techlist.map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-3 py-1 text-sm rounded-lg 
                                                    ${darkMode ? "bg-gray-800" : "bg-gray-200"}
                                                `}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <br />

                {/* Projects */}
                <div className="w-full lg:w-full">
                    <div className={`border  rounded-xl p-6
                            ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}
                        `}>

                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-medium">
                                Tech Stack
                            </h2>

                            <Link
                                to="/experience"
                                className="text-sm text-blue-400 hover:text-blue-300 transition"
                            >
                                View All
                            </Link>
                        </div>

                        <div className="space-y-4">

                            {skills.map((item) => (
                                <div key={item.category}>
                                    <h3 className={`"text-sm mb-2" ${darkMode ? "text-gray-400" : "text-gray-900"}`}>
                                        {item.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {item.techlist.map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-3 py-1 text-sm rounded-lg 
                                                    ${darkMode ? "bg-gray-800" : "bg-gray-200"}
                                                `}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/4 lg:w-96 space-y-6">

                {/* Experience */}
                <div className={`rounded-xl p-6
                    ${darkMode ? "bg-gray-950 border border-gray-800" : "bg-white border border-gray-200"}
                    `}>

                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-medium">
                            Experience
                        </h2>

                    </div>
                    <div className="space-y-4">

                        {/* Experience */}
                        <div className="border-l border-gray-700 pl-4">
                            <h3 className="text-white font-medium">
                                Hello, World! 👋
                            </h3>

                            <p className="text-sm text-gray-400">
                                Wrote my first line of code
                            </p>

                            <p className="text-xs text-gray-500 mt-1">
                                2021 - 2023
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section >
    );
}
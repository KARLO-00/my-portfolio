import { Link } from "react-router-dom";

export default function Expertise({ darkMode }) {
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
        }
    ]

    const projects = [
        {
            title: "carlo.dev",
            description: "Personal developer portfolio",
            github: "#",
            live: "#",
        },
        {
            title: "travelFIND",
            description: "Travel companion matching platform",
            github: "#",
            live: "#",
        },
        {
            title: "Task Manager",
            description: "Task tracking application",
            github: "#",
            live: "#",
        },
        {
            title: "Inventorify",
            description: "Inventory management system",
            github: "#",
            live: "#",
        },
    ];

    return (
        <section
            id="expertise"
            className="min-h-screen px-6 lg:px-75 py-20 flex flex-col lg:flex-row gap-5"
        >
            <div className="lg:w-3/4">

                {/* Projects */}
                <div className="w-full lg:w-full">
                    <div className={`border rounded-xl p-6
                            ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}
                        `}>

                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-medium">
                                Recent Projects
                            </h2>

                            <Link
                                to="/projects"
                                className="text-sm text-blue-400 hover:text-blue-300 transition"
                            >
                                View All
                            </Link>
                        </div>

                        <div className=" grid grid-cols-2 gap-4">

                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-3 hover:border-blue-400 transition border
                                        ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white  border-gray-200"}
                                    `}
                                >
                                    <h2 className="text-md font-medium mb-2">
                                        {project.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm mb-4">
                                        {project.description}
                                    </p>

                                    {/* Links */}
                                    <div className="flex gap-4 text-xs">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            GitHub
                                        </a>

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <br />

                {/* Tech Stack */}
                <div className="w-full lg:w-full">
                    <div className={`border rounded-xl p-6
                            ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}
                        `}>

                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-medium">
                                Tech Stack
                            </h2>

                            <Link
                                to="/techstack"
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
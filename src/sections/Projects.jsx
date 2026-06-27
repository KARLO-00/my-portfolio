import carlodev1 from "../assets/images/carlo.dev_1.png";
import carlodev2 from "../assets/images/carlo.dev_2.png";


export default function ({ darkMode }) {
    const projects = [
        {
            title: "carlo.dev",
            description: "Personal developer portfolio built with React and Tailwind CSS.",
            tech: [
                "Reach",
                "Tailwindcss",
            ],
            github: "https://github.com/KARLO-00/my-portfolio",
            live: "#",
            display: darkMode ? carlodev1 : carlodev2,
        },
        {
            title: "Task Manager",
            description: "Task tracking application with status management and filtering.",
            tech: [
                "Laravel",
                "Tailwindcsss",
            ],
            github: "https://github.com/KARLO-00/task-manager",
            live: "#",
            display: darkMode ? carlodev1 : carlodev2,
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen px-6 lg:px-100 py-20 flex flex-col lg:flex-row gap-5"
        >
            {projects.map((project, index) => (
                <div 
                    key={index}
                    className={`border rounded-xl w-1/2 overflow-hidden h-85
                    ${darkMode ? "border-gray-800" : "border-gray-200"}    
                `}>
                    <img
                        src={project.display}
                        alt="carlo.dev screenshot"
                        className="w-full h-48 object-cover"
                    />

                    <div className={`p-4 border-t
                        ${darkMode ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"}
                    `}>
                        <h2 className="text-sm font-semibold mb-1">{project.title}</h2>

                        <p className={`text-xs mb-3
                            ${darkMode ? "text-gray-400" : "text-gray-600"}
                        `}>
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`px-2 py-1 text-xs rounded-lg 
                                ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}
                            `}>
                                {project.tech}
                            </span>
                        </div>

                        <a href={project.github} className="text-xs text-blue-400 hover:text-blue-300">
                            GitHub →
                        </a>
                    </div>
                </div>
            ))}

        </section >
    );
}
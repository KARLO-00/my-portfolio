import { Link } from "react-router-dom";


export default function About({ darkMode }) {
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


    return (
        <section
            id="about"
            className={`min-h-screen px-6 lg:px-100 py-20 flex flex-col lg:flex-row gap-10
                ${darkMode ? "bg-gray-900" : "bg-gray-50"}
                `}
        >
            {/* Container */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-col gap-10">

                {/* LEFT: About Text */}
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-medium mb-6">
                        About
                    </h2>

                    <p className={`"leading-7" ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                        I'm a Fullstack Developer with
                        experience building manufacturing systems.

                        <br /><br />

                        My development journey started with PHP, MySQL, JavaScript,
                        jQuery, and Bootstrap, where I worked on tools that improve
                        workflows, monitor production processes, and solve real-world
                        operational challenges.

                        <br /><br />

                        Currently, I'm expanding my frontend expertise with React and
                        Tailwind CSS while continuing to build practical applications
                        that focus on performance, usability, and maintainability.
                    </p>
                </div>

                {/* RIGHT: Tech Stack */}
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
            <div className="w-full lg:w-96 space-y-6 h-full">

                {/* Experience */}
                <div className={`rounded-xl p-6
                    ${darkMode ? "bg-gray-950 border border-gray-800" : "bg-white border border-gray-200"}
                    `}>

                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-medium">
                            Experience
                        </h2>

                        <Link
                            to="/experience"
                            className="text-sm text-blue-400 hover:text-blue-300 transition"
                        >
                            View All
                        </Link>
                    </div>
                    <div className="space-y-4">

                        {/* Job 1 */}
                        <div className="border-l border-blue-500 pl-4">
                            <h3 className=" font-medium">
                                Fullstack Developer
                            </h3>

                            <p className={`text-sm
                                ${darkMode ? "text-gray-400" : "text-gray-400"}
                                `}>
                                Manufacturing Systems Developer
                            </p>

                            <p className="text-xs text-gray-500 mt-1">
                                2023 - Present
                            </p>

                            <p className="text-sm text-gray-300 mt-2">
                                Built internal systems for production monitoring,
                                machine setup tracking, and workflow automation.
                            </p>
                        </div>

                        {/* Job 2 (optional) */}
                        <div className="border-l border-gray-700 pl-4">
                            <h3 className="text-white font-medium">
                                Junior Developer
                            </h3>

                            <p className="text-sm text-gray-400">
                                PHP / jQuery Systems
                            </p>

                            <p className="text-xs text-gray-500 mt-1">
                                2021 - 2023
                            </p>

                            <p className="text-sm text-gray-300 mt-2">
                                Developed internal tools using PHP, MySQL, jQuery,
                                and Bootstrap for business operations.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
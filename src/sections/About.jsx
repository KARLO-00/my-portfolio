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
            className={`min-h-auto px-6 lg:px-100 py-20
                ${darkMode ? "bg-gray-900" : "bg-gray-50"}
                `}
        >
            {/* Container */}


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

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <div className="rounded-xl border border-gray-800 p-4">
                    <h3 className="text-2xl font-bold text-blue-400">1+</h3>
                    <p className="text-sm text-gray-400">Years Experience</p>
                </div>

                <div className="rounded-xl border border-gray-800 p-4">
                    <h3 className="text-2xl font-bold text-blue-400">10+</h3>
                    <p className="text-sm text-gray-400">Systems Built</p>
                </div>

                <div className="rounded-xl border border-gray-800 p-4">
                    <h3 className="text-2xl font-bold text-blue-400">100+</h3>
                    <p className="text-sm text-gray-400">Commits Made</p>
                </div>

                <div className="rounded-xl border border-gray-800 p-4">
                    <h3 className="text-2xl font-bold text-blue-400">∞</h3>
                    <p className="text-sm text-gray-400">Learning</p>
                </div>
            </div>

        </section>
    );
}
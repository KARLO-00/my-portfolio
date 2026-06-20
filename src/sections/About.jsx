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
            className={`min-h-auto px-6 lg:px-100 py-20 flex flex-col lg:flex-row gap-10
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

                

            </div>
            
        </section>
    );
}
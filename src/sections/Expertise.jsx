import { Link } from "react-router-dom";
import {
    FaGithub
} from "react-icons/fa";


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
    ];

    const experience = [
        {
            'title': 'Application Developer',
            'where': 'Team Pacific Corporation',
            'when': 'Present'
        },
        {
            'title': 'BS in Computer Science',
            'where': 'Taguig City University',
            'when': '2025'
        },
        {
            'title': 'Hello World! 👋',
            'where': 'wrote my first line of code',
            'when': '2021'
        },
    ]

    const certifications = [
        { name: "Huawei Developer Expert", issuer: "Huawei" },
        { name: "Generative AI Leader", issuer: "Google" },
        { name: "Software Engineering", issuer: "TestDome" },
    ];

    return (
        <section
            id="expertise"
            className="min-h-screen px-6 lg:px-100 py-20 flex flex-col lg:flex-row gap-5"
        >
            <div className="lg:w-3/4">

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

                <br />

                {/* Certificates */}
                <div className="w-full lg:w-full">
                    <div className={`border rounded-xl p-6
                            ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}
                        `}>

                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-medium">
                                Certificates
                            </h2>

                            <Link
                                to="/"
                                className="text-sm text-blue-400 hover:text-blue-300 transition"
                            >
                                View All
                            </Link>
                        </div>

                        <div className="divide-y divide-white/10 border border-white/10 rounded-xl overflow-hidden">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between px-5 py-4 transition-colors cursor-pointer
                                        ${darkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-50 hover:bg-gray-100"}    
                                    `}
                                >
                                    <div>
                                        <p className="text-sm font-semibold">{cert.name}</p>
                                        <p className={`text-xs mt-0.5
                                            ${darkMode ? "text-slate-400" : "text-slate-600"}
                                        `}>{cert.issuer}</p>
                                    </div>
                                    <span className="text-slate-500 text-lg">›</span>
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
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                className={`"border-l pl-4
                                    ${darkMode ? "border-gray-700" : "border-gray-300"}
                                `}
                            >
                                <h3 className="font-medium">
                                    {exp.title}
                                </h3>

                                <div className="flex justify-between mt-1">
                                    <p className={`text-sm
                                        ${darkMode ? "text-gray-400" : "text-gray-600"}
                                    `}>
                                        {exp.where}
                                    </p>

                                    <span className="text-xs text-gray-500">
                                        {exp.when}
                                    </span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section >
    );
}
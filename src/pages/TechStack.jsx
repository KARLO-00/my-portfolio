import { Link } from "react-router-dom";
import { techstacks } from "../data/techstacks";

export default function TechStack({ darkMode }) {
    return (
        <section
            id="home"
            className={`min-h-screen lg:px-100 px-10 py-20
                ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
            `}
        >
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition"
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>

                <span>Back to Home</span>
            </Link>


            <h1 className="text-4xl font-bold mb-2">
                Tech Stack
            </h1>

            <p className="text-gray-400">
                Technologies, tools, and frameworks I use to build applications.
            </p>

            <br />
            {/* Tech Stack */}
            <div className="w-full">
                <div className="space-y-6">

                    {techstacks.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-950 border border-gray-800 rounded-xl p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-4">
                                {skill.category}
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {skill.techlist.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 rounded-lg bg-gray-800 text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
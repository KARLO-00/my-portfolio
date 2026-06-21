export default function Footer({ darkMode }) {
    return (
        <footer
            className={`border-t py-6 px-6
                ${darkMode
                    ? "bg-gray-950 border-gray-800 text-gray-400"
                    : "bg-white border-gray-200 text-gray-600"
                }
            `}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">

                <div className="font-semibold">
                    carlo.<span className="text-blue-400">dev</span>
                    <span className="animate-blink text-blue-400">_</span>
                </div>

                <p className="text-sm">
                    Built with React & Tailwind CSS
                </p>

                <p className="text-sm">
                    © {new Date().getFullYear()} John Carlo Balcita
                </p>

            </div>
        </footer>
    );
}
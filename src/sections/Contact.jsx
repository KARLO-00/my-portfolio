import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact({ darkMode }) {
    const contacts = [
        {
            'href': 'mailto:your@email.com',
            'icon': <HiOutlineMail className="text-3xl mx-auto mb-4 text-blue-400" />,
            'title': 'Email',
            'text': 'Send me a message'
        },
        {
            'href': 'mailto:your@email.com',
            'icon': <FaLinkedin className="text-3xl mx-auto mb-4 text-blue-400" />,
            'title': 'LinkedIn',
            'text': 'Contact me'
        },
        {
            'href': 'mailto:your@email.com',
            'icon': <FaGithub className="text-3xl mx-auto mb-4 text-blue-400" />,
            'title': 'Github',
            'text': 'View my repositories'
        }
    ];

    return (
        <section
            id="contact"
            className={`py-24 px-6
    
            `}
        >
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-3xl md:text-4xl font-medium mb-4">
                    Get In Touch
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                    Have a project in mind, want to collaborate,
                    or simply want to connect? Feel free to reach out.
                </p>

                <div className="grid md:grid-cols-3 gap-6">

                    {contacts.map((item, index) => (
                        <a
                            href={item.href}
                            key={index}
                            className={`rounded-xl p-6 hover:border-blue-400 transition
                                ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-50 border border-gray-200"}
                            `}
                        >
                            {item.icon}

                            <h3 className="font-medium mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-400">
                                {item.text}
                            </p>
                        </a>
                    ))}

                </div>

                <div className="mt-12">
                    <a
                        href=""
                        className="inline-block px-6 py-3 bg-blue-500 text-black rounded-lg font-medium hover:bg-blue-400 transition"
                    >
                        Say Hello 👋
                    </a>
                </div>

            </div>
        </section>
    );
}
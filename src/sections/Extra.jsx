import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Projects({ darkMode }) {
    const [lightbox, setLightbox] = useState(null); // { images, title }

    return (
        <section>
            <div className="grid grid-cols-2 gap-4">
                {projects.map((project, i) => (
                    <div key={i} className="border rounded-xl overflow-hidden ...">

                        {/* clicking the image opens lightbox */}
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-48 object-cover cursor-pointer"
                            onClick={() => setLightbox({ images: project.images, title: project.title })}
                        />

                        {/* rest of card... */}
                    </div>
                ))}
            </div>

            {/* lightbox renders on top when open */}
            {lightbox && (
                <Lightbox
                    images={lightbox.images}
                    title={lightbox.title}
                    onClose={() => setLightbox(null)}
                    darkMode={darkMode}
                />
            )}
        </section>
    );
}
// components/Lightbox.jsx
import { useState, useEffect } from "react";

export default function Lightbox({ images, title, onClose, darkMode }) {
    const [current, setCurrent] = useState(0);

    // close on ESC key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [current]);

    const handleNext = () => setCurrent((prev) => (prev + 1) % images.length);
    const handlePrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        // backdrop — click outside to close
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={onClose}
        >
            {/* modal — stop click from bubbling to backdrop */}
            <div
                className={`relative w-full max-w-3xl mx-4 rounded-2xl p-6 flex flex-col gap-4
                    ${darkMode ? "bg-gray-900" : "bg-white"}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* header */}
                <div className="flex justify-between items-center">
                    <h3 className={`font-semibold text-base
                        ${darkMode ? "text-white" : "text-gray-900"}`}>
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className={`text-sm px-3 py-1 rounded-lg border
                            ${darkMode
                                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                                : "border-gray-200 text-gray-600 hover:bg-gray-100"}`}
                    >
                        ✕ Close
                    </button>
                </div>

                {/* image */}
                <img
                    src={images[current]}
                    alt={`${title} screenshot ${current + 1}`}
                    className="w-full rounded-xl object-cover max-h-96"
                />

                {/* controls */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={handlePrev}
                        className={`px-4 py-2 text-sm rounded-lg border
                            ${darkMode
                                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                                : "border-gray-200 text-gray-600 hover:bg-gray-100"}`}
                    >
                        ← Prev
                    </button>

                    {/* dots */}
                    <div className="flex gap-2 items-center">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 h-2 rounded-full transition-all
                                    ${i === current ? "bg-blue-500 w-4" : darkMode ? "bg-gray-600" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className={`px-4 py-2 text-sm rounded-lg border
                            ${darkMode
                                ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                                : "border-gray-200 text-gray-600 hover:bg-gray-100"}`}
                    >
                        Next →
                    </button>
                </div>

                <p className={`text-center text-xs ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                    {current + 1} / {images.length} · Press ESC or ← → arrow keys to navigate
                </p>
            </div>
        </div>
    );
}
// hooks/useThemeToggle.js
import { useState, useRef } from "react";

export default function useThemeToggle(darkMode, setDarkMode) {
    const [ripple, setRipple] = useState(null);
    const animating = useRef(false);

    const toggle = (e) => {
        if (animating.current) return;
        animating.current = true;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        setRipple({ x, y });

        // switch theme almost immediately — at 50ms
        setTimeout(() => setDarkMode(!darkMode), 50);

        // remove ripple after animation completes
        setTimeout(() => {
            setRipple(null);
            animating.current = false;
        }, 600);
    };

    return { ripple, toggle };
}
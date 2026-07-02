// components/ThemeRipple.jsx
export default function ThemeRipple({ ripple, darkMode }) {
    if (!ripple) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                pointerEvents: "none",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    left: ripple.x,
                    top: ripple.y,
                    width: 0,
                    height: 0,
                    borderRadius: "50%",
                    background: darkMode ? "#f9fafb" : "#030712",
                    transform: "translate(-50%, -50%)",
                    animation: "ripple-expand 0.7s ease-in-out forwards",
                }}
            />
            <style>{`
                @keyframes ripple-expand {
                    0%   { width: 0px; height: 0px; opacity: 1; }
                    60%  { opacity: 1; }
                    100% { width: 300vmax; height: 300vmax; opacity: 0; }
                }
            `}</style>
        </div>
    );
}
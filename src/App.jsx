import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TechStack from "./pages/TechStack";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/techstack" element={<TechStack />} />
        </Routes>
    );
}

export default App;
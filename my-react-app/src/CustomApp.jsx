import "./style.css";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Services from "./routes/Services.jsx";

export default function App() {
    return(
        <div className="App">
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
        </div>

            
    );
}
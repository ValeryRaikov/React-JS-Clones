import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Video from "./components/video/Video";

function App() {
    const [sidebar, setSidebar] = useState(true);

    return (
        <>
            <Navbar setSidebar={setSidebar} />
            <Routes>
                <Route path="/" element={<Home sidebar={sidebar} />} />
                <Route path="/video/:categoryId/:videoId" element={<Video />} />
            </Routes>
        </>
    )
}

export default App;

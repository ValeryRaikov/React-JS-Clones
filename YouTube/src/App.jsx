import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Video from "./components/video/Video";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:categoryId/:videoId" element={<Video />} />
            </Routes>
        </>
    )
}

export default App;

import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";
import Display from "./components/display/Display";
import Player from "./components/player/Player";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    const { audioRef } = useContext(PlayerContext);

    return (
        <div className="h-screen bg-black">
            <div className="h-[90%] flex">
                <Sidebar />
                <Display />
            </div>
            <Player />
            <audio ref={audioRef} preload="auto"></audio>
        </div>
    );
}

export default App;

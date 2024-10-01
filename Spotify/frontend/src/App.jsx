import { useContext } from "react";

import { PlayerContext } from "./context/PlayerContext";

import Display from "./components/display/Display";
import Player from "./components/player/Player";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    const { audioRef, track, songsData } = useContext(PlayerContext);

    return (
        <div className="h-screen bg-black">
            {songsData.length !== 0 && 
                <>
                    <div className="h-[90%] flex">
                        <Sidebar />
                        <Display />
                    </div>
                    <Player />
                </>
            }
            <audio ref={audioRef} src={track && track.file} preload="auto"></audio>
        </div>
    );
}

export default App;

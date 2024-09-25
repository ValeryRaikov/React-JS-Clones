import { createContext, useRef, useState } from "react";

import { songsData } from "../assets/assets";

import { usePlay } from "../hooks/usePlay";
import { usePause } from "../hooks/usePause";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBgColor = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        }
    });

    const play = usePlay(audioRef, setPlayStatus);
    const pause = usePause(audioRef, setPlayStatus);

    const contextValue = {
        audioRef,
        seekBgColor,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play,
        pause,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
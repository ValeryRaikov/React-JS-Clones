import { createContext, useEffect, useRef, useState } from "react";

import { songsData } from "../assets/assets";

import { usePlay } from "../hooks/usePlay";
import { usePause } from "../hooks/usePause";
import { usePlayWithId } from "../hooks/usePlayWithId";
import { usePrevious } from "../hooks/usePrevious";
import { useNext } from "../hooks/useNext";

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
        },
    });

    const play = usePlay(audioRef, setPlayStatus);
    const pause = usePause(audioRef, setPlayStatus);
    const playWithId = usePlayWithId(audioRef, setTrack, setPlayStatus); 
    const previous = usePrevious(audioRef, track, setTrack, setPlayStatus);
    const next = useNext(audioRef, track, setTrack, setPlayStatus);

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (
                    Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100) + '%'
                );

                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    },
                });
            }
        }, 1000);
    }, [audioRef]);

    const contextValue = {
        audioRef,
        seekBgColor,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
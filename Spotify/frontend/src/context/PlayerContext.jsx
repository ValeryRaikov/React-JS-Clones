import { createContext, useEffect, useRef, useState } from "react";

import axios from "axios";

import { usePlay } from "../hooks/usePlay";
import { usePause } from "../hooks/usePause";
import { usePlayWithId } from "../hooks/usePlayWithId";
import { usePrevious } from "../hooks/usePrevious";
import { useNext } from "../hooks/useNext";
import { useSeek } from "../hooks/useSeek";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBgColor = useRef();
    const seekBar = useRef();

    const url = 'http://localhost:3030';

    const [songsData, setSongsData] = useState([]);
    const [albumsData, setAlbumsData] = useState([]);
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
    const playWithId = usePlayWithId(songsData, audioRef, setTrack, setPlayStatus); 
    const previous = usePrevious(songsData, audioRef, track, setTrack, setPlayStatus);
    const next = useNext(songsData, audioRef, track, setTrack, setPlayStatus);
    const seek = useSeek(audioRef, seekBgColor);

    const getSongsData = async () => {
        try {
            const response = await axios.get(`${url}/api/song/songs`);
            setSongsData(response.data.songs);
            setTrack(response.data.songs[0]);
        } catch (error) {
            console.error(error);
        }
    }

    const getAlbumsData = async () => {
        try {
            const response = await axios.get(`${url}/api/album/albums`);
            setAlbumsData(response.data.albums);
        } catch (error) {
            console.error(error);
        }
    }

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

    useEffect(() => {
        getSongsData();
        getAlbumsData();
    }, []);

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
        seek,
        songsData,
        albumsData,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
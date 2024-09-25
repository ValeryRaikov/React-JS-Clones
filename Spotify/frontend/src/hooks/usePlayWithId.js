import { useCallback } from "react";

import { songsData } from "../assets/assets";

export const usePlayWithId = (audioRef, setTrack, setPlayStatus) => {
    const playWithId = useCallback(async (id) => {
        await new Promise((resolve) => {
            setTrack(songsData[id]);
            resolve();
        });

        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
        }
    }, [audioRef, setTrack, setPlayStatus]);

    return playWithId;
};
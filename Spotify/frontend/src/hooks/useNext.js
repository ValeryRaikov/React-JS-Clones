import { useCallback } from "react";

import { songsData } from "../assets/assets";

export const useNext = (audioRef, track, setTrack, setPlayStatus) => {
    const next = useCallback(async () => {
        if (track.id < songsData.length - 1) {
            await new Promise((resolve) => {
                setTrack(songsData[track.id + 1]);
                resolve();
            });

            if (audioRef.current) {
                audioRef.current.play();
                setPlayStatus(true);
            }
        }
    }, [audioRef, track, setTrack, setPlayStatus]);

    return next;
};
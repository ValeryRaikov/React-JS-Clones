import { useCallback } from "react";

import { songsData } from "../assets/assets";

export const usePrevious = (audioRef, track, setTrack, setPlayStatus) => {
    const previous = useCallback(async () => {
        if (track.id > 0) {
            await new Promise((resolve) => {
                setTrack(songsData[track.id - 1]);
                resolve();
            });

            if (audioRef.current) {
                audioRef.current.play();
                setPlayStatus(true);
            }
        }
    }, [audioRef, track, setTrack, setPlayStatus]);

    return previous;
};

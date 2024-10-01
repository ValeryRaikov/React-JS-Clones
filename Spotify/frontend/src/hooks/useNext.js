import { useCallback } from "react";

export const useNext = (songsData, audioRef, track, setTrack, setPlayStatus) => {
    const next = useCallback(async () => {
        await new Promise((resolve) => {
            songsData.map((song, idx) => {
                if (track._id === song._id && idx < songsData.length) {
                    setTrack(songsData[idx + 1]);
                }
            });
            resolve();
        });

        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
        }
    }, [songsData, audioRef, track, setTrack, setPlayStatus]);

    return next;
};
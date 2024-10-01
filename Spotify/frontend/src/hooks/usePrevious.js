import { useCallback } from "react";

export const usePrevious = (songsData, audioRef, track, setTrack, setPlayStatus) => {
    const previous = useCallback(async () => {
        await new Promise((resolve) => {
            songsData.map((song, idx) => {
                if (track._id === song._id && idx > 0) {
                    setTrack(songsData[idx - 1]);
                }
            });
            resolve();
        });

        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
        }
    }, [songsData, audioRef, track, setTrack, setPlayStatus]);

    return previous;
};

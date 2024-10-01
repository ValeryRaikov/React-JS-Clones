import { useCallback } from "react";

export const usePlayWithId = (songsData, audioRef, setTrack, setPlayStatus) => {
    const playWithId = useCallback(async (id) => {
        await new Promise((resolve) => {
            songsData.map(song => {
                if (id === song._id) {
                    setTrack(song);
                }
            });
            resolve();
        });

        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
        }
    }, [songsData, audioRef, setTrack, setPlayStatus]);

    return playWithId;
};
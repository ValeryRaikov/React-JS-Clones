import { useCallback } from 'react';

export const usePlay = (audioRef, setPlayStatus) => {
    return useCallback(() => {
        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
        }
    }, [audioRef, setPlayStatus]);
};
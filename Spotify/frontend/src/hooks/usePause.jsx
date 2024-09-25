import { useCallback } from 'react';

export const usePause = (audioRef, setPlayStatus) => {
    return useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayStatus(false);
        }
    }, [audioRef, setPlayStatus]);
};
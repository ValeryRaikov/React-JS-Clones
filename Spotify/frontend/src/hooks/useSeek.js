import { useCallback } from "react";

export const useSeek = (audioRef, seekBgColor) => {
    const seek = useCallback(async (e) => {
        audioRef.current.currentTime = (
            (e.nativeEvent.offsetX / seekBgColor.current.offsetWidth) * audioRef.current.duration
        );
        
    }, [audioRef, seekBgColor]);

    return seek;
}
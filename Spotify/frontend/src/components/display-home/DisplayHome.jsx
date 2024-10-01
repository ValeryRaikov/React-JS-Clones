import { useContext } from "react";

import { PlayerContext } from "../../context/PlayerContext";

import Navbar from "../navbar/Navbar";
import AlbumItem from "../album-item/AlbumItem";
import SongItem from "../song-item/SongItem";

export default function DisplayHome() {
    const { songsData, albumsData } = useContext(PlayerContext);

    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map(album => <AlbumItem key={album._id} {...album} />)}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map(song => <SongItem key={song._id} {...song} />)}
                </div>
            </div>
        </>
    );
}
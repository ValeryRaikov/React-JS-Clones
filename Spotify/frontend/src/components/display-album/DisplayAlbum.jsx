import { useParams } from "react-router-dom";

import { albumsData, assets } from "../../assets/assets";

import Navbar from "../navbar/Navbar";

export default function DisplayAlbum() {
    const { id } = useParams();
    const albumData = albumsData[id];

    return (
        <>
            <Navbar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img src={albumData.image} alt="" className="w-48 rounded" />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className="mt-1">
                        <img src={assets.spotify_logo} alt="" className="inline-block w-5" />
                        <b>Spotify</b>
                        1,323, 154 likes
                        <b>50 songs,</b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>
        </>
    );
}
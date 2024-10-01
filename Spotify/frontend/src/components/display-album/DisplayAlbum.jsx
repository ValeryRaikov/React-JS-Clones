import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { assets } from "../../assets/assets";

import { PlayerContext } from "../../context/PlayerContext";

import Navbar from "../navbar/Navbar";

export default function DisplayAlbum({ album }) {
    const { id } = useParams();
    const [albumData, setAlbumData] = useState('');

    const { playWithId, albumsData, songsData } = useContext(PlayerContext);

    useEffect(() => {
        albumsData.map(album => {
            if (album._id === id) {
                setAlbumData(album);
            }
        });
    }, []);

    return (
        albumData && (
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
                            <span className="ml-3 mr-3">1,323,154 likes</span>
                            <b>50 songs,</b>
                            <span className="ml-3">about 2 hr 30 min</span>
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                    <p><b className="mr-4">#</b>Title</p>
                    <p>Album</p>
                    <p className="hidden sm:block">Date Added</p>
                    <img src={assets.clock_icon} alt="" className="m-auto w-4" />
                </div>
                <hr />
                {songsData.filter(song => song.album === album.name).map(song => (
                    <div onClick={() => playWithId(song._id)} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer" key={song.id}>
                        <p className="text-white">
                            <b className="mr-4 text-[#a7a7a7]">{song.id}</b>
                            <img src={song.image} alt="" className="inline w-10 mr-5" />
                            {song.name}
                        </p>
                        <p className="text-[15px]">{albumData.name}</p>
                        <p className="text-[15px] hidden sm:block">5 days ago</p>
                        <p className="text-[15px] text-center">{song.duration}</p>
                    </div>
                ))}
            </>
        )
    );
}
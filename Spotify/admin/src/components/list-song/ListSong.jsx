import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";

import { url } from "../../App";

export default function ListSong() {
    const [data, setData] = useState([]);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const removeSong = async (id) => {
        try {
            const response = await axios.delete(`${url}/api/song/remove`, {
                data: { id },
            });

            if (!response.data.success) {
                toast.error('Error removing song');
                return;
            }

            toast.success(response.data.message);
            await fetchSongs();
        } catch (error) {
            toast.error('Error removing song');
        }
    }

    const removeSongHandler = (id) => {
        if (confirmDelete === id) {
            removeSong(id);
            setConfirmDelete(null);
        } else {
            setConfirmDelete(id);
            toast.info("Click 'Confirm' to remove the song");
        }
    }

    const fetchSongs = async () => {
        try {
            const response = await axios.get(`${url}/api/song/songs`);

            if (!response.data.success) {
                toast.error('Error fetching songs');
                return;
            }

            setData(response.data.songs);
        } catch (error) {
            toast.error('Error fetching songs');
        }
    }

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div>
            <p>All Songs</p>
            <br />
            <div>
                <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Album</b>
                    <b>Duration</b>
                    <b>Action</b>
                </div>
                {data.length === 0
                    ? <p className="pt-10 text-center text-3xl">No songs in the database</p>
                    : (
                        data.map(song => {
                            return (
                                <div key={song._id} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5">
                                    <img src={song.image} alt="" className="w-12" />
                                    <p>{song.name}</p>
                                    <p>{song.album}</p>
                                    <p>{song.duration}</p>
                                    <p onClick={() => removeSongHandler(song._id)} className="cursor-pointer font-semibold">
                                        {confirmDelete === song._id ? "Confirm?" : "X"}
                                    </p>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    );
}
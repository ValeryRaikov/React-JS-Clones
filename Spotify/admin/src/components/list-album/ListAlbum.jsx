import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";

import { url } from "../../App";

export default function ListAlbum() {
    const [data, setData] = useState([]);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const removeAlbum = async (id) => {
        try {
            const response = await axios.delete(`${url}/api/album/remove`, {
                data: { id },
            });

            if (!response.data.success) {
                toast.error('Error removing album');
                return;
            }

            toast.success(response.data.message);
            await fetchAlbums();
        } catch (error) {
            toast.error('Error removing album');
        }
    }

    const removeAlbumHandler = (id) => {
        if (confirmDelete === id) {
            removeAlbum(id);
            setConfirmDelete(null);
        } else {
            setConfirmDelete(id);
            toast.info("Click 'Confirm' to remove the album");
        }
    }

    const fetchAlbums = async () => {
        try {
            const response = await axios.get(`${url}/api/album/albums`);

            if (!response.data.success) {
                toast.error('Error fetching albums');
                return;
            }

            setData(response.data.albums);
        } catch (error) {
            toast.error('Error fetching albums');
        }
    }

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <div>
            <p>All Albums</p>
            <br />
            <div>
                <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-centergap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Description</b>
                    <b>Album Color</b>
                    <b>Action</b>
                </div>
                {data.length === 0
                    ? <p className="pt-10 text-center text-3xl">No albums in the database</p>
                    : (
                        data.map(album => {
                            return (
                                <div key={album._id} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5">
                                    <img src={album.image} alt="" className="w-12" />
                                    <p>{album.name}</p>
                                    <p>{album.desc}</p>
                                    <input type="color" value={album.bgColor} />
                                    <p onClick={() => removeAlbumHandler(album._id)} className="cursor-pointer font-semibold">
                                        {confirmDelete === album._id ? "Confirm?" : "X"}
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
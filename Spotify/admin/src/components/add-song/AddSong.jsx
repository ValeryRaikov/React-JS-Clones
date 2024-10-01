import { useState } from 'react';
import { toast } from 'react-toastify';

import axios from 'axios';

import { assets } from '../../assets/assets';
import { url } from '../../App';

export default function AddSong() {
    const [image, setImage] = useState(false);
    const [song, setSong] = useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [album, setAlbum] = useState('none');
    const [loading, setLoading] = useState(false);
    const [albumData, setAlbumData] = useState([]);

    const clearInputs = () => {
        setName('');
        setDesc('');
        setAlbum('none');
        setImage(false);
        setSong(false);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        
        setLoading(true);
        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('image', image);
            formData.append('audio', song);
            formData.append('album', album);

            const response = await axios.post(`${url}/api/song/add`, formData);

            if (!response.data.success) {
                toast.error('Error adding song');
                return;
            }

            toast.success('Song added successfully');
            clearInputs();
        } catch (error) {
            toast.error(error.message);
        }

        setLoading(false);
    }

    return ( 
        loading 
            ? (
                <div className="grid place-items-center min-h-[80vh]">
                    <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin">

                    </div>
                </div>
            )
            : (
                <form onSubmit={submitHandler} className="flex flex-col items-start gap-8 text-gray-600">
                    <div className="flex gap-8">
                        <div className="flex flex-col gap-4">
                            <p>Upload Song</p>
                            <input 
                                type="file" 
                                onChange={(e) => setSong(e.target.files[0])} 
                                id="song" 
                                accept="audio/*" 
                                hidden 
                            />
                            <label htmlFor="song">
                                <img src={song ? assets.upload_added : assets.upload_song} alt="" className="w-24 cursor-pointer" />
                            </label>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>Upload Image</p>
                            <input 
                                type="file" 
                                onChange={(e) => setImage(e.target.files[0])} 
                                id="image" 
                                accept="image/*" 
                                hidden 
                            />
                            <label htmlFor="image">
                                <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className="w-24 cursor-pointer" />
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <p>Song Name</p>
                        <input 
                            type="text" 
                            onChange={(e) => setName(e.target.value)} 
                            value={name} 
                            className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]" 
                            placeholder="Type here..." 
                            required 
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p>Song Description</p>
                        <input 
                            type="text" 
                            onChange={(e) => setDesc(e.target.value)} 
                            value={desc} 
                            className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]" 
                            placeholder="Type here..." 
                            required 
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p>Album</p>
                        <select 
                            onChange={(e) => setAlbum(e.target.value)} 
                            defaultValue={album} 
                            className="bg-transparent outline-green-600border-2 border-gray-400 p-2.5 w-[150px]"
                        >
                            <option value="none">None</option>
                        </select>
                    </div>
                    <button type="submit" className="text-base bg-black text-white px-14 py-2.5 cursor-pointer">
                        Add
                    </button>
                </form>
            )
    );
}
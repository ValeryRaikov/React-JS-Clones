import { useState } from "react";

import axios from "axios";

import { assets } from "../../assets/assets";
import { url } from "../../App";
import { toast } from "react-toastify";

export default function AddAlbum() {
    const [image, setImage] = useState(false);
    const [color, setColor] = useState('#ffffff');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [loading, setLoading] = useState(false);

    const clearInputs = () => {
        setName('');
        setDesc('');
        setImage(false);
        setColor('#ffffff');
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('image', image);
            formData.append('bgColor', color);

            const response = await axios.post(`${url}/api/album/add`, formData);

            if (!response.data.success) {
                toast.error('Error adding album');
                return;
            }

            toast.success('Album added successfully');
            clearInputs();
        } catch (error) {
            toast.error('Error adding album');
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
                    <div className="flex flex-col gap-2.5">
                        <p>Album Name</p>
                        <input 
                            type="text" 
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Type here..." 
                            required 
                            className="bg-transparent outline-green-600 border border-gray-400 p-2.5 w-[max(40vw,250px)]" 
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p>Album Description</p>
                        <input 
                            type="text" 
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                            placeholder="Type here..." 
                            required 
                            className="bg-transparent outline-green-600 border border-gray-400 p-2.5 w-[max(40vw,250px)]" 
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>Background Color</p>
                        <input 
                            type="color" 
                            onChange={(e) => setColor(e.target.value)} 
                            value={color} 
                        />
                    </div>

                    <button type="submit" className="text-base bg-black text-white px-14 py-2.5 cursor-pointer">
                        Add
                    </button>
                </form>
            )
    );
}
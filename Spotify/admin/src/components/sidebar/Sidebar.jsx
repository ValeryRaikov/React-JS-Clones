import { NavLink } from 'react-router-dom';

import { assets } from '../../assets/assets';

export default function Sidebar() {
    return (
        <div className="bg-[#003a10] min-h-screen pl-[4vw]">
            <img src={assets.logo} alt="" className="mt-5 w-[max(10vw,100px)] hidden sm:block" />
            <img src={assets.logo_small} alt="" className="mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block" />

            <div className="flex flex-col gap-5 mt-10">
                <NavLink to='/add-song' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium">
                    <img src={assets.add_song} alt="" className="w-5" />
                    <p className="hidden sm:block">Add Song</p>
                </NavLink>
                <NavLink to='all-songs' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium">
                    <img src={assets.song_icon} alt="" className="w-5" />
                    <p className="hidden sm:block">List Songs</p>
                </NavLink>
                <NavLink to='add-album' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium">
                    <img src={assets.add_album} alt="" className="w-5" />
                    <p className="hidden sm:block">Add Album</p>
                </NavLink>
                <NavLink to='all-albums' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium">
                    <img src={assets.album_icon} alt="" className="w-5" />
                    <p className="hidden sm:block">List Albums</p>
                </NavLink>
            </div>
        </div>
    );
}
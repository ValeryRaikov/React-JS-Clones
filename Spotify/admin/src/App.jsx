import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddSong from './components/add-song/AddSong';
import AddAlbum from './components/add-album/AddAlbum';
import ListSong from './components/list-song/ListSong';
import ListAlbum from './components/list-album/ListAlbum';

function App() {
    return (
        <div className="flex items-start min-h-screen">
            <ToastContainer />
            <div className="flex-1 h-screen overflow-y-scroll bg-[#f3fff7]">
                <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
                    <Routes>
                        <Route path='/add-song' element={<AddSong />} />
                        <Route path='/add-album' element={<AddAlbum />} />
                        <Route path='/all-songs' element={<ListSong />} />
                        <Route path='/all-albums' element={<ListAlbum />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App

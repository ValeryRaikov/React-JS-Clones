import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/home/Home";
import Login from './components/login/Login';
import Player from './components/player/Player';
import TvShows from './components/tv-shows/TvShows';
import Movies from './components/movies/Movies';
import NewPopular from './components/new-popular/Newpopular';
import Browse from './components/browse/Browse';
import SearchMovie from './components/search-movie/SearchMovie';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, async function(user) {
            if (user) {
                console.log('Logged in');
                navigate('/');
            } else {
                console.log('Logged out');
                navigate('/login');
            }
        });
    }, []);

    return (
        <>
            <ToastContainer theme='dark' />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tv-shows' element={<TvShows />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/new&popular' element={<NewPopular />} />
                <Route path='/browse' element={<Browse />} />
                <Route path='/search' element={<SearchMovie />} />
                <Route path='/login' element={<Login />} />
                <Route path='/player/:id' element={<Player />} />
            </Routes>
        </>
    )
}

export default App

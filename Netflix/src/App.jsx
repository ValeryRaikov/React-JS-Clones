import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Home from "./components/home/Home";
import Login from './components/login/Login';
import Player from './components/player/Player';

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
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/player/:id' element={<Player />} />
            </Routes>
        </>
    )
}

export default App

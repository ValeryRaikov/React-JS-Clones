import { Routes, Route } from 'react-router-dom';

import Home from "./components/home/Home";
import Login from './components/login/Login';
import Player from './components/player/Player';

function App() {
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

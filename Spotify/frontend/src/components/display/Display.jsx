import { Routes, Route } from 'react-router-dom';

import DisplayHome from '../display-home/DisplayHome';

export default function Display() {
    return (
        <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
            <Routes>
                <Route path='/' element={<DisplayHome />} />
            </Routes>
        </div>
    );
}
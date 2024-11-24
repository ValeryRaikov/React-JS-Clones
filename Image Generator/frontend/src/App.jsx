import { Route, Routes } from "react-router-dom";

import BuyCredit from "./pages/BuyCredit";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/result' element={<Result />} />
                <Route path='/buy' element={<BuyCredit />} />
            </Routes>
        </>
    );
}

export default App;

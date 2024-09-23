import Display from "./components/display/Display";
import Player from "./components/player/Player";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <div className="h-screen bg-black">
            <div className="h-[90%] flex">
                <Sidebar />
                <Display />
            </div>
            <Player />
        </div>
    );
}

export default App;

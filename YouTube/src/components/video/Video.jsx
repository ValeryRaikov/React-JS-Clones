import PlayVideo from '../play-video/PlayVideo';
import Recommended from '../recommended/Recommended';

import './Video.css';

export default function Video() {
    return (
        <div className="play-container">
            <PlayVideo />
            <Recommended />
        </div>
    );
}
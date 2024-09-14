import { useParams } from 'react-router-dom';

import PlayVideo from '../play-video/PlayVideo';
import Recommended from '../recommended/Recommended';

import './Video.css';

export default function Video() {
    const {videoId, categoryId} = useParams();

    return (
        <div className="play-container">
            <PlayVideo videoId={videoId} categoryId={categoryId} />
            <Recommended />
        </div>
    );
}
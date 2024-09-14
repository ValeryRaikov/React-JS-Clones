import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { API_KEY } from '../../data';
import { converter } from '../../utils';

import './Recommended.css';

export default function Recommended({ categoryId }) {
    const [relatedData, setRelateddData] = useState([]);
    const [error, setError] = useState('');

    const fetchData = async () => {
        const relatedUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    
        await fetch(relatedUrl)
            .then(response => response.json())
            .then(data => setRelateddData(data.items))
            .catch(error => setError(error.message));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="recommended">
            {error && <p className="error-msg">{error}</p>}
            {relatedData.map(item => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{converter(item.statistics.viewCount)} views</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
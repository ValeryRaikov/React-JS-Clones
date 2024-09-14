import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import { API_KEY } from '../../data';
import { converter } from '../../utils';

import './Feed.css';

export default function Feed({ category }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        const videoListUtl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=BG&videoCategoryId=${category}&key=${API_KEY}`;
    
        setError('');
        setLoading(true);

        await fetch(videoListUtl)
            .then(response => response.json())
            .then(data => {
                setData(data.items);
                setLoading(false);
            })
            .catch(error => setError(error.message));
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {error && <p className="error-msg">{error}</p>}
            {loading 
                ? <p className="loading-msg">Loading...</p>
                : data.map(item => {
                    return (
                        <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={item.id} className="card">
                            <img src={item.snippet.thumbnails.medium.url} />
                            <h2>{item.snippet.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>{converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                        </Link>
                )
            })}
        </div>
    );
}
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import moment from 'moment';

import { API_KEY } from '../../data';  

import './SearchResults.css';

export default function SearchResults() {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') || '';

    const fetchVideos = async () => {
        const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${encodeURIComponent(query)}&key=${API_KEY}`;

        setError('');
        setLoading(true);

        await fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                setVideos(data.items);
                setError('');
                setLoading(false);
            })
            .catch(error => setError(error.message));
    };

    useEffect(() => {
        if (query) {
            fetchVideos();
        }
    }, [query]);

    return (
        <>
            <p className="results-msg">Search Results for: <span>{query}</span></p>
            <div className="search-results">
                {error && <p className="error-msg">{error}</p>}
                {loading 
                    ? <p className="loading-msg">Loading...</p>
                    : videos.length > 0 ? (
                        videos.map(item => {
                            return (
                                <Link 
                                    to={`video/${item.snippet.categoryId}/${item.id.videoId}`} 
                                    key={item.id.videoId} 
                                    className="card"
                                >
                                    <img src={item.snippet.thumbnails.medium.url} />
                                    <h2>{item.snippet.title}</h2>
                                    <h3>{item.snippet.channelTitle}</h3>
                                    <p>{moment(item.snippet.publishedAt).fromNow()}</p>
                                </Link>
                            );
                        })
                    ) : (
                        <p className="error-msg">No results found</p>
                    )
                }
            </div>
        </>
    );
}
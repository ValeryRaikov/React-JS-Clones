import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import back_arrow_icon from '../../assets/back_arrow_icon.png';

export default function Player() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movieData, setMovieData] = useState({
        name: '',
        key: '',
        published_at: '',
        type: '',
    });

    const URL = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDIwNjk5YzQ5NWRmNWE4NjI4OTUxOTIyNjhkOTUyYyIsIm5iZiI6MTcyNjQyMDExNS4wNjgyNSwic3ViIjoiNjZlNzEwY2NlODIxMWVjZDIyYjA5ZGQ4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.02YGEc_ntAMKY-9wmnBBWnMfwHXrt3JpGQNyaXdDNWs'
        }
    };
    
    useEffect(() => {
        fetch(URL, options)
        .then(response => response.json())
        .then(data => setMovieData(data.results[0]))
        .catch(error => {
            console.error(error);
            toast.error(error.message);
        });
    }, []);

    return (
        <div className="player">
            <img onClick={() => navigate(-2)} src={back_arrow_icon} alt="" />
            <iframe 
                width="90%" 
                height="90%" 
                title="Trailer" 
                src={`https://www.youtube.com/embed/${movieData.key}`}
                frameBorder="0" 
                allowFullScreen
            ></iframe>
            <div className="player-info">
                <p>{movieData.published_at.slice(0, 10)}</p>
                <p>{movieData.name}</p>
                <p>{movieData.type}</p>
            </div>
        </div>
    );
}
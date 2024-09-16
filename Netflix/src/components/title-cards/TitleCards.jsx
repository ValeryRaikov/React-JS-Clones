import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import TitleCardsItem from '../title-cards-item/TitleCardsItem';

export default function TitleCards({
    title,
    category,
}) {
    const cardsRef = useRef();
    const [movieData, setMovieData] = useState([]);

    const URL = `https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDIwNjk5YzQ5NWRmNWE4NjI4OTUxOTIyNjhkOTUyYyIsIm5iZiI6MTcyNjQyMDExNS4wNjgyNSwic3ViIjoiNjZlNzEwY2NlODIxMWVjZDIyYjA5ZGQ4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.02YGEc_ntAMKY-9wmnBBWnMfwHXrt3JpGQNyaXdDNWs'
        }
    };

    const wheelHandler = function(e) {
        e.preventDefault();

        cardsRef.current.scrollLeft += e.deltaY;
    }

    useEffect(() => {
        cardsRef.current.addEventListener('wheel', wheelHandler);

        fetch(URL, options)
            .then(response => response.json())
            .then(data => setMovieData(data.results))
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            });
    }, []);

    return (
        <div className="title-cards">
            <h2>{title ? title : 'Popular on Netflix'}</h2>
            <div className="card-list" ref={cardsRef}>
                {movieData.map((card, idx) => <TitleCardsItem key={idx} {...card} />)}
            </div>
        </div>
    );
}
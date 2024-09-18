import { Link } from "react-router-dom";

export default function SearchMovieItem({
    id,
    backdrop_path,
    original_title,
}) {
    return (
        <Link to={`/player/${id}`} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
            <p>{original_title}</p>
        </Link>
    );
}
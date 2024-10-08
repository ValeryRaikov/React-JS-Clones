import { Link } from "react-router-dom";

export default function TitleCardsItem({
    id,
    backdrop_path,
    original_title,
    original_name,
}) {
    return (
        <Link to={`/player/${id}`} className="card">
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
            <p>{original_title || original_name}</p>
        </Link>
    );
}
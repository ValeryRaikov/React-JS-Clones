export default function TitleCardsItem({
    backdrop_path,
    original_title,
}) {
    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
            <p>{original_title}</p>
        </div>
    );
}
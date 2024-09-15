export default function TitleCardsItem({
    image,
    name,
}) {
    return (
        <div className="card">
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    );
}
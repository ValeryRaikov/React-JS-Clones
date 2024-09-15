import { useEffect, useRef } from 'react';

import TitleCardsItem from '../title-cards-item/TitleCardsItem';

import cards_data from '../../assets/cards/Cards_data';

export default function TitleCards({
    title,
    category,
}) {
    const cardsRef = useRef();

    const wheelHandler = function(e) {
        e.preventDefault();

        cardsRef.current.scrollLeft += e.deltaY;
    }

    useEffect(() => {
        cardsRef.current.addEventListener('wheel', wheelHandler);
    }, []);

    return (
        <div className="title-cards">
            <h2>{title ? title : 'Popular on Netflix'}</h2>
            <div className="card-list" ref={cardsRef}>
                {cards_data.map((card, idx) => <TitleCardsItem key={idx} {...card} />)}
            </div>
        </div>
    );
}
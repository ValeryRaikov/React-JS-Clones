import { useLocation, useNavigate } from 'react-router-dom';

import TitleCards from "../title-cards/TitleCards";

import back_arrow_icon from '../../assets/back_arrow_icon.png';

export default function NewPopular() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state?.category;

    return (
        <div className="library">
            <div className="library-top">
                <img onClick={() => navigate('/')} src={back_arrow_icon} alt="" />
                <h1>{category ? `Showing: ${category}` : 'Library'}</h1>
            </div>
            <h1 className="type">Tv Shows:</h1>
            <TitleCards title='Most popular' category='popular' type='tv' />
            <TitleCards title='Top rated' category='top_rated' type='tv' />
            <h1 className="type">Movies:</h1>
            <TitleCards title='Most popular' category='popular' type='movie' />
            <TitleCards title='Top rated' category='top_rated' type='movie' />
        </div>
    );
}
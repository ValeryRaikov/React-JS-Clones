import { useLocation, useNavigate } from 'react-router-dom';

import TitleCards from "../title-cards/TitleCards";

import back_arrow_icon from '../../assets/back_arrow_icon.png';

export default function Movies() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state?.category;

    return (
        <div className="library">
            <div className="library-top">
                <img onClick={() => navigate('/')} src={back_arrow_icon} alt="" />
                <h1>{category ? `Showing: ${category}` : 'Library'}</h1>
            </div>
            <TitleCards title='Blockbuster movies' category='top_rated' type='movie' />
            <TitleCards title='Only on Netflix' category='popular' type='movie' />
            <TitleCards title='Upcoming' category='upcoming' type='movie' />
            <TitleCards title='Top picks for you' category='now_playing' type='movie' />
        </div>
    );
}
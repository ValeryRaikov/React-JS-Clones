import { useLocation, useNavigate } from 'react-router-dom';

import TitleCards from "../title-cards/TitleCards";

import back_arrow_icon from '../../assets/back_arrow_icon.png';

export default function TvShows() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state?.category;

    return (
        <div className="library">
            <div className="library-top">
                <img onClick={() => navigate('/')} src={back_arrow_icon} alt="" />
                <h1>{category ? `Showing: ${category}` : 'Library'}</h1>
            </div>
            <TitleCards title='Tv Series airing today' category='airing_today' type='tv' />
            <TitleCards title='Tv Series on the air' category='on_the_air' type='tv' />
            <TitleCards title='Most popular' category='popular' type='tv' />
            <TitleCards title='Top rated' category='top_rated' type='tv' />
        </div>
    );
}
import Navigation from "../navigation/Navigation";
import TitleCards from "../title-cards/TitleCards";
import Footer from "../footer/Footer";

import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';

export default function Home() {
    return (
        <div className="home">
            <Navigation />
            <div className="hero">
                <img className="banner-img" src={hero_banner} alt="" />
                <div className="hero-caption">
                    <img className="caption-img" src={hero_title} alt="" />
                    <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                    <div className="hero-btns">
                        <button className="btn"><img src={play_icon} alt="" />Play</button>
                        <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title='Blockbuster movies' />
                <TitleCards title='Only on Netflix' />
                <TitleCards title='Upcoming' />
                <TitleCards title='Top picks for you' />
            </div>
            <Footer />
        </div>
    );
}
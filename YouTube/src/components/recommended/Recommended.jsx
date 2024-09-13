import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

import './Recommended.css';

export default function Recommended() {
    return (
        <div className="recommended">
            <div className="side-video-list">
                <img src={thumbnail1} />
                <div className="vid-info">
                    <h4>Best channel that help you to become a web developer</h4>
                    <p>Great Stack</p>
                    <p>199K views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail2} />
                <div className="vid-info">
                    <h4>Best channel that help you to become a web developer</h4>
                    <p>Great Stack</p>
                    <p>199K views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail3} />
                <div className="vid-info">
                    <h4>Best channel that help you to become a web developer</h4>
                    <p>Great Stack</p>
                    <p>199K views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail4} />
                <div className="vid-info">
                    <h4>Best channel that help you to become a web developer</h4>
                    <p>Great Stack</p>
                    <p>199K views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail5} />
                <div className="vid-info">
                    <h4>Best channel that help you to become a web developer</h4>
                    <p>Great Stack</p>
                    <p>199K views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail6} />
                <div className="vid-info">
                    <h4>Best channel that help you to become a web developer</h4>
                    <p>Great Stack</p>
                    <p>199K views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail7} />
                <div className="vid-info">
                    <h4>Best channel that help you to become a web developer</h4>
                    <p>Great Stack</p>
                    <p>199K views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail8} />
                <div className="vid-info">
                    <h4>Best channel that help you to become a web developer</h4>
                    <p>Great Stack</p>
                    <p>199K views</p>
                </div>
            </div>
        </div>
    );
}
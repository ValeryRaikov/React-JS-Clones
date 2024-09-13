import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';

import './PlayVideo.css';

export default function PlayVideo() {
    return (
        <div className="play-video">
            <video src={video1} controls autoPlay muted></video>
            <h3>Best YouTube channel to learn web development</h3>
            <div className="play-video-info">
                <p>1525 views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} /> 125</span>
                    <span><img src={dislike} /> 4</span>
                    <span><img src={share} /> Share</span>
                    <span><img src={save} /> Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} />
                <div>
                    <p>Great Stack</p>
                    <span>1M subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Channel that makes learning easy</p>
                <p>Subscribe to Great Stack to watch more tutorials on web development</p>
                <hr />
                <h4>130 comments</h4>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Valery Raikov <span>1 day ago</span></h3>
                        <p>Very informative video. I am really impressed on how things are explained in detail and are made easy to understand even for people with no previous background.</p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>34</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Valery Raikov <span>1 day ago</span></h3>
                        <p>Very informative video. I am really impressed on how things are explained in detail and are made easy to understand even for people with no previous background.</p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>34</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Valery Raikov <span>1 day ago</span></h3>
                        <p>Very informative video. I am really impressed on how things are explained in detail and are made easy to understand even for people with no previous background.</p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>34</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Valery Raikov <span>1 day ago</span></h3>
                        <p>Very informative video. I am really impressed on how things are explained in detail and are made easy to understand even for people with no previous background.</p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>34</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div>
                        <h3>Valery Raikov <span>1 day ago</span></h3>
                        <p>Very informative video. I am really impressed on how things are explained in detail and are made easy to understand even for people with no previous background.</p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>34</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}